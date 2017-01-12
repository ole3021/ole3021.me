---
title: "Git管理最佳实践"
meta: "Git分支管理来解决多功能多版并行开发中合并和管理代码的问题。"
category: Knowledge
tags: [git]
cover: /assets/images/post/git.jpg
color: '#FFFFFF'
created: 2016-08-03
---
# Git 管理最佳实践
##### _文章内容参考 Vincent Driessen 的 [A Successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)_
最佳实践解决的问题是在多人多任务多(发布)版本的开发过程中对代码管理的一种解决方案， 依照该方案可以多人同时并行开发，开发功能不需要依赖任何版本信息，并且保证线上代码和线下代码的一致性。
## 分散管理和集中管理
集中管理：集中是核心代码分支集中在一个"核心"的repo(仓库)中，作为唯一一个控制代码核心管理的repo，按照git的命名方式通常叫做`origin`。
>  每个开发人员都可以针对这唯一的代码管理repo进行`pull`和`push`操作。

分散管理： 分散是指针对不同的团队/开发人员，在功能完成提交到`origin`之前，使用自己单独的repo管理，多人的任务协同也可通过分散的分支进行同步。
>  每个开发人员都可以从其他非核心repo中`pull`代码变更。

![repos](/assets/images/post/git_repos.png)
代码repo和交互关系示意图。

## 主要的分支
核心repo保存并管理主要的分支，包括`master`和`develop`, 用来保存 生产环境 和 开发环境可用的 最新代码。
### master 分支
master分支被用作为当前项目可上线的分支。
> 提交到`master`分支的代码需要经过严格的检验，并可以当`master`分支有提交内容的时候自动同步更新到生产环境中。

### develop
develop分支用作开发使用的最新分支，同时负责管理版本功能的先后顺序，并作为持续集成测试／每日构建的分支。
> 当`develop`分支上的代码达到了稳定的状态才可以合并到`master`分之上。

## 辅助分支
出了主要的`master`和`develop`分支外，还是用一些辅助分支来帮助并行开发，简化功能追踪，为生产环境作准备，快速修复线上问题。
### 功能分支
推荐前缀: **`feature-*`**
从 `develop` 分支切出 - 合并到 `develop` 分支
功能分支用来开发新的功能，因为在开发功能时有可能不会预先知道功能要在哪个版本发布，所以只要功能在开发中相应的功能分支就会一直存在，知道被合并到`develop`分支中或弃用。

切换到功能分支：

```shell
$ git checkout -b newFeature develop
＃Switched to a new branch "newfeature"
```

合并到`develop`分支：

```shell
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff newfeature
Updating ea1b82a..05e9557
(Summary of changes)
$ git branch -d newfeature
Deleted branch myfeature (was 05e9557).
$ git push origin develop
```

使用 --no-ff 取消 fast-forward, 可以保留分支存在的历史信息，并在合并的分支上生成一个新的节点, 不使用的话就会丢掉该分支存在信息。对比效果如图：

![pomodoro](/assets/images/post/git_no_ff.png)
为了保证版本演进的清晰，我们希望采用这种做法。
### 发布分支
推荐前缀: **`release-*`**
从 `develop` 分支切出 - 合并到 `develop`/ `master` 分支
发布分支用来完成一个新的发布版本的生成。 通常用来添加版本信息，和创建信息等。
每个发布分支都会合并当前版本需要的所有功能分支。
版本的相关信息都需要在创建发布分支时填写。
除此之外一些bug修复可以提交到relase分支上。

切换到发布分支：

```shell
$ git checkout -b release-1.2 develop
Switched to a new branch "release-1.2"
$ ./bump-version.sh 1.2
Files modified successfully, version bumped to 1.2.
$ git commit -a -m "Bumped version number to 1.2"
[release-1.2 74d9424] Bumped version number to 1.2
1 files changed, 1 insertions(+), 1 deletions(-)
```

发布发布分支:

```
$ git checkout master
Switched to branch 'master'
$ git merge --no-ff release-1.2
Merge made by recursive.
(Summary of changes)
$ git tag -a 1.2
```
> 可以使用 `-s` 或 `-u <key>` 来对tag进行加密。

保留信息变更:

```
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff release-1.2
Merge made by recursive.
(Summary of changes)
```

删除发布分支

```
$ git branch -d release-1.2
Deleted branch release-1.2 (was ff452fe).
```

### 快速修复分支
推荐前缀: **`hotfix-*`**
从 `master` 分支切出 - 合并到 `develop`/ `master` 分支
快速修复分支更像一个未经计划的发布分支。用来紧急修复线上的bug。
这样可以在开发和修复bug调用不同的人力来实现。

创建修复分支：

```
$ git checkout -b hotfix-1.2.1 master
Switched to a new branch "hotfix-1.2.1"
$ ./bump-version.sh 1.2.1
Files modified successfully, version bumped to 1.2.1.
$ git commit -a -m "Bumped version number to 1.2.1"
[hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1
1 files changed, 1 insertions(+), 1 deletions(-)
```

提交修改：

```
$ git commit -m "Fixed severe production problem"
[hotfix-1.2.1 abbe5d6] Fixed severe production problem
5 files changed, 32 insertions(+), 17 deletions(-)
```

完成修复分支：

```
$ git checkout master
Switched to branch 'master'
$ git merge --no-ff hotfix-1.2.1
Merge made by recursive.
(Summary of changes)
$ git tag -a 1.2.1
```

同步修改内容：

```
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff hotfix-1.2.1
Merge made by recursive.
(Summary of changes)
```
> 如果有发布分支存在，那么修改内容应同步到发布分支上而不是开发分支上。

删除同步分支：

```
$ git branch -d hotfix-1.2.1
Deleted branch hotfix-1.2.1 (was abbe5d6).
```

## Git 实践分支说明图
![pomodoro](/assets/images/post/git_map.png)
另附高清PDF文件，如果需要可以打印出来供团队使用。
[Git实践分支说明](http://ole3021.me/files/Git-branching-model.pdf)


## 个人思考
对于feature分支个人觉得也可以同时放在核心的代码repo中与`develop`和`master`一起管理，这样多个小组或多人的协同开发就不需要同不同的repo进行交互，都和一个repo进行交互就可以了。
