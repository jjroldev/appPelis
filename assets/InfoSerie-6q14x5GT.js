const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CarouselCollection-BqviFr9U.js","assets/index-DnDRJ3EF.js","assets/index-BPsx67xn.css","assets/CarouselURL-exAr8VFx.js","assets/CarouselURL-BPxOpOPi.css","assets/CardItem-Dl0VU_LT.js","assets/fetchData-D9WgxW95.js","assets/CardItem-DKfw7dlE.css","assets/useWindowWidth-Co7ZdrEz.js","assets/useFavorites-Cahp-663.js","assets/SkeletonCarousel-D3hB8vGr.js","assets/styles-kh65Jmv8.css","assets/Season-CaQriwdG.js","assets/Skeleton-DcBLfo69.js","assets/DefaultPropsProvider-DmUgBCHh.js","assets/Season-BoSIij1W.css","assets/CarouselCredits-DU4Xz-kA.js","assets/Card-BHPiBQZX.js","assets/Card-ByTJSngM.css","assets/CarouselBoostrap-CexfV72f.js","assets/useMergedRefs-Bw1oGXAA.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js","assets/TransitionGroupContext-DQLONKVq.js","assets/CarouselBoostrap-Bave7wE4.css"])))=>i.map(i=>d[i]);
import{n as _,e as h,b as d,a as g,r as a,j as e,S as L,_ as t}from"./index-DnDRJ3EF.js";/* empty css                  */import{B as S}from"./Banner-D6CiH6xq.js";/* empty css               */import{i as m,f as u,j as C}from"./fetchData-D9WgxW95.js";import b from"./CarouselURL-CruqUoVb.js";import{C as v}from"./CardItem-Dl0VU_LT.js";import"./useFavorites-Cahp-663.js";import"./useWindowWidth-Co7ZdrEz.js";import"./BarMenu-BnbIjo7x.js";import"./DefaultPropsProvider-DmUgBCHh.js";import"./Skeleton-DcBLfo69.js";import"./CarouselURL-exAr8VFx.js";const I=a.lazy(()=>t(()=>import("./CarouselCollection-BqviFr9U.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),E=a.lazy(()=>t(()=>import("./Season-CaQriwdG.js"),__vite__mapDeps([12,1,2,6,13,14,15]))),R=a.lazy(()=>t(()=>import("./CarouselCredits-DU4Xz-kA.js"),__vite__mapDeps([16,1,2,3,4,8,17,6,18]))),w=a.lazy(()=>t(()=>import("./CarouselBoostrap-CexfV72f.js"),__vite__mapDeps([19,1,2,20,21,22,6,5,7,23])));function $(){var l,c;const{seriesId:r}=_(),{language:i}=h(),{data:s,isLoading:f}=d(`seriesInfo-${r}`,()=>u(C(r,i)),{refetchOnWindowFocus:!1,enabled:!!r}),{data:n,isLoading:p}=d(`similar-${r}-${i}`,()=>u(m(r,i,2)),{refetchOnWindowFocus:!1}),{setOpenMenu:x}=g();return a.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),x(!1)},[r]),f||p?e.jsx(L,{}):e.jsxs("div",{className:"contenedorPrincipalItem",children:[e.jsx(S,{itemId:r,isDetail:!0,type:"serie"}),e.jsx("div",{className:"infoItemContainer",children:e.jsxs("div",{className:"detallesInfo",children:[e.jsxs("div",{className:"contenedorSimilares",children:[(s==null?void 0:s.belongs_to_collection)&&e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(I,{title:"Collection",item:s})}),s&&e.jsx(b,{URL:m(s==null?void 0:s.id,i),title:"También te puede interesar",isLarge:!1})]}),e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(R,{item:s,title:"Crew"})}),((l=n==null?void 0:n.results)==null?void 0:l.length)>0&&e.jsxs("div",{className:"similarContainer flex flex-col gap-2",children:[e.jsx("h3",{children:"Similar TV shows"}),e.jsx("div",{className:"contenedorPeliculasSimilares bg-red w-full",children:(c=n==null?void 0:n.results)==null?void 0:c.map((o,j)=>o.poster_path&&o.overview&&e.jsx(v,{item:o,isLarge:!1},j))})]}),s&&e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(E,{series:s,numeroTemporadas:s==null?void 0:s.number_of_seasons})}),e.jsx("div",{className:"contenedor-imagenes",children:e.jsx("div",{className:"flex flex-col backdropss",children:e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(w,{item:s})})})})]})})]})}export{$ as default};
