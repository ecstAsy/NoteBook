<h2 align="center">常用Git命令</h2>

## 通用命令

```
// git 初始化
git init

// 本地新增代码
git add README.md

// 把代码提交本地仓库
git commit -m "first commit"

// git 连接远程仓库
git remote add origin 你的远程仓库

// 推送代码到默认远程分支
git push -u origin master

``` 

## git 分支

```
// 查看本地分支
git branch

// 查看远程分支
git branch -a

// 创建分支
git branch branch_name

// 删除本地分支
git branch -d branch_name

// 强制删除本地分支
git branch -D branch_name

// 删除远程分支
git branch -r -d origin/branch-name  
git push origin :branch-name 

// 自动跟踪远程分支，并拉取分支到本地
git checkout --track origin/branch_name

// 把本地分支推送到远程分支，并跟踪该分支
git push --set-upstream origin branch_name

// 拉取对应分支代码
git pull origin branch_name

// 合并分支
git merge branch_name

```

## 版本回退

```
// 版本回退到某一次commit
git reset --hard <b3f881faae371ecf59363143b4216daedc0290ba>

// 关联远程分支和本地分支
git branch --set-upstream-to=origin/远程分支名称 本地分支名称

// 合并两个独立启动仓库
git pull origin master --allow-unrelated-histories

```

***注：***

```
// git 报错 1
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

// 解决方法 1
git branch --set-upstream-to=origin/<branch> master

// git 报错 2
fatal: refusing to merge unrelated histories

// 解决方法 2
git pull origin master --allow-unrelated-histories
```


##### --allow-unrelated-histories
因为他们是两个不同的项目，要把两个不同的项目合并，git需要添加一句代码，在git pull，
这句代码是在git 2.9.2版本发生的，最新的版本需要添加--allow-unrelated-histories。
