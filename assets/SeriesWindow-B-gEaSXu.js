import{e as f,r as s,a as R,j as r}from"./index-BcTlN2JH.js";import{u as S}from"./useFeaturedMovie-BNEWkdy0.js";import{B as L}from"./Banner-CbmZcy2c.js";import{a as U}from"./fetchData-DSUDSUsj.js";import y from"./CarouselURL-S6x81YGA.js";import"./CardItem-eE-v0onH.js";import"./useFavorites-BHn3Q_XA.js";import"./useWindowWidth-CaJjiSF3.js";import"./BarMenu-Be2yZwds.js";import"./DefaultPropsProvider-CmW4jGOF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Skeleton-CQNm__vs.js";import"./CarouselURL-740kWICK.js";/* empty css               */import"./SkeletonCarousel-rG0TR_HH.js";function A(){const a=S("feautedSerieSW","itemsBannerSeries","serie"),{language:n}=f(),e=s.useMemo(()=>U(n),[n]),{setOpenMenu:c}=R();s.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),c(!1)},[]);const o=s.useMemo(()=>[{URL:e.popularSeries,title:"Popular Series"},{URL:e.topRatedSeries,title:"Best Voted"},{URL:e.actionAdventureSeries,title:"Series of action and adventure"},{URL:e.familySeries,title:"Series for watch family"},{URL:e.animationSeries,title:"Animation series"},{URL:e.comedySeries,title:"Comedy series"},{URL:e.crimeSeries,title:"Crime series"},{URL:e.documentarySeries,title:"Documentary series"},{URL:e.dramaSeries,title:"Drama series"},{URL:e.sciFiFantasySeries,title:"Fantasy series"},{URL:e.kidsSeries,title:"Kids series"},{URL:e.realitySeries,title:"Reality series"},{URL:e.mysterySeries,title:"Mystery series"},{URL:e.warPoliticsSeries,title:"Series of war"}],[e]),[l,u]=s.useState(5),m=s.useRef(null);return s.useEffect(()=>{const i=new IntersectionObserver(p=>{p[0].isIntersecting&&u(d=>Math.min(d+7,o.length))},{rootMargin:"450px"}),t=m.current;return t&&i.observe(t),()=>{t&&i.unobserve(t)}},[o]),r.jsxs("div",{className:"contenedorWindow",children:[r.jsx(L,{itemId:a==null?void 0:a.id,type:"serie"}),r.jsxs("div",{className:"contenedorItems",children:[o.slice(0,l).map((i,t)=>r.jsx(y,{isLarge:!0,URL:i.URL,title:i.title},t)),l<o.length&&r.jsx("div",{ref:m,style:{height:"200px",background:"transparent"}})]})]})}export{A as default};
