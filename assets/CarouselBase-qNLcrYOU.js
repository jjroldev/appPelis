import{R as p,f,c as h,r as u,j as o}from"./index-CPu5Wh8r.js";import{r as v,S as x,C as j}from"./SkeletonCarousel-C3fCA5Q3.js";/* empty css               */import{f as w}from"./fetchData-DCFA1qTy.js";import{u as C,g as R}from"./BarMenu-CL3COuFv.js";import{u as g}from"./useFavorites-DEh54i7_.js";import{r as F}from"./Banner-DS5-Svcz.js";import"./createSimplePaletteValueFilter-DiBWUW7V.js";const B=p.memo(({title:r,isLarge:e})=>{const{handleAddFavorite:n}=g(),s=C(),{language:t}=f(),{data:a,isLoading:m}=h(["itemsTR",t],()=>w(R(t).topRatedMovies),{refetchOnWindowFocus:!1}),c=u.useMemo(()=>{var i;return((i=a==null?void 0:a.results)==null?void 0:i.filter(l=>l.backdrop_path&&l.poster_path))||[]},[a]),d=u.useMemo(()=>v(s>1e3?e:!1),[s,e]);return m?o.jsx(x,{numItems:10,isLarge:s>1e3?e:!1,title:r}):o.jsxs("div",{className:"carousel",children:[o.jsx("h2",{className:"tituloCarousel",children:r}),o.jsx(j,{swipeable:!0,showDots:!1,responsive:d,ssr:!0,infinite:!0,autoPlay:!1,keyBoardControl:!0,partialVisible:!0,className:`${s<600?"carousel-cell":""}`,slidesToSlide:8,children:F(c,e,s,n)})]})});export{B as default};
