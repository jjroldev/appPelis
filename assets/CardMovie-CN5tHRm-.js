import{R as o,r as u,d as C,j as a,h as N,i as _,f as E}from"./index-CW8X7TER.js";import{u as S,S as $}from"./useVisibility-XgSgO_sf.js";import{V as I}from"./Banner-DOBYK4ZJ.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=o.createContext&&o.createContext(j),R=["attr","size","title"];function z(t,e){if(t==null)return{};var r=M(t,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function M(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},d.apply(this,arguments)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?v(Object(r),!0).forEach(function(n){V(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function V(t,e,r){return e=B(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function B(t){var e=D(t,"string");return typeof e=="symbol"?e:e+""}function D(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function O(t){return t&&t.map((e,r)=>o.createElement(e.tag,p({key:r},e.attr),O(e.child)))}function y(t){return e=>o.createElement(k,d({attr:p({},t.attr)},e),O(t.child))}function k(t){var e=r=>{var{attr:n,size:i,title:s}=t,f=z(t,R),c=i||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),o.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,f,{className:l,style:p(p({color:t.color||r.color},r.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),t.children)};return b!==void 0?o.createElement(b.Consumer,null,r=>e(r)):e(j)}function G(t){return y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"},child:[]}]})(t)}function A(t){return y({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"},child:[]}]})(t)}const W=o.memo(({movie:t,isLarge:e,language:r})=>{var m,h,g;const n=(g=(h=(m=t==null?void 0:t.images)==null?void 0:m.logos)==null?void 0:h[0])==null?void 0:g.file_path,[i,s]=u.useState(!1),f=u.useRef(null),c=C(),l=u.useCallback(()=>s(!0),[]),x=u.useCallback(()=>s(!1),[]),P=u.useCallback(()=>{c("/info",{state:{movie:t,language:r}})},[c,t,r]),w=S(f);return a.jsx("div",{ref:f,className:`contenedor-poster ${e?"large":""}`,children:w?a.jsxs("div",{className:`cardContainerImage ${e?"backdrop":"poster"}`,children:[a.jsx("img",{src:`${e?`${N}${t.backdrop_path}`:`${_}${t.poster_path}`}`,alt:t.title,className:"main-image"}),a.jsx("div",{className:"hover-details",children:a.jsxs("div",{className:"play-button",children:[a.jsx("button",{onClick:l,children:a.jsx(G,{size:23})}),a.jsx(I,{open:i,onClose:x,movie:t,language:r}),a.jsx("button",{onClick:P,children:a.jsx(A,{size:16})})]})}),e&&n&&a.jsx("div",{className:"contenedorLogo",children:a.jsx("img",{src:`${E}${n}`,alt:`${t.title} Logo`,className:"logoBanner"})})]}):a.jsx("div",{className:`cardContainerImage ${e?"backdrop":"poster"}`,children:a.jsx($,{width:"100%",height:"100%",variant:"rectangular",sx:{bgcolor:"grey.900"},animation:"pulse"})})})});export{W as C};