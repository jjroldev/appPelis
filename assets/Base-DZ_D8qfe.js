const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-BVWnfaUh.js","assets/index-BPSd4uE0.js","assets/index-CxIML9Di.css","assets/Login-BPLyr-WJ.css","assets/Register-CgOuwUP-.js","assets/Register-v8vHrXI9.css"])))=>i.map(i=>d[i]);
import{r as s,j as e,S as a,_ as t}from"./index-BPSd4uE0.js";import{N as o}from"./NavBar-BjEkIwix.js";import"./useQuery-CLpCv9xd.js";const c=s.lazy(()=>t(()=>import("./Login-BVWnfaUh.js"),__vite__mapDeps([0,1,2,3]))),m=s.lazy(()=>t(()=>import("./Register-CgOuwUP-.js"),__vite__mapDeps([4,1,2,5])));function u({isLogin:l}){const[n,i]=s.useState(!1);return s.useEffect(()=>{const r=new Image;r.src="/appPelis/hero.png",r.onload=()=>{i(!0)}},[]),n?e.jsxs(e.Fragment,{children:[e.jsx(o,{logoBuscar:!1,logoGrande:!0,mostrarDesplegable:!1}),e.jsxs("div",{className:"loginContainer",children:[e.jsx("img",{src:"/appPelis/hero.png",alt:"",className:"heroImg"}),l?e.jsx(s.Suspense,{fallback:e.jsx(a,{}),children:e.jsx(c,{})}):e.jsx(s.Suspense,{fallback:e.jsx(a,{}),children:e.jsx(m,{})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{logoBuscar:!1,logoGrande:!0,mostrarDesplegable:!1}),e.jsx(a,{})]})}export{u as default};
