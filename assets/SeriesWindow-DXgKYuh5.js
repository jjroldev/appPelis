import{f as S,r,a as p,b as g,j as t}from"./index-B7pAfY9R.js";import{u as R}from"./useFeaturedMovie-BleKxo3B.js";import{B as U}from"./Banner-KExfSvfR.js";import{b as y}from"./BarMenu-iRU_Hb-w.js";import h from"./CarouselURL-BiOy-jvY.js";import"./fetchData-DCFA1qTy.js";import"./useFavorites-C2G7LU1D.js";import"./SkeletonCarousel-DpGprDPh.js";/* empty css               */function E(){const o=R("feautedSerieSW","itemsBannerSeries","serie"),{language:n}=S(),e=r.useMemo(()=>y(n),[n]),{setSearchTerm:c}=p(),{setOpenMenu:m}=g();r.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),c(""),m(!1)},[]);const i=r.useMemo(()=>[{URL:e.popularSeries,title:"Popular Series"},{URL:e.topRatedSeries,title:"Best Voted",isLarge:!0},{URL:e.actionAdventureSeries,title:"Series of action and adventure"},{URL:e.familySeries,title:"Series for watch family",isLarge:!0},{URL:e.animationSeries,title:"Animation series",isLarge:!0},{URL:e.comedySeries,title:"Comedy series",isLarge:!0},{URL:e.crimeSeries,title:"Crime series",isLarge:!0},{URL:e.documentarySeries,title:"Documentary series",isLarge:!0},{URL:e.dramaSeries,title:"Drama series",isLarge:!0},{URL:e.sciFiFantasySeries,title:"Fantasy series",isLarge:!0},{URL:e.kidsSeries,title:"Kids series"},{URL:e.realitySeries,title:"Reality series"},{URL:e.mysterySeries,title:"Mystery series",isLarge:!0},{URL:e.warPoliticsSeries,title:"Series of war",isLarge:!0}],[e]),[u,L]=r.useState(1),l=r.useRef(null);return r.useEffect(()=>{const a=new IntersectionObserver(d=>{d[0].isIntersecting&&L(f=>Math.min(f+7,i.length))},{rootMargin:"100px"}),s=l.current;return s&&a.observe(s),()=>{s&&a.unobserve(s)}},[i]),t.jsxs("div",{className:"contenedorWindow",children:[t.jsx(U,{itemId:o==null?void 0:o.id,type:"serie"}),t.jsxs("div",{className:"contenedorItems",children:[i.slice(0,u).map((a,s)=>t.jsx(h,{...a},s)),u<i.length&&t.jsx("div",{ref:l,style:{height:"120px",background:"transparent"}})]})]})}export{E as default};
