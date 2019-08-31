# 更改 apt 源

在国内，由于众所周知的原因，使用 Ubuntu 官方的 apt 源下载东西比较慢。为了解决这个问题，可以通过将 apt 源更改为国内的源即可。

下面以淘宝源来举例子，替换其它国内源也是一样的。

在淘宝源 [OPSX](https://opsx.alibaba.com/mirror?lang=zh-CN) 的官网，查找 Ubuntu，然后点击“帮助”：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/103970/1554438318904-ed4c89e6-3ac5-490c-b70d-7c12a66efb3a.png#align=left&display=inline&height=905&name=image.png&originHeight=905&originWidth=1842&size=359026&status=done&width=1842)

根据自己的操作系统，查找到对应版本的配置，复制：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/103970/1554438490948-e27cd48e-4445-47b2-9d4f-aeab8c8b084c.png#align=left&display=inline&height=784&name=image.png&originHeight=784&originWidth=1124&size=98452&status=done&width=1124)

复制完毕之后，需要修改 /etc/apt/ 目录下的 sources.list 文件。在修改之前，以防会出什么差错，先对这个文件备份一下 `cp sources.list sources.back.list` 。随后使用自己熟悉的编辑器，编辑 sources.list 文件，将文件中的内容清空，并将刚刚复制 Ubuntu apt 源配置复制到这个文件中。随后可以通过执行 `sudo apt get update` 查看一下有没有问题。如果没报错的话，则证明更换 apt 源成功了。
