const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CarouselBase-CHXWbh93.js","assets/index-BirZxsvG.js","assets/index-TkxzABbH.css","assets/SkeletonCarousel-P3QBq2RI.js","assets/BarMenu-CcSkDaqW.js","assets/SkeletonCarousel-BPqxXAFN.css","assets/fetchData-DCFA1qTy.js","assets/useFavorites-CGurkLlA.js","assets/CardItem-Df-giQpU.js","assets/CardItem-AfICGO4c.css","assets/Banner-CEIqR63s.js","assets/createSimplePaletteValueFilter-DkgYpcKS.js","assets/Banner-CNaz8GPG.css","assets/styles-kh65Jmv8.css"])))=>i.map(i=>d[i]);
import{r as l,_ as p,R as h,f as v,c as _,j as o}from"./index-BirZxsvG.js";import{r as x,S as j,C as w}from"./SkeletonCarousel-P3QBq2RI.js";/* empty css               */import{f as C}from"./fetchData-DCFA1qTy.js";import{u as y}from"./BarMenu-CcSkDaqW.js";import{u as E}from"./useFavorites-CGurkLlA.js";import{r as I}from"./Banner-CEIqR63s.js";import"./CardItem-Df-giQpU.js";import"./createSimplePaletteValueFilter-DkgYpcKS.js";const R=l.lazy(()=>p(()=>import("./CarouselBase-CHXWbh93.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),W=h.memo(({URL:u,title:r,isLarge:e})=>{const{handleAddFavorite:c}=E(),s=y(),{language:m}=v(),{data:a,isLoading:d}=_(["items",u,r,m],()=>C(u),{refetchOnWindowFocus:!1}),i=l.useMemo(()=>{var n;return((n=a==null?void 0:a.results)==null?void 0:n.filter(t=>t.backdrop_path&&t.poster_path&&t.overview))||[]},[a]),f=l.useMemo(()=>x(s>1e3?e:!1),[s,e]);return d?o.jsx(j,{numItems:10,isLarge:s>1e3?e:!1,title:r}):i.length?o.jsxs("div",{className:"carousel",children:[o.jsx("h2",{className:"tituloCarousel",children:r}),o.jsx(w,{swipeable:!0,showDots:!1,responsive:f,ssr:!0,infinite:!0,autoPlay:!1,keyBoardControl:!0,partialVisible:!0,className:`${s<600?"carousel-cell":""}`,slidesToSlide:1,focusOnSelect:!1,children:I(i,e,s,c)})]}):o.jsx(R,{title:r,isLarge:e})});export{W as default};
