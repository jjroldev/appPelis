import{j as d,r as E}from"./index-C9hd7MHe.js";import{C as j}from"./index-okAQPRJG.js";import{S as N,C as A}from"./CardMovie-BwEH1Gff.js";import{u as F}from"./useFecthMovieDetails-DS7K4_rk.js";import"./Banner-DQE2Bpo1.js";const p=(e,t)=>t.some(n=>e instanceof n);let S,v;function O(){return S||(S=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V(){return v||(v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w=new WeakMap,b=new WeakMap,h=new WeakMap;function W(e){const t=new Promise((n,s)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",r)},i=()=>{n(f(e.result)),o()},r=()=>{s(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",r)});return h.set(t,e),t}function L(e){if(w.has(e))return;const t=new Promise((n,s)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",r),e.removeEventListener("abort",r)},i=()=>{n(),o()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",r),e.addEventListener("abort",r)});w.set(e,t)}let I={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return w.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function k(e){I=e(I)}function _(e){return V().includes(e)?function(...t){return e.apply(x(this),t),f(this.request)}:function(...t){return f(e.apply(x(this),t))}}function K(e){return typeof e=="function"?_(e):(e instanceof IDBTransaction&&L(e),p(e,O())?new Proxy(e,I):e)}function f(e){if(e instanceof IDBRequest)return W(e);if(b.has(e))return b.get(e);const t=K(e);return t!==e&&(b.set(e,t),h.set(t,e)),t}const x=e=>h.get(e);function R(e,t,{blocked:n,upgrade:s,blocking:o,terminated:i}={}){const r=indexedDB.open(e,t),u=f(r);return s&&r.addEventListener("upgradeneeded",a=>{s(f(r.result),a.oldVersion,a.newVersion,f(r.transaction),a)}),n&&r.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),u.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const $=["get","getKey","getAll","getAllKeys","count"],H=["put","add","delete","clear"],D=new Map;function C(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(D.get(t))return D.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=H.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||$.includes(n)))return;const i=async function(r,...u){const a=this.transaction(r,o?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(u.shift())),(await Promise.all([c[n](...u),o&&a.done]))[0]};return D.set(t,i),i}k(e=>({...e,get:(t,n,s)=>C(t,n)||e.get(t,n,s),has:(t,n)=>!!C(t,n)||e.has(t,n)}));const z=["continue","continuePrimaryKey","advance"],P={},M=new WeakMap,T=new WeakMap,G={get(e,t){if(!z.includes(t))return e[t];let n=P[t];return n||(n=P[t]=function(...s){M.set(this,T.get(this)[t](...s))}),n}};async function*J(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,G);for(T.set(n,t),h.set(n,x(t));t;)yield n,t=await(M.get(n)||t.continue()),M.delete(n)}function g(e,t){return t===Symbol.asyncIterator&&p(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&p(e,[IDBIndex,IDBObjectStore])}k(e=>({...e,get(t,n,s){return g(t,n)?J:e.get(t,n,s)},has(t,n){return g(t,n)||e.has(t,n)}}));function Q({isLarge:e,numMovies:t}){const n={desktop:{breakpoint:{max:3e3,min:1024},items:e?6:8,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:768},items:5,slidesToSlide:5},mobile:{breakpoint:{max:767,min:464},items:4,slidesToSlide:4}},s=o=>Array.from({length:o}).map((i,r)=>d.jsx(N,{isLarge:e},r));return d.jsx(d.Fragment,{children:d.jsx("div",{className:"carousel",children:d.jsx(j,{swipeable:!1,draggable:!1,showDots:!1,responsive:n,ssr:!0,infinite:!0,autoPlay:!1,className:"carousel-react",children:s(t)})})})}const X="MoviesDB-Home",m="movies-home";async function Y(){return R(X,1,{upgrade(e){e.objectStoreNames.contains(m)||e.createObjectStore(m,{keyPath:"key"})}})}function ne({URL:e,title:t,isLarge:n,language:s}){const[o,i]=E.useState([]),{movies:r}=F(e,2,s,["videos","images","credits"]);E.useEffect(()=>{(async()=>{const l=await Y(),y=`${e}_${s}`,B=await l.get(m,y);B?(i(B.data),console.log("cargando datos de idb")):r.length>0&&(console.log("cargando datos de api"),await l.put(m,{key:y,data:r}),i(r))})()},[e,s,r]);const u={desktop:{breakpoint:{max:3e3,min:1024},items:n?6:8,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:768},items:5,slidesToSlide:5},mobile:{breakpoint:{max:767,min:464},items:4,slidesToSlide:4}},a=c=>c.map(l=>(n?l.backdrop_path:l.poster_path)?d.jsx(A,{movie:l,isLarge:n,language:s},l.id):null);return d.jsxs("div",{className:"carousel",children:[d.jsx("h2",{className:"tituloCarousel",children:t}),o.length>0?d.jsx(j,{swipeable:!1,draggable:!1,showDots:!1,responsive:u,ssr:!0,infinite:!0,autoPlay:!1,className:"carousel-react",children:a(o)}):d.jsx(Q,{numMovies:n?6:8,isLarge:n||!1})]})}export{ne as default};
