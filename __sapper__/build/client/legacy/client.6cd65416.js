function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var r=n((function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var w={};w[a]=function(){return this};var x=Object.getPrototypeOf,$=x&&x(x(R([])));$&&$!==r&&o.call($,a)&&(w=$);var _=b.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(i,a,u,c){var f=l(e[i],e,a);if("throw"!==f.type){var s=f.arg,h=s.value;return h&&"object"===t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(f.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=_.constructor=b,b.constructor=g,g.displayName=f(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),f(_,c,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?s(e):n}function h(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function y(){}function m(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function x(t){return"function"==typeof t}function $(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n,r){return t[1]&&r?m(n.ctx.slice(),t[1](r(e))):n.ctx}function E(e,n,r,o,i,a,u){var c=function(e,n,r,o){if(e[2]&&o){var i=e[2](o(r));if(void 0===n.dirty)return i;if("object"===t(i)){for(var a=[],u=Math.max(n.dirty.length,i.length),c=0;c<u;c+=1)a[c]=n.dirty[c]|i[c];return a}return n.dirty|i}return n.dirty}(n,o,i,a);if(c){var f=_(n,r,o,u);e.p(f,c)}}function S(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function P(){return R(" ")}function A(){return R("")}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t){return Array.from(t.childNodes)}function q(t,e,n,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,u=[];a<i.attributes.length;){var c=i.attributes[a++];n[c.name]||u.push(c.name)}for(var f=0;f<u.length;f++)i.removeAttribute(u[f]);return t.splice(o,1)[0]}}return r?O(e):j(e)}function C(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return R(e)}function I(t){return C(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}var G,F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;p(this,t),this.a=e,this.e=this.n=null}return d(t,[{key:"m",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=j(e.nodeName),this.t=e,this.h(t)),this.i(n)}},{key:"h",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(t){for(var e=0;e<this.n.length;e+=1)k(this.t,this.n[e],t)}},{key:"p",value:function(t){this.d(),this.h(t),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(L)}}]),t}();function B(t){G=t}function J(){if(!G)throw new Error("Function called outside component initialization");return G}var M=[],H=[],K=[],Y=[],V=Promise.resolve(),z=!1;function W(t){K.push(t)}var X=!1,Q=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<M.length;t+=1){var e=M[t];B(e),tt(e.$$)}for(B(null),M.length=0;H.length;)H.pop()();for(var n=0;n<K.length;n+=1){var r=K[n];Q.has(r)||(Q.add(r),r())}K.length=0}while(M.length);for(;Y.length;)Y.pop()();z=!1,X=!1,Q.clear()}}function tt(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}var et,nt=new Set;function rt(){et={r:0,c:[],p:et}}function ot(){et.r||w(et.c),et=et.p}function it(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function at(t,e,n,r){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((function(){nt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ut(t,e){for(var n={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],u=e[i];if(u){for(var c in a)c in u||(r[c]=1);for(var f in u)o[f]||(n[f]=u[f],o[f]=1);t[i]=u}else for(var s in a)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ct(e){return"object"===t(e)&&null!==e?e:{}}function ft(t){t&&t.c()}function st(t,e){t&&t.l(e)}function lt(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,u=r.after_update;o&&o.m(e,n),W((function(){var e=i.map(g).filter(x);a?a.push.apply(a,h(e)):w(e),t.$$.on_mount=[]})),u.forEach(W)}function ht(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(M.push(t),z||(z=!0,V.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,n,r,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=G;B(t);var c=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:a,skip_bound:!1},s=!1;if(f.ctx=n?n(t,c,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),s&&pt(t,e)),n})):[],f.update(),s=!0,w(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){var l=T(e.target);f.fragment&&f.fragment.l(l),l.forEach(L)}else f.fragment&&f.fragment.c();e.intro&&it(t.$$.fragment),lt(t,e.target,e.anchor),Z()}B(u)}var dt=function(){function t(){p(this,t)}return d(t,[{key:"$destroy",value:function(){ht(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}(),yt=[];function mt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=[];function o(n){if($(t,n)&&(t=n,e)){for(var o=!yt.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),yt.push(a,t)}if(o){for(var u=0;u<yt.length;u+=2)yt[u][0](yt[u+1]);yt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,u=[i,a];return r.push(u),1===r.length&&(e=n(o)||y),i(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var gt={};function bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function wt(t){var e,n=t[1].default,r=function(t,e,n,r){if(t){var o=_(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c:function(){r&&r.c()},l:function(t){r&&r.l(t)},m:function(t,n){r&&r.m(t,n),e=!0},p:function(t,e){var o=a(e,1)[0];r&&r.p&&1&o&&E(r,n,t,t[0],o,null,null)},i:function(t){e||(it(r,t),e=!0)},o:function(t){at(r,t),e=!1},d:function(t){r&&r.d(t)}}}function xt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,i=e.$$scope;return t.$$set=function(t){"$$scope"in t&&n(0,i=t.$$scope)},[i,o]}var $t=function(t){f(n,dt);var e=bt(n);function n(t){var r;return p(this,n),vt(s(r=e.call(this)),t,xt,wt,$,{}),r}return n}();function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Et(t){var e,n,r=t[1].stack+"";return{c:function(){e=j("pre"),n=R(r)},l:function(t){var o=T(e=q(t,"PRE",{}));n=C(o,r),o.forEach(L)},m:function(t,r){k(t,e,r),S(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d:function(t){t&&L(e)}}}function St(t){var e,n,r,o,i,u,c,f,s,l=t[1].message+"";document.title=e=t[0];var h=t[2]&&t[1].stack&&Et(t);return{c:function(){n=P(),r=j("h1"),o=R(t[0]),i=P(),u=j("p"),c=R(l),f=P(),h&&h.c(),s=A(),this.h()},l:function(e){D('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),n=I(e);var a=T(r=q(e,"H1",{class:!0}));o=C(a,t[0]),a.forEach(L),i=I(e);var p=T(u=q(e,"P",{class:!0}));c=C(p,l),p.forEach(L),f=I(e),h&&h.l(e),s=A(),this.h()},h:function(){N(r,"class","svelte-jpshsi"),N(u,"class","svelte-jpshsi")},m:function(t,e){k(t,n,e),k(t,r,e),S(r,o),k(t,i,e),k(t,u,e),S(u,c),k(t,f,e),h&&h.m(t,e),k(t,s,e)},p:function(t,n){var r=a(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&U(o,t[0]),2&r&&l!==(l=t[1].message+"")&&U(c,l),t[2]&&t[1].stack?h?h.p(t,r):((h=Et(t)).c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i:y,o:y,d:function(t){t&&L(n),t&&L(r),t&&L(i),t&&L(u),t&&L(f),h&&h.d(t),t&&L(s)}}}function kt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Lt=function(t){f(n,dt);var e=_t(n);function n(t){var r;return p(this,n),vt(s(r=e.call(this)),t,kt,St,$,{status:0,error:1}),r}return n}();function jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Ot(t){var e,n,r,o=[t[4].props],i=t[4].component;function a(t){for(var e={},n=0;n<o.length;n+=1)e=m(e,o[n]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&ft(e.$$.fragment),n=A()},l:function(t){e&&st(e.$$.fragment,t),n=A()},m:function(t,o){e&&lt(e,t,o),k(t,n,o),r=!0},p:function(t,r){var u=16&r?ut(o,[ct(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){rt();var c=e;at(c.$$.fragment,1,0,(function(){ht(c,1)})),ot()}i?(ft((e=new i(a())).$$.fragment),it(e.$$.fragment,1),lt(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i:function(t){r||(e&&it(e.$$.fragment,t),r=!0)},o:function(t){e&&at(e.$$.fragment,t),r=!1},d:function(t){t&&L(n),e&&ht(e,t)}}}function Rt(t){var e,n;return e=new Lt({props:{error:t[0],status:t[1]}}),{c:function(){ft(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){lt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(it(e.$$.fragment,t),n=!0)},o:function(t){at(e.$$.fragment,t),n=!1},d:function(t){ht(e,t)}}}function Pt(t){var e,n,r,o,i=[Rt,Ot],a=[];function u(t,e){return t[0]?0:1}return e=u(t),n=a[e]=i[e](t),{c:function(){n.c(),r=A()},l:function(t){n.l(t),r=A()},m:function(t,n){a[e].m(t,n),k(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?a[e].p(t,o):(rt(),at(a[c],1,1,(function(){a[c]=null})),ot(),(n=a[e])||(n=a[e]=i[e](t)).c(),it(n,1),n.m(r.parentNode,r))},i:function(t){o||(it(n),o=!0)},o:function(t){at(n),o=!1},d:function(t){a[e].d(t),t&&L(r)}}}function At(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Pt]},$$scope:{ctx:t}},i=0;i<r.length;i+=1)o=m(o,r[i]);return e=new $t({props:o}),{c:function(){ft(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){lt(e,t,r),n=!0},p:function(t,n){var o=a(n,1)[0],i=12&o?ut(r,[4&o&&{segment:t[2][0]},8&o&&ct(t[3].props)]):{};147&o&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i:function(t){n||(it(e.$$.fragment,t),n=!0)},o:function(t){at(e.$$.fragment,t),n=!1},d:function(t){ht(e,t)}}}function Nt(t,e,n){var r,o,i,a=e.stores,u=e.error,c=e.status,f=e.segments,s=e.level0,l=e.level1,h=void 0===l?null:l,p=e.notify;return r=p,J().$$.after_update.push(r),o=gt,i=a,J().$$.context.set(o,i),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,u=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,f=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,h=t.level1),"notify"in t&&n(6,p=t.notify)},[u,c,f,s,h,a,p]}var Tt=function(t){f(n,dt);var e=jt(n);function n(t){var r;return p(this,n),vt(s(r=e.call(this)),t,Nt,At,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),qt=[/^\/content\/highlights\/?$/,/^\/content\/about\/?$/],Ct=[{js:function(){return Promise.all([import("./index.6f83beeb.js"),__inject_styles(["client-6ebd3441.css","index-c9a617d8.css"])]).then((function(t){return t[0]}))}}],It=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ut(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function Dt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Gt,Ft=1;var Bt,Jt,Mt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Ht={};function Kt(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=a(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],i=r[2],u=void 0===i?"":i;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(u):n[o]=u})),n}function Yt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Bt))return null;var e=t.pathname.slice(Bt.length);if(""===e&&(e="/"),!qt.some((function(t){return t.test(e)})))for(var n=0;n<It.length;n+=1){var r=It[n],o=r.pattern.exec(e);if(o){var i=Kt(t.search),a=r.parts[r.parts.length-1],u=a.params?a.params(o):{},c={host:location.host,path:e,query:i,params:u};return{href:t.href,route:r,match:o,page:c}}}}function Vt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Dt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=Yt(i);if(a)Xt(a,null,n.hasAttribute("sapper:noscroll"),i.hash),e.preventDefault(),Mt.pushState({id:Gt},"",i.href)}}}else location.hash||e.preventDefault()}}}function zt(){return{x:pageXOffset,y:pageYOffset}}function Wt(t){if(Ht[Gt]=zt(),t.state){var e=Yt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else(function(t){Gt=t})(Ft=Ft+1),Mt.replaceState({id:Gt},"",location.href)}function Xt(t,e,n,o){return Ut(this,void 0,void 0,r.mark((function i(){var a,u,c,f;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(a=!!e)?Gt=e:(u=zt(),Ht[Gt]=u,Gt=e=++Ft,Ht[Gt]=n?u:{x:0,y:0}),r.next=4,Jt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(c=Ht[e],o&&(f=document.getElementById(o.slice(1)))&&(c={x:0,y:f.getBoundingClientRect().top+scrollY}),Ht[Gt]=c,a||f?scrollTo(c.x,c.y):scrollTo(0,0));case 6:case"end":return r.stop()}}),i)})))}function Qt(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var Zt,te=null;function ee(t){return te&&te.href===t.href?te.promise:_e(t)}function ne(t){var e=Dt(t.target);e&&"prefetch"===e.rel&&function(t){var e=Yt(new URL(t,Qt(document)));if(e)te&&t===te.href||(te={href:t,promise:_e(e)}),te.promise}(e.href)}function re(t){clearTimeout(Zt),Zt=setTimeout((function(){ne(t)}),20)}function oe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Yt(new URL(t,Qt(document)));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),Xt(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ie,ae,ue,ce,fe,se,le,he,pe,ve="undefined"!=typeof __SAPPER__&&__SAPPER__,de=!1,ye=[],me="{}",ge={page:function(t){var e=mt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:mt(null),session:mt(ve&&ve.session)};function be(t,e){var n=t.error;return Object.assign({error:n},e)}function we(t){return Ut(this,void 0,void 0,r.mark((function e(){var n,o,i,a,u,c;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie&&ge.preloading.set(!0),n=ee(t),o=ae={},e.next=5,n;case 5:if(i=e.sent,a=i.redirect,o===ae){e.next=9;break}return e.abrupt("return");case 9:if(!a){e.next=14;break}return e.next=12,oe(a.location,{replaceState:!0});case 12:e.next=17;break;case 14:return u=i.props,c=i.branch,e.next=17,xe(c,u,be(u,t.page));case 17:case"end":return e.stop()}}),e)})))}function xe(t,e,n){return Ut(this,void 0,void 0,r.mark((function o(){return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ge.page.set(n),ge.preloading.set(!1),!ie){r.next=6;break}ie.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ge.page.subscribe},preloading:{subscribe:ge.preloading.subscribe},session:ge.session},r.next=9,ue;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ge.page.notify,ie=new Tt({target:se,props:e,hydrate:!0});case 13:ye=t,me=JSON.stringify(n.query),de=!0,fe=!1;case 17:case"end":return r.stop()}}),o)})))}function $e(t,e,n,r){if(r!==me)return!0;var o=ye[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function _e(t){return Ut(this,void 0,void 0,r.mark((function e(){var n,o,i,a,u,c,f,s,l,h,p,v,d=this;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,o=t.page,i=o.path.split("/").filter(Boolean),a=null,u={error:null,status:200,segments:[i[0]]},c={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},ue||(f=function(){return{}},ue=ve.preloaded[0]||f.call(c,{host:o.host,path:o.path,query:o.query,params:{}},ce)),l=1,e.prev=7,h=JSON.stringify(o.query),p=n.pattern.exec(o.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Ut(d,void 0,void 0,r.mark((function a(){var f,s,d,y,m,g;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(f=i[n],$e(n,f,p,h)&&(v=!0),u.segments[l]=i[n+1],e){r.next=5;break}return r.abrupt("return",{segment:f});case 5:if(s=l++,fe||v||!ye[n]||ye[n].part!==e.i){r.next=8;break}return r.abrupt("return",ye[n]);case 8:return v=!1,r.next=11,Ct[e.i].js();case 11:if(d=r.sent,y=d.default,m=d.preload,!de&&ve.preloaded[n+1]){r.next=25;break}if(!m){r.next=21;break}return r.next=18,m.call(c,{host:o.host,path:o.path,query:o.query,params:e.params?e.params(t.match):{}},ce);case 18:r.t0=r.sent,r.next=22;break;case 21:r.t0={};case 22:g=r.t0,r.next=26;break;case 25:g=ve.preloaded[n+1];case 26:return r.abrupt("return",u["level".concat(s)]={component:y,props:g,segment:f,match:p,part:e.i});case 27:case"end":return r.stop()}}),a)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),u.error=e.t0,u.status=500,s=[];case 21:return e.abrupt("return",{redirect:a,props:u,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}ge.session.subscribe((function(t){return Ut(void 0,void 0,void 0,r.mark((function e(){var n,o,i,a,u,c;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce=t,de){e.next=3;break}return e.abrupt("return");case 3:return fe=!0,n=Yt(new URL(location.href)),o=ae={},e.next=8,_e(n);case 8:if(i=e.sent,a=i.redirect,u=i.props,c=i.branch,o===ae){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,oe(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,xe(c,u,be(u,n.page));case 21:case"end":return e.stop()}}),e)})))})),le={target:document.querySelector("#sapper")},he=le.target,se=he,pe=ve.baseUrl,Bt=pe,Jt=we,"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Mt.scrollRestoration="auto"})),addEventListener("load",(function(){Mt.scrollRestoration="manual"})),addEventListener("click",Vt),addEventListener("popstate",Wt),addEventListener("touchstart",ne),addEventListener("mousemove",re),ve.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=ve.session,i=ve.preloaded,a=ve.status,u=ve.error;ue||(ue=i&&i[0]);var c={error:u,status:a,session:o,level0:{props:ue},level1:{props:{status:a,error:u},component:Lt},segments:i},f=Kt(r);xe([],c,{host:e,path:n,query:f,params:{},error:u})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Mt.replaceState({id:Ft},"",n);var r=Yt(new URL(location.href));if(r)return Xt(r,Ft,!0,e)}));export{lt as A,it as B,at as C,ht as D,F as H,dt as S,t as _,e as a,f as b,n as c,u as d,l as e,p as f,s as g,j as h,vt as i,P as j,O as k,q as l,T as m,C as n,L as o,I as p,N as q,k as r,$ as s,R as t,S as u,y as v,d as w,ft as x,D as y,st as z};

import __inject_styles from './inject_styles.fe622066.js';