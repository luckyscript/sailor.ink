(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{390:function(s,e,a){"use strict";a.r(e);var t=a(8),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"思路来源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路来源"}},[s._v("#")]),s._v(" 思路来源")]),s._v(" "),e("p",[s._v("之前在"),e("a",{attrs:{href:"https://www.web-tinker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("次碳酸钴"),e("OutboundLink")],1),s._v("的博客闲逛的时候，发现前辈开发了独特的XEditor，觉得不错，但是貌似没有开源，于是不能拿来主义了，就自己开发了一下。")]),s._v(" "),e("p",[s._v("言归正传，评论区有彩蛋，可以使用<x标签>来代替传统的"),e("code",[s._v("<img>")]),s._v("、"),e("code",[s._v("<code>")]),s._v("、"),e("code",[s._v("<span>")]),s._v("、"),e("code",[s._v("<a>")]),s._v("这四种常用标签。这个标签不是浏览器的标准的标签，服务器内部把他解析成以上几种标签。最后存入数据库的是标准标签。")]),s._v(" "),e("h2",{attrs:{id:"使用例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用例子"}},[s._v("#")]),s._v(" 使用例子")]),s._v(" "),e("p",[s._v("下面是几个使用的例子：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<x href="https://www.luckyscript.me">test</x>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个标签会被解析成")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<a href="https://www.luckyscript.me" target="_blank" rel="nofollow">test</a>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("效果：\n"),e("a",{attrs:{href:"https://www.luckyscript.me",target:"_blank",rel:"nofollow"}},[s._v("test")])]),s._v(" "),e("p",[s._v("由于安全性问题，这种场景下，标签只会对"),e("code",[s._v("http(s)")]),s._v("开头的有效链接做解析成"),e("code",[s._v("<a>")]),s._v("。如果不是这种情况，会毫不留情的解析成"),e("code",[s._v("<span>")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<x src="https://www.luckyscript.me/public/upload/article_nblog.png">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个标签会被解析成"),e("code",[s._v("img")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<img src="https://www.luckyscript.me/public/upload/article_nblog.png" />\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("效果：\n"),e("img",{attrs:{src:"https://www.luckyscript.me/public/upload/article_nblog.png"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<x code="javascript">var</x>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这种场景会被解析成：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<code class="language-javascript">var</code>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("效果：\n"),e("code",{staticClass:"language-javascript"},[s._v("var")])]),s._v(" "),e("p",[s._v("其余场景，如果是合法标签，则会转为"),e("code",[s._v("<span>")]),s._v("，否则则会进行实体化，防止xss的发生。")]),s._v(" "),e("h2",{attrs:{id:"代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),e("p",[s._v("parse部分，思路参考了"),e("code",[s._v("leizongmin")]),s._v("的"),e("code",[s._v("xss")]),s._v("包。实现起来也没多大难度，就不一一分析了。")]),s._v(" "),e("p",[s._v("https://github.com/luckyscript/x-filter")])])}),[],!1,null,null,null);e.default=r.exports}}]);