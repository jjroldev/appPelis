import{r as a,j as e,B as x,A as b}from"./index-DOSkgKYQ.js";import{C as w}from"./CardMovie-BzTGgc55.js";import{B as g}from"./Banner-P8SApo5E.js";import{u as j}from"./useFetchMovies-CnRztU2m.js";function B({placeholder:s,onSubmit:r}){const[i,c]=a.useState(""),l=o=>{o.preventDefault(),r(i)};return e.jsx("form",{className:"flex items-center w-full max-w-sm mx-auto",onSubmit:l,children:e.jsxs("div",{className:"relative w-full",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),e.jsx("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:s,value:i,onChange:o=>c(o.target.value)}),e.jsx("button",{type:"submit",style:{display:"none"}})]})})}function D({language:s}){const[r,i]=a.useState(()=>{const t=localStorage.getItem(`nameMovie-${s}`);if(t){const{value:v,timestamp:f}=JSON.parse(t);if(new Date().getTime()-f<6e5)return v}return""}),[c,l]=a.useState(()=>{const t=localStorage.getItem(`featuredMovie-buscar-${s}`);return t?JSON.parse(t):null}),o=`${x}/discover/movie?api_key=${b}&language=${s}`,S=`${x}/search/movie?api_key=${b}&language=${s}&query=${r}`||o,{movies:u}=j(S,4,s),{movies:d}=j(o,6,s),m=a.useMemo(()=>u.filter(t=>t.backdrop_path),[u]),h=a.useMemo(()=>d.filter(t=>t.backdrop_path),[d]),n=m[0]||h[0]||c,N=t=>{i(t),localStorage.setItem(`nameMovie-${s}`,JSON.stringify({value:t,timestamp:new Date().getTime()}))};a.useEffect(()=>{n&&(l(n),localStorage.setItem(`featuredMovie-buscar-${s}`,JSON.stringify(n)))},[n,s]);const p=t=>t.map((v,f)=>e.jsx(w,{movie:v,language:s},f)),M=e.jsx("div",{className:"textoNoC",children:e.jsx("p",{className:"text-white",children:s==="es"?`No hay coincidencias de "${r}", pero estas son las películas más populares:`:`There are no matches for "${r}", but these are the most popular movies:`})}),y=e.jsx("div",{className:"w-full h-full min-h-screen bg-black flex items-center justify-center",children:e.jsx("div",{className:"spinner"})}),k=()=>u.length>0?e.jsx("div",{className:"contenedorPeliculasBuscar",children:p(m)}):r&&m.length===0?e.jsxs(e.Fragment,{children:[M,e.jsx("div",{className:"contenedorPeliculasBuscar",children:p(h)})]}):d.length>0?e.jsx("div",{className:"contenedorPeliculasBuscar",children:p(h)}):y;return e.jsxs("div",{className:"contenedor",children:[e.jsx(g,{movie:n,language:s,logoBuscar:!0,isShort:!0,isBuscar:!0}),e.jsx("div",{className:"contenedorBuscar",children:e.jsx(B,{placeholder:s==="es"?"Buscar películas":"Search Movies",onSubmit:N})}),k()]})}export{D as default};
