(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{480:function(t,s,a){"use strict";a.r(s);var r=a(24),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[t._v("#")]),t._v(" 浏览器内核")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/browser.png",alt:"avatar"}})]),t._v(" "),a("h4",{attrs:{id:"es6部分新对象、表达式-语法不支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6部分新对象、表达式-语法不支持"}},[t._v("#")]),t._v(" es6部分新对象、表达式，语法不支持")]),t._v(" "),a("p",[t._v("解决：使用bebel-polyfill-将es6的API解析为低版本")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("polyfill\n方案一：\nentry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-polyfill"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-polyfill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用来解决的兼容性")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vendor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vendor\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n方案二：\n不修改webpack的情况下，在你的主入口文件头部加入，例如：app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js中加入即可\n\n方案三：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"识别箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#识别箭头函数"}},[t._v("#")]),t._v(" 识别箭头函数")]),t._v(" "),a("p",[t._v("解决:安装babel-core")]),t._v(" "),a("h4",{attrs:{id:"本地跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地跨域问题"}},[t._v("#")]),t._v(" 本地跨域问题")]),t._v(" "),a("p",[t._v("解决：使用proxy解决跨域")]),t._v(" "),a("h4",{attrs:{id:"tree-select收起-el-select失去焦点事件没有触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-select收起-el-select失去焦点事件没有触发"}},[t._v("#")]),t._v(" tree-select收起 el-select失去焦点事件没有触发")]),t._v(" "),a("p",[t._v("解决：使用指令动态循环el-select 手动触发失焦事件")]),t._v(" "),a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("h4",{attrs:{id:"不同浏览器的标签默认的外补丁和内补丁不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同浏览器的标签默认的外补丁和内补丁不同"}},[t._v("#")]),t._v(" 不同浏览器的标签默认的外补丁和内补丁不同")]),t._v(" "),a("p",[t._v("解决：rest样式")]),t._v(" "),a("h4",{attrs:{id:"父级塌陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父级塌陷"}},[t._v("#")]),t._v(" 父级塌陷")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 父级设置高度"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("在浮动元素下面添加一个空标签，在这个标签中设置clear：both "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear:both;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("父元素定义overflow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("auto "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("overflow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("父元素使用伪元素 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("before来模拟一个空元素清除浮动 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("display"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("clear"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"图片默认有间距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片默认有间距"}},[t._v("#")]),t._v(" 图片默认有间距")]),t._v(" "),a("p",[t._v("解决：使用float 为img 布局")]),t._v(" "),a("h2",{attrs:{id:"ie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie"}},[t._v("#")]),t._v(" IE")]),t._v(" "),a("h4",{attrs:{id:"日期插件出现nan-ie无法解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期插件出现nan-ie无法解析"}},[t._v("#")]),t._v(" 日期插件出现NAN-ie无法解析-")]),t._v(" "),a("p",[t._v("解决：正则replace(/-/g, '/'))")]),t._v(" "),a("h4",{attrs:{id:"ie8及ie8之前版本不支持opacity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie8及ie8之前版本不支持opacity"}},[t._v("#")]),t._v(" ie8及ie8之前版本不支持opacity")]),t._v(" "),a("p",[t._v("解决：使用filter\n{\nopacity:0.5;\nfilter:alpha(opacity=50)\n}")]),t._v(" "),a("h4",{attrs:{id:"ie8不支持html5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie8不支持html5"}},[t._v("#")]),t._v(" ie8不支持HTML5")]),t._v(" "),a("p",[t._v("解决：引入html5shiv")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" lt "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html5shiv.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"ie8不支持canvas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie8不支持canvas"}},[t._v("#")]),t._v(" ie8不支持canvas")]),t._v(" "),a("p",[t._v("解决：引入 ExplorerCanvas")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" lt "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"excanvas.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"ie8不支持media-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie8不支持media-query"}},[t._v("#")]),t._v(" ie8不支持media query")]),t._v(" "),a("p",[t._v("解决：引入respond.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" lt "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"respond.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome"}},[t._v("#")]),t._v(" chrome")]),t._v(" "),a("h4",{attrs:{id:"使用flex布局-display-inline-table-9版本不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用flex布局-display-inline-table-9版本不生效"}},[t._v("#")]),t._v(" 使用flex布局 display:inline-table 9版本不生效")]),t._v(" "),a("p",[t._v("解决：外层添加高度，display：flex")]),t._v(" "),a("h4",{attrs:{id:"element-虚拟滚动失效-chrome-92-0-4515-131失效-chrome-92-0-4515-107可以使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-虚拟滚动失效-chrome-92-0-4515-131失效-chrome-92-0-4515-107可以使用"}},[t._v("#")]),t._v(" element 虚拟滚动失效-（chrome-92.0.4515.131失效 ，chrome-92.0.4515.107可以使用）")]),t._v(" "),a("p",[t._v("解决： infinite-scroll-immediate=false （不能进入页面立即执行）")]),t._v(" "),a("h2",{attrs:{id:"js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),a("h4",{attrs:{id:"窗口大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#窗口大小"}},[t._v("#")]),t._v(" 窗口大小")]),t._v(" "),a("p",[t._v("解决：document.documentElement/body")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器窗口可视区域大小（不包括工具栏和滚动条等边线）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1600 * 525")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client_w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client_h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网页内容实际宽高（包括工具栏和滚动条等边线）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1600 * 8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll_w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll_h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网页内容实际宽高 (不包括工具栏和滚动条等边线）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1600 * 8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" offset_w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" offset_h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚动的高度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll_Top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);