import{u as v,a as c,b as h,g as m,r as x,j as a}from"./index-D2sbGu3I.js";import{B as n,C as j}from"./BarMenu-CXGq4Vqt.js";import{u as f}from"./useQuery-DaHBGjQS.js";import{u}from"./useFavorites-BfwIQ_63.js";function M(){const{currentUser:s,currentPerfil:e}=v(),{setSearchTerm:d}=c(),{setOpenMenu:r}=h(),{handleRemoveFavorite:l}=u(),{data:i,isLoading:o}=f(`favorites-${s==null?void 0:s.id}-${e==null?void 0:e.id}`,()=>m(s==null?void 0:s.id,e==null?void 0:e.id),{enabled:!!(s!=null&&s.id)&&!!(e!=null&&e.id)});return x.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),r(!1),d("")},[]),o?a.jsxs(a.Fragment,{children:[a.jsx(n,{}),a.jsx("div",{className:"favorites",children:a.jsxs("div",{className:"contenedorFavoritas",children:[a.jsx("h2",{className:"tituloFavoritas",children:"Mi Lista"}),a.jsx("div",{className:"favoritasContainerSpinner"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx(n,{}),a.jsxs("div",{className:"favorites",children:[a.jsx("h2",{className:"tituloFavoritas",children:"Mi Lista"}),a.jsx("div",{className:"contenedorFavoritas",children:a.jsxs("div",{className:`favoritasContainer ${(i==null?void 0:i.length)===0?"empty":""}`,children:[!o&&(i==null?void 0:i.map(t=>a.jsx(j,{item:t,isLarge:!0,doDelete:!0,onRemoveFavorite:l},t.id))),(i==null?void 0:i.length)==0&&a.jsx("div",{className:"noFavorites",children:"No hay favoritas"})]})})]})]})}export{M as default};
