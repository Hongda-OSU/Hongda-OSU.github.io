"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _message=_interopRequireDefault(require("./message.js")),_utils=_interopRequireDefault(require("./utils.js"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new x(n||[]);return s(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return L()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=l(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function h(){}function d(){}function p(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(b([]))),m=(y&&y!==t&&u.call(y,n)&&(e=y),p.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(a,c){var e;s(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=l(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function b(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:L}}function L(){return{value:void 0,done:!0}}return s(m,"constructor",{value:d.prototype=p,configurable:!0}),s(p,"constructor",{value:d,configurable:!0}),d.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},a.awrap=function(t){return{__await:t}},v(g.prototype),i(g.prototype,r,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new g(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(m),i(m,o,"Generator"),i(m,n,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=b,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var Model=function(){function n(t){_classCallCheck(this,n);var e=t.apiPath,t=t.cdnPath,r=!1;if("string"==typeof t)r=!0,t.endsWith("/")||(t+="/");else{if("string"!=typeof e)throw"Invalid initWidget argument!";e.endsWith("/")||(e+="/")}this.useCDN=r,this.apiPath=e,this.cdnPath=t}var t,e,o,r;return _createClass(n,[{key:"loadModelList",value:(r=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.cdnPath,"model_list.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:this.modelList=t.sent;case 6:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"loadModel",value:(o=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n){var o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",r),(0,_message.default)(n,4e3,10),!this.useCDN){t.next=11;break}if(this.modelList){t.next=7;break}return t.next=7,this.loadModelList();case 7:o=(0,_utils.default)(this.modelList.models[e]),loadlive2d("live2d","".concat(this.cdnPath,"model/").concat(o,"/index.json")),t.next=13;break;case 11:loadlive2d("live2d","".concat(this.apiPath,"get/?id=").concat(e,"-").concat(r)),console.log("Live2D 模型 ".concat(e,"-").concat(r," 加载完成"));case 13:case"end":return t.stop()}},t,this)})),function(t,e,r){return o.apply(this,arguments)})},{key:"loadRandModel",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,r,n,o=this;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("modelId"),r=localStorage.getItem("modelTexturesId"),!this.useCDN){t.next=10;break}if(this.modelList){t.next=5;break}return t.next=5,this.loadModelList();case 5:n=(0,_utils.default)(this.modelList.models[e]),loadlive2d("live2d","".concat(this.cdnPath,"model/").concat(n,"/index.json")),(0,_message.default)("我的新衣服好看嘛？",4e3,10),t.next=11;break;case 10:fetch("".concat(this.apiPath,"rand_textures/?id=").concat(e,"-").concat(r)).then(function(t){return t.json()}).then(function(t){1!==t.textures.id||1!==r&&0!==r?o.loadModel(e,t.textures.id,"我的新衣服好看嘛？"):(0,_message.default)("我还没有其他衣服呢！",4e3,10)});case 11:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"loadOtherModel",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,r,n=this;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("modelId"),!this.useCDN){t.next=9;break}if(this.modelList){t.next=5;break}return t.next=5,this.loadModelList();case 5:r=++e>=this.modelList.models.length?0:e,this.loadModel(r,0,this.modelList.messages[r]),t.next=10;break;case 9:fetch("".concat(this.apiPath,"switch/?id=").concat(e)).then(function(t){return t.json()}).then(function(t){n.loadModel(t.model.id,0,t.model.message)});case 10:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})}]),n}(),_default=Model;exports.default=_default;