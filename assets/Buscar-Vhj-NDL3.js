import{r as o,a as $,j as t,c as q,d as w,e as A,u as F,b as I,g as Q,f as W}from"./index-D2sbGu3I.js";import{u as v}from"./useQuery-DaHBGjQS.js";import{u as K,a as S,A as b,g as O,b as Y,B as y,C as z}from"./BarMenu-CXGq4Vqt.js";import{f as M}from"./fetchData-DCFA1qTy.js";const G=o.memo(({placeholder:l,onSubmit:h})=>{const{searchTerm:a,setSearchTerm:m}=$(),i=o.useRef(null),e=o.useRef(null),[s,f]=o.useState(a);return o.useEffect(()=>{i.current&&i.current.focus()},[]),o.useEffect(()=>(e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{a!==s&&(m(s),h(s))},1e3),()=>{e.current&&clearTimeout(e.current)}),[s]),t.jsx("form",{id:"busqueda",onSubmit:c=>c.preventDefault(),children:t.jsxs("div",{className:"contenedorLupa",children:[t.jsx("input",{ref:i,id:"busqueda-input",type:"text",className:"lupaMovile",placeholder:l,value:s,onChange:c=>f(c.target.value)}),t.jsx("i",{className:"fa-solid fa-magnifying-glass lupaIcono"}),t.jsx("button",{type:"submit",style:{display:"none"}})]})})});function Z(){const l=q(),h=w(),{searchTerm:a,setSearchTerm:m}=$(),{language:i}=A(),{currentPerfil:e,currentUser:s}=F(),{setOpenMenu:f}=I(),c=K();o.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),o.useEffect(()=>{a===""&&c>=900&&l("/home",{state:{fromBuscar:!0}})},[a,c,l]),o.useEffect(()=>{f(!1)},[f]);const L=o.useCallback(n=>{n!==a&&m(n)},[a,m]);v(`favorites-${s==null?void 0:s.id}-${e==null?void 0:e.id}`,()=>Q(s==null?void 0:s.id,e==null?void 0:e.id),{enabled:!!(s!=null&&s.id)&&!!(e!=null&&e.id)});const R=o.useCallback(async n=>{await W(s==null?void 0:s.id,e==null?void 0:e.id,n),await h.invalidateQueries(`favorites-${s==null?void 0:s.id}-${e==null?void 0:e.id}`)},[s==null?void 0:s.id,e==null?void 0:e.id,h]),T=o.useMemo(()=>a?`${S}/search/movie?api_key=${b}&language=${i}&query=${a}`:O(i).topRatedMovies,[a,i]),E=o.useMemo(()=>a?`${S}/search/tv?api_key=${b}&language=${i}&query=${a}`:Y(i).topRatedSeries,[a,i]),{data:d,isLoading:N}=v([a,"search-movies"],()=>M(T)),{data:u,isLoading:B}=v([a,"search-series"],()=>M(E)),C=N||B,x=o.useMemo(()=>{var g,j;const n=((g=d==null?void 0:d.results)==null?void 0:g.filter(r=>r.backdrop_path&&r.poster_path))||[],p=((j=u==null?void 0:u.results)==null?void 0:j.filter(r=>r.backdrop_path&&r.poster_path))||[];return[...n,...p].sort(()=>Math.random()-.5)},[d==null?void 0:d.results,u==null?void 0:u.results]);if(C)return t.jsx("div",{className:"contenedor",children:t.jsx(y,{})});const _=n=>n.map((p,g)=>t.jsx(z,{item:p,onAddFavorite:()=>R(p)},g)),k=()=>x.length>0?t.jsx("div",{className:"contenedorItemsBuscar",children:_(x)}):t.jsx("div",{className:"contenedorItemsNoE",children:t.jsxs("p",{children:["La búsqueda de ",a," no arrojó coincidencias."]})});return t.jsxs("div",{className:"contenedor",children:[t.jsx(y,{}),t.jsxs("div",{className:"contenedorBuscar",children:[c<900&&t.jsx(G,{placeholder:"Search movies, series, tv series...",onSubmit:L}),k()]})]})}export{Z as default};
