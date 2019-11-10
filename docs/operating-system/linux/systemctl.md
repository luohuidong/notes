# 使用 systemctl 命令管理服务

- systemctl start foo.service：启动服务
- systemctl restart foo.service：重启服务
- systemctl stop foo.service：停止服务
- systemctl reload foo.service：重新加载配置文件（不终止服务）
- systemctl status foo.service：查看服务状态
- systemctl enable foo.service：开机自动启动
- systemctl disable foo.service：开机不自动启动
- systemctl is-enabled foo.service：查看特定服务是否为开机自动启动
- systemctrl list-unit-files --type=service：查看各个级别下服务的启动与禁用情况
