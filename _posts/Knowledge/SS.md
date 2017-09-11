---
title: "自建ShadowSocks服务备忘录"
meta: "通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google BBR来加速访问速度。"
category: Knowledge
tags: [sss]
cover: /assets/images/post/sss.jpg
color: '#606060'
created: 2017-08-08
---

# 自建ShadowSocks服务备忘录

## 购买云主机

### Vultr主机

首先需要购买云主机(VPN服务器) ，推荐[Vultr日本](http://www.vultr.com/?ref=7092244)机房主机, 相比其他云主机主要网络流量更多(5美元1000G流量),另外主机性能也更强(官方数据).

![vultr-performance](/assets/images/post/vultr-performance.png)

不过也可以使用其他主机。附上一张个主机性价比对比图(来自网络)。

![plan-vs](/assets/images/post/plan-vs.png)

Vultr主机目前有15个机房(@Aug, 2017),  推荐其中亚洲区的日本机房，感兴趣也可以通过[Vultr主机延迟测试](http://cloudharmony.com/speedtest-latency-for-vultr:compute)

> 测试结果不包含新加坡机房，结果延迟和实际服务器的ip地址测试结果略微偏高

来检查适合自己位置的机房。再上海的测试结果如下：

![lagency-test](/assets/images/post/lagency-test.png)

> 可以在Vultr创建主机后用真实的主机ip地址测试，测试完删掉即可。

我自己测试的结果是，再上海（电信）访问的话实测结果如下：

* 🇯🇵日本机房平均:90毫秒
* 🇸🇬新加坡平均:160毫秒
* 🇺🇸美国Los Angeles机房平均:140毫秒

其他机房测试地址(官方提供)

| Location                   | Domain                   | Result(Shang Hai) |
| -------------------------- | ------------------------ | ----------------- |
| Frankfurt, DE              | fra-de-ping.vultr.com    | 330ms             |
| Paris, France              | par-fr-ping.vultr.com    | 250ms             |
| Amsterdam, NL              | ams-nl-ping.vultr.com    | 240ms             |
| London, UK                 | lon-gb-ping.vultr.com    | 190ms             |
| Singapore                  | sgp-ping.vultr.com       | 180ms             |
| New York (NJ)              | nj-us-ping.vultr.com     | 330ms             |
| Tokyo, Japan               | hnd-jp-ping.vultr.com    | 90ms              |
| Chicago, Illinois          | il-us-ping.vultr.com     | 280ms             |
| Atlanta, Georgia           | ga-us-ping.vultr.com     | 520ms             |
| Miami, Florida             | fl-us-ping.vultr.com     | 350ms             |
| Seattle, Washington        | wa-us-ping.vultr.com     | 330ms             |
| Dallas, Texas              | tx-us-ping.vultr.com     | 200ms             |
| Silicon Valley, California | sjo-ca-us-ping.vultr.com | 200ms             |
| Los Angeles, California    | lax-ca-us-ping.vultr.com | 140ms             |
| Sydney, Australia          | syd-au-ping.vultr.com    | 220ms             |

推荐选择日本或者Los Angeles主机，日本主机更快，但是存在不小的丢包率，洛杉矶平均慢40ms，但是网络稳定无丢包，另外在使用VPN时不会根据位置默认显示日本网站。

![ping-result](/assets/images/post/ping-result.png)

Vultr主机选择配置如下：

1. Server Location (Tokyo)

2. Server Type(CentOS 7 x64)

3. Server Size($5/mo 1000GB Bandwidth)

4. Additional Features(不选)

5. Startup Script(不配置)

6. SSH Keys

   通过SSH方式可以更安全和方便的登陆(不需要密码)，关于SSH创建的方式参见[Github SSH Key教程](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)(这里的SSH创建会跳转到管理页面)，也可以不填写，创建成功后会可使用提供的默认管理员的账号密码SSH登陆。

7. Server Hostname & Label(主机host填写后需要重装才能修改，默认是vultr.com,不过无关紧要)

### 安装服务

1. 登陆主机

    ```
    ssh root@服务器IP地址
    ```
    ---
    >  密码在服务器详情中可以找到

2. 检查CentOS内核并升级到最新以及安装BBR

    ```
    wget -O- https://raw.githubusercontent.com/ole3021/scripts/master/centOS_BBR.sh | bash
    ```

3. 重启并检查kernel升级到最新以及BBR安装成功

    ```
    reboot
    uname -sr
    sysctl -a|grep congestion_control
    ```

4. 安装pip和shadowsocks

    ```
    yum install python-setuptools && easy_install pip
    pip install shadowsocks
    ```

5. 创建SS的配置文件 `/etc/shadowsocks.json`

    ```
    {
        "server": "0.0.0.0",
        "server_port": 8388,
        "password": "uzon57jd0v869t7w",
        "method": "aes-256-cfb"
    }
    ```
    ---
    > * `method`为加密方法，可选`aes-128-cfb, aes-192-cfb, aes-256-cfb, bf-cfb, cast5-cfb, des-cfb, rc4-md5, chacha20, salsa20, rc4, table`
    > * `server_port`为服务监听端口
    > * `password`为密码

6. 配置SS启动脚本 `/etc/systemd/system/shadowsocks.service`

    ```
    [Unit]
    Description=Shadowsocks

    [Service]
    TimeoutStartSec=0
    ExecStart=/usr/bin/ssserver -c /etc/shadowsocks.json

    [Install]
    WantedBy=multi-user.target
    ```

7. 启动SS服务

    ```
    systemctl enable shadowsocks
    systemctl start shadowsocks
    ```

8. 检查SS状态

    ```
    systemctl status shadowsocks -l
    ```
    服务启动成功后会显示如下内容

    ```
    ● shadowsocks.service - Shadowsocks
        Loaded: loaded (/etc/systemd/system/shadowsocks.service; enabled; vendor preset: disabled)
        Active: active (running) since Sun 2017-08-20 12:19:37 UTC; 11s ago
    Main PID: 10263 (ssserver)
        CGroup: /system.slice/shadowsocks.service
                └─10263 /usr/bin/python /usr/bin/ssserver -c /etc/shadowsocks.json

    Aug 20 12:19:37 vultr.guest systemd[1]: Started Shadowsocks.
    Aug 20 12:19:37 vultr.guest systemd[1]: Starting Shadowsocks...
    Aug 20 12:19:37 vultr.guest ssserver[10263]: INFO: loading config from /etc/shadowsocks.json
    Aug 20 12:19:37 vultr.guest ssserver[10263]: 2017-08-20 12:19:37 INFO     loading libcrypto from libcrypto.so.10
    Aug 20 12:19:37 vultr.guest ssserver[10263]: 2017-08-20 12:19:37 INFO     starting server at 0.0.0.0:3021
    ```

9. 开放防火墙相应的端口

    ```
    firewall-cmd --permanent --add-port=xxxx/tcp //xxxx 为设置的ss服务端口
    firewall-cmd --reload
    ```
    ---
    >成功后会显示`success`

## 连接SS服务

连接SS推荐使用以下客户端进行连接

* Mac [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG)
* Windows [shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows)

### TODO

- [ ] 整合部署安装代码为脚本方便实用
