const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CarouselBoostrap-DBdzTTzV.js","assets/index-BcTlN2JH.js","assets/index-DXPAHY2_.css","assets/useMergedRefs-D4tZtIya.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js","assets/TransitionGroupContext-ue9HxrpE.js","assets/fetchData-DSUDSUsj.js","assets/CardItem-eE-v0onH.js","assets/CardItem-qggDfi2W.css","assets/CarouselBoostrap-Bave7wE4.css"])))=>i.map(i=>d[i]);
import{r as a,_ as d,j as r}from"./index-BcTlN2JH.js";import{u as c}from"./useWindowWidth-CaJjiSF3.js";import{f as x}from"./CardItem-eE-v0onH.js";import"./fetchData-DSUDSUsj.js";const i=a.lazy(()=>d(()=>import("./CarouselBoostrap-DBdzTTzV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),o=a.memo(({movie:s})=>{const n=c(),t=(l=[])=>l.map(e=>r.jsx("li",{children:r.jsx("span",{children:e.name})},e.id));return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"itemDetailsBanner flex flex-col",children:[r.jsxs("div",{className:"bannerDetails flex flex-row",children:[r.jsx("span",{children:(s==null?void 0:s.vote_average.toFixed(1))!="0.0"?"IMDb "+(s==null?void 0:s.vote_average.toFixed(1)):""}),r.jsx("span",{children:s==null?void 0:s.release_date.split("-")[0]}),r.jsx("span",{children:x(s.runtime)})]}),r.jsx("div",{children:r.jsx("ul",{className:"generosBanner",children:t(s==null?void 0:s.genres)})})]}),n>=1100&&r.jsx("div",{className:"posters-container-banner",children:r.jsx(i,{item:s})})]})});export{o as default};
