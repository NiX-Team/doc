(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(t,e,i){"use strict";i.r(e);var s=i(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("本项目为 NiX 团队所有可公开的文档，旨在使用 Git 更方便地管理和维护文档。请维护者自觉遵守相关的编辑规范。")]),i("p",[t._v("欢迎大家为文档提供修改意见，请直接提交 Issue 或者 Pull Request，并且在相关贡献者清单中加上你的名字，添加 CHANGELOG。请遵守相关知识共享协议！")]),t._m(1),i("ul",[i("li",[i("router-link",{attrs:{to:"docs/booklist.html#书籍清单"}},[t._v("书籍清单")])],1),i("li",[i("router-link",{attrs:{to:"docs/guide.html#新人指南"}},[t._v("新人指南")])],1),i("li",[i("router-link",{attrs:{to:"docs/recruit.html#招聘制度"}},[t._v("招聘制度")])],1)]),t._m(2),t._m(3),t._m(4),t._m(5)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"nix-团队公开文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nix-团队公开文档","aria-hidden":"true"}},[this._v("#")]),this._v(" NiX 团队公开文档")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"钩子的安装和使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#钩子的安装和使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 钩子的安装和使用")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("请在将项目克隆至本地之后执行 "),i("code",[t._v("make hooks")]),t._v(" 安装 commit 信息检查钩子，目前 "),i("strong",[t._v("Windows")]),t._v(" 平台暂不支持钩子。")]),i("li",[t._v("为了方便文档管理，commit 信息的格式要求为"),i("code",[t._v("文档名 v版本号 其他信息")]),t._v("，其中文档名为 Markdown 文档第一行的一级标题名，版本号为数字和点符号的任意组合，其他信息可以为空。")]),i("li",[t._v("钩子禁止多 Markdown 文档同时提交，钩子信息检查会自动忽略 README 文档。")]),i("li",[t._v("如果你想忽略钩子的格式检查，请在执行 "),i("code",[t._v("git commit")]),t._v(" 时加上 "),i("code",[t._v("--no-verify")]),t._v(" 参数。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"新建文档模版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建文档模版","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建文档模版")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("调用 "),e("code",[this._v("make temp")]),this._v(" 并输入相关信息会在 "),e("code",[this._v("docs")]),this._v(" 目录下生成一个文档模版。")]),e("li",[this._v("程序会优先检查 Git 的邮箱配置，如果没有配置邮箱，则需要手动输入。")])])}],!1,null,null,null);e.default=r.exports}}]);