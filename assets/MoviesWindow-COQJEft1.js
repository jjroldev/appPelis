import{e as u,r as o,b as l,a as m,j as e}from"./index-C_fLx_VO.js";import{u as c}from"./useFeaturedMovie-D7CmFDhv.js";import{B as L,a as s}from"./CarouselURL-DrCYJeWE.js";import{g as v}from"./CardItem-BmwSqW1G.js";import"./useQuery-Bbtv0FuN.js";import"./fetchData-DCFA1qTy.js";import"./NavBar-58Rh1Gk1.js";import"./useFavorites-CYiZJP6Z.js";function y(){const i=c("feautedMovieMW","moviesW","movie"),{language:r}=u(),t=o.useMemo(()=>v(r),[r]),{setOpenMenu:a}=l(),{setSearchTerm:n}=m();return o.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),n(""),a(!1)},[]),e.jsxs("div",{className:"contenedorWindow",children:[e.jsx(L,{itemId:i==null?void 0:i.id,logoBuscar:!0,type:"movie"}),e.jsxs("div",{className:"contenedorItems",children:[e.jsx(s,{URL:t.popularMovies,title:"Popular Movies"}),e.jsx(s,{URL:t.topRatedMovies,title:"Best Voted",isLarge:!0}),e.jsx(s,{URL:t.actionMovies,title:"Movies of action"}),e.jsx(s,{URL:t.adventureMovies,title:"Adventure on family",isLarge:!0}),e.jsx(s,{URL:t.animationMovies,title:"Animation",isLarge:!0}),e.jsx(s,{URL:t.comedyMovies,title:"Comedy",isLarge:!0}),e.jsx(s,{URL:t.crimeMovies,title:"Crime",isLarge:!0}),e.jsx(s,{URL:t.documentaryMovies,title:"Documentary",isLarge:!0}),e.jsx(s,{URL:t.dramaMovies,title:"Drama",isLarge:!0}),e.jsx(s,{URL:t.familyMovies,title:"Family",isLarge:!0}),e.jsx(s,{URL:t.fantasyMovies,title:"Fantasy",isLarge:!0}),e.jsx(s,{URL:t.historyMovies,title:"History"}),e.jsx(s,{URL:t.horrorMovies,title:"Horror"}),e.jsx(s,{URL:t.musicMovies,title:"Music",isLarge:!0}),e.jsx(s,{URL:t.mysteryMovies,title:"Mystery",isLarge:!0}),e.jsx(s,{URL:t.romanceMovies,title:"Romance",isLarge:!0}),e.jsx(s,{URL:t.scienceFictionMovies,title:"Science Fiction",isLarge:!0}),e.jsx(s,{URL:t.thrillerMovies,title:"Thriller",isLarge:!0})]})]})}export{y as default};
