const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CarouselBase-BfOPnR_E.js","assets/index-Bdt1_3wt.js","assets/index-BMvqc24B.css","assets/CarouselURL-B9Yegapf.js","assets/CarouselURL-BPxOpOPi.css","assets/fetchData-NBeNkyoS.js","assets/useWindowWidth-ClL4rvrl.js","assets/SkeletonCarousel-C4XEBtBF.js","assets/CardItem-Bbpx1lhr.js","assets/CardItem-DKfw7dlE.css","assets/styles-kh65Jmv8.css","assets/BarMenu-BRRdxDby.js"])))=>i.map(i=>d[i]);
import{r as l,_ as p,R as v,j as s,n as x,e as j,b as d,S as _}from"./index-Bdt1_3wt.js";import{m as f,U as b,f as u,b as A,c as N,d as y}from"./fetchData-NBeNkyoS.js";import{C as h}from"./CardItem-Bbpx1lhr.js";import{u as g}from"./useWindowWidth-ClL4rvrl.js";import{r as L,C as I}from"./CarouselURL-B9Yegapf.js";/* empty css               */import{S as R}from"./Skeleton-DvPshfKi.js";import"./DefaultPropsProvider-BPZ_nfXo.js";const O=l.lazy(()=>p(()=>import("./CarouselBase-BfOPnR_E.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),C=v.memo(({title:t,isLarge:o,items:a})=>{const e=g(),n=l.useMemo(()=>L(),[]);return a.length?s.jsxs("div",{className:"carousel",children:[s.jsx("h2",{className:"tituloCarouselActor",children:t}),s.jsx(I,{swipeable:!0,showDots:!1,responsive:n,ssr:!0,autoPlay:!1,keyBoardControl:!0,partialVisible:!0,slidesToSlide:1,className:`${e<600?"carousel-cell":""}`,infinite:!0,focusOnSelect:!1,children:a.map((i,r)=>s.jsx(h,{item:i,isLarge:!1},r))})]}):s.jsx(O,{title:t,isLarge:o})});function E(){var m;const{actorId:t}=x(),{language:o}=j(),a=g(),{data:e,isLoading:n}=d(`actor-${t}`,()=>u(A(t,o)),{refetchOnWindowFocus:!1}),{data:i,isLoading:r}=d(`dataActors-search-${t}`,()=>u(N(e==null?void 0:e.name,o)),{enabled:!n,refetchOnWindowFocus:!1}),c=(m=i==null?void 0:i.results)==null?void 0:m.find(w=>w.name===(e==null?void 0:e.name)).known_for;return n||r?s.jsx(R,{variant:"rectangular",width:"100%",height:"110vh",sx:{backgroundColor:"var(--color-primario)"}}):s.jsxs(f.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,ease:"easeOut"},className:"containerDetailsActor flex w-full bg-red text-white",children:[s.jsxs("div",{className:"containerPerfilIMG flex flex-col relative",children:[s.jsx(f.img,{className:"object-contain object-center img-actor",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:"easeOut"},src:b+(e==null?void 0:e.profile_path)}),s.jsxs("div",{className:"aboslute bottom-0",children:[s.jsxs("div",{className:"detailActor w-full",children:[s.jsx("h3",{children:"Birthday"}),s.jsx("p",{children:e==null?void 0:e.birthday})]}),s.jsxs("div",{className:"detailActor w-full",children:[s.jsx("h3",{children:"Place of birth"}),s.jsx("p",{children:e==null?void 0:e.place_of_birth})]}),s.jsxs("div",{className:"detailActor w-full",children:[s.jsx("h3",{children:"Sex"}),s.jsx("p",{children:(e==null?void 0:e.gender)==2?"Masculine":"Femenine"})]})]})]}),s.jsxs("div",{className:"containerDetailsActorIMG",children:[s.jsx("h2",{className:"actor-name",children:e==null?void 0:e.name}),(e==null?void 0:e.biography)&&s.jsxs("div",{className:"detailActor w-full relative",children:[s.jsx("h3",{children:"Biography"}),s.jsxs("p",{className:"biography",children:[a>=950?e==null?void 0:e.biography.split(".").slice(0,7):e==null?void 0:e.biography.split(".").slice(0,3)," ."]})]}),s.jsx(C,{items:c,title:"Known for",isLarge:!1})]})]})}const P=l.lazy(()=>p(()=>import("./BarMenu-BRRdxDby.js"),__vite__mapDeps([11,1,2,6])));function T(){const{actorId:t}=x(),{language:o}=j(),{data:a,isLoading:e}=d(`movies-${t}`,()=>u(y(t,o)),{refetchOnWindowFocus:!1}),n=l.useMemo(()=>!a||!a.cast?[]:a.cast.filter(r=>r.poster_path&&r.backdrop_path&&r.overview),[a]),i=l.useMemo(()=>!a||!a.cast?[]:a.crew.filter(r=>r.poster_path&&r.backdrop_path&&r.overview),[a]);return l.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),e?s.jsx(_,{}):s.jsxs("div",{className:"containerItemsActor",children:[s.jsx(P,{}),s.jsxs("div",{className:"flex flex-col contenedorInformacionActor",children:[s.jsx(E,{}),s.jsxs("div",{className:`contenedorItemsPosters ${n.length===0&&i.length===0?"!flex items-center justify-center":""}`,children:[n.map((r,c)=>s.jsx(h,{item:r,isLarge:!1},c)),i.map((r,c)=>s.jsx(h,{item:r,isLarge:!1},c)),!e&&n.length===0&&i.length===0&&s.jsx("p",{className:"text-white w-full",children:"No hay películas o series de este actor"})]})]})]})}export{T as default};
