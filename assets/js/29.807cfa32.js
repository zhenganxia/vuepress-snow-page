(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{490:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"node事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node事件循环"}},[t._v("#")]),t._v(" node事件循环")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/onepixel/p/7143769.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"什么是node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是node"}},[t._v("#")]),t._v(" 什么是node")]),t._v(" "),a("p",[t._v("Node.js 采用事件驱动和异步 I/O 的方式，实现了一个单线程、高并发的 JavaScript 运行时环境")]),t._v(" "),a("h4",{attrs:{id:"单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),a("p",[t._v("意味着同一时间只能做一件事")]),t._v(" "),a("h4",{attrs:{id:"高并发策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发策略"}},[t._v("#")]),t._v(" 高并发策略")]),t._v(" "),a("p",[t._v("一般来说，高并发的解决方案就是提供多线程模型，服务器为每个客户端请求分配一个线程，使用同步 I/O，系统通过线程切换来弥补同步 I/O 调用的时间开销。比如 Apache 就是这种策略，由于 I/O 一般都是耗时操作，因此这种策略很难实现高性能，但非常简单，可以实现复杂的交互逻辑。\n而事实上，大多数网站的服务器端都不会做太多的计算，它们接收到请求以后，把请求交给其它服务来处理（比如读取数据库），然后等着结果返回，最后再把结果发给客户端。因此，Node.js 针对这一事实采用了单线程模型来处理，它不会为每个接入请求分配一个线程，而是用一个主线程处理所有的请求，然后对 I/O 操作进行异步处理，避开了创建、销毁线程以及在线程间切换所需的开销和复杂性。")]),t._v(" "),a("h4",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("Node.js 在主线程里维护了一个事件队列，当接到请求后，就将该请求作为一个事件放入这个队列中，然后继续接收其他请求。当主线程空闲时(没有请求接入时)，就开始循环事件队列，检查队列中是否有要处理的事件，这时要分两种情况：如果是非 I/O 任务，就亲自处理，并通过回调函数返回到上层调用；如果是 I/O 任务，就从 线程池 中拿出一个线程来处理这个事件，并指定回调函数，然后继续循环队列中的其他事件。\n当线程中的 I/O 任务完成以后，就执行指定的回调函数，并把这个完成的事件放到事件队列的尾部，等待事件循环，当主线程再次循环到该事件时，就直接处理并返回给上层调用。 这个过程就叫 事件循环 (Event Loop)，其运行原理如下图所示：\n"),a("img",{attrs:{src:"/images/node/node1.png",alt:"avatar"}}),t._v("\n这个图是整个 Node.js 的运行原理，从左到右，从上到下，Node.js 被分为了四层，分别是 应用层、V8引擎层、Node API层 和 LIBUV层。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("应用层：   即 JavaScript 交互层，常见的就是 Node.js 的模块，比如 http，fs")]),t._v(" "),a("p",[t._v("V8引擎层：  即利用 V8 引擎来解析JavaScript 语法，进而和下层 API 交互")]),t._v(" "),a("p",[t._v("NodeAPI层：  为上层模块提供系统调用，一般是由 C 语言来实现，和操作系统进行交互 。")]),t._v(" "),a("p",[t._v("LIBUV层： 是跨平台的底层封装，实现了 事件循环、文件操作等，是 Node.js 实现异步的核心 。")])]),t._v(" "),a("p",[t._v("无论是 Linux 平台还是 Windows 平台，Node.js 内部都是通过 线程池 来完成异步 I/O 操作的，而 LIBUV 针对不同平台的差异性实现了统一调用。")]),t._v(" "),a("h4",{attrs:{id:"因此-node-js-的单线程仅仅是指-javascript-运行在单线程中-而并非-node-js-是单线程。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#因此-node-js-的单线程仅仅是指-javascript-运行在单线程中-而并非-node-js-是单线程。"}},[t._v("#")]),t._v(" 因此，Node.js 的单线程仅仅是指 JavaScript 运行在单线程中，而并非 Node.js 是单线程。")]),t._v(" "),a("h4",{attrs:{id:"工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理:")]),t._v(" "),a("p",[t._v("Node.js 实现异步的核心是事件，也就是说，它把每一个任务都当成 事件 来处理，然后通过 Event Loop 模拟了异步的效果，为了更具体、更清晰的理解和接受这个事实，下面我们用伪代码来描述一下其工作原理 。\n既然是队列，那就是一个先进先出 (FIFO) 的数据结构，我们用JS数组来描述，如下：\n【1】定义事件队列")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 定义事件队列\n * 入队：push()\n * 出队：shift()\n * 空队列：length == 0\n */")]),t._v("\nglobalEventQueue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("我们利用数组来模拟队列结构：数组的第一个元素是队列的头部，数组的最后一个元素是队列的尾部，push() 就是在队列尾部插入一个元素，shift() 就是从队列头部弹出一个元素。这样就实现了一个简单的事件队列。\n【2】定义接收请求入口")]),t._v(" "),a("p",[t._v("每一个请求都会被拦截并进入处理函数，如下所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 接收用户请求\n * 每一个请求都会进入到该函数\n * 传递参数request和response\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("processHttpRequest")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个事件对象")]),t._v("\n    varevent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递请求参数")]),t._v("\n        result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放请求结果")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定回调函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在队列的尾部添加该事件  ")]),t._v("\n    globalEventQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个函数很简单，就是把用户的请求包装成事件，放到队列里，然后继续接收其他请求。")]),t._v(" "),a("p",[t._v("【3】定义 Event Loop")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("当主线程处于空闲时就开始循环事件队列，所以我们还要定义一个函数来循环事件队列： \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 事件循环主体，主线程择机执行\n * 循环遍历事件队列\n * 处理非IO任务\n * 处理IO任务\n * 执行回调，返回给上层\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("eventLoop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果队列不为空，就继续循环")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalEventQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从队列的头部拿出一个事件")]),t._v("\n        varevent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalEventQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是耗时任务")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIOTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从线程池里拿出一个线程")]),t._v("\n            varthread "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getThreadFromThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 交给线程处理")]),t._v("\n            thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleIOTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非耗时任务处理后，直接返回结果")]),t._v("\n            varresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最终通过回调函数返回给V8，再由V8返回给应用程序")]),t._v("\n            event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("主线程不停的检测事件队列，对于 I/O 任务，就交给线程池来处理，非 I/O 任务就自己处理并返回。")]),t._v(" "),a("p",[t._v("【4】处理 I/O 任务")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("线程池接到任务以后，直接处理"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IO")]),t._v("操作，比如读取数据库：\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 处理IO任务\n * 完成后将事件添加到队列尾部\n * 释放线程\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleIOTask")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前线程")]),t._v("\n    varcurThread "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作数据库")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("varoptDatabase")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        varresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readDataFromDb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行IO任务")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("optDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回结果存入事件对象中")]),t._v("\n        event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IO完成后，将不再是耗时任务")]),t._v("\n        event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isIOTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将该事件重新添加到队列的尾部")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalEventQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放当前线程")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("releaseThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curThread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当 I/O 任务完成以后就执行回调，把请求结果存入事件中，并将该事件重新放入队列中，等待循环，最后释放当前线程，当主线程再次循环到该事件时，就直接处理了。")]),t._v(" "),a("p",[t._v("总结以上过程我们发现，Node.js 只用了一个主线程来接收请求，但它接收请求以后并没有直接做处理，而是放到了事件队列中，然后又去接收其他请求了，空闲的时候，再通过 Event Loop 来处理这些事件，从而实现了异步效果，当然对于IO类任务还需要依赖于系统层面的线程池来处理。")]),t._v(" "),a("p",[t._v("因此，我们可以简单的理解为：Node.js 本身是一个多线程平台，而它对 JavaScript 层面的任务处理是单线程的。")]),t._v(" "),a("p",[t._v("CPU密集型是短板\n至此，对于 Node.js 的单线程模型，我们应该有了一个简单而又清晰的认识，它通过事件驱动模型实现了高并发和异步 I/O，然而也有 Node.js 不擅长做的事情：")]),t._v(" "),a("p",[t._v("上面提到，如果是 I/O 任务，Node.js 就把任务交给线程池来异步处理，高效简单，因此 Node.js 适合处理I/O密集型任务。但不是所有的任务都是 I/O 密集型任务，当碰到CPU密集型任务时，即只用CPU计算的操作，比如要对数据加解密(node.bcrypt.js)，数据压缩和解压(node-tar)，这时 Node.js 就会亲自处理，一个一个的计算，前面的任务没有执行完，后面的任务就只能干等着 。如下图所示：\n"),a("img",{attrs:{src:"/images/node/node2.png",alt:"avatar"}}),t._v("\n在事件队列中，如果前面的 CPU 计算任务没有完成，后面的任务就会被阻塞，出现响应缓慢的情况，如果操作系统本身就是单核，那也就算了，但现在大部分服务器都是多 CPU 或多核的，而 Node.js 只有一个 EventLoop，也就是只占用一个 CPU 内核，当 Node.js 被CPU 密集型任务占用，导致其他任务被阻塞时，却还有 CPU 内核处于闲置状态，造成资源浪费。")]),t._v(" "),a("p",[t._v("因此，Node.js 并不适合 CPU 密集型任务。")])])}),[],!1,null,null,null);s.default=e.exports}}]);