(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{359:function(_,v,l){"use strict";l.r(v);var i=l(8),e=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("浏览器\n渲染主线程消费消息队列 执行任务\nIO线程等负责生产队列")]),_._v(" "),v("p",[_._v("页面渲染采用单线程的弊端：")]),_._v(" "),v("ol",[v("li",[_._v("如何处理更高优先级的事情\nmicroTask 的产生就是为了解决这个问题的\n消息队列中的任务称为宏任务，而每个宏任务里又有一个微任务队列。当宏任务的主要任务执行完后，宏任务里的微任务队列开始执行，执行完成后，才会开始执行下一个任务。")]),_._v(" "),v("li",[_._v("单个任务执行时间过长，导致所有其它的任务都会被延后。")])]),_._v(" "),v("p",[_._v("基于消息队列的设计是目前最广泛的消息架构，无论是Android还是浏览器，都采用这种方式。")]),_._v(" "),v("p",[_._v("除了正常消费的消息队列，chrome中还存在一个异步队列，用来存放Chrome本身的一些需要延时处理的任务，")]),_._v(" "),v("p",[_._v("当然setTimeout这种异步的任务，也会被放到这个队列中。而像clearTimeout这种api就是从当前的延时队列中去除掉这个")]),_._v(" "),v("p",[_._v("宏任务由宿主发起")]),_._v(" "),v("p",[_._v("微任务由引擎发起")]),_._v(" "),v("h2",{attrs:{id:"浏览器渲染中-重排、重绘、合成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染中-重排、重绘、合成"}},[_._v("#")]),_._v(" 浏览器渲染中 重排、重绘、合成")]),_._v(" "),v("ol",[v("li",[_._v("重排\n"),v("ol",[v("li",[_._v("修改宽高等属性会触发重排，即整个渲染流水线都得重新走一遍。")])])]),_._v(" "),v("li",[_._v("重绘 相比于重排，重绘跳过布局、分层阶段，开销减少很多\n"),v("ol",[v("li",[_._v("修改色彩等绘制属性的时候，仅触发重绘。")])])]),_._v(" "),v("li",[_._v("触发一个既不需要重排也不需要重绘的属性，浏览器就会跳过布局和绘制阶段\n"),v("ol",[v("li",[_._v("transform的动画即是合成阶段，不会触发重绘和重排。")])])])]),_._v(" "),v("p",[_._v("渲染流水线：")]),_._v(" "),v("ol",[v("li",[_._v("构建DOM树 输入HTML标签 输出DOM树\n从浏览器获取到HTML文件时，构建DOM树的过程已经开始了，因此即使样式表下载过慢，也不会阻塞这一过程，阻塞的只是渲染的过程。")]),_._v(" "),v("li",[_._v("样式计算\n"),v("ol",[v("li",[_._v("首先要构建“CSS tree”，将各个位置的样式都转化成浏览器可以搞懂的样式树。")]),_._v(" "),v("li",[_._v("其次将样式中一些单位、色彩转成浏览器可以理解的，如像素，色值。")]),_._v(" "),v("li",[_._v("将样式树应用在dom树上，计算出每个dom节点的具体样式。")])])]),_._v(" "),v("li",[_._v("布局阶段\n"),v("ol",[v("li",[_._v("创建布局树，去除一些不需要展示的dom节点。")]),_._v(" "),v("li",[_._v("布局计算，计算布局树上每个节点的坐标和位置。这些计算后的坐标信息仍然会写进布局树中。")]),_._v(" "),v("li",[_._v("分层\n"),v("ol",[v("li",[_._v("创建图层 根据布局树来计算图层，拥有层叠上下文的属性的元素会被单独列为一层。")]),_._v(" "),v("li",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context",target:"_blank",rel:"noopener noreferrer"}},[_._v("层叠上下文"),v("OutboundLink")],1)])])])])]),_._v(" "),v("li",[_._v("图层绘制\n"),v("ol",[v("li",[_._v("图层绘制并不会真正绘制，而是输出绘制指令的列表。")])])]),_._v(" "),v("li",[_._v("栅格化（raster）\n"),v("ol",[v("li",[_._v("栅格化才是真正去做绘制的步骤。渲染进程在做好绘制指令后，会将操作提交给渲染引擎的合成进程，这部分会采用GPU进行绘制。合成进程会将网页分成多个图块，以当前视窗优先级最高。")])])])]),_._v(" "),v("h3",{attrs:{id:"浏览器请求过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器请求过程"}},[_._v("#")]),_._v(" 浏览器请求过程")]),_._v(" "),v("ul",[v("li",[_._v("浏览器发送请求\n"),v("ol",[v("li",[_._v("构建HTTP请求行")]),_._v(" "),v("li",[_._v("浏览器本地缓存拦截")]),_._v(" "),v("li",[_._v("DNS查询 IP + 端口确定")]),_._v(" "),v("li",[_._v("进入TCP队列\n"),v("ul",[v("li",[_._v("HTTP1.1中 由于一个TCP只能同时进行一个HTTP请求，所以一个域名）下，chrome浏览器只能同时存在6个TCP请求，当然这些HTTP完成后，这个TCP不会断开，而是被后面的HTTP请求复用。（因为是域名纬度，所以一些资源可以放在其他域名下，比如CDN）")]),_._v(" "),v("li",[_._v("HTTP2.0中 一个TCP中可以进行并行请求，所以浏览器只会维护一个TCP请求。")])])]),_._v(" "),v("li",[_._v("建立TCP连接 发送TCP请求")])])]),_._v(" "),v("li",[_._v("服务端处理请求\n"),v("ol",[v("li",[_._v("接受到TCP请求")]),_._v(" "),v("li",[_._v("服务端应用处理请求")]),_._v(" "),v("li",[_._v("返回HTTP响应头、响应体")]),_._v(" "),v("li",[_._v("断开TCP连接")])])])]),_._v(" "),v("h2",{attrs:{id:"浏览器输入地址后的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器输入地址后的流程"}},[_._v("#")]),_._v(" 浏览器输入地址后的流程")]),_._v(" "),v("ol",[v("li",[_._v("用户输入URL地址")]),_._v(" "),v("li",[_._v("发起请求 "),v("a",{attrs:{href:"https://www.notion.so/df8094c2e4a4459e9cec32ed76f1035b?pvs=21",target:"_blank",rel:"noopener noreferrer"}},[_._v("[[浏览器请求过程]]"),v("OutboundLink")],1)]),_._v(" "),v("li",[_._v("准备渲染流程\n"),v("ol",[v("li",[_._v("如果从一个标签页打开了另一个新标签，如果这个新标签和原页面是same-site的，那么chrome不会重新开一个渲染进程，而是复用父页面的进程。否则，则新开一个进程来进行渲染。")]),_._v(" "),v("li",[_._v('如果链接带有rel="noopener noreferrer"属性，则即使是same-site的页面，也不会复用父页面进程。使用 '),v("code",[_._v("noopener noreferrer")]),_._v(" 就是告诉浏览器 新打开的子页面不需要访问父页面的任何信息。这是一个安全策略，防止钓鱼网站。")])])]),_._v(" "),v("li",[_._v("提交文档 "),v("code",[_._v("CommitNavigation")]),_._v(" "),v("ol",[v("li",[_._v("浏览器接收到响应头后向渲染进程发送提交文档的消息")]),_._v(" "),v("li",[_._v("渲染进程和网络进程开启通道")]),_._v(" "),v("li",[_._v("网络数据传输后，渲染进程通知浏览器“确认提交”")]),_._v(" "),v("li",[_._v("浏览器更新页面、URL地址等状态")])])]),_._v(" "),v("li",[_._v("渲染")])])])}),[],!1,null,null,null);v.default=e.exports}}]);