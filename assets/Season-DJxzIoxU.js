const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Episode-BtEGP82d.js","assets/index-cHxvsVQy.js","assets/index-CxXBlUI9.css","assets/BarMenu-DHwZNA8j.js","assets/BarMenu-jNW-FVTq.css","assets/fetchData-DCFA1qTy.js","assets/Banner-CWcUfTrD.js","assets/useFavorites-DpOK44Tb.js","assets/Banner-CEu9pKUk.css","assets/Episode-Dj9JIt1X.css"])))=>i.map(i=>d[i]);
import{j as e,f as y,r as i,c as _,_ as E}from"./index-cHxvsVQy.js";import{f as N}from"./fetchData-DCFA1qTy.js";import{u as k,p as w,m as x}from"./BarMenu-DHwZNA8j.js";import{S as R}from"./Skeleton-DmUrIwdV.js";import"./DefaultPropsProvider-QIiXLLKa.js";function o(){return e.jsx("div",{className:"container-episode-skeleton",children:e.jsx(R,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:"100%",height:"100%"})})}const C=i.lazy(()=>E(()=>import("./Episode-BtEGP82d.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])));function $({series:a,numeroTemporadas:c}){var p,m,h;const{language:f}=y(),g=k(),[r,j]=i.useState(1),{data:s,isLoading:v}=_(`seasons-${a.id}-${r}`,()=>N(w(a.id,r,f)),{enabled:a.number_of_seasons!=0}),[l,d]=i.useState(5),u=i.useRef(null);return i.useEffect(()=>{d(5)},[r]),i.useEffect(()=>{if(!(s!=null&&s.episodes))return;const n=new IntersectionObserver(S=>{S[0].isIntersecting&&d(b=>Math.min(b+8,s.episodes.length))},{rootMargin:"450px"}),t=u.current;return t&&n.observe(t),()=>{t&&n.unobserve(t)}},[s==null?void 0:s.episodes]),a.number_of_seasons?e.jsxs("div",{className:`containerSeason ${g>=1260&&"CSSinMargin"}`,children:[e.jsxs("div",{className:"contenedorSeleccionSeason gap-1",children:[e.jsx("h3",{className:"tituloSerie",children:a.name}),e.jsx("select",{onChange:n=>j(Number(n.target.value)),children:c&&[...Array(c)].map((n,t)=>e.jsxs("option",{value:t+1,children:["Temporada ",t+1]},t))})]}),e.jsx("div",{className:"contenedorEpisodios",children:!s||v?e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{})]}):((p=s==null?void 0:s.episodes)==null?void 0:p.length)===0?e.jsx(x.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:e.jsx("div",{className:"w-full text-center",children:e.jsx("p",{className:"overcoming text-center",children:"overcoming..."})})}):e.jsxs(e.Fragment,{children:[(m=s==null?void 0:s.episodes)==null?void 0:m.slice(0,l).map((n,t)=>e.jsx(x.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:n&&e.jsx(i.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(C,{episode:n,serie_backdrop:a.backdrop_path})})},t)),l<((h=s==null?void 0:s.episodes)==null?void 0:h.length)&&e.jsx("div",{ref:u,style:{height:"200px",background:"transparent"}})]})})]}):null}export{$ as default};
