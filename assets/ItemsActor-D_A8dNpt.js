const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BarMenu-CcSkDaqW.js","assets/index-BirZxsvG.js","assets/index-TkxzABbH.css"])))=>i.map(i=>d[i]);
import{o as d,f as u,c as m,r as n,j as s,S as l,_ as f}from"./index-BirZxsvG.js";import{f as p}from"./fetchData-DCFA1qTy.js";import{C as h,b as x}from"./CardItem-Df-giQpU.js";import{u as _}from"./useFavorites-CGurkLlA.js";const j=n.lazy(()=>f(()=>import("./BarMenu-CcSkDaqW.js").then(t=>t.a),__vite__mapDeps([0,1,2])));function L(){const{actorId:t}=d(),{language:i}=u(),{handleAddFavorite:c}=_(),{data:a,isLoading:r}=m(`movies-${t}`,()=>p(x(t,i)),{refetchOnWindowFocus:!1}),o=n.useMemo(()=>!a||!a.cast?[]:a.cast.filter(e=>e.poster_path&&e.backdrop_path&&e.overview),[a]);return r?s.jsx(l,{}):s.jsxs("div",{className:"containerItemsActor",children:[s.jsx(j,{}),s.jsxs("div",{className:"contenedorItemsPosters items-center justify-center",children:[o.map(e=>s.jsx(h,{item:e,isLarge:!1,onAddFavorite:c},e.id)),!r&&!o.length&&s.jsx("p",{children:"No hay películas o series de este actor"})]})]})}export{L as default};
