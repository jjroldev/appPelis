const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DetalleBannerMovie-CTQ97HXC.js","assets/index-CPcu-ZRb.js","assets/index-3lViHeIx.css","assets/useWindowWidth-E9xqTgb3.js","assets/useWindowWidth-qggDfi2W.css","assets/DetalleBannerSeries-D78XWVMo.js"])))=>i.map(i=>d[i]);
import{r,_ as a,j as e}from"./index-CPcu-ZRb.js";import{T as t}from"./Banner-Co78omOj.js";import{S as n}from"./Skeleton-DQzs5bMT.js";import"./useWindowWidth-E9xqTgb3.js";import"./useFavorites-PRuB4mzV.js";import"./BarMenu-7RaKZyau.js";import"./DefaultPropsProvider-CDXgDoSf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const s=r.lazy(()=>a(()=>import("./DetalleBannerMovie-CTQ97HXC.js"),__vite__mapDeps([0,1,2,3,4]))),l=r.lazy(()=>a(()=>import("./DetalleBannerSeries-D78XWVMo.js"),__vite__mapDeps([5,1,2,3,4]))),u=r.memo(({item:o})=>{const i="release_date"in o;return e.jsx(r.Suspense,{fallback:e.jsxs(e.Fragment,{children:[e.jsx(t,{component:"div",variant:"body1",maxWidth:"40%",children:e.jsx(n,{sx:{bgcolor:"grey.600"}})}),e.jsx(t,{component:"div",variant:"caption",maxWidth:"40%",children:e.jsx(n,{sx:{bgcolor:"grey.600"}})})]}),children:i?e.jsx(e.Fragment,{children:e.jsx(s,{movie:o})}):e.jsx(l,{serie:o})})});export{u as default};
