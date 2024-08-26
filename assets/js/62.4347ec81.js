(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{402:function(v,_,t){"use strict";t.r(_);var l=t(8),s=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"dns的记录类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns的记录类型"}},[v._v("#")]),v._v(" DNS的记录类型")]),v._v(" "),_("ol",[_("li",[v._v("A 映射到 IPv4")]),v._v(" "),_("li",[v._v("AAAA 映射到 IPv6")]),v._v(" "),_("li",[v._v("CNAME 指向另一个域名")]),v._v(" "),_("li",[v._v("MX 邮件服务器记录")]),v._v(" "),_("li",[v._v("NS 指示DNS权威服务器")]),v._v(" "),_("li",[v._v("TXT 存储文本一般用于验证")])]),v._v(" "),_("p",[v._v("NS记录我们一般域名是没有配置的，但是实际上都是有的，例如我将我的域名DNS从阿里云迁移到Cloudflare上，我理解就是改变了这个域名的NS记录。另外，如果我们的子域名需要有自己的DNS解析服务器的话，那么也可以通过修改NS来实现。")]),v._v(" "),_("p",[v._v("aliyun dns上面有显性URL和隐性URL，其中，显性URL是302跳转，而隐性URL则感觉是反向代理了，所以隐性URL是需要备案的。")]),v._v(" "),_("p",[v._v("cloudflare是没有这两种解析方式的。")]),v._v(" "),_("h2",{attrs:{id:"反向代理和正向代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反向代理和正向代理"}},[v._v("#")]),v._v(" 反向代理和正向代理")]),v._v(" "),_("p",[v._v("感觉经常把反向代理和正向代理给搞混淆。")]),v._v(" "),_("p",[v._v("从理论上来说：")]),v._v(" "),_("p",[v._v("反向代理，从A请求C，但是不想让别人知道他要请求C，所以在B上面做一个反向代理，A请求B，把真实的服务端给隐藏了。")]),v._v(" "),_("p",[v._v("正向代理，从C请求A，但是不想让别人知道是C请求的，所以要在B上面搞一个正向代理，C请求B，把真实的客户端给隐藏了。")]),v._v(" "),_("p",[v._v("但是，对于B来说，都是把流量进行转发，这两种有啥不一样呢？")]),v._v(" "),_("p",[v._v("假设有多个A的服务，那么C请求A的时候需要指定需要请求哪个A，这是正向代理的特征。C是知道自己要请求谁的，很典型的例子就是我们通过代理去请求Google或者Twitter，那么我们是带着明确的目的去请求的。")]),v._v(" "),_("p",[v._v("而对于反向代理来说，A可能压根不知道自己最终是请求的C，只有B知道。")])])}),[],!1,null,null,null);_.default=s.exports}}]);