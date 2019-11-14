# Gradle 代理设置

## Windows 设置 Gradle 代理

在 Android Studio 设置中搜索 gradle，然后找到 .gradle 的路径。然后在 .gradle 文件夹中添加 gradle.properties 文件，文件内容如下：

```plain
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=1080

systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=1080
```

proxyHost 跟 proxyPort 请根据实际情况去设置。
