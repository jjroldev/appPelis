import{r as t,a as x,j as s,c as M,d as T,e as B,u as C,b as L,g as $,f as R}from"./index-BXjvL9KZ.js";import{u as h}from"./useQuery-CYu0c58r.js";import{B as w,A,g as q,C as F}from"./CardMovie-CJSspden.js";import{f as _}from"./fetchData-DCFA1qTy.js";import{u as k,N as v}from"./NavBar-DJ8xDldC.js";const Q=t.memo(({placeholder:r,onSubmit:l})=>{const{searchTerm:o,setSearchTerm:m}=x(),n=t.useRef(null),e=t.useRef(null),[a,f]=t.useState(o);return t.useEffect(()=>{n.current&&n.current.focus()},[]),t.useEffect(()=>(e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{o!==a&&(m(a),l(a))},1e3),()=>{e.current&&clearTimeout(e.current)}),[a]),s.jsx("form",{id:"busqueda",onSubmit:u=>u.preventDefault(),children:s.jsxs("div",{className:"contenedorLupa",children:[s.jsx("input",{ref:n,id:"busqueda-input",type:"text",className:"lupaMovile",placeholder:r,value:a,onChange:u=>f(u.target.value)}),s.jsx("i",{className:"fa-solid fa-magnifying-glass lupaIcono"}),s.jsx("button",{type:"submit",style:{display:"none"}})]})})});function Y(){const r=M(),l=T(),{searchTerm:o,setSearchTerm:m}=x(),{language:n}=B(),{currentPerfil:e,currentUser:a}=C(),{setOpenMenu:f}=L(),u=k();t.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),t.useEffect(()=>{o===""&&u>=900&&r("/home",{state:{fromBuscar:!0}})},[o,u,r]),t.useEffect(()=>{f(!1)},[f]);const g=t.useCallback(i=>{i!==o&&m(i)},[o,m]);h(`favorites-${a==null?void 0:a.id}-${e==null?void 0:e.id}`,()=>$(a==null?void 0:a.id,e==null?void 0:e.id),{enabled:!!(a!=null&&a.id)&&!!(e!=null&&e.id)});const j=t.useCallback(async i=>{await R(a==null?void 0:a.id,e==null?void 0:e.id,i),await l.invalidateQueries(`favorites-${a==null?void 0:a.id}-${e==null?void 0:e.id}`)},[a==null?void 0:a.id,e==null?void 0:e.id,l]),b=t.useMemo(()=>o?`${w}/search/movie?api_key=${A}&language=${n}&query=${o}`:q(n).popularMovies,[o,n]),{data:c,isLoading:y}=h([o||"popularMovies"],()=>_(b)),p=t.useMemo(()=>{var i;return(i=c==null?void 0:c.results)==null?void 0:i.filter(d=>d.backdrop_path&&d.poster_path)},[c==null?void 0:c.results]);if(y)return s.jsx("div",{className:"contenedor",children:s.jsx(v,{logoBuscar:!0,menu:!0,perfil:!0,condicionExpanded:!0})});const E=i=>i.map((d,S)=>s.jsx(F,{movie:d,onAddFavorite:()=>j(d)},S)),N=()=>p.length>0?s.jsx("div",{className:"contenedorPeliculasBuscar",children:E(p)}):s.jsx("div",{className:"contenedorPeliculasNoE",children:s.jsxs("p",{children:["La búsqueda de ",o," no arrojó coincidencias."]})});return s.jsxs("div",{className:"contenedor",children:[s.jsx(v,{perfil:!0,menu:!0,logoBuscar:!0,condicionExpanded:!0}),s.jsxs("div",{className:"contenedorBuscar",children:[u<900&&s.jsx(Q,{placeholder:"Search Movies",onSubmit:g}),N()]})]})}export{Y as default};
