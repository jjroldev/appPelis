import{u as m,a as r,b as h,c,g as x,r as j,j as a}from"./index-BnPToACK.js";import{C as p}from"./CardItem-Bv_QuWfF.js";import{u as F}from"./useFavorites-OPOyU9ki.js";import{B as d}from"./BarMenu-DtA6XHQf.js";function C(){const{currentUser:o,currentPerfil:s}=m(),{setSearchTerm:n}=r(),{setOpenMenu:v}=h(),{handleRemoveFavorite:l}=F(),{data:e,isLoading:i}=c(`favorites-${o==null?void 0:o.id}-${s==null?void 0:s.id}`,()=>x(o==null?void 0:o.id,s==null?void 0:s.id),{enabled:!!(o!=null&&o.id)&&!!(s!=null&&s.id)});return j.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),v(!1),n("")},[]),i?a.jsxs(a.Fragment,{children:[a.jsx(d,{}),a.jsx("div",{className:"favorites",children:a.jsxs("div",{className:"contenedorFavoritas",children:[a.jsx("h2",{className:"tituloFavoritas",children:s==null?void 0:s.name.toUpperCase()}),a.jsx("div",{className:"favoritasContainerSpinner"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx(d,{}),a.jsxs("div",{className:"favorites",children:[a.jsx("h2",{className:"tituloFavoritas",children:s==null?void 0:s.name.toUpperCase()}),a.jsx("div",{className:"contenedorFavoritas",children:a.jsxs("div",{className:`favoritasContainer ${(e==null?void 0:e.length)===0?"empty":""}`,children:[!i&&(e==null?void 0:e.map(t=>a.jsx(p,{item:t,isLarge:!0,doDelete:!0,onRemoveFavorite:l},t.id))),(e==null?void 0:e.length)==0&&a.jsx("div",{className:"noFavorites",children:"No hay favoritas"})]})})]})]})}export{C as default};
