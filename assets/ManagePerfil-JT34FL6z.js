import{u,d as x,a as g,r as t,f as j,b as P,h as N,j as e,S as v}from"./index-D-k-lJ28.js";function b(){const{currentUser:s,setCurrentPerfil:d}=u(),n=x(),{setOpenMenu:c}=g(),[a,r]=t.useState(!1);t.useEffect(()=>{c(!1)},[]);const o=j(),{data:l=[],isLoading:f}=P(`perfiles-${s==null?void 0:s.id}`,()=>N(s==null?void 0:s.id),{enabled:!!(s!=null&&s.id)});t.useEffect(()=>{o.invalidateQueries(`perfiles-${s==null?void 0:s.id}`)},[]);const h=i=>{d(i),n(a?`/editProfile/${i.id}`:"/home")},m=()=>{r(!a)};return f?e.jsx(v,{}):e.jsx("div",{className:"containerPerfiles",children:e.jsxs("div",{className:"PerfilesExistentesContainer",children:[e.jsx("h2",{className:"tituloPerfiles",children:"Who's watching?"}),e.jsxs("div",{className:"perfiles",children:[l.map(i=>e.jsxs("div",{className:"containerP",onClick:()=>h(i),children:[e.jsxs("div",{className:"contenedorPerfil",children:[e.jsx("img",{className:"perfil-img relative",src:`/appPelis/${i.imagen}`,alt:""}),a&&e.jsx("div",{className:"containerEdit absolute top-0 right-0 w-full h-full",children:e.jsx("i",{className:"fa-solid fa-pencil"})})]}),e.jsx("h4",{className:"nombrePerfil",children:i.name})]},i.id)),l.length<5&&e.jsxs("div",{className:"containerP",onClick:()=>n("/createProfile"),children:[e.jsx("div",{className:"contenedorPerfil",children:e.jsx("div",{className:"crearPerfilDiv bg-gray-800 w-full h-full",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsx("h4",{className:"nombrePerfil",children:"Add new"})]})]}),e.jsx("div",{className:"container-button-crearProfile p-2",children:e.jsx("button",{className:`buttonPerfiles bg-gray-800 ${l.length?"":"disabled-button-MP"}`,onClick:m,disabled:!l.length,children:a?"Done":"Edit profile"})})]})})}export{b as default};
