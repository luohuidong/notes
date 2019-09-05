# Git 最小化配置

## 设置用户信息

在使用 Git 之前，需要做一个最小化的配置来配置 user 的信息：

```bash
git config --global user.name 'your_name'
git config --global user.email 'your_email@domain.com'
```

`--global` 这个参数表示对当前用户所有仓库有效。除了 `--global` 之外，还有 `--local` 表示只对某个仓库有效。另外还有 `--system` 表示对系统所有登录的用户有效。如果缺少参数，那么就等同于 local。

这三个参数中，global 是最为常用的，而 system 则是最不常用的。

而这些配置的优先级从高到底排列为 `local`, `global`, `system`。

## 显示 config 的配置

想要查看 config 的配置，只需要添加 `--list` 参数即可：

```bash
git config --list --local
git config --list --global
git config --list --system
```
