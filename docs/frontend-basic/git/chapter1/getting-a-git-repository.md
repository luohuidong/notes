# 新建 Git 仓库

新建 Git 仓库有两种场景：

第一种：是把已有的项目代码纳入 Git 管理。这种情况是在建仓库之前，就已经有代码了。对于这种情况，只需要进入到项目代码所在的文件夹，然后执行一下 `git init` 就可以了。

```bash
cd 项目代码所在的文件夹
git init
```

第二种：新建的项目直接用 Git 管理。这种情况是代码还没开始写，但是一开始就想通过 Git 来管理项目。对于这种情况，只需要进入到某个文件夹，然后执行 `git init your_project`，然后 git 就会在当前路径下创建和项目名称同名的文件夹。

```bash
cd 某个文件夹
git init your_project #会在当前路径下创建和项目名称同名的文件夹
cd your_project
```

## 配置 local 用户信息

新建的仓库，如果我们不想默认使用 global 中的配置，则可以为这个仓库设置本地设置（local）设置。这个设置只会对这个仓库有效，而不会影响到其它仓库。

```bash
git config --local user.name 'allan'
git config --local user.email 'allan@email.com'
```

想要查看设置是否成功，则可以执行下面的名来查看 local 设置是否成功：

```bash
git config --local --list
```
