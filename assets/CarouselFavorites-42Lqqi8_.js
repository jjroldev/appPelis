import{u as v,c as h,g as c,r as n,j as l}from"./index-DDzo3EOS.js";import{C as x}from"./CardItem-DTGCo5zq.js";import{u as C}from"./useFavorites-BTZnImhT.js";import{r as j,S as w,C as F}from"./SkeletonCarousel-DVUdqp58.js";import{u as b}from"./BarMenu-Dwqd9mJW.js";function S({isLarge:e,title:d}){const{handleRemoveFavorite:r}=C(),a=b(),{currentPerfil:s,currentUser:o}=v(),{data:t,isLoading:m}=h(`favorites-${o==null?void 0:o.id}-${s==null?void 0:s.id}`,()=>c(o==null?void 0:o.id,s==null?void 0:s.id),{enabled:!!(o!=null&&o.id)&&!!(s!=null&&s.id)}),p=n.useMemo(()=>j(a>1e3?e:!1),[a,e]),f=n.useCallback(i=>i==null?void 0:i.map(u=>l.jsx(x,{item:u,isLarge:a>1e3?e:!1,onRemoveFavorite:r,doDelete:!0},u.id)),[a,e,r]);return m?l.jsx(w,{numItems:20,isLarge:a>1e3?e:!1,title:d}):t!=null&&t.length?l.jsxs("div",{className:"carousel",children:[l.jsx("h2",{className:"tituloCarousel",children:d}),l.jsx(F,{swipeable:!0,showDots:!1,responsive:p,ssr:!1,autoPlay:!1,partialVisible:!0,keyBoardControl:!0,className:`${a<600?"carousel-cell":""}`,slidesToSlide:8,children:f(t)})]}):null}export{S as default};
