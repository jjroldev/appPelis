import{e as f,r as s,a as R,j as i,L as S}from"./index-R-ACXzHi.js";import{u as L}from"./useFeaturedMovie-CnwHSMX5.js";import{B as U}from"./Banner-BvAyTyhP.js";import{a as y}from"./fetchData-BBqYyPh8.js";import g from"./CarouselURL-DEin-Mf3.js";import"./CardItem-CmTgwErv.js";import"./useFavorites-BDO4PfMt.js";import"./useWindowWidth-WSmaT3FN.js";import"./BarMenu-CzB2R5lY.js";import"./DefaultPropsProvider-37mQqvFH.js";import"./Skeleton-Dsq3x6p0.js";import"./CarouselURL-ygqgeQQI.js";/* empty css               */import"./SkeletonCarousel-PD1HT1Lh.js";function A(){const a=L("feautedSerieSW","itemsBannerSeries","serie"),{language:n}=f(),e=s.useMemo(()=>y(n),[n]),{setOpenMenu:c}=R();s.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),c(!1)},[]);const o=s.useMemo(()=>[{URL:e.popularSeries,title:"Popular Series"},{URL:e.topRatedSeries,title:"Best Voted"},{URL:e.actionAdventureSeries,title:"Series of action and adventure"},{URL:e.familySeries,title:"Series for watch family"},{URL:e.animationSeries,title:"Animation series"},{URL:e.comedySeries,title:"Comedy series"},{URL:e.crimeSeries,title:"Crime series"},{URL:e.documentarySeries,title:"Documentary series"},{URL:e.dramaSeries,title:"Drama series"},{URL:e.sciFiFantasySeries,title:"Fantasy series"},{URL:e.kidsSeries,title:"Kids series"},{URL:e.realitySeries,title:"Reality series"},{URL:e.mysterySeries,title:"Mystery series"},{URL:e.warPoliticsSeries,title:"Series of war"}],[e]),[l,u]=s.useState(5),m=s.useRef(null);return s.useEffect(()=>{const r=new IntersectionObserver(d=>{d[0].isIntersecting&&u(p=>Math.min(p+7,o.length))},{rootMargin:"450px"}),t=m.current;return t&&r.observe(t),()=>{t&&r.unobserve(t)}},[o]),i.jsxs("div",{className:"contenedorWindow",children:[i.jsx(U,{itemId:a==null?void 0:a.id,type:"serie"}),i.jsxs("div",{className:"contenedorItems",children:[o.slice(0,l).map((r,t)=>i.jsx(g,{isLarge:!0,URL:r.URL,title:r.title},t)),l<o.length&&i.jsx("div",{ref:m,style:{height:"200px",background:"transparent"},children:i.jsx(S,{})})]})]})}export{A as default};
