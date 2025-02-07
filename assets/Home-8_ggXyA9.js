import{R,u as y,r as i,a as w,j as e,h as U,f as S,b as F,c as C,S as E}from"./index-BMTmzaKH.js";import{r as b,C as N,B as A}from"./ResponsiveCarrousel-C7M9MzR_.js";import{g as H}from"./endPoints-D6Ym8Q8U.js";import{f as h}from"./fetchData-DCFA1qTy.js";import{u as g}from"./useQuery-CC86du5T.js";import{C as I}from"./CardMovie-DqOV5QdT.js";import"./NavBar-Cx_nkgaD.js";const t=R.memo(({URL:d,title:s,isLarge:a=!1})=>{const{currentPerfil:o,currentUser:l}=y(),{data:c}=g(["movies",d],()=>h(d),{staleTime:1e3*60*5,refetchOnWindowFocus:!1}),[m,L]=i.useState(window.innerWidth),[r,u]=i.useState(a),v=w(),f=i.useMemo(()=>{var n;return((n=c==null?void 0:c.results)==null?void 0:n.filter(M=>M.backdrop_path))||[]},[c]),x=async n=>{await U(l==null?void 0:l.id,o==null?void 0:o.id,n),await v.invalidateQueries(`favorites-${l==null?void 0:l.id}-${o==null?void 0:o.id}`,{refetchInactive:!1})},j=i.useMemo(()=>b(r),[r]),p=i.useCallback(n=>n.map(M=>e.jsx(I,{movie:M,isLarge:r,onAddFavorite:x},M.id)),[r]);return i.useEffect(()=>{const n=()=>L(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),i.useEffect(()=>{m<=1e3?u(!1):u(a)},[m]),e.jsx("div",{className:"carousel",children:f.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"tituloCarousel",children:s}),e.jsx(N,{swipeable:!0,draggable:!0,showDots:!1,responsive:j,ssr:!0,infinite:!0,autoPlay:!1,className:`carousel-react ${m<600?"carousel-cell":""}`,children:p(f)})]})})});function Q(){const{language:d}=S(),s=i.useMemo(()=>H(d),[d]),{data:a,isLoading:o}=g(["moviesHome",d],()=>h(s.actionMovies),{staleTime:1e3*60*5}),[l,c]=i.useState(null),{setSearchTerm:m}=F(),{setOpenMenu:L}=C(),r=i.useMemo(()=>{var u;return(u=a==null?void 0:a.results)==null?void 0:u.filter(v=>v.backdrop_path)},[a==null?void 0:a.results]);return i.useEffect(()=>{if(!o&&r.length>0){const u=sessionStorage.getItem("featuredMovie");if(u)c(JSON.parse(u));else{const v=Math.floor(Math.random()*r.length),f=r[v];c(f),sessionStorage.setItem("featuredMovie",JSON.stringify(f))}}},[r]),i.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),L(!1),m("")},[]),o?e.jsx(E,{}):e.jsxs("div",{className:"contenedorHome",children:[e.jsx(A,{movie:l,logoBuscar:!0}),e.jsxs("div",{className:"contenedorPeliculas",children:[e.jsx(t,{URL:s.popularMovies,title:"Popular Movies"}),e.jsx(t,{URL:s.topRatedMovies,title:"Best Voted",isLarge:!0}),e.jsx(t,{URL:s.actionMovies,title:"Action"}),e.jsx(t,{URL:s.adventureMovies,title:"Adventure",isLarge:!0}),e.jsx(t,{URL:s.animationMovies,title:"Animation",isLarge:!0}),e.jsx(t,{URL:s.comedyMovies,title:"Comedy",isLarge:!0}),e.jsx(t,{URL:s.crimeMovies,title:"Crime",isLarge:!0}),e.jsx(t,{URL:s.documentaryMovies,title:"Documentary",isLarge:!0}),e.jsx(t,{URL:s.dramaMovies,title:"Drama",isLarge:!0}),e.jsx(t,{URL:s.familyMovies,title:"Family",isLarge:!0}),e.jsx(t,{URL:s.fantasyMovies,title:"Fantasy",isLarge:!0}),e.jsx(t,{URL:s.historyMovies,title:"History"}),e.jsx(t,{URL:s.horrorMovies,title:"Horror"}),e.jsx(t,{URL:s.musicMovies,title:"Music",isLarge:!0}),e.jsx(t,{URL:s.mysteryMovies,title:"Mystery",isLarge:!0}),e.jsx(t,{URL:s.romanceMovies,title:"Romance",isLarge:!0}),e.jsx(t,{URL:s.scienceFictionMovies,title:"Science Fiction",isLarge:!0}),e.jsx(t,{URL:s.thrillerMovies,title:"Thriller",isLarge:!0})]})]})}export{Q as default};
