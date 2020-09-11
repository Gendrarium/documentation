(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{224:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mathhelpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers"}},[t._v("#")]),t._v(" MathHelpers")]),t._v(" "),s("p",[t._v("AmountMath is about doing math operations on "),s("code",[t._v("amount")]),t._v("s, which are values labeled with a brand.\nAmountMath uses MathHelpers to do its value arithmatic operations. It then brands the results,\ncreating a new "),s("code",[t._v("amount")]),t._v(".")]),t._v(" "),s("p",[t._v("There are three different types of MathHelpers, each of which implements all the methods shown\non this page. You only have to specify the MathHelper type when creating an "),s("code",[t._v("issuer")]),t._v("; it then knows\nwhich type's operations to use on itself.")]),t._v(" "),s("p",[t._v("There are three types of MathHelpers, each of which implements all of the same\nset of API methods (i.e. MathHelpers are polymorphic):")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("nat")]),t._v(": Used with fungible assests.")]),t._v(" "),s("li",[s("code",[t._v("strSet")]),t._v(": Used with non-fungible assets.")]),t._v(" "),s("li",[s("code",[t._v("set")]),t._v(": Used with sets of objects, primarily non-fungible assets.")])]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("makeIssuerKit(allegedName, mathHelpersName)")]),t._v(" to specify which type of MathHelpers\nyour contract uses. The second parameter, "),s("code",[t._v("mathHelpersName")]),t._v(" is optional and defaults\nto "),s("code",[t._v("nat")]),t._v(" if not given. For example")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos`); // Defaults to '")]),t._v("nat'\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strSet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos, '")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("For more details on the MathHelper types, see the "),s("a",{attrs:{href:"https://agoric.com/documentation/ertp/api/math-helpers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERTP Guide's MathHelpers section"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("MathHelpers versus AmountMath")]),t._v(" "),s("p",[t._v("MathHelper operations should not be used on their own. Instead, you\nshould first make a local version of AmountMath as shown below.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brand "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mathHelperName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMathHelpersName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'nat'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" localAmountMath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeAmountMath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mathHelpersName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-doassertkind-allegedvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doassertkind-allegedvalue"}},[t._v("#")]),t._v(" mathHelpers.doAssertKind(allegedValue)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("allegedValuet")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("Check the kind of this value and throw an error if it is not the expected kind.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath.make():")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("allegedValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAssertKind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allegedValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" allegedValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-dogetempty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-dogetempty"}},[t._v("#")]),t._v(" mathHelpers.doGetEmpty()")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{Value}")])])]),t._v(" "),s("p",[t._v("Get the value for an empty value (often 0 or an empty array).")]),t._v(" "),s("p",[t._v("Mathematically, this is a representation of the identity element for the addition operation.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doGetEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-doisempty-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doisempty-value"}},[t._v("#")]),t._v(" mathHelpers.doIsEmpty(value)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("value")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Boolean}")])])]),t._v(" "),s("p",[t._v("Is this an empty value?")]),t._v(" "),s("p",[t._v("Mathematically, this determines if the value is the identity element for the addition operation.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\nmathHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIsEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-doisgte-left-right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doisgte-left-right"}},[t._v("#")]),t._v(" mathHelpers.doIsGTE(left, right)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("left")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[s("code",[t._v("right")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Boolean}")])])]),t._v(" "),s("p",[t._v("Is the left greater than or equal to the right?")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\nhelpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIsGTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-doisequal-left-right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doisequal-left-right"}},[t._v("#")]),t._v(" mathHelpers.doIsEqual(left, right)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("left")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[s("code",[t._v("right")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Boolean}")])])]),t._v(" "),s("p",[t._v("Does left equal right?")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\nhelpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIsEqual")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-doadd-left-right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doadd-left-right"}},[t._v("#")]),t._v(" mathHelpers.doAdd(left, right)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("left")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[s("code",[t._v("right")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Value}")])])]),t._v(" "),s("p",[t._v("Return the left combined with the right.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" combinedValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mathhelpers-dosubtract-left-right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-dosubtract-left-right"}},[t._v("#")]),t._v(" mathHelpers.doSubtract(left, right)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("left")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[s("code",[t._v("right")]),t._v(" "),s("code",[t._v("{Value}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Value}")])])]),t._v(" "),s("p",[t._v("Return what remains after removing the right from the left. If the result is negative (i.e. something in the right was not in the left) we throw an error.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remainingValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSubtract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);