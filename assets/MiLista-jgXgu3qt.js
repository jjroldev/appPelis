import{u as c,a as x,r as n,b as h,g as j,j as a}from"./index-BcTlN2JH.js";import{C as p}from"./CardItem-eE-v0onH.js";import{u as f}from"./useFavorites-BHn3Q_XA.js";import l from"./BarMenu-Be2yZwds.js";import"./fetchData-DSUDSUsj.js";import"./useWindowWidth-CaJjiSF3.js";function y(){const{currentUser:e,currentPerfil:s}=c(),{setOpenMenu:m}=x(),{handleRemoveFavorite:v}=f(),[i,r]=n.useState(!1),{data:o,isLoading:t}=h(`favorites-${e==null?void 0:e.id}-${s==null?void 0:s.id}`,()=>j(e==null?void 0:e.id,s==null?void 0:s.id),{enabled:!!(e!=null&&e.id)&&!!(s!=null&&s.id)});return n.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),m(!1)},[]),t?a.jsxs(a.Fragment,{children:[a.jsx(l,{}),a.jsx("div",{className:"favorites",children:a.jsxs("div",{className:"contenedorFavoritas",children:[a.jsx("h2",{className:"tituloFavoritas",children:s==null?void 0:s.name.toUpperCase()}),a.jsx("div",{className:"favoritasContainerSpinner"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx(l,{}),a.jsxs("div",{className:"favorites",children:[a.jsxs("div",{className:"contenedorTituloFavoritas flex justify-between",children:[a.jsx("h2",{className:"tituloFavoritas",children:s==null?void 0:s.name.toUpperCase()}),a.jsx("span",{className:"material-symbols-outlined",onClick:()=>r(!i),children:"edit"})]}),a.jsx("div",{className:"contenedorFavoritas",children:a.jsxs("div",{className:`favoritasContainer ${(o==null?void 0:o.length)===0?"empty":""}`,children:[!t&&(o==null?void 0:o.map(d=>a.jsx(p,{item:d,isLarge:!0,doDelete:i,onRemoveFavorite:v},d.id))),(o==null?void 0:o.length)==0&&a.jsx("div",{className:"noFavorites",children:"No hay favoritas"})]})})]})]})}export{y as default};
