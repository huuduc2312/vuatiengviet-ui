(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7193:function(u,o,i){Promise.resolve().then(i.bind(i,5978))},5978:function(u,o,i){"use strict";i.r(o),i.d(o,{default:function(){return Search}});var a=i(7437),l=i(4033),f=i(2265);function c(u,o,i){var a=this,l=(0,f.useRef)(null),s=(0,f.useRef)(0),d=(0,f.useRef)(null),p=(0,f.useRef)([]),m=(0,f.useRef)(),v=(0,f.useRef)(),h=(0,f.useRef)(u),w=(0,f.useRef)(!0);h.current=u;var _="undefined"!=typeof window,x=!o&&0!==o&&_;if("function"!=typeof u)throw TypeError("Expected a function");o=+o||0;var y=!!(i=i||{}).leading,g=!("trailing"in i)||!!i.trailing,R="maxWait"in i,S="debounceOnServer"in i&&!!i.debounceOnServer,k=R?Math.max(+i.maxWait||0,o):null;return(0,f.useEffect)(function(){return w.current=!0,function(){w.current=!1}},[]),(0,f.useMemo)(function(){var r=function(u){var o=p.current,i=m.current;return p.current=m.current=null,s.current=u,v.current=h.current.apply(i,o)},n=function(u,o){x&&cancelAnimationFrame(d.current),d.current=x?requestAnimationFrame(u):setTimeout(u,o)},t=function(u){if(!w.current)return!1;var i=u-l.current;return!l.current||i>=o||i<0||R&&u-s.current>=k},e=function(u){return d.current=null,g&&p.current?r(u):(p.current=m.current=null,v.current)},c=function r(){var u=Date.now();if(t(u))return e(u);if(w.current){var i=o-(u-l.current);n(r,R?Math.min(i,k-(u-s.current)):i)}},A=function(){if(_||S){var u=Date.now(),i=t(u);if(p.current=[].slice.call(arguments),m.current=a,l.current=u,i){if(!d.current&&w.current)return s.current=l.current,n(c,o),y?r(l.current):v.current;if(R)return n(c,o),r(l.current)}return d.current||n(c,o),v.current}};return A.cancel=function(){d.current&&(x?cancelAnimationFrame(d.current):clearTimeout(d.current)),s.current=0,p.current=l.current=m.current=d.current=null},A.isPending=function(){return!!d.current},A.flush=function(){return d.current?e(Date.now()):v.current},A},[y,R,o,k,g,x,_,S])}function Search(u){var o;let{placeholder:i}=u,f=(0,l.useSearchParams)(),s=(0,l.usePathname)(),{replace:d}=(0,l.useRouter)(),p=c(u=>{console.log("Searching... ".concat(u));let o=new URLSearchParams(f);u?o.set("query",u):o.delete("query"),d("".concat(s,"?").concat(o.toString()))},300);return(0,a.jsxs)("div",{className:"flex w-full items-center gap-6 rounded-xl border-[2px] p-3",children:[(0,a.jsx)("input",{className:"block w-full grow px-5 focus:outline-none",placeholder:i,onChange:u=>p(u.target.value),defaultValue:null===(o=f.get("query"))||void 0===o?void 0:o.toString()}),(0,a.jsx)("button",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}},622:function(u,o,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=i(2265),l=Symbol.for("react.element"),f=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function q(u,o,i){var a,p={},m=null,v=null;for(a in void 0!==i&&(m=""+i),void 0!==o.key&&(m=""+o.key),void 0!==o.ref&&(v=o.ref),o)f.call(o,a)&&!d.hasOwnProperty(a)&&(p[a]=o[a]);if(u&&u.defaultProps)for(a in o=u.defaultProps)void 0===p[a]&&(p[a]=o[a]);return{$$typeof:l,type:u,key:m,ref:v,props:p,_owner:s.current}}o.jsx=q,o.jsxs=q},7437:function(u,o,i){"use strict";u.exports=i(622)},4033:function(u,o,i){u.exports=i(94)}},function(u){u.O(0,[971,472,744],function(){return u(u.s=7193)}),_N_E=u.O()}]);