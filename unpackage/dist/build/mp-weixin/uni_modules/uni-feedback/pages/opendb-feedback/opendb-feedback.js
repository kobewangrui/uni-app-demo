(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"],{"0358":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return r}));var r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"c4a6"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"0600"))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,"6897"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"63ce"))}},o=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"72e2":function(n,e,t){"use strict";t.r(e);var r=t("9947"),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},"815b":function(n,e,t){"use strict";(function(n){t("d30f"),t("a9ff");r(t("66fd"));var e=r(t("92f3"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"8fe6":function(n,e,t){},"92f3":function(n,e,t){"use strict";t.r(e);var r=t("0358"),o=t("72e2");for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("ff84");var u,c=t("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=a.exports},9947:function(n,e,t){"use strict";(function(n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("fe37");function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}console.log(o.validator);var a=n.database(),f="opendb-feedback";function s(n){var e={};for(var t in o.validator)n.indexOf(t)>-1&&(e[t]=o.validator[t]);return e}var l={data:function(){var n={content:"",imgs:[],contact:"",mobile:""};return{formData:n,formOptions:{},rules:u({},s(Object.keys(n)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var n=this;r.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){n.submitForm(e)})).catch((function(){r.hideLoading()}))},submitForm:function(n){var e=this;a.collection(f).add(n).then((function(n){r.showToast({icon:"none",title:"提交成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return r.navigateBack()}),500)})).catch((function(n){r.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){r.hideLoading()}))}}};e.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])},ff84:function(n,e,t){"use strict";var r=t("8fe6"),o=t.n(r);o.a}},[["815b","common/runtime","common/vendor"]]]);