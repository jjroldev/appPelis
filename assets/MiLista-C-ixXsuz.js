import{u as h,a as x,b as j,r as d,c as p,g as f,j as a}from"./index-Deu4rx9d.js";import{C as F}from"./CardItem-Ljusztfa.js";import{u as N}from"./useFavorites-CFjh_g0W.js";import{B as l}from"./BarMenu-DKakb1fF.js";function y(){const{currentUser:e,currentPerfil:s}=h(),{setSearchTerm:v}=x(),{setOpenMenu:c}=j(),{handleRemoveFavorite:m}=N(),[i,r]=d.useState(!1),{data:o,isLoading:t}=p(`favorites-${e==null?void 0:e.id}-${s==null?void 0:s.id}`,()=>f(e==null?void 0:e.id,s==null?void 0:s.id),{enabled:!!(e!=null&&e.id)&&!!(s!=null&&s.id)});return d.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),c(!1),v("")},[]),t?a.jsxs(a.Fragment,{children:[a.jsx(l,{}),a.jsx("div",{className:"favorites",children:a.jsxs("div",{className:"contenedorFavoritas",children:[a.jsx("h2",{className:"tituloFavoritas",children:s==null?void 0:s.name.toUpperCase()}),a.jsx("div",{className:"favoritasContainerSpinner"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx(l,{}),a.jsxs("div",{className:"favorites",children:[a.jsxs("div",{className:"contenedorTituloFavoritas flex justify-between",children:[a.jsx("h2",{className:"tituloFavoritas",children:s==null?void 0:s.name.toUpperCase()}),a.jsx("span",{className:"material-symbols-outlined",onClick:()=>r(!i),children:"edit"})]}),a.jsx("div",{className:"contenedorFavoritas",children:a.jsxs("div",{className:`favoritasContainer ${(o==null?void 0:o.length)===0?"empty":""}`,children:[!t&&(o==null?void 0:o.map(n=>a.jsx(F,{item:n,isLarge:!0,doDelete:i,onRemoveFavorite:m},n.id))),(o==null?void 0:o.length)==0&&a.jsx("div",{className:"noFavorites",children:"No hay favoritas"})]})})]})]})}export{y as default};
