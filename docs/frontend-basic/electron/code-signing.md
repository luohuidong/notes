# Code Signing (代码签名)

> Code signing is the process of digitally signing executables and scripts to confirm the software author and guarantee that the code has not been altered or corrupted since it was signed. The process employs the use of a cryptographic hash to validate authenticity and integrity.

这里引用 wikipedia 对 code signing 的介绍。从介绍中我们可以看出，code signing 起到了两个主要作用：

- 能够确认软件作者的身份。
- 能够确认软件自从签名之后是否被其它第三方篡改。

但需要注意的是，代码签名并不代表最终用户免受软件作者的恶意行为或无意破坏，它只是确认软件未被作者以外的人修改。

## Windows Code Signing

Windows 的签名分为两种类型：

- EV Code Signing Certificate
- Code Signing Certificate

普通的 Code Signing Certificate 受信任程度没那么强，因此会在应用安装的时候有警告提示。但是当有足够多的用户去安装这个应用的时候，这个安装过程中出现的警告会随之消失，此时表明签名证书信任已经建立。

EV Certificate 授信任程度较强，因此它无需像普通的 Code Signing Certificate 那样需要有足够的用户去安装应用之后才能建立信任。因此使用 EV Certificate 进行签名之后，安装的警告提示就能立即消除。但需要注意的是，EV Certificate 是与 USB dongle 绑定的，因此证书无法导出给 CI 工具去实现自动签名的步骤。

EV Code Signing Certificate 的购买可以查看 Microsoft 的文档 [Get a code signing certificate](https://docs.microsoft.com/en-us/windows-hardware/drivers/dashboard/get-a-code-signing-certificate?redirectedfrom=MSDN)，里面提供了几个 certificate authorities 购买 EV Code Signing Certificate 的地址。也可以查看一下 [亚洲诚信](https://www.trustasia.com/code-signing) 的代码签名套餐，这个页面中提供了 Code Signing Certificate 和 EV Certificate 两种签名套餐，可以参考一下。

另外[这个链接](https://www.trustasia.com/symantec-ev-code-signing-certificate) 关于 Windows 应用在没有签名、有普通签名以及 EV 签名这三种情况下的下载提示。

## 参考资料

- [Electron Document: Code Signing](https://electronjs.org/docs/tutorial/code-signing)
- [Electron Builder: Code Signing](https://www.electron.build/code-signing)
- [Notarizing your Electron application](https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/)
- [Apple: What is app signing?](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)
- [Wikipedia: code signing](https://en.wikipedia.org/wiki/Code_signing)
- [代码签名：工作原理](https://www.websecurity.digicert.com/zh/cn/security-topics/how-code-signing-works)
- [固若金汤的根本（下）：数字签名与证书](https://time.geekbang.org/column/article/109503)
