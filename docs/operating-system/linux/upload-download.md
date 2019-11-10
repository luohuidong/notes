# Linux 文件上传下载操作

## wget 命令

wget 命令用于在终端中下载网络文件，格式为 `wget [参数] 下载地址`。

参数：

- b：后台下载模式。
- P：下载到指定目录。
- t：最大尝试次数。
- c：断点续传。
- p：下载页面内所有资源，包括图片、视频等。
- r：递归下载。

```bash
wget -t 0 -c https://www.github.com
```

`-t 0` 表示无限次重试，直到连接成功。

`-c` 表示断点续传。用户可以在线路中断时从断点开始下载，无需重头开始。

```bash
wget -P a https://www.github.com
```

将下载的文件存放到 a 这个目录下。

## scp 命令

scp 就是 secure copy，用于将文件或者目录从一个 Linux 系统复制到另一个 Linux 系统下。scp 传输数据用的是 SSH 协议，保证了数据传输的安全。

格式：

```bash
scp 远程用户名@ip地址:文件的绝对路径 本地 Linux 系统路径
scp 本地 Linux 系统文件路径 远程用户名@ip地址:远程系统文件绝对路径名
```

```bash
scp imooc@192.168.0.106:/tmp/imooc.txt ./
```

通过 imooc 这个用户登录到 192.168.0.106 这个服务器，将 /tmp/imooc/imooc.txt 这个文件下载到本机当前目录。

```bash
scp imooc.txt imooc@192.168.0.106:/tmp/
```

将 imooc.txt 这个文件，通过 imooc 这个用户登录到 192.168.0.106 这个服务器，上传到 /tmp/ 这个文件夹中。
