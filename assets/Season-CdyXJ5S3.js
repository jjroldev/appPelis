const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Episode-BOYocVmc.js","assets/index-CmXgx7D_.js","assets/index-CBdIeY0I.css","assets/CardItem-Bcx_Fy3P.js","assets/CardItem-AfICGO4c.css","assets/fetchData-DCFA1qTy.js","assets/BarMenu-L8R-98h6.js","assets/Banner-nKARx0Ku.js","assets/useFavorites-CYAac5_z.js","assets/createSimplePaletteValueFilter-CMQdXRAi.js","assets/Banner-B4_9gJfs.css","assets/Episode-DfD4OJrG.css"])))=>i.map(i=>d[i]);
import{j as e,f as y,r as n,c as _,_ as S}from"./index-CmXgx7D_.js";import{f as E}from"./fetchData-DCFA1qTy.js";import{o as N,m as f}from"./CardItem-Bcx_Fy3P.js";import{S as k}from"./Banner-nKARx0Ku.js";import"./useFavorites-CYAac5_z.js";import"./BarMenu-L8R-98h6.js";import"./createSimplePaletteValueFilter-CMQdXRAi.js";function r(){return e.jsx("div",{className:"container-episode-skeleton",children:e.jsx(k,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:"100%",height:"100%"})})}const R=n.lazy(()=>S(()=>import("./Episode-BOYocVmc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function A({series:a,numeroTemporadas:c}){var m,u,x;const{language:h}=y(),[o,g]=n.useState(1),{data:s,isLoading:j}=_(`seasons-${a.id}-${o}`,()=>E(N(a.id,o,h)),{enabled:a.number_of_seasons!=0}),[l,d]=n.useState(5),p=n.useRef(null);return n.useEffect(()=>{d(5)},[o]),n.useEffect(()=>{if(!(s!=null&&s.episodes))return;const i=new IntersectionObserver(v=>{v[0].isIntersecting&&d(b=>Math.min(b+8,s.episodes.length))},{rootMargin:"450px"}),t=p.current;return t&&i.observe(t),()=>{t&&i.unobserve(t)}},[s==null?void 0:s.episodes]),a.number_of_seasons?e.jsxs("div",{className:"containerSeason",children:[e.jsxs("div",{className:"contenedorSeleccionSeason gap-1",children:[e.jsx("h3",{className:"tituloSerie",children:a.name}),e.jsx("select",{onChange:i=>g(Number(i.target.value)),children:c&&[...Array(c)].map((i,t)=>e.jsxs("option",{value:t+1,children:["Temporada ",t+1]},t))})]}),e.jsx("div",{className:"contenedorEpisodios",children:!s||j?e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}):((m=s==null?void 0:s.episodes)==null?void 0:m.length)===0?e.jsx(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:e.jsx("div",{className:"w-full text-center",children:e.jsx("p",{className:"overcoming text-center",children:"overcoming..."})})}):e.jsxs(e.Fragment,{children:[(u=s==null?void 0:s.episodes)==null?void 0:u.slice(0,l).map((i,t)=>e.jsx(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:i&&e.jsx(n.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(R,{episode:i,serie_backdrop:a.backdrop_path})})},t)),l<((x=s==null?void 0:s.episodes)==null?void 0:x.length)&&e.jsx("div",{ref:p,style:{height:"200px",background:"transparent"}})]})})]}):null}export{A as default};
