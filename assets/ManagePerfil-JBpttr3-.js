import{u,d as x,b as j,r as t,e as P,c as g,i as N,j as e,S as v}from"./index-hPdv0EIg.js";function b(){const{currentUser:s,setCurrentPerfil:c}=u(),n=x(),{setOpenMenu:d}=j(),[a,r]=t.useState(!1);t.useEffect(()=>{d(!1)},[]);const o=P(),{data:l=[],isLoading:f}=g(`perfiles-${s==null?void 0:s.id}`,()=>N(s==null?void 0:s.id),{enabled:!!(s!=null&&s.id)});t.useEffect(()=>{o.invalidateQueries(`perfiles-${s==null?void 0:s.id}`)},[]);const m=i=>{c(i),n(a?`/editProfile/${i.id}`:"/home")},h=()=>{r(!a)};return f?e.jsx(v,{}):e.jsx("div",{className:"containerPerfiles",children:e.jsxs("div",{className:"PerfilesExistentesContainer",children:[e.jsx("h2",{className:"tituloPerfiles",children:"Who's watching?"}),e.jsxs("div",{className:"perfiles",children:[l.map(i=>e.jsxs("div",{className:"containerP",onClick:()=>m(i),children:[e.jsx("div",{className:"contenedorPerfil",children:e.jsx("img",{className:"perfil-img",src:`/appPelis/${i.imagen}`,alt:""})}),e.jsx("h4",{className:"nombrePerfil",children:i.name}),a&&e.jsx("div",{className:"containerEdit",children:e.jsx("i",{className:"fa-solid fa-pencil"})})]},i.id)),l.length<5&&e.jsxs("div",{className:"containerP",onClick:()=>n("/createProfile"),children:[e.jsx("div",{className:"contenedorPerfil",children:e.jsx("div",{className:"crearPerfilDiv bg-gray-800 w-full h-full",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsx("h4",{className:"nombrePerfil",children:"Add new"})]})]}),e.jsx("div",{className:"container-button-crearProfile p-2",children:e.jsx("button",{className:`buttonPerfiles bg-gray-800 ${l.length?"":"disabled-button-MP"}`,onClick:h,disabled:!l.length,children:a?"Done":"Edit profile"})})]})})}export{b as default};
