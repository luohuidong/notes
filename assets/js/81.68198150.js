(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{299:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"查看版本演变历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看版本演变历史","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看版本演变历史")]),s._v(" "),e("p",[s._v("查看版本历史使用的是 "),e("code",[s._v("git log")]),s._v(" 命令，例如下面就是 "),e("code",[s._v("git log")]),s._v(" 的输出内容。")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("commit 8666545730c7958d7d2a2d0f204daa7300eaf016 (HEAD -> master, origin/master, origin/HEAD)\nAuthor: luohuidong <luohuidong01@126.com>\nDate:   Fri Sep 6 08:38:01 2019 +0800\n\n    添加 Git 重命名文件的内容\n\ncommit 84ba348087ef6ef4b7fd3a4db47cec2004718a41\nAuthor: luohuidong <luohuidong01@126.com>\nDate:   Thu Sep 5 09:15:00 2019 +0800\n\n    新增 Git 内容\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"获取简洁的-log-列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取简洁的-log-列表","aria-hidden":"true"}},[s._v("#")]),s._v(" 获取简洁的 log 列表")]),s._v(" "),e("p",[s._v("当然 "),e("code",[s._v("git log")]),s._v(" 还是有几种用法，例如想要比较简洁地查看 log 列表，那么可以使用 "),e("code",[s._v("oneline")]),s._v(" 参数："),e("code",[s._v("git log --oneline")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("855eac5 (HEAD -> master, origin/master, origin/HEAD) 添加 git log 内容\n1427146 添加 git log 内容\n8666545 添加 Git 重命名文件的内容\n84ba348 新增 Git 内容\n0fdeae2 update\n4d43153 新增 electron 参考资料\n837a523 添加 npm 内容\n5724555 添加 Electron 资料\nf7484e8 修改 github pages 发布的脚本\n5797a6c update Electron Content\n6de2b79 优化文档配置代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"只查看最近几次提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#只查看最近几次提交","aria-hidden":"true"}},[s._v("#")]),s._v(" 只查看最近几次提交")]),s._v(" "),e("p",[s._v("再查看 Git 历史记录的时候，只想查看最近几次提交记录的话，可以使用 "),e("code",[s._v("-n")]),s._v(" 参数，这个参数需要跟一个数字。例如我想查看最近四次提交记录，"),e("code",[s._v("git log -n4")]),s._v("，又例如我想查看最近两次提交记录 "),e("code",[s._v("git log -n2")]),s._v("。")]),s._v(" "),e("p",[s._v("当然 "),e("code",[s._v("-n")]),s._v(" 参数同样可以搭配其他的参数进行使用，如 "),e("code",[s._v("--oneline")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git log -n4 --oneline\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看所有分支的历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有分支的历史","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看所有分支的历史")]),s._v(" "),e("p",[s._v("仅执行 "),e("code",[s._v("git log")]),s._v(" 的话它只能查看当前分支的历史。如果想查看所有分支的版本历史，则可以使用 "),e("code",[s._v("git log --all")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"图形化的用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图形化的用法","aria-hidden":"true"}},[s._v("#")]),s._v(" 图形化的用法")]),s._v(" "),e("p",[s._v("用 "),e("code",[s._v("git log")]),s._v(" 并不能直观地放我们知道版本的演进历史。因此我们可以使用 "),e("code",[s._v("--graph")]),s._v(" 参数。")]),s._v(" "),e("p",[e("code",[s._v("git log --graph")]),s._v(" 命令的输出效果如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("* commit 574783f243fd9463ab0fac8e64964209d0b2b3e4 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Author: luohuidong "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("luohuidong01@126.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Date:   Sun Sep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":44:51 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" +0800\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     添加文字\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * commit d6aded9b62d95d5bf1e197a886bce77651bebe97 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  Author: luohuidong "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("luohuidong01@126.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   Date:   Sun Sep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":42:05 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" +0800\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       添加文字\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("code",[s._v("--graph")]),s._v(" 参数同样可以搭配其他参数来使用")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline --all -n4 --graph\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("它的输出内容为：")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* 574783f (HEAD -> master) 添加文字\n| * d6aded9 (test) 添加文字\n|/\n* ea817b0 Add refering projects\n* 95c0250 Add js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"其它-git-log-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它-git-log-参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 其它 git log 参数")]),s._v(" "),e("p",[s._v("前面所列举的仅仅是 "),e("code",[s._v("git log")]),s._v(" 比较常用的命令，如果想查看全部的 "),e("code",[s._v("git log")]),s._v(" 参数，可以执行下面的命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" --web log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这条命令的意思就是以 Web 页面的方式查看 log 的 Git 帮助文档。")])])}),[],!1,null,null,null);a.default=n.exports}}]);