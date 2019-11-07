# 修改服务器默认登录端口

执行 `sudo vim /etc/ssh/sshd_config` 修改 ssh 配置文件。

## 修改端口

找到下面这部分的代码

```plain
# What ports, IPs and protocols we listen for
Port 22
```

端口号从 0 到 65335。0 到 1024 一般是系统占用的端口，所以修改的时候不要使用这个范围的端口。当端口号修改完之后，后面的登录则必须通过新修改的端口进行登录。

修改完端口之后，在文件的最后，添加下面的内容

```plain
AllowUsers 你的用户名
```

保存文件之后，通过 `sudo service ssh restart` 重启 SSH 服务。
