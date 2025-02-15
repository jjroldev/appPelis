import{r,j as i,u as g,g as R,a as S,b as y,e as U}from"./index-B9j9DglT.js";import{r as h,C as p,u as f,B as x,a as j}from"./useRef-NypeEDJE.js";import{u as C}from"./useFeaturedMovie-BcCZgaR1.js";import{C as F,g as b,a as w}from"./CardItem-B7Y4hLNr.js";import{u as A}from"./useQuery-CfqKoH2c.js";import{u as B}from"./useFavorites-B69gIbD4.js";import{u as D}from"./NavBar-BqHCQek_.js";import{S as I}from"./SkeletonCarousel-DFsPnCs1.js";import"./fetchData-DCFA1qTy.js";function H({isLarge:c,title:v}){const{handleRemoveFavorite:u}=B(),[e,t]=r.useState(c),L=r.useMemo(()=>h(e),[e]),a=D(),d=r.useCallback(m=>m==null?void 0:m.map(M=>i.jsx(F,{item:M,isLarge:e,onRemoveFavorite:u,doDelete:!0},M.id)),[e]),{currentPerfil:s,currentUser:o}=g(),{data:n,isLoading:l}=A(`favorites-${o==null?void 0:o.id}-${s==null?void 0:s.id}`,()=>R(o==null?void 0:o.id,s==null?void 0:s.id),{enabled:!!(o!=null&&o.id)&&!!(s!=null&&s.id)});return r.useEffect(()=>{t(a>1e3?c:!1)},[a]),l?i.jsx(I,{numItems:20,isLarge:!1,title:v}):(n==null?void 0:n.length)==0?null:i.jsxs("div",{className:"carousel",children:[i.jsx("h2",{className:"tituloCarousel",children:v}),i.jsx(p,{swipeable:!0,showDots:!1,responsive:L,ssr:!1,autoPlay:!1,partialVisible:!0,keyBoardControl:!0,className:`${a<600?"carousel-cell":""}`,slidesToSlide:8,children:d(n)})]})}function q(){const{setSearchTerm:c}=S(),{setOpenMenu:v}=y(),{language:u}=U(),e=r.useMemo(()=>b(u),[u]),t=r.useMemo(()=>w(u),[u]),L=C("feautedMovieHome","moviesHome","movie"),[a,d]=r.useState(5),s=r.useMemo(()=>[{URL:e.popularMovies,title:"Popular Movies",isLarge:!0},{URL:t.comedySeries,title:"Comedy Series",isLarge:!0},{URL:t.topRatedSeries,title:"Best Voted Series",isLarge:!0},{URL:t.actionAdventureSeries,title:"Action & Adventure Series"},{URL:e.topRatedMovies,title:"Best Voted Movies",isLarge:!0},{URL:e.actionMovies,title:"Action Movies"},{URL:e.adventureMovies,title:"Adventure Movies",isLarge:!0},{URL:e.animationMovies,title:"Animation Movies",isLarge:!0},{URL:t.crimeSeries,title:"Crime Series",isLarge:!0},{URL:t.documentarySeries,title:"Documentary Series",isLarge:!0},{URL:e.comedyMovies,title:"Comedy Movies",isLarge:!0},{URL:e.crimeMovies,title:"Crime Movies",isLarge:!0},{URL:e.documentaryMovies,title:"Documentary Movies",isLarge:!0},{URL:t.dramaSeries,title:"Drama Series",isLarge:!0},{URL:e.dramaMovies,title:"Drama Movies",isLarge:!0},{URL:e.familyMovies,title:"Family Movies",isLarge:!0},{URL:e.fantasyMovies,title:"Fantasy Movies",isLarge:!0},{URL:e.historyMovies,title:"History Movies"},{URL:e.horrorMovies,title:"Horror Movies"},{URL:t.realitySeries,title:"Reality Series"},{URL:e.musicMovies,title:"Music Movies",isLarge:!0},{URL:e.mysteryMovies,title:"Mystery Movies",isLarge:!0},{URL:t.mysterySeries,title:"Mystery Series",isLarge:!0},{URL:e.romanceMovies,title:"Romance Movies",isLarge:!0},{URL:e.scienceFictionMovies,title:"Science Fiction Movies",isLarge:!0},{URL:t.warPoliticsSeries,title:"War Series",isLarge:!0},{URL:e.thrillerMovies,title:"Thriller Movies",isLarge:!0}],[e,t]);r.useEffect(()=>{v(!1),c("")},[]);const o=()=>{d(l=>Math.min(l+5,s.length))},n=f(()=>{o()});return i.jsxs("div",{className:"contenedorWindow",children:[i.jsx(x,{itemId:L==null?void 0:L.id,logoBuscar:!0,type:"movie"}),i.jsxs("div",{className:"contenedorItems",children:[i.jsx(H,{isLarge:!0,title:"My List"}),s.slice(0,a).map((l,m)=>i.jsxs(i.Fragment,{children:[m===a-2&&a<s.length&&i.jsx("div",{ref:n,style:{height:"50px",margin:"20px 0"}}),i.jsx(j,{URL:l.URL,title:l.title,isLarge:l.isLarge},m)]}))]})]})}export{q as default};
