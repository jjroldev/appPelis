import{r as a,j as e,u as g,g as j,a as y,b as M,e as f}from"./index-C_fLx_VO.js";import{r as U,S as h,C as p,B as S,a as s}from"./CarouselURL-DrCYJeWE.js";import{u as C}from"./useFeaturedMovie-D7CmFDhv.js";import{C as w,g as F,a as B}from"./CardItem-BmwSqW1G.js";import{u as b}from"./useQuery-Bbtv0FuN.js";import{u as D}from"./useFavorites-CYiZJP6Z.js";import{u as I}from"./NavBar-58Rh1Gk1.js";import"./fetchData-DCFA1qTy.js";function A({isLarge:n,title:m}){const{handleRemoveFavorite:l}=D(),[t,i]=a.useState(n),u=a.useMemo(()=>U(t),[t]),c=I(),x=a.useCallback(v=>v==null?void 0:v.map(d=>e.jsx(w,{item:d,isLarge:t,onRemoveFavorite:l,doDelete:!0},d.id)),[t]),{currentPerfil:o,currentUser:r}=g(),{data:L,isLoading:R}=b(`favorites-${r==null?void 0:r.id}-${o==null?void 0:o.id}`,()=>j(r==null?void 0:r.id,o==null?void 0:o.id),{enabled:!!(r!=null&&r.id)&&!!(o!=null&&o.id)});return a.useEffect(()=>{i(c>1e3?n:!1)},[c]),R?e.jsx(h,{numItems:20,isLarge:!1,title:m}):(L==null?void 0:L.length)==0?null:e.jsxs("div",{className:"carousel",children:[e.jsx("h2",{className:"tituloCarousel",children:m}),e.jsx(p,{swipeable:!0,showDots:!1,responsive:u,ssr:!1,autoPlay:!1,partialVisible:!0,keyBoardControl:!0,className:`${c<600?"carousel-cell":""}`,slidesToSlide:8,children:x(L)})]})}function Q(){const{setSearchTerm:n}=y(),{setOpenMenu:m}=M(),{language:l}=f(),t=a.useMemo(()=>F(l),[l]),i=a.useMemo(()=>B(l),[l]),u=C("feautedMovieHome","moviesHome","movie");return a.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),m(!1),n("")},[]),e.jsxs("div",{className:"contenedorWindow",children:[e.jsx(S,{itemId:u==null?void 0:u.id,logoBuscar:!0,type:"movie"}),e.jsxs("div",{className:"contenedorItems",children:[e.jsx(A,{isLarge:!0,title:"My List"}),e.jsx(s,{URL:t.popularMovies,title:"Popular Movies",isLarge:!0}),e.jsx(s,{URL:i.comedySeries,title:"Comedy series",isLarge:!0}),e.jsx(s,{URL:i.topRatedSeries,title:"Best voted series",isLarge:!0}),e.jsx(s,{URL:i.actionAdventureSeries,title:"Series of action and adventure"}),e.jsx(s,{URL:t.topRatedMovies,title:"Best voted movies",isLarge:!0}),e.jsx(s,{URL:t.actionMovies,title:"Action movies"}),e.jsx(s,{URL:t.adventureMovies,title:"Adventure movies",isLarge:!0}),e.jsx(s,{URL:t.animationMovies,title:"Animation movies",isLarge:!0}),e.jsx(s,{URL:i.crimeSeries,title:"Crime series",isLarge:!0}),e.jsx(s,{URL:i.documentarySeries,title:"Documentary series",isLarge:!0}),e.jsx(s,{URL:t.comedyMovies,title:"Comedy movies",isLarge:!0}),e.jsx(s,{URL:t.crimeMovies,title:"Crime movies",isLarge:!0}),e.jsx(s,{URL:t.documentaryMovies,title:"Documentary movies",isLarge:!0}),e.jsx(s,{URL:i.dramaSeries,title:"Drama series",isLarge:!0}),e.jsx(s,{URL:t.dramaMovies,title:"Drama movies",isLarge:!0}),e.jsx(s,{URL:t.familyMovies,title:"Movies to watch with family",isLarge:!0}),e.jsx(s,{URL:t.fantasyMovies,title:"Fantasy movies",isLarge:!0}),e.jsx(s,{URL:t.historyMovies,title:"History"}),e.jsx(s,{URL:t.horrorMovies,title:"Horror"}),e.jsx(s,{URL:i.realitySeries,title:"Reality series"}),e.jsx(s,{URL:t.musicMovies,title:"Music",isLarge:!0}),e.jsx(s,{URL:t.mysteryMovies,title:"Mystery",isLarge:!0}),e.jsx(s,{URL:i.mysterySeries,title:"Mystey series",isLarge:!0}),e.jsx(s,{URL:t.romanceMovies,title:"Romance",isLarge:!0}),e.jsx(s,{URL:t.scienceFictionMovies,title:"Science Fiction",isLarge:!0}),e.jsx(s,{URL:i.warPoliticsSeries,title:"Series of war",isLarge:!0}),e.jsx(s,{URL:t.thrillerMovies,title:"Thriller",isLarge:!0})]})]})}export{Q as default};
