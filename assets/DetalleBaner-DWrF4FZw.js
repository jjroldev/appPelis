const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DetalleBannerMovie-DW5vvDbf.js","assets/index-B1tU7ms9.js","assets/index-BwrpulKG.css","assets/BarMenu-DfqKlPVS.js","assets/Banner-CVXy4Sqm.js","assets/fetchData-DCFA1qTy.js","assets/useFavorites-B1cOxIty.js","assets/Banner-CkJLNVNh.css","assets/DetalleBannerSeries-tF6_DpVv.js"])))=>i.map(i=>d[i]);
import{r,_ as a,j as e}from"./index-B1tU7ms9.js";const t=r.lazy(()=>a(()=>import("./DetalleBannerMovie-DW5vvDbf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),o=r.lazy(()=>a(()=>import("./DetalleBannerSeries-tF6_DpVv.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]))),_=r.memo(({item:s})=>{const n="release_date"in s;return e.jsx(r.Suspense,{fallback:e.jsx(e.Fragment,{}),children:n?e.jsx(t,{movie:s}):e.jsx(o,{serie:s})})});export{_ as default};
