# 查看版本演变历史

查看版本历史使用的是 `git log` 命令，例如下面就是 `git log` 的输出内容。

```plain
commit 8666545730c7958d7d2a2d0f204daa7300eaf016 (HEAD -> master, origin/master, origin/HEAD)
Author: luohuidong <luohuidong01@126.com>
Date:   Fri Sep 6 08:38:01 2019 +0800

    添加 Git 重命名文件的内容

commit 84ba348087ef6ef4b7fd3a4db47cec2004718a41
Author: luohuidong <luohuidong01@126.com>
Date:   Thu Sep 5 09:15:00 2019 +0800

    新增 Git 内容
```

## 获取简洁的 log 列表

当然 `git log` 还是有几种用法，例如想要比较简洁地查看 log 列表，那么可以使用 `oneline` 参数：`git log --oneline`：

```plain
855eac5 (HEAD -> master, origin/master, origin/HEAD) 添加 git log 内容
1427146 添加 git log 内容
8666545 添加 Git 重命名文件的内容
84ba348 新增 Git 内容
0fdeae2 update
4d43153 新增 electron 参考资料
837a523 添加 npm 内容
5724555 添加 Electron 资料
f7484e8 修改 github pages 发布的脚本
5797a6c update Electron Content
6de2b79 优化文档配置代码
```

## 只查看最近几次提交

再查看 Git 历史记录的时候，只想查看最近几次提交记录的话，可以使用 `-n` 参数，这个参数需要跟一个数字。例如我想查看最近四次提交记录，`git log -n4`，又例如我想查看最近两次提交记录 `git log -n2`。

当然 `-n` 参数同样可以搭配其他的参数进行使用，如 `--oneline`

```bash
git log -n4 --oneline
```

## 查看所有分支的历史

仅执行 `git log` 的话它只能查看当前分支的历史。如果想查看所有分支的版本历史，则可以使用 `git log --all`。

## 图形化的用法

用 `git log` 并不能直观地放我们知道版本的演进历史。因此我们可以使用 `--graph` 参数。

`git log --graph` 命令的输出效果如下：

```bash
* commit 574783f243fd9463ab0fac8e64964209d0b2b3e4 (HEAD -> master)
| Author: luohuidong <luohuidong01@126.com>
| Date:   Sun Sep 8 11:44:51 2019 +0800
|
|     添加文字
|
| * commit d6aded9b62d95d5bf1e197a886bce77651bebe97 (test)
|/  Author: luohuidong <luohuidong01@126.com>
|   Date:   Sun Sep 8 11:42:05 2019 +0800
|
|       添加文字
```

`--graph` 参数同样可以搭配其他参数来使用

```bash
git log --oneline --all -n4 --graph
```

它的输出内容为：

```plain
* 574783f (HEAD -> master) 添加文字
| * d6aded9 (test) 添加文字
|/
* ea817b0 Add refering projects
* 95c0250 Add js
```

## 其它 git log 参数

前面所列举的仅仅是 `git log` 比较常用的命令，如果想查看全部的 `git log` 参数，可以执行下面的命令：

```bash
git help --web log
```

这条命令的意思就是以 Web 页面的方式查看 log 的 Git 帮助文档。


