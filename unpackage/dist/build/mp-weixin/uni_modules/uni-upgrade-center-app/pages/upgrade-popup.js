(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-upgrade-center-app/pages/upgrade-popup"],{1384:function(e,t,n){},3925:function(e,t,n){"use strict";(function(e){n("d30f"),n("a9ff");i(n("66fd"));var t=i(n("b60b"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"75ea":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"92f9":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,o){try{var c=e[a](o),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(i,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function c(e){a(o,i,r,c,u,"next",e)}function u(e){a(o,i,r,c,u,"throw",e)}c(void 0)}))}}var c,u="UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH",s="iOS",l=null;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";e=String(e).split("."),t=String(t).split(".");for(var n=Math.min(e.length,t.length),i=0,r=0;r<n;r++){var a=Number(e[r]),o=Number(t[r]);if(a>o){i=1;break}if(a<o){i=-1;break}}if(0===i&&e.length!==t.length)for(var c=e.length>t.length,u=c?e:t,s=n;s<u.length;s++){var l=Number(u[s]);if(l>0){i=c?1:-1;break}}return i}var f={data:function(){return{installForBeforeFilePath:"",installed:!1,installing:!1,downloadSuccess:!1,downloading:!1,downLoadPercent:0,downloadedSize:0,packageFileSize:0,tempFilePath:"",title:"更新日志",contents:"",is_mandatory:!1,subTitle:"发现新版本",downLoadBtnTextiOS:"立即跳转更新",downLoadBtnText:"立即下载更新",downLoadingText:"安装包下载中，请稍后"}},onLoad:function(t){var n=t.local_storage_key;if(!n)return console.error("local_storage_key为空，请检查后重试"),void e.navigateBack();var i=e.getStorageSync(n);if(!i)return console.error("安装包信息为空，请检查后重试"),void e.navigateBack();var r=["version","url","type"];for(var a in i)if(-1!==r.indexOf(a)&&!i[a])return console.error("参数 ".concat(a," 必填，请检查后重试")),void e.navigateBack();Object.assign(this,i),this.checkLocalStoragePackage()},onBackPress:function(){if(this.is_mandatory)return!0;l&&l.abort()},onHide:function(){c=null},computed:{isWGT:function(){return"wgt"===this.type},isiOS:function(){return!this.isWGT&&this.platform.includes(s)},isAppStore:function(){return this.isiOS||!this.isiOS&&!this.isWGT&&-1===this.url.indexOf(".apk")}},methods:{checkLocalStoragePackage:function(){var t=e.getStorageSync(u);if(t){var n=t.version,i=t.savedFilePath,r=t.installed;r||0!==d(n,this.version)?this.deleteSavedFile(i):(this.downloadSuccess=!0,this.installForBeforeFilePath=i,this.tempFilePath=i)}},closeUpdate:function(){var t=this;return o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.downloading){n.next=5;break}if(!t.is_mandatory){n.next=3;break}return n.abrupt("return",e.showToast({title:"下载中，请稍后……",icon:"none",duration:500}));case 3:return e.showModal({title:"是否取消下载？",cancelText:"否",confirmText:"是",success:function(t){t.confirm&&(l&&l.abort(),e.navigateBack())}}),n.abrupt("return");case 5:if(!t.downloadSuccess||!t.tempFilePath){n.next=10;break}return n.next=8,t.saveFile(t.tempFilePath,t.version);case 8:return e.navigateBack(),n.abrupt("return");case 10:e.navigateBack();case 11:case"end":return n.stop()}}),n)})))()},updateApp:function(){var e=this;this.checkStoreScheme().catch((function(){e.downloadPackage()}))},checkStoreScheme:function(){var e=(this.store_list||[]).filter((function(e){return e.enable}));return e&&e.length?(e.sort((function(e,t){return t.priority-e.priority})).map((function(e){return e.scheme})).reduce((function(e,t,n){return c=(e||(e=Promise.reject())).catch((function(){return new Promise((function(e,n){plus.runtime.openURL(t,(function(e){n(e)}))}))})),c}),c),c):Promise.reject()},downloadPackage:function(){var t=this;this.downloading=!0,l=e.downloadFile({url:this.url,success:function(e){200==e.statusCode&&(t.downloadSuccess=!0,t.tempFilePath=e.tempFilePath,t.is_mandatory&&t.installPackage())},complete:function(){t.downloading=!1,t.downLoadPercent=0,t.downloadedSize=0,t.packageFileSize=0,l=null}}),l.onProgressUpdate((function(e){t.downLoadPercent=e.progress,t.downloadedSize=(e.totalBytesWritten/Math.pow(1024,2)).toFixed(2),t.packageFileSize=(e.totalBytesExpectedToWrite/Math.pow(1024,2)).toFixed(2)}))},installPackage:function(){},restart:function(){this.installed=!1},saveFile:function(t,n){return new Promise((function(i,r){e.saveFile({tempFilePath:t,success:function(t){var i=t.savedFilePath;e.setStorageSync(u,{version:n,savedFilePath:i})},complete:function(){i()}})}))},deleteSavedFile:function(t){return e.removeStorageSync(u),e.removeSavedFile({filePath:t})},jumpToAppStore:function(){plus.runtime.openURL(this.url)}}};t.default=f}).call(this,n("543d")["default"])},b60b:function(e,t,n){"use strict";n.r(t);var i=n("75ea"),r=n("d335");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("b8f6");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=u.exports},b8f6:function(e,t,n){"use strict";var i=n("1384"),r=n.n(i);r.a},d335:function(e,t,n){"use strict";n.r(t);var i=n("92f9"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a}},[["3925","common/runtime","common/vendor"]]]);