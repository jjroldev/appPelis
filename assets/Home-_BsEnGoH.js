import{e as v,r as o,a as d,b as g,j as e}from"./index-BXjvL9KZ.js";import{u as x}from"./useQuery-CYu0c58r.js";import{B as f,M as s}from"./MovieSwiper-BwTMy9Zy.js";import{g as j}from"./CardMovie-CJSspden.js";import{f as R}from"./fetchData-DCFA1qTy.js";import"./NavBar-DJ8xDldC.js";import"./useFavorites-CMVY7Xwo.js";function N(){const{language:l}=v(),t=o.useMemo(()=>j(l),[l]),{data:i,isLoading:u}=x(["moviesHome",l],()=>R(t.actionMovies),{staleTime:1e3*60*5}),{setSearchTerm:m}=d(),{setOpenMenu:M}=g(),[c,L]=o.useState(null),a=o.useMemo(()=>{var r;return((r=i==null?void 0:i.results)==null?void 0:r.filter(n=>n.backdrop_path))||[]},[i==null?void 0:i.results]);return o.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),M(!1),m("")},[]),o.useEffect(()=>{if(!u&&a.length>0){const r=sessionStorage.getItem("featuredMovie"),n=r?JSON.parse(r):a[Math.floor(Math.random()*a.length)];L(n),sessionStorage.setItem("featuredMovie",JSON.stringify(n))}},[a,u]),e.jsxs("div",{className:"contenedorHome",children:[c?e.jsx(f,{movie:c,logoBuscar:!0}):e.jsx("div",{className:"header"}),e.jsxs("div",{className:"contenedorPeliculas",children:[e.jsx(s,{URL:t.popularMovies,title:"Popular Movies"}),e.jsx(s,{URL:t.topRatedMovies,title:"Best Voted",isLarge:!0}),e.jsx(s,{URL:t.actionMovies,title:"Action"}),e.jsx(s,{URL:t.adventureMovies,title:"Adventure",isLarge:!0}),e.jsx(s,{URL:t.animationMovies,title:"Animation",isLarge:!0}),e.jsx(s,{URL:t.comedyMovies,title:"Comedy",isLarge:!0}),e.jsx(s,{URL:t.crimeMovies,title:"Crime",isLarge:!0}),e.jsx(s,{URL:t.documentaryMovies,title:"Documentary",isLarge:!0}),e.jsx(s,{URL:t.dramaMovies,title:"Drama",isLarge:!0}),e.jsx(s,{URL:t.familyMovies,title:"Family",isLarge:!0}),e.jsx(s,{URL:t.fantasyMovies,title:"Fantasy",isLarge:!0}),e.jsx(s,{URL:t.historyMovies,title:"History"}),e.jsx(s,{URL:t.horrorMovies,title:"Horror"}),e.jsx(s,{URL:t.musicMovies,title:"Music",isLarge:!0}),e.jsx(s,{URL:t.mysteryMovies,title:"Mystery",isLarge:!0}),e.jsx(s,{URL:t.romanceMovies,title:"Romance",isLarge:!0}),e.jsx(s,{URL:t.scienceFictionMovies,title:"Science Fiction",isLarge:!0}),e.jsx(s,{URL:t.thrillerMovies,title:"Thriller",isLarge:!0})]})]})}export{N as default};
