function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,i){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=c(e,n,r,i);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?h(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function _(t){return b(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}class E{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}let S;function N(t){S=t}function R(){if(!S)throw new Error("Function called outside component initialization");return S}const A=[],P=[],j=[],L=[],k=Promise.resolve();let O=!1;function q(t){j.push(t)}let T=!1;const U=new Set;function C(){if(!T){T=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];N(e),B(e.$$)}for(N(null),A.length=0;P.length;)P.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];U.has(e)||(U.add(e),e())}j.length=0}while(A.length);for(;L.length;)L.pop()();O=!1,T=!1,U.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const I=new Set;let J;function H(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function M(t,e){t&&t.i&&(I.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push((()=>{I.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function D(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,r),q((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(q)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(A.push(t),O||(O=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,i,c,a,l=[-1]){const u=S;N(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=s?s(e,p,((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&X(e,t)),n})):[],h.update(),d=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&M(e.$$.fragment),G(e,n.target,n.anchor),C()}N(u)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const nt={};function rt(t){let e;const n=t[1].default,r=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&a(r,n,t,t[0],e,null,null)},i(t){e||(M(r,t),e=!0)},o(t){V(r,t),e=!1},d(t){r&&r.d(t)}}}function ot(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class st extends Z{constructor(t){super(),Q(this,t,ot,rt,i,{})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&f(e)}}}function ct(e){let n,r,o,s,i,c,a,h,E,S=e[1].message+"";document.title=n=e[0];let N=e[2]&&e[1].stack&&it(e);return{c(){r=m(),o=p("h1"),s=d(e[0]),i=m(),c=p("p"),a=d(S),h=m(),N&&N.c(),E=g(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=v(t,"H1",{class:!0});var n=y(o);s=b(n,e[0]),n.forEach(f),i=_(t),c=v(t,"P",{class:!0});var l=y(c);a=b(l,S),l.forEach(f),h=_(t),N&&N.l(t),E=g(),this.h()},h(){$(o,"class","svelte-jpshsi"),$(c,"class","svelte-jpshsi")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,i,e),u(t,c,e),l(c,a),u(t,h,e),N&&N.m(t,e),u(t,E,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&S!==(S=t[1].message+"")&&x(a,S),t[2]&&t[1].stack?N?N.p(t,e):(N=it(t),N.c(),N.m(E.parentNode,E)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(i),t&&f(c),t&&f(h),N&&N.d(t),t&&f(E)}}}function at(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class lt extends Z{constructor(t){super(),Q(this,t,at,ct,i,{status:0,error:1})}}function ut(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&z(n.$$.fragment),r=g()},l(t){n&&F(n.$$.fragment,t),r=g()},m(t,e){n&&G(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?D(s,[Y(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){H();const t=n;V(t.$$.fragment,1,0,(()=>{W(t,1)})),K()}i?(n=new i(c()),z(n.$$.fragment),M(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&W(n,t)}}}function ft(t){let e,n;return e=new lt({props:{error:t[0],status:t[1]}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function pt(t){let e,n,r,o;const s=[ft,ut],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){i[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(H(),V(i[a],1,1,(()=>{i[a]=null})),K(),n=i[e],n||(n=i[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){i[e].d(t),t&&f(r)}}}function ht(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[pt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new st({props:s}),{c(){z(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=12&e?D(o,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function dt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=nt,p=r,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class mt extends Z{constructor(t){super(),Q(this,t,dt,ht,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const gt=[/^\/content\/highlights\/?$/,/^\/content\/about\/?$/],$t=[{js:()=>Promise.all([import("./index.350464a8.js"),__inject_styles(["client-6ebd3441.css","index-25ee78ed.css"])]).then((function(t){return t[0]}))}],yt=[{pattern:/^\/$/,parts:[{i:0}]}];
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
function vt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function bt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let _t,xt=1;const wt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Et={};let St,Nt;function Rt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function At(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St))return null;let e=t.pathname.slice(St.length);if(""===e&&(e="/"),!gt.some((t=>t.test(e))))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=Rt(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Pt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=bt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=At(o);if(s){kt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),wt.pushState({id:_t},"",o.href)}}function jt(){return{x:pageXOffset,y:pageYOffset}}function Lt(t){if(Et[_t]=jt(),t.state){const e=At(new URL(location.href));e?kt(e,t.state.id):location.href=location.href}else xt=xt+1,function(t){_t=t}(xt),wt.replaceState({id:_t},"",location.href)}function kt(t,e,n,r){return vt(this,void 0,void 0,(function*(){const o=!!e;if(o)_t=e;else{const t=jt();Et[_t]=t,_t=e=++xt,Et[_t]=n?t:{x:0,y:0}}if(yield Nt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Et[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Et[_t]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ot(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let qt,Tt=null;function Ut(t){const e=bt(t.target);e&&"prefetch"===e.rel&&function(t){const e=At(new URL(t,Ot(document)));if(e)Tt&&t===Tt.href||(Tt={href:t,promise:Zt(e)}),Tt.promise}(e.href)}function Ct(t){clearTimeout(qt),qt=setTimeout((()=>{Ut(t)}),20)}function Bt(t,e={noscroll:!1,replaceState:!1}){const n=At(new URL(t,Ot(document)));return n?(wt[e.replaceState?"replaceState":"pushState"]({id:_t},"",t),kt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let Jt,Ht,Kt,Mt=!1,Vt=[],Dt="{}";const Yt={page:function(t){const e=et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:et(null),session:et(It&&It.session)};let zt,Ft,Gt;function Wt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Xt(t){return vt(this,void 0,void 0,(function*(){Jt&&Yt.preloading.set(!0);const e=function(t){return Tt&&Tt.href===t.href?Tt.promise:Zt(t)}(t),n=Ht={},r=yield e,{redirect:o}=r;if(n===Ht)if(o)yield Bt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Qt(n,e,Wt(e,t.page))}}))}function Qt(t,e,n){return vt(this,void 0,void 0,(function*(){Yt.page.set(n),Yt.preloading.set(!1),Jt?Jt.$set(e):(e.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},e.level0={props:yield Kt},e.notify=Yt.page.notify,Jt=new mt({target:Gt,props:e,hydrate:!0})),Vt=t,Dt=JSON.stringify(n.query),Mt=!0,Ft=!1}))}function Zt(t){return vt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Kt){const t=()=>({});Kt=It.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},zt)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>vt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Dt)return!0;const o=Vt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const p=a++;if(!Ft&&!u&&Vt[c]&&Vt[c].part===e.i)return Vt[c];u=!1;const{default:h,preload:d}=yield $t[e.i].js();let m;return m=Mt||!It.preloaded[c+1]?d?yield d.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},zt):{}:It.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var te,ee,ne;Yt.session.subscribe((t=>vt(void 0,void 0,void 0,(function*(){if(zt=t,!Mt)return;Ft=!0;const e=At(new URL(location.href)),n=Ht={},{redirect:r,props:o,branch:s}=yield Zt(e);n===Ht&&(r?yield Bt(r.location,{replaceState:!0}):yield Qt(s,o,Wt(o,e.page)))})))),te={target:document.querySelector("#sapper")},ee=te.target,Gt=ee,ne=It.baseUrl,St=ne,Nt=Xt,"scrollRestoration"in wt&&(wt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{wt.scrollRestoration="auto"})),addEventListener("load",(()=>{wt.scrollRestoration="manual"})),addEventListener("click",Pt),addEventListener("popstate",Lt),addEventListener("touchstart",Ut),addEventListener("mousemove",Ct),It.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=It;Kt||(Kt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Kt},level1:{props:{status:s,error:i},component:lt},segments:o},a=Rt(n);Qt([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;wt.replaceState({id:xt},"",e);const n=At(new URL(location.href));if(n)return kt(n,xt,!0,t)}));export{E as H,Z as S,m as a,h as b,v as c,y as d,p as e,b as f,f as g,_ as h,Q as i,$ as j,u as k,l,z as m,t as n,g as o,F as p,w as q,G as r,i as s,d as t,M as u,V as v,W as w};

import __inject_styles from './inject_styles.5607aec6.js';