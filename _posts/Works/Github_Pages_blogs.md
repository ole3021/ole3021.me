---
title: "基于Github Pages的易用单页React站点"
meta: 基于Github Pages方便维护（上传／更新博客）的纯React静态单页网站，用做个人网站，用作记录和展示自己的个人博客和页面。
category: Works
tags: [code, work]
cover: /assets/images/post/blog.jpg
color: '#606060'
created: 2017-01-18
---

# 基于Github Pages的易用单页React站点

基于Github Pages方便维护（上传／更新博客）的纯React静态单页网站，用做个人网站，用作记录和展示自己的个人博客和页面。

## 需求

tl;dr: 现有的博客系统都比较繁琐，特别是在Github Pages上的页面都需要编译生成静态页面，才能使用，一旦要修改内容或者添加内容都需要重新编译。包括目录和分类都是基于配置文件生成的， 配置文件可以手动生成或者使用脚本根据文章自动生成。

## 目的

* 制作一个博客系统，方便添加修改和管理博客文章，可以在不编译的情况下添加或更新内容（直接在Github上操作）。
* 制作一个单页网站作为个人网站，方便维护管理，使用Node，React，尽可能省去不必要的库和插件。
* 更多更开放的自定义部分，可以从0按照自己的意愿和想发构建网站和页面

## 开发

### 路径重定向
开发受[spa-github-pages](https://github.com/rafrex/spa-github-pages)启示，使用“404页面重定向”，配合React-Router实现路径访问。在Github Pages部署非Jekyll项目，需要添加`.nojekyll`文件来避免深层次目录文件访问失败的问题。

### React
前端使用React构建，并使用Webpack编译成bundle文件后上传到Github Pages。

### 样式
网站主题样式使用[Bulma](http://bulma.io/),来构建布局和部分css可实现的组件。

### 目录生成
使用Nodejs的fs读取`_posts`目录下的所有`*.md`文件，并从中解析出yaml header, 然后保存到根目录下的`blogInfos.yml`。

### 动态加载
网站所有的配置文件yaml都在访问页面之前发送文件请求请求后解析相应的文件再根据返回文件的数据渲染要生成的页面，来实现动态加载的效果。

## 使用

### 发布文章
发布新文章只要将新文章添加到`_posts`目录下，需要拓展名是`.md`，另外如果是草稿的话不需要配置文章Header中的Yaml信息，这样生成脚本将忽略该文章。如果要发布的话只需要在文章内写好Yaml配置文件， 并把配置信息拷贝至根目录的`blogCoonfigs.yml`中即可。

### 构建网站
构建网站使用Webpack打包工具打包并压缩React文件， 执行命令`npm run build`就可以讲所有前端页面打包并压缩后保存在`build`目录中。

### 生成博客信息
生成博客信息使用的是文件读取，执行命令`npm run generate`就可以自动生成根目录需要的配置文件`blogInfos.yml`

[博客源代码地址](https://github.com/ole3021/ole3021.me)
