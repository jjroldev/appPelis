const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CarouselBoostrap-MuY_Y-sl.js","assets/index-CPcu-ZRb.js","assets/index-3lViHeIx.css","assets/useMergedRefs-BRqUoEOG.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js","assets/TransitionGroupContext-B4zSt001.js","assets/useWindowWidth-E9xqTgb3.js","assets/useWindowWidth-qggDfi2W.css","assets/CarouselBoostrap-Bave7wE4.css","assets/CarouselCollection-BcRwz62Y.js","assets/SkeletonCarousel-DMuxfOJI.js","assets/SkeletonCarousel-BMnWQ9kn.css","assets/useFavorites-PRuB4mzV.js","assets/styles-kh65Jmv8.css","assets/CarouselCredits-BMi6iLDC.js","assets/CarouselCredits-ByTJSngM.css"])))=>i.map(i=>d[i]);
import{n as _,e as g,c as m,a as v,b as C,r as i,j as e,S as L,_ as l}from"./index-CPcu-ZRb.js";/* empty css                  */import{B as I}from"./Banner-Co78omOj.js";/* empty css               */import{d as o,C as S,f as u}from"./useWindowWidth-E9xqTgb3.js";import b from"./CarouselURL-D4s2YK6I.js";import"./useFavorites-PRuB4mzV.js";import"./BarMenu-7RaKZyau.js";import"./DefaultPropsProvider-CDXgDoSf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Skeleton-DQzs5bMT.js";import"./SkeletonCarousel-DMuxfOJI.js";const E=i.lazy(()=>l(()=>import("./CarouselBoostrap-MuY_Y-sl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),N=i.lazy(()=>l(()=>import("./CarouselCollection-BcRwz62Y.js"),__vite__mapDeps([9,1,2,10,6,7,11,12,13]))),D=i.lazy(()=>l(()=>import("./CarouselCredits-BMi6iLDC.js"),__vite__mapDeps([14,1,2,10,6,7,11,15])));function B(){var c,d;const{movieId:a}=_(),{language:t}=g(),{data:s,isLoading:f}=m(`movieInfo-${a}-${t}`,()=>u(o(a,t).movieDetails),{refetchOnWindowFocus:!1,enabled:!!a}),{data:r,isLoading:p}=m(`similar-${a}-${t}`,()=>u(o(a,t,2).similar),{refetchOnWindowFocus:!1}),{setSearchTerm:x}=v(),{setOpenMenu:j}=C();return i.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),j(!1),x("")},[a]),f||p?e.jsx(L,{}):e.jsxs("div",{className:"contenedorPrincipalItem",children:[e.jsx(I,{itemId:a,isDetail:!0,type:"movie"}),e.jsxs("div",{className:"infoItemContainer",children:[e.jsxs("div",{className:"detallesInfo",children:[e.jsxs("div",{className:"contenedorSimilares",children:[(s==null?void 0:s.belongs_to_collection)&&e.jsx(i.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(N,{title:"Collection",item:s})}),s&&e.jsx(b,{URL:o(s==null?void 0:s.id,t).similar,title:"También te puede interesar",isLarge:!1})]}),e.jsx(i.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(D,{item:s,title:"CAST"})})]}),((c=r==null?void 0:r.results)==null?void 0:c.length)>0&&e.jsxs("div",{className:"similarContainer flex flex-col gap-2",children:[e.jsx("h3",{children:"Similar movies"}),e.jsx("div",{className:"contenedorPeliculasSimilares bg-red w-full",children:(d=r==null?void 0:r.results)==null?void 0:d.map((n,h)=>n.poster_path&&n.overview&&e.jsx(S,{item:n,isLarge:!1},h))})]}),e.jsx("div",{className:"contenedor-imagenes",children:e.jsx("div",{className:"flex flex-col backdropss",children:s&&e.jsx(i.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(E,{item:s})})})})]})]})}export{B as default};
