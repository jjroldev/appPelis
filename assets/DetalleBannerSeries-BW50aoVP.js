const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CarouselBoostrap-D_rGi96W.js","assets/index-BnPToACK.js","assets/index-B8XPU56h.css","assets/useMergedRefs-2iyCUMP2.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js","assets/Transition-BG8QOaU1.js","assets/TransitionGroupContext-BLAWKo2s.js","assets/fetchData-DCFA1qTy.js","assets/BarMenu-DtA6XHQf.js","assets/CarouselBoostrap-Bave7wE4.css"])))=>i.map(i=>d[i]);
import{r as s,_ as m,j as a}from"./index-BnPToACK.js";import{u as x}from"./BarMenu-DtA6XHQf.js";import{g as t}from"./Banner-ByginS1C.js";import"./fetchData-DCFA1qTy.js";import"./useFavorites-OPOyU9ki.js";const p=s.lazy(()=>m(()=>import("./CarouselBoostrap-D_rGi96W.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),h=s.memo(({serie:n})=>{const o=x(),d=(c=[])=>c.map(l=>a.jsx("li",{children:a.jsx("span",{children:l.name})},l.id));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"itemDetailsBanner flex flex-col",children:[a.jsxs("div",{className:"bannerDetails flex flex-row",children:[a.jsxs("span",{children:["TMDB ",n==null?void 0:n.vote_average.toFixed(1)]}),a.jsx("span",{children:n==null?void 0:n.first_air_date.split("-")[0]}),a.jsx("span",{children:`${n==null?void 0:n.number_of_seasons} ${(n==null?void 0:n.number_of_seasons)>1?" seasons":" season"}`}),a.jsx("span",{children:`${n==null?void 0:n.number_of_episodes} ${(n==null?void 0:n.number_of_episodes)>1?" episodes":" episode"}`}),t(n)&&o>600&&a.jsxs("span",{className:"edadParaPublico",children:[t(n),"+"]})]}),a.jsx("div",{children:a.jsx("ul",{className:"generosBanner",children:d(n==null?void 0:n.genres)})})]}),o>=900&&a.jsx("div",{className:"posters-container-banner",children:a.jsx(s.Suspense,{fallback:a.jsx(a.Fragment,{}),children:a.jsx(p,{item:n})})})]})});export{h as default};
