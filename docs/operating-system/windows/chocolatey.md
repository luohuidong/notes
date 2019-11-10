# Chocolatey

Chocolatey 是一个 Windows 的 package manager，它类似于 Ubuntu 的 apt，能够快速便捷地安装 Windows 软件，提高了配置开发环境的效率。例如在安装 JDK 的时候，不需要在手动配置环境变量了，通过 Chocolatey 安装将自动配置好环境变量。

Chocolatey 的安装以及通过它来安装软件是非常便捷的，参考一下[官方文档](https://chocolatey.org/docs)可以很快上手。

## 设置代理

由于众所周知的原因，通过 Chocolatey 去安装软件是非常慢的，因此需要设置代理。

方式一，直接在命令行中设置 chocolatey 的代理

```shell
choco config set proxy <locationandport>
```

方式二，在系统中设置 http_proxy、https_proxy，Chocolatey 会自动获取这些环境变量。

其它设置代理的方式可以参考 [Proxy Support For Chocolatey](https://chocolatey.org/docs/proxy-settings-for-chocolatey)。
