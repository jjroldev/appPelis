import{R as x,e as b,c as g,r as d,j as r}from"./index-Deu4rx9d.js";import{r as j,S as _,C as v}from"./SkeletonCarousel-CT8zCQPh.js";/* empty css               */import{f as w,t as R,C as S}from"./CardItem-Ljusztfa.js";import{u as k}from"./BarMenu-DKakb1fF.js";import{u as y}from"./useFavorites-CFjh_g0W.js";const O=x.memo(({title:t,isLarge:e=!1,item:s})=>{var u,c;const{handleAddFavorite:f}=y(),l=k(),{language:p}=b(),{data:a,isLoading:i}=g(`collection-${s==null?void 0:s.id}`,()=>{var o;return w(R((o=s==null?void 0:s.belongs_to_collection)==null?void 0:o.id,p))},{refetchOnWindowFocus:!1,enabled:!!((u=s==null?void 0:s.belongs_to_collection)!=null&&u.id)}),h=d.useMemo(()=>j(l>1e3?e:!1),[l,e]),C=d.useCallback(o=>o==null?void 0:o.map(n=>n.poster_path&&r.jsx(S,{item:n,isLarge:l>1e3?e:!1},n.id)),[l,e,f]);return i||!((c=a==null?void 0:a.parts)!=null&&c.length)?r.jsx(_,{numItems:6,isLarge:e,title:t}):s!=null&&s.belongs_to_collection?r.jsxs("div",{className:"carousel",children:[r.jsx("h2",{className:"tituloCarousel",children:t}),r.jsx(v,{swipeable:!0,showDots:!1,responsive:h,ssr:!1,infinite:!1,autoPlay:!1,keyBoardControl:!0,partialVisible:!0,className:`${l<600?"carousel-cell":""}`,slidesToSlide:1,focusOnSelect:!1,children:C(a==null?void 0:a.parts)})]}):null});export{O as default};
