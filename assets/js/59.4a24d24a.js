(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{399:function(v,_,n){"use strict";n.r(_);var e=n(8),p=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("如何证明你就是你？")]),v._v(" "),_("p",[v._v("在现实生活中，由于每个人的外貌、习惯都有一定的特征，我们在生活中只要认识了某个人，在短期内都是可以通过这些外在特征来判断出你就是你。")]),v._v(" "),_("p",[v._v("而在互联网中，由于每个人不会面对面，我们都在网线和屏幕的面前，所以如果对方询问你，你如何证明你就是你自己，你该如何证明呢？")]),v._v(" "),_("p",[v._v("这个问题让我想到了比特币的作者中本聪，自从中本聪最后一次发声，至今都没有再出现过。不少出来号称自己是中本聪的人最终都无法证明自己就是中本聪，原因很简单，比特币有一个创始区块，中本聪拥有比特币的第一个账户，这个账户是公开的，任何人都可以往这个地址转钱。但是私钥只在中本聪手上，所以如果中本聪要证明自己是中本聪，那么很简单的一个方法就是他可以先宣称自己往某个地址转账一笔，然后去操作这笔交易，就可以实现对自己身份的证明。")]),v._v(" "),_("p",[v._v("这种基于非对称加密的手段是否能用于非区块链场景的身份证明呢？")]),v._v(" "),_("p",[v._v("假设我现在在互联网宣称我是“RainOnPiano”,并且公开出我的公钥以及“RainOnPiano”使用私钥进行加密后的字符串"),_("code",[v._v("X")]),v._v("。这个X自然可以使用公钥解密出来。那么如何使用这个公钥和私钥来证明我的身份呢？")]),v._v(" "),_("p",[v._v("假设屏幕前面的你想要确认我是谁，你可以发一个字符串给我，让我使用我的私钥进行加密，然后你可以使用我之前提供的公钥解密，看是否能验证通过。但其实这个中间，存在一个可能被社会工程学攻击的场景：假设你是一个黑客，你通过上述方法拿到了我私钥关于A这个字符串的加密结果，此时如果另一个人也拿着A来问你加密后的结果，那么你就自然可以验证通过。所以，针对这个场景我们就需要对A这个字符的复杂度有一定要求，我的一个想法是可以用对方的ID + 随机码结合的一个challenge来进行加密。")]),v._v(" "),_("p",[v._v("这个和区块链场景的一个差别是，区块链转账是有一个明确的时间属性的，也就是说，我声称我要转账的时间一定要比我转账的时间要早才能证明我对这个账户是有控制权的。但我们的场景因为密文中无法知道我们加密的时间，所以无法使用这一特性来完成验证。")]),v._v(" "),_("p",[v._v("我又想到了双端加密的场景，A和B在互联网上相互“握手”。A使用自己的username + 随机字符R，使用B的公钥加密并发送给B，B解密后，使用自己的username + 随机字符R并使用A的公钥加密,发送给A。对于B来说，如果A能解密，那么对方就是A，对于A来说，如果B能解密并拿到R，那么对方就是B。")]),v._v(" "),_("p",[v._v("所以，其实私钥的拥有权就可以证明身份，我如果想证明自己的身份。其实只需要每次在最后加上我使用私钥签名的字符串是不是就可以？例如我想要证明这篇文章是我发的，我就将日期的时间戳加上文章的标题签名即可。")]),v._v(" "),_("p",[v._v("最后一点感想，虽然现在passkey验证、区块链这种应用都很多，但是底层仍然是非对称加密这种上世纪70年代的产物，不过也正式其几十年都没有变动，才会使得上层使用非常稳固放心。感谢这些密码学的先驱们。")])])}),[],!1,null,null,null);_.default=p.exports}}]);