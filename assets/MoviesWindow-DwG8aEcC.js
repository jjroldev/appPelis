import{f as g,r as i,b as R,a as f,j as s}from"./index-BnPToACK.js";import{u as d}from"./useFeaturedMovie--mntsaiB.js";import{B as p}from"./Banner-ByginS1C.js";import U from"./CarouselURL-BERR_5fO.js";import{g as y}from"./BarMenu-DtA6XHQf.js";import"./fetchData-DCFA1qTy.js";import"./useFavorites-OPOyU9ki.js";import"./SkeletonCarousel-CojWiGtF.js";/* empty css               */import"./CardItem-Bv_QuWfF.js";function I(){const a=d("feautedMovieMW","itemsBannerMovies","movie"),{language:n}=g(),e=i.useMemo(()=>y(n),[n]),{setOpenMenu:c}=R(),{setSearchTerm:m}=f();i.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),m(""),c(!1)},[]);const r=i.useMemo(()=>[{URL:e.popularMovies,title:"Popular Movies"},{URL:e.topRatedMovies,title:"Best Voted",isLarge:!0},{URL:e.actionMovies,title:"Movies of action"},{URL:e.adventureMovies,title:"Adventure on family",isLarge:!0},{URL:e.animationMovies,title:"Animation",isLarge:!0},{URL:e.comedyMovies,title:"Comedy",isLarge:!0},{URL:e.crimeMovies,title:"Crime",isLarge:!0},{URL:e.documentaryMovies,title:"Documentary",isLarge:!0},{URL:e.dramaMovies,title:"Drama",isLarge:!0},{URL:e.familyMovies,title:"Family",isLarge:!0},{URL:e.fantasyMovies,title:"Fantasy",isLarge:!0},{URL:e.historyMovies,title:"History"},{URL:e.horrorMovies,title:"Horror"},{URL:e.musicMovies,title:"Music",isLarge:!0},{URL:e.mysteryMovies,title:"Mystery",isLarge:!0},{URL:e.romanceMovies,title:"Romance",isLarge:!0},{URL:e.scienceFictionMovies,title:"Science Fiction",isLarge:!0},{URL:e.thrillerMovies,title:"Thriller",isLarge:!0}],[e]),[u,v]=i.useState(1),l=i.useRef(null);return i.useEffect(()=>{const o=new IntersectionObserver(L=>{L[0].isIntersecting&&v(M=>Math.min(M+7,r.length))},{rootMargin:"100px"}),t=l.current;return t&&o.observe(t),()=>{t&&o.unobserve(t)}},[r]),s.jsxs("div",{className:"contenedorWindow",children:[s.jsx(p,{itemId:a==null?void 0:a.id,type:"movie"}),s.jsxs("div",{className:"contenedorItems",children:[r.slice(0,u).map((o,t)=>s.jsx(U,{...o},t)),u<r.length&&s.jsx("div",{ref:l,style:{height:"120px",background:"transparent"}})]})]})}export{I as default};
