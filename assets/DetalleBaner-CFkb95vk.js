import{r as a,j as s}from"./index-BAD-sRFl.js";import{C as w}from"./CarouselBoostrap-BIoOH9Ja.js";import{C as E,b as N}from"./ResponsiveCarrousel-C7iRiffW.js";import{c as g,d as _}from"./endPoints-D6Ym8Q8U.js";import{u as D}from"./useQuery-CVUa8tUW.js";import{f as b}from"./fetchData-DCFA1qTy.js";import"./useMergedRefs--FAku9UZ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./Transition-CtoWUrcm.js";import"./NavBar-DU7vfCct.js";function $({movie:r}){const{data:t}=D(`providers-${r==null?void 0:r.id}`,()=>b(g(r==null?void 0:r.id).providers)),[i,u]=a.useState([]),p=(e=[])=>e.map(n=>s.jsx("li",{children:s.jsx("span",{children:n.name})},n.id)),[o,f]=a.useState(window.innerWidth);a.useEffect(()=>{const e=()=>f(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),a.useEffect(()=>{if(t!=null&&t.results){const e=[],n=new Set;for(const j in t.results){const d=t.results[j];["flatrate","buy","rent"].forEach(c=>{d[c]&&d[c].forEach(l=>{n.has(l.provider_name)||(n.add(l.provider_name),e.push(l))})})}u(e)}},[t]);const x=e=>e?s.jsx(E,{swipeable:!0,draggable:!0,showDots:!1,responsive:N,ssr:!0,infinite:!0,keyBoardControl:!0,className:"carouselProviders",children:e.map(n=>s.jsx("img",{className:"provedorLogo",src:_+n.logo_path,alt:n.provider_name},n.provider_id))}):null,h=()=>s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"movieDetailsBanner flex flex-col",children:[(r==null?void 0:r.overview)&&s.jsx("p",{className:"overview",children:r==null?void 0:r.overview.slice(0,(r==null?void 0:r.overview.indexOf("."))+1)}),s.jsxs("div",{className:"bannerDetails flex flex-row",children:[s.jsxs("span",{children:["TMDB ",r==null?void 0:r.vote_average.toFixed(1)]}),s.jsx("span",{children:r==null?void 0:r.release_date.split("-")[0]}),s.jsx("span",{children:r!=null&&r.runtime?`${Math.floor((r==null?void 0:r.runtime)/60)}h ${(r==null?void 0:r.runtime)%60}min`:"Runtime no disponible"})]}),s.jsx("div",{children:s.jsx("ul",{className:"generosBanner flex flex-row",children:p(r==null?void 0:r.genres)})})]}),o>=900&&s.jsxs("div",{className:"provedores-container posters-continer-banner",children:[s.jsx("div",{className:"postersInfo",children:s.jsx(w,{movie:r,isPoster:!0})}),x(i)]})]});return s.jsx(h,{})}export{$ as default};
