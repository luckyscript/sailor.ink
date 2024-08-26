(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{354:function(e,t,_){"use strict";_.r(t);var n=_(8),v=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("软删除就是我们经常聊的逻辑删除，软删除的本质是使用某种标记的方案，使得数据实际上并没有删除，但是我们在对数据库进行增删改查的时候，这条数据都是被当作删除看待。")]),e._v(" "),t("p",[e._v("为什么要采用软删除？")]),e._v(" "),t("p",[e._v("因为我们的数据可能非常昂贵，如果由于用户不小心操作或者我们的代码逻辑产生bug使得数据丢失，那可能造成的后果非常严重，因此在很多场景上，我们都会采用软删除的手段来避免这个问题。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("常见的ORM，一般也会提供软删除的能力，例如typeorm中，我们可以直接调用softDelete来将一条记录给软删除掉：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("this.userEntity.softDelete(id);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("typeorm中，一般默认采用"),t("code",[e._v("gmt_deleted")]),e._v("这个字段来进行判断，初始值为null，如果删除，那么gmt_deleted就设置为删除的时间。golang的gorm也是类似，采用了一个"),t("code",[e._v("deleted_at")]),e._v("的字段。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("再说到唯一索引，数据库中的唯一索引，是我们保证某个字段唯一性的有效手段。例如我们不希望注册用户的用户名重复，可以加上"),t("code",[e._v("unique key (username)")]),e._v("来进行控制。如果用户在注册的时候，填入了相同的用户名，那么数据库就会返回一个key名重复的报错。")]),e._v(" "),t("p",[e._v("然而，在软删除场景，这一切都变的有意思起来。")]),e._v(" "),t("p",[e._v("假设我们数据库中已经存在username为：xiaoming 的用户，此时我们再注册相同用户名的时候，预期是注册不了的。但是如果我删除了已经存在的这个用户，我们再进行注册，发现仍然还是注册不了。")]),e._v(" "),t("p",[e._v("但是想想，这是对的，因为唯一索引根本不认你什么软删除，硬删除。对于数据库中，这条记录就是存在的。因此注册的时候必然会报错。那么我们怎么办呢？")]),e._v(" "),t("p",[e._v("一种方案是，将username和gmt_deleted设置一个联合索引，初始的时候为xiaoming-null，删除的时候为xiaoming-{deletetime}。然而，此时又陷入了另一个坑，那就是xiaoming-null 这个联合索引不生效，在mysql中，null 和null 既不相等，也不不相等。所以这个唯一索引就没什么作用了。")]),e._v(" "),t("p",[e._v("所以应该怎么办呢？")]),e._v(" "),t("p",[e._v("一种方案，是将gmt_deleted改造为删除的时间戳，初始值设为0。但是这个方案，我们可能需要去改造ORM的代码，成本还是相对有点高的。")]),e._v(" "),t("p",[e._v("另一种方案，我们在执行软删除之前，先把这个唯一索引的字段给修改掉，例如，将xiaoming修改为xiaoming-{timestamp}，但是这个其实也有问题，假设我们的username为varchar(20)的字段，那么加上一个18位的时间戳，几乎肯定都会溢出了。因此在设计数据库的时候，就得把长度做好多余的留存。")]),e._v(" "),t("p",[e._v("以上是最近在做项目的时候，遇到的坑，做个笔记。")])])}),[],!1,null,null,null);t.default=v.exports}}]);