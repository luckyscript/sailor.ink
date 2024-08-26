(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{397:function(v,_,t){"use strict";t.r(_);var p=t(8),n=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("最近在做的一些云原生的项目，会存在一些跨集群访问的场景。我们通常认为，一个K8S内部的service调用是安全的，但是这种对集群外提供服务的场景，就得做很多安全上的预案了。最常见的就是提供一套接口签名的方案，服务提供者给调用方事先提供一个AK作为调用方的身份标志，再提供一个SK作为密钥。将AK、SK以及调用参数用同一套签名算法进行计算，作为签名进行验证。")]),v._v(" "),_("p",[v._v("但是这套签名的机制，随便一个人都能挑出一堆问题：")]),v._v(" "),_("ol",[_("li",[v._v("如果调用方是前端，那么这套签名算法、AK、SK即使再怎么混淆，那么仍然是能被破解的。")]),v._v(" "),_("li",[v._v("即使调用方是服务端，我们无法接触到调用方的源码，那么我们依然可以通过中间人的攻击手段，来获取到AK、签名以及参数。如果SK也是通过网络传输，那么也同样可以抓到。")])]),v._v(" "),_("p",[v._v("但我苦思冥想，我感觉找不到更好的机制还能比以上的逻辑更天衣无缝。我虽然不太同意以上的两套观点，但是我也无法反驳，因为他们说的问题的的确确是存在的。即使是淘宝的MTOP，前端签名的逻辑稍微一点有经验的人就可以在10分钟之内破解。")]),v._v(" "),_("p",[v._v("但是网络安全的本质目的是什么？")]),v._v(" "),_("p",[v._v("我觉得觉得意义的安全是不存在的，安全的目的就是为了提高别人干坏事的成本。")]),v._v(" "),_("p",[v._v("就好比家里安装的锁，其实在开锁师傅手下大概几分钟就能破解，这样的开锁师傅在每个城市都是大把。之前看过一个笑话，买锁的时候不能买太安全的，太安全的到时候开锁的人都打不开，反而把自己给困死。")]),v._v(" "),_("p",[v._v("另一个角度来想，很多黑客都需要借助社会工程学进行攻击，而社会工程学本身已经超出了网络安全的范畴，更多的是借助人性以及心理学。因此即使再天衣无缝的系统，都有可能被渗透。就好比小偷欺骗了你，让你以为他是修下水道的，然后你开了门，他进来顺走了你的东西。这和门锁的安全本质上没什么关联。")]),v._v(" "),_("p",[v._v("但是，我们也不需要绝对意义上的安全，这没必要。就好比，我们自己不会偷自己的东西，也不会做空自己的公司是一个道理。")]),v._v(" "),_("p",[v._v("拿比特币来举例，只要控制了全球比特币链上50%以上的算力，我们就可以去修改这些交易信息。但是，当我们已经有了50%以上的算力，我篡改交易信息的行为一旦暴露，比特币的价格必定雪崩，这对于拥有如此大算力的主体来说是百害而无一益的。中本聪正是利用了人性上的这一点来保障了比特币的基本。")])])}),[],!1,null,null,null);_.default=n.exports}}]);