import{j as s,R as p,r as m}from"./index-CtKld5yW.js";import{S as u,C as d}from"./Banner-DCZKunw0.js";import{C as x}from"./CardMovie-BLNxokHc.js";import{u as h}from"./useFetchMovies-CTnz18k2.js";function b({isLarge:a}){return s.jsx("div",{className:`contenedor-poster ${a?"large":""}`,children:s.jsx("div",{className:`cardContainerImage ${a?"backdrop":"poster"}`,children:s.jsx(u,{width:"100%",height:"100%",variant:"rectangular",sx:{bgcolor:"grey.900"}})})})}function f({isLarge:a,numMovies:l}){const e={desktop:{breakpoint:{max:3e3,min:1024},items:a?6:8,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:768},items:5,slidesToSlide:5},mobile:{breakpoint:{max:767,min:464},items:4,slidesToSlide:4}},t=i=>Array.from({length:i}).map((n,r)=>s.jsx(b,{isLarge:a},r));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"carousel",children:s.jsx(d,{swipeable:!1,draggable:!1,showDots:!1,responsive:e,ssr:!0,infinite:!0,autoPlay:!1,className:"carousel-react",children:t(l)})})})}const N=p.memo(({URL:a,title:l,isLarge:e})=>{const{movies:t,isLoading:i}=h(a,3),n=m.useCallback(c=>c.map(o=>(e?o.backdrop_path:o.poster_path)?s.jsx(x,{movie:o,isLarge:e},o.id):null),[e]),r=m.useMemo(()=>({desktop:{breakpoint:{max:3e3,min:1281},items:e?5:8,slidesToSlide:e?4:7},tablet:{breakpoint:{max:1280,min:769},items:e?4:6,slidesToSlide:e?3:5},mobileLarge:{breakpoint:{max:768,min:481},items:e?3:4,slidesToSlide:e?2:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}}),[e]);return s.jsxs("div",{className:"carousel",children:[s.jsx("h2",{className:"tituloCarousel",children:l}),t.length>0?s.jsx(d,{swipeable:!1,draggable:!1,showDots:!1,responsive:r,ssr:!0,infinite:!0,autoPlay:!1,className:"carousel-react",children:n(t)}):s.jsx(f,{numMovies:e?6:8,isLarge:e||!1})]})});export{N as default};
