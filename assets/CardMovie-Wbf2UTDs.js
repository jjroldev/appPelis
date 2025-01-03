import{R as l,r as h,c as C,j as a,f as N,h as _,e as E}from"./index-BXlzWtmz.js";import{V as S}from"./Banner-BSbX8Ozt.js";import{u as $,S as I}from"./useVisibility-93C1PPf2.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=l.createContext&&l.createContext(j),R=["attr","size","title"];function z(t,e){if(t==null)return{};var r=M(t,e),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function M(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?v(Object(r),!0).forEach(function(n){V(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function V(t,e,r){return e=B(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function B(t){var e=D(t,"string");return typeof e=="symbol"?e:e+""}function D(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function O(t){return t&&t.map((e,r)=>l.createElement(e.tag,d({key:r},e.attr),O(e.child)))}function y(t){return e=>l.createElement(G,f({attr:d({},t.attr)},e),O(t.child))}function G(t){var e=r=>{var{attr:n,size:i,title:o}=t,c=z(t,R),u=i||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:s,style:d(d({color:t.color||r.color},r.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),t.children)};return b!==void 0?l.createElement(b.Consumer,null,r=>e(r)):e(j)}function A(t){return y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"},child:[]}]})(t)}function F(t){return y({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"},child:[]}]})(t)}const k=({movie:t,isLarge:e,language:r})=>{var p,m,g;const n=(g=(m=(p=t==null?void 0:t.images)==null?void 0:p.logos)==null?void 0:m[0])==null?void 0:g.file_path,[i,o]=h.useState(!1),c=h.useRef(null),u=C(),s=()=>o(!0),x=()=>o(!1),P=()=>{u("/info",{state:{movie:t,language:r}})},w=$(c);return a.jsx("div",{ref:c,className:`contenedor-poster ${e?"large":""}`,children:w?a.jsxs("div",{className:`cardContainerImage ${e?"backdrop":"poster"}`,children:[a.jsx("img",{src:`${e?`${N}${t.backdrop_path}`:`${_}${t.poster_path}`}`,alt:t.title,className:"main-image"}),a.jsx("div",{className:"hover-details",children:a.jsxs("div",{className:"play-button",children:[a.jsx("button",{onClick:s,children:a.jsx(A,{size:23})}),a.jsx(S,{open:i,onClose:x,movie:t,language:r}),a.jsx("button",{onClick:P,children:a.jsx(F,{size:16})})]})}),e&&n&&a.jsx("div",{className:"contenedorLogo",children:a.jsx("img",{src:`${E}${n}`,alt:`${t.title} Logo`,className:"logoBanner"})})]}):a.jsx("div",{className:`cardContainerImage ${e?"backdrop":"poster"}`,children:a.jsx(I,{width:"100%",height:"100%",variant:"rectangular",sx:{bgcolor:"grey.900"}})})})};export{k as C};
