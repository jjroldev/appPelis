import{R as N,c as C,r,j as s}from"./index-B4y0dzn2.js";import{U as v,a as M}from"./endPoints-D6Ym8Q8U.js";const $=N.memo(({movie:e,isLarge:n,doDelete:u=!1,onRemoveFavorite:c,onAddFavorite:l})=>{const d=C(),t=r.useRef(null),[f,p]=r.useState(!1),[o,h]=r.useState(!1),m=r.useCallback(()=>{d("/info",{state:{movie:e}})},[d,e]),x=a=>{a.stopPropagation(),c&&c(e)},b=a=>{a.stopPropagation(),l&&l(e)};r.useEffect(()=>{const a=new IntersectionObserver(([i])=>{i.isIntersecting&&p(!0)},{threshold:.01});return t.current&&a.observe(t.current),()=>{t.current&&a.unobserve(t.current)}},[]);function j({imageLoaded:a}){return s.jsx("img",{src:n?`${v}${e.backdrop_path}`:`${M}${e.poster_path}`,alt:e.title,onLoad:()=>h(!0),className:`main-image ${a?"visible":"hidden"}`})}function g({isLarge:a,doDelete:i}){return s.jsxs("div",{className:"details-cardMovie",children:[s.jsx("h2",{className:"titulo-cardMovie",children:a&&(e.title.includes(":")?e.title.split(":")[0]:e.title)}),s.jsxs("div",{className:"play-button",children:[s.jsx("button",{onClick:b,className:i?"heartVisible corazon":"corazon",children:s.jsx("i",{className:"fa-solid fa-heart"})}),i&&s.jsx("button",{className:"corazon",onClick:x,children:s.jsx("i",{className:"fa-solid fa-trash"})})]})]})}return s.jsx("div",{ref:t,className:`contenedor-poster ${n?"large":""}`,onClick:m,children:s.jsxs("div",{className:`cardContainerImage ${n?"backdrop":"poster"}`,children:[s.jsx("div",{className:`fondoCardMovie h-full w-full absolute inset-0 ${o?"opacity-0":"opacity-100"} transition-opacity duration-500`}),f&&s.jsx(j,{imageLoaded:o}),o&&s.jsx(g,{isLarge:n,doDelete:u})]})})});export{$ as C};
