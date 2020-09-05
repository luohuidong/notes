(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{323:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-文件上传下载操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件上传下载操作","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 文件上传下载操作")]),s._v(" "),t("h2",{attrs:{id:"wget-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wget-命令","aria-hidden":"true"}},[s._v("#")]),s._v(" wget 命令")]),s._v(" "),t("p",[s._v("wget 命令用于在终端中下载网络文件，格式为 "),t("code",[s._v("wget [参数] 下载地址")]),s._v("。")]),s._v(" "),t("p",[s._v("参数：")]),s._v(" "),t("ul",[t("li",[s._v("b：后台下载模式。")]),s._v(" "),t("li",[s._v("P：下载到指定目录。")]),s._v(" "),t("li",[s._v("t：最大尝试次数。")]),s._v(" "),t("li",[s._v("c：断点续传。")]),s._v(" "),t("li",[s._v("p：下载页面内所有资源，包括图片、视频等。")]),s._v(" "),t("li",[s._v("r：递归下载。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -c https://www.github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("-t 0")]),s._v(" 表示无限次重试，直到连接成功。")]),s._v(" "),t("p",[t("code",[s._v("-c")]),s._v(" 表示断点续传。用户可以在线路中断时从断点开始下载，无需重头开始。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -P a https://www.github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将下载的文件存放到 a 这个目录下。")]),s._v(" "),t("h2",{attrs:{id:"scp-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scp-命令","aria-hidden":"true"}},[s._v("#")]),s._v(" scp 命令")]),s._v(" "),t("p",[s._v("scp 就是 secure copy，用于将文件或者目录从一个 Linux 系统复制到另一个 Linux 系统下。scp 传输数据用的是 SSH 协议，保证了数据传输的安全。")]),s._v(" "),t("p",[s._v("格式：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" 远程用户名@ip地址:文件的绝对路径 本地 Linux 系统路径\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" 本地 Linux 系统文件路径 远程用户名@ip地址:远程系统文件绝对路径名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" imooc@192.168.0.106:/tmp/imooc.txt ./\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过 imooc 这个用户登录到 192.168.0.106 这个服务器，将 /tmp/imooc/imooc.txt 这个文件下载到本机当前目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" imooc.txt imooc@192.168.0.106:/tmp/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将 imooc.txt 这个文件，通过 imooc 这个用户登录到 192.168.0.106 这个服务器，上传到 /tmp/ 这个文件夹中。")])])}),[],!1,null,null,null);a.default=n.exports}}]);