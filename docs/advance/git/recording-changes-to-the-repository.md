# 将更变提交到仓库

Git 的工作流程为：

1. 工作目录通过 `git add` 将文件放到暂存区
2. 暂存区文件通过 `git commit` 纳入到版本历史中。

## git add

对于未被 Git 跟踪的文件，可通过 `git add file_name` 命令来让 Git 进行跟踪。

对于已被 Git 跟踪的文件，如果文件发生了更改，可以通过 `git add file_name` 命令来将更改放入到暂存区。

对于 Git 已经跟踪的文件，通过 `git add file_name` 一个一个文件地添加到暂存区未免有些麻烦。此时可以使用 `git add -u` （-u 表示 update）将修改过的文件一起提交到暂存区。这样在使用 `git add` 命令的时候，就没必要将具体的文件名写出来了。

## git commit

通过 `git commit -m 'commit_message'` 可以将已经放到暂存区中的修改，纳入到版本历史中。

## git status

`git status` 可以查看当前仓库的状态

## git log

`git log` 可以查看仓库的提交历史记录
