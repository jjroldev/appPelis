import{r as x,j as N}from"./index-CW8X7TER.js";import{s as F,h as X,E as k,c as q,g as D,a as U,b as z,m as V,u as J,d as W,e as K,f as L}from"./Banner-DOBYK4ZJ.js";var C={exports:{}},o={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E;function B(){if(E)return o;E=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,g=e?Symbol.for("react.async_mode"):60111,y=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,S=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,l=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,$=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function c(t){if(typeof t=="object"&&t!==null){var f=t.$$typeof;switch(f){case n:switch(t=t.type,t){case g:case y:case a:case i:case s:case m:return t;default:switch(t=t&&t.$$typeof,t){case p:case h:case l:case d:case u:return t;default:return f}}case r:return f}}}function R(t){return c(t)===y}return o.AsyncMode=g,o.ConcurrentMode=y,o.ContextConsumer=p,o.ContextProvider=u,o.Element=n,o.ForwardRef=h,o.Fragment=a,o.Lazy=l,o.Memo=d,o.Portal=r,o.Profiler=i,o.StrictMode=s,o.Suspense=m,o.isAsyncMode=function(t){return R(t)||c(t)===g},o.isConcurrentMode=R,o.isContextConsumer=function(t){return c(t)===p},o.isContextProvider=function(t){return c(t)===u},o.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===n},o.isForwardRef=function(t){return c(t)===h},o.isFragment=function(t){return c(t)===a},o.isLazy=function(t){return c(t)===l},o.isMemo=function(t){return c(t)===d},o.isPortal=function(t){return c(t)===r},o.isProfiler=function(t){return c(t)===i},o.isStrictMode=function(t){return c(t)===s},o.isSuspense=function(t){return c(t)===m},o.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===a||t===y||t===i||t===s||t===m||t===S||typeof t=="object"&&t!==null&&(t.$$typeof===l||t.$$typeof===d||t.$$typeof===u||t.$$typeof===p||t.$$typeof===h||t.$$typeof===$||t.$$typeof===w||t.$$typeof===b||t.$$typeof===v)},o.typeOf=c,o}var M;function H(){return M||(M=1,C.exports=B()),C.exports}var P,A;function Y(){if(A)return P;A=1;var e=H(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=a,i[e.Memo]=s;function u(l){return e.isMemo(l)?s:i[l.$$typeof]||n}var p=Object.defineProperty,g=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,S=Object.prototype;function d(l,v,$){if(typeof v!="string"){if(S){var w=m(v);w&&w!==S&&d(l,w,$)}var b=g(v);y&&(b=b.concat(y(v)));for(var c=u(l),R=u(v),t=0;t<b.length;++t){var f=b[t];if(!r[f]&&!($&&$[f])&&!(R&&R[f])&&!(c&&c[f])){var I=h(v,f);try{p(l,f,I)}catch{}}}}return l}return P=d,P}Y();var G=function(n,r){var a=arguments;if(r==null||!X.call(r,"css"))return x.createElement.apply(void 0,a);var s=a.length,i=new Array(s);i[0]=k,i[1]=q(n,r);for(var u=2;u<s;u++)i[u]=a[u];return x.createElement.apply(null,i)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(G);function _(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return F(n)}function j(){var e=_.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Q(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Z(e){return parseFloat(e)}function tt(e){return D("MuiSkeleton",e)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const et=e=>{const{classes:n,variant:r,animation:a,hasChildren:s,width:i,height:u}=e;return K({root:["root",r,a,s&&"withChildren",s&&!i&&"fitContent",s&&!u&&"heightAuto"]},tt,n)},O=j`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,T=j`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,rt=typeof O!="string"?_`
        animation: ${O} 2s ease-in-out 0.5s infinite;
      `:null,nt=typeof T!="string"?_`
        &::after {
          animation: ${T} 2s linear 0.5s infinite;
        }
      `:null,ot=z("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[r.variant],r.animation!==!1&&n[r.animation],r.hasChildren&&n.withChildren,r.hasChildren&&!r.width&&n.fitContent,r.hasChildren&&!r.height&&n.heightAuto]}})(V(({theme:e})=>{const n=Q(e.shape.borderRadius)||"px",r=Z(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:L(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:rt||{animation:`${O} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:nt||{"&::after":{animation:`${T} 2s linear 0.5s infinite`}}}]}})),ut=x.forwardRef(function(n,r){const a=J({props:n,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:u="span",height:p,style:g,variant:y="text",width:h,...m}=a,S={...a,animation:s,component:u,variant:y,hasChildren:!!m.children},d=et(S);return N.jsx(ot,{as:u,ref:r,className:W(d.root,i),ownerState:S,...m,style:{width:h,height:p,...g}})});function ct(e,n=1e-5){const[r,a]=x.useState(!1);return x.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(u=>{u.isIntersecting&&a(!0)})},{threshold:n});return e.current&&s.observe(e.current),()=>{e.current&&s.unobserve(e.current)}},[e,n]),r}export{ut as S,ct as u};
