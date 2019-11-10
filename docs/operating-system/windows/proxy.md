# Windows 命令行设置代理

HTTP 代理：

```shell
set http_proxy=http://127.0.0.1:xxxx
set https_proxy=http://127.0.0.1:xxxx
```

SOCKS5 代理：

```shell
set http_proxy=socks5://127.0.0.1:xxxx
set https_proxy=socks5://127.0.0.1:xxxx
```

通过上面的方式在命令行中设置代理，会在命令行退出的时候失效，因此可以通过“此电脑”——“高级系统设置”——“高级”——“环境变量”——“系统变量”中添加 http_proxy 和 https_proxy 则可以省去每次使用命令行的时候都需要重新设置 proxy 的麻烦
