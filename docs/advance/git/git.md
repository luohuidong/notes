# 探秘 .git 目录

当我们执行 `git init` 初始化一个 Git 仓库的时候，我们会发现目录中多了一个 .git 目录，下面输出的内容为 `.git` 目录的结构：

```plain
drwxrwxrwx 1 luo luo 4096 Sep  8 14:30 .
drwxrwxrwx 1 luo luo 4096 Sep  8 11:44 ..
-rwxrwxrwx 1 luo luo   13 Sep  8 11:44 COMMIT_EDITMSG
-rwxrwxrwx 1 luo luo    0 Sep  6 21:00 FETCH_HEAD
-rwxrwxrwx 1 luo luo   23 Sep  8 11:44 HEAD
-rwxrwxrwx 1 luo luo   41 Sep  8 11:42 ORIG_HEAD
drwxrwxrwx 1 luo luo 4096 Sep  5 08:18 branches
-rwxrwxrwx 1 luo luo   92 Sep  5 08:18 config
-rwxrwxrwx 1 luo luo   73 Sep  5 08:18 description
-rwxrwxrwx 1 luo luo  505 Sep  8 14:18 gitk.cache
drwxrwxrwx 1 luo luo 4096 Sep  5 08:18 hooks
-rwxrwxrwx 1 luo luo  554 Sep  8 11:44 index
drwxrwxrwx 1 luo luo 4096 Sep  5 08:18 info
drwxrwxrwx 1 luo luo 4096 Sep  5 08:27 logs
drwxrwxrwx 1 luo luo 4096 Sep  8 11:44 objects
drwxrwxrwx 1 luo luo 4096 Sep  5 08:18 refs
```

本章节将介绍 .git 目录中我们平时接触得比较多的目录和文件。

## HEAD 文件

.git/HEAD 文件内容如下：

```plain
ref: refs/heads/master
```

ref 表示引用，指向 .git 目录下的 refs/heads/master 分支。

假设仓库中有 `master` 及 `test` 分支，我们将分支从 `master` 切换到 `test` 分支，HEAD 文件中的内容也会发生变化：

```plain
ref: refs/heads/test
```

切换成 `test` 分支之后，HEAD 中的内容，已经从 `ref: refs/heads/master` 变成 `ref: refs/heads/test` 了。因此 HEAD 文件能够告诉我们当前工作在哪个分支上面。

## config 文件

.git/config 文件存放着 Git 的配置内容。以下为 config 文件中的内容：

```plain
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
```

当我们通过 `git config --local` 来设置相关的信息的时候，就会存放到 config 文件当中。如执行 `git config --local user.name luohuidong` 来设置 Git 提交时的用户名

```plain
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[user]
        name = luohuidong
```

可以看到刚刚设置的用户名，已经存放到 config 文件当中了。

## refs 目录

refs 目录中的目录和文件：

```plain
drwxrwxrwx 1 luo luo 4.0K Sep  8 11:44 heads
drwxrwxrwx 1 luo luo 4.0K Sep  5 08:18 tags
```

refs 目录中包含 heads 目录和 tags 目录。这意味着 Git 仓库是可以有多个分支以及多个标签。

有些书本也将 tags 叫做里程碑，表示一个项目已经开发到某个程度，如项目已经到了 1.0 的版本，这时候就可以针对 1.0 这个版本的 commit 打上一个标签，标识这是 1.0 版本的里程碑。

### heads 目录

heads 目录结构：

```plain
-rwxrwxrwx 1 luo luo 41 Sep  8 11:44 master
-rwxrwxrwx 1 luo luo 41 Sep  8 11:42 test
```

.git/refs/heads/ 目录中的文件对应我们的分支，我们创建了多少个分支，这里就会有多少个文件对应这我们的分支，其文件名称对应着我们创建的分支名称。分支我们可以理解为一个独立的工作空间，我们在一个分支提交的更改并不影响另一个分支的提交历史。

下面为 .git/refs/heads/master 文件的内容:

```plain
574783f243fd9463ab0fac8e64964209d0b2b3e4
```

这一串东西表示 master 分支当前指向的是哪一个 commit。

我们通过 `git log` 是可以看到每一个 commit 对应的标识的。

```plain
commit 574783f243fd9463ab0fac8e64964209d0b2b3e4 (HEAD -> master)
Author: luohuidong <luohuidong01@126.com>
Date:   Sun Sep 8 11:44:51 2019 +0800

    添加文字

commit ea817b0806d1adac3003a036a9a404abb7ad55ac
Author: luohuidong <luohuidong01@126.com>
Date:   Thu Sep 5 09:11:06 2019 +0800

    Add refering projects

...
```

在 master 分支上面执行 `git log` 命令，我们可以查看到 master 分支最新的一次 commit 的标识就是 574783f243fd9463ab0fac8e64964209d0b2b3e4，而这串东西而刚好对应了我们在 .git/refs/heads/master 中的内容。

### tags

tags 目录下的文件与 heads 目录是类似的，其中的文件内容也是指向一个 commit 标识。

## objects 目录

objects 目录存放着对 Git 文件系统至关重要的核心内容。

Git 中的核心对象：

- commit
- tree
- blob

## commit、tree 和 blob 三者关系

我们每一次提交都会创建一个 commit 对象出来。而一个 commit 会对应一棵树
