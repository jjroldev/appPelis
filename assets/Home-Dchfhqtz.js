const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MovieSwiper-U2ZFmmK2.js","assets/index-Cynp1_es.js","assets/index-BSfXK01q.css","assets/Banner-B30MDJs-.js","assets/NavBar-CvR4d2bz.js","assets/NavBar-NSOGrTuV.css","assets/DefaultPropsProvider-Bb0hrgOA.js","assets/Banner-CsJm1bEt.css","assets/CardMovie-Cht4IyIr.js","assets/CardMovie-ClgOYHxp.css","assets/useFetchMovies-CS4I8i7w.js","assets/MovieSwiper-CFQx85Hq.css"])))=>i.map(i=>d[i]);
import{u as g,r as u,j as e,R as M,_ as d}from"./index-Cynp1_es.js";import{B as x}from"./Banner-B30MDJs-.js";import{u as j}from"./useFetchMovies-CS4I8i7w.js";import{g as R}from"./endPoints-C4nf1Dw4.js";import"./NavBar-CvR4d2bz.js";import"./DefaultPropsProvider-Bb0hrgOA.js";const i=M.lazy(()=>d(()=>import("./MovieSwiper-U2ZFmmK2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function S(){const{language:s}=g(),t=R(s),{movies:r}=j(t[0].actionMovies,2),[n,c]=u.useState(null);return u.useEffect(()=>{const m=sessionStorage.getItem(`featuredMovie-home-${s}`),v=new Date().getTime(),L=-5,l=new Date(v+L*3600*1e3).getTime();if(m){const{movie:a,timestamp:o}=JSON.parse(m);if(l-o<36e5){c(a);return}}if(r&&r.length>0){const a=Math.floor(Math.random()*r.length),o=r[a];c(o),sessionStorage.setItem(`featuredMovie-home-${s}`,JSON.stringify({movie:o,timestamp:l}))}},[r,s]),r.length===0?e.jsx("div",{className:"w-full h-screen bg-black flex items-center justify-center",children:e.jsx("div",{className:"spinner"})}):e.jsx("div",{className:"contenedorHome",children:e.jsxs(e.Fragment,{children:[n&&e.jsx(x,{movie:n,logoBuscar:!0,isShort:!1}),e.jsxs("div",{className:"contenedorPeliculas",children:[e.jsx(i,{URL:t[0].popularMovies,title:s==="es"?"Películas Populares":"Popular Movies"}),e.jsx(i,{URL:t[0].topRatedMovies,title:s==="es"?"Mejores Votadas":"Best Voted",isLarge:!0}),e.jsx(i,{URL:t[0].upcomingMovies,title:s==="es"?"Próximamente":"Upcoming",isLarge:!0}),e.jsx(i,{URL:t[0].actionMovies,title:s==="es"?"Acción":"Action"}),e.jsx(i,{URL:t[0].adventureMovies,title:s==="es"?"Aventura":"Adventure",isLarge:!0}),e.jsx(i,{URL:t[0].animationMovies,title:s==="es"?"Animación":"Animation",isLarge:!0}),e.jsx(i,{URL:t[0].comedyMovies,title:s==="es"?"Comedia":"Comedy",isLarge:!0}),e.jsx(i,{URL:t[0].crimeMovies,title:s==="es"?"Crimen":"Crime",isLarge:!0}),e.jsx(i,{URL:t[0].documentaryMovies,title:s==="es"?"Documentales":"Documentary",isLarge:!0}),e.jsx(i,{URL:t[0].dramaMovies,title:"Drama",isLarge:!0}),e.jsx(i,{URL:t[0].familyMovies,title:s==="es"?"Familia":"Family",isLarge:!0}),e.jsx(i,{URL:t[0].fantasyMovies,title:s==="es"?"Fantasía":"Fantasy",isLarge:!0}),e.jsx(i,{URL:t[0].historyMovies,title:s==="es"?"Historia":"History"}),e.jsx(i,{URL:t[0].horrorMovies,title:s==="es"?"Terror":"Horror"}),e.jsx(i,{URL:t[0].musicMovies,title:s==="es"?"Música":"Music",isLarge:!0}),e.jsx(i,{URL:t[0].mysteryMovies,title:s==="es"?"Misterio":"Mystery",isLarge:!0}),e.jsx(i,{URL:t[0].romanceMovies,title:s==="es"?"Románticas":"Romance",isLarge:!0}),e.jsx(i,{URL:t[0].scienceFictionMovies,title:s==="es"?"Ciencia Ficción":"Science Fiction",isLarge:!0}),e.jsx(i,{URL:t[0].thrillerMovies,title:s==="es"?"Suspenso":"Thriller",isLarge:!0})]})]})})}export{S as default};
