# 查看 ip 与 设置网络

运行环境 CentOS7

## 使用 ip addr

最小化安装的 CentOS 最开始是无法通过 `ifconfig` 查看 ip 地址的，可以先通过 `ip addr` 进行查看。

## 打开网络

执行 `vi /etc/sysconfig/network-scripts/ifcfg-xx`，xx 替换成通过 `ip addr` 查询结果中的网卡。

如要编辑 enp4s0 的网卡配置，则执行  `vi /etc/sysconfig/network-scripts/ifcfg-enp4s0` 。

进入到编辑页面，将 ONBOOT 的值改为 yes，保存退出。执行 `service network restart` 重启网络服务。

重启完网络服务之后，再执行 `ip addr` 即可看到刚刚修改的配置文件所对应的网卡，显示了内网 ip，并且可以上网了。。

## 使用 ifconfig

要使用 ifconfig 命令，需执行 `yum install net-tools` 进行安装。
