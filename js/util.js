"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},e=Object.prototype,u=e.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},t="function"==typeof Symbol?Symbol:{},r=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",o=t.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o,i,a,c,t=t&&t.prototype instanceof h?t:h,t=Object.create(t.prototype),r=new P(r||[]);return s(t,"_invoke",{value:(o=e,i=n,a=r,c="suspendedStart",function(e,t){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===e)throw t;return x()}for(a.method=e,a.arg=t;;){var n=a.delegate;if(n){n=function e(t,n){var r=n.method,o=t.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;r=d(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,l;o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}(n,a);if(n){if(n===l)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";n=d(o,i,a);if("normal"===n.type){if(c=a.done?"completed":"suspendedYield",n.arg===l)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(c="completed",a.method="throw",a.arg=n.arg)}})}),t}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}a.wrap=c;var l={};function h(){}function f(){}function p(){}var t={},g=(i(t,r,function(){return this}),Object.getPrototypeOf),g=g&&g(g(G([]))),m=(g&&g!==e&&u.call(g,r)&&(t=g),p.prototype=h.prototype=Object.create(t));function v(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function y(a,c){var t;s(this,"_invoke",{value:function(n,r){function e(){return new c(function(e,t){!function t(e,n,r,o){var i,e=d(a[e],a,n);if("throw"!==e.type)return(n=(i=e.arg).value)&&"object"==_typeof(n)&&u.call(n,"__await")?c.resolve(n.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):c.resolve(n).then(function(e){i.value=e,r(i)},function(e){return t("throw",e,r,o)});o(e.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}})}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function G(t){if(t){var n,e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return n=-1,(e=function e(){for(;++n<t.length;)if(u.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:x}}function x(){return{value:void 0,done:!0}}return s(m,"constructor",{value:f.prototype=p,configurable:!0}),s(p,"constructor",{value:f,configurable:!0}),f.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,o,"GeneratorFunction")),e.prototype=Object.create(m),e},a.awrap=function(e){return{__await:e}},v(y.prototype),i(y.prototype,n,function(){return this}),a.AsyncIterator=y,a.async=function(e,t,n,r,o){void 0===o&&(o=Promise);var i=new y(c(e,t,n,r),o);return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},v(m),i(m,o,"Generator"),i(m,r,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,n=Object(e),r=[];for(t in n)r.push(t);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=G,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return i.type="throw",i.arg=n,r.next=e,t&&(r.method="next",r.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n,r,o=this.tryEntries[t];if(o.tryLoc===e)return"throw"===(n=o.completion).type&&(r=n.arg,S(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:G(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},a}function asyncGeneratorStep(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(c){return function(){var e=this,a=arguments;return new Promise(function(t,n){var r=c.apply(e,a);function o(e){asyncGeneratorStep(r,t,n,o,i,"next",e)}function i(e){asyncGeneratorStep(r,t,n,o,i,"throw",e)}o(void 0)})}}var isPC=function(){var e=navigator.userAgent;return/(windows|macintosh|linux)/i.test(e)},delayForWaifu=(document.addEventListener("contextmenu",function(e){return e.preventDefault()}),document.onkeydown=function(e){return 123!=e.keyCode&&!(e.ctrlKey&&e.shiftKey&&73==e.keyCode||e.ctrlKey&&e.shiftKey&&74==e.keyCode||e.ctrlKey&&e.shiftKey&&67==e.keyCode||e.ctrlKey&&67==e.keyCode||e.ctrlKey&&85==e.keyCode)&&void 0},15e3),loadJS=function(){return new Promise(function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="/live2d-widget/autoload.js",n.onload=e,n.onerror=function(){document.head.removeChild(n)},document.head.appendChild(n)})},initLoadJS=function(){loadJS().then(function(){console.log("\n         ██████╗ ██████╗ ████████╗    ██╗    ██╗ █████╗ ██╗███████╗██╗   ██╗\n        ██╔════╝ ██╔══██╗╚══██╔══╝    ██║    ██║██╔══██╗██║██╔════╝██║   ██║\n        ██║  ███╗██████╔╝   ██║       ██║ █╗ ██║███████║██║█████╗  ██║   ██║\n        ██║   ██║██╔═══╝    ██║       ██║███╗██║██╔══██║██║██╔══╝  ██║   ██║\n        ╚██████╔╝██║        ██║       ╚███╔███╔╝██║  ██║██║██║     ╚██████╔╝\n         ╚═════╝ ╚═╝        ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚═╝      ╚═════╝ \n      ")}).catch(function(e){return console.error(e)})},delayForCSS=(_asyncToGenerator(_regeneratorRuntime().mark(function e(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:isPC()&&setTimeout(function(e){return initLoadJS(e)},delayForWaifu);case 1:case"end":return e.stop()}},e)}))(),window.localStorage.removeItem("modelId"),window.localStorage.setItem("modelId",Math.random()<.5?2:3),5e3),loadCSS=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function e(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href="/css/cursor.css?version="+Date.now(),n.onload=e,n.onerror=function(){document.head.removeChild(n)},document.head.appendChild(n)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),initLoadCSS=function(){return loadCSS().catch(function(e){return console.error(e)})},urls=["https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame1.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame2.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame3.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame4.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame5.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame6.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame7.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame8.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame9.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame10.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame11.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame12.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame13.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame14.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame15.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame16.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame17.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame18.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame19.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃frame20.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select1.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select2.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select3.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select4.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select5.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select6.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select7.png","https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/胡桃select8.png"],preloadImage=function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function e(n){var r;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Image,e.next=4,new Promise(function(e,t){r.onload=e,r.onerror=t,r.src=n});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}(),createAPlayer=(_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(isPC())return t=urls.map(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,preloadImage(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()),e.prev=2,e.next=5,Promise.all(t);e.next=11;break;case 5:setTimeout(initLoadCSS,delayForCSS),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}))(),function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function e(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(n,r){document.addEventListener("DOMContentLoaded",function(){var e=document.createElement("div");e.id="aplayer",document.body.appendChild(e);try{var t=new APlayer({container:document.getElementById("aplayer"),fixed:!0,audio:[{name:"紅蓮と劦",artist:"無名",url:"https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/Legend Of Primal Flames - Elegy of Ashes.mp3",cover:"https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/红色.jpeg"}]});n(t)}catch(e){r(e)}})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}());_asyncToGenerator(_regeneratorRuntime().mark(function e(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createAPlayer();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}},e,null,[[0,5]])}))();