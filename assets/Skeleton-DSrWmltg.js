import{r as P,j as N}from"./index-CluaWAVn.js";import{h as F,i as k,E as X,j as q,g as D,e as U,s as z,m as J,u as W,c as K,f as L,k as B}from"./DefaultPropsProvider-CGS6N8ps.js";var x={exports:{}},n={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function H(){if(M)return n;M=1;var e=typeof Symbol=="function"&&Symbol.for,o=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,u=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,g=e?Symbol.for("react.async_mode"):60111,y=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,S=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,l=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,$=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function c(t){if(typeof t=="object"&&t!==null){var f=t.$$typeof;switch(f){case o:switch(t=t.type,t){case g:case y:case a:case s:case u:case m:return t;default:switch(t=t&&t.$$typeof,t){case p:case h:case l:case d:case i:return t;default:return f}}case r:return f}}}function R(t){return c(t)===y}return n.AsyncMode=g,n.ConcurrentMode=y,n.ContextConsumer=p,n.ContextProvider=i,n.Element=o,n.ForwardRef=h,n.Fragment=a,n.Lazy=l,n.Memo=d,n.Portal=r,n.Profiler=s,n.StrictMode=u,n.Suspense=m,n.isAsyncMode=function(t){return R(t)||c(t)===g},n.isConcurrentMode=R,n.isContextConsumer=function(t){return c(t)===p},n.isContextProvider=function(t){return c(t)===i},n.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===o},n.isForwardRef=function(t){return c(t)===h},n.isFragment=function(t){return c(t)===a},n.isLazy=function(t){return c(t)===l},n.isMemo=function(t){return c(t)===d},n.isPortal=function(t){return c(t)===r},n.isProfiler=function(t){return c(t)===s},n.isStrictMode=function(t){return c(t)===u},n.isSuspense=function(t){return c(t)===m},n.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===a||t===y||t===s||t===u||t===m||t===S||typeof t=="object"&&t!==null&&(t.$$typeof===l||t.$$typeof===d||t.$$typeof===i||t.$$typeof===p||t.$$typeof===h||t.$$typeof===$||t.$$typeof===w||t.$$typeof===b||t.$$typeof===v)},n.typeOf=c,n}var A;function V(){return A||(A=1,x.exports=H()),x.exports}var C,j;function Y(){if(j)return C;j=1;var e=V(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=a,s[e.Memo]=u;function i(l){return e.isMemo(l)?u:s[l.$$typeof]||o}var p=Object.defineProperty,g=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,S=Object.prototype;function d(l,v,$){if(typeof v!="string"){if(S){var w=m(v);w&&w!==S&&d(l,w,$)}var b=g(v);y&&(b=b.concat(y(v)));for(var c=i(l),R=i(v),t=0;t<b.length;++t){var f=b[t];if(!r[f]&&!($&&$[f])&&!(R&&R[f])&&!(c&&c[f])){var I=h(v,f);try{p(l,f,I)}catch{}}}}return l}return C=d,C}Y();var G=function(o,r){var a=arguments;if(r==null||!k.call(r,"css"))return P.createElement.apply(void 0,a);var u=a.length,s=new Array(u);s[0]=X,s[1]=q(o,r);for(var i=2;i<u;i++)s[i]=a[i];return P.createElement.apply(null,s)};(function(e){var o;o||(o=e.JSX||(e.JSX={}))})(G);function _(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return F(o)}function E(){var e=_.apply(void 0,arguments),o="animation-"+e.name;return{name:o,styles:"@keyframes "+o+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Q(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Z(e){return parseFloat(e)}function tt(e){return U("MuiSkeleton",e)}D("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const et=e=>{const{classes:o,variant:r,animation:a,hasChildren:u,width:s,height:i}=e;return L({root:["root",r,a,u&&"withChildren",u&&!s&&"fitContent",u&&!i&&"heightAuto"]},tt,o)},O=E`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,T=E`
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
      `:null,ot=typeof T!="string"?_`
        &::after {
          animation: ${T} 2s linear 0.5s infinite;
        }
      `:null,nt=z("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],r.animation!==!1&&o[r.animation],r.hasChildren&&o.withChildren,r.hasChildren&&!r.width&&o.fitContent,r.hasChildren&&!r.height&&o.heightAuto]}})(J(({theme:e})=>{const o=Q(e.shape.borderRadius)||"px",r=Z(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:B(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${o}/${Math.round(r/.6*10)/10}${o}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:rt||{animation:`${O} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:ot||{"&::after":{animation:`${T} 2s linear 0.5s infinite`}}}]}})),ut=P.forwardRef(function(o,r){const a=W({props:o,name:"MuiSkeleton"}),{animation:u="pulse",className:s,component:i="span",height:p,style:g,variant:y="text",width:h,...m}=a,S={...a,animation:u,component:i,variant:y,hasChildren:!!m.children},d=et(S);return N.jsx(nt,{as:i,ref:r,className:K(d.root,s),ownerState:S,...m,style:{width:h,height:p,...g}})});export{ut as S};
