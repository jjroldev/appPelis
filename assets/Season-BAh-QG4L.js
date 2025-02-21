const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Episode-HA1zdHBN.js","assets/index-3gWpyPpj.js","assets/index-CxXBlUI9.css","assets/BarMenu-D89j1Pj6.js","assets/BarMenu-jNW-FVTq.css","assets/fetchData-DCFA1qTy.js","assets/Banner-DvXccArR.js","assets/useFavorites-D_pO7-_H.js","assets/Banner-CEu9pKUk.css","assets/Episode-Dj9JIt1X.css"])))=>i.map(i=>d[i]);
import{r as c,j as t,f as R,c as _,_ as $}from"./index-3gWpyPpj.js";import{f as E}from"./fetchData-DCFA1qTy.js";import{u as N,p as M,m as j}from"./BarMenu-D89j1Pj6.js";import{g as U,a as A,k,h as C,s as D,m as F,u as I,c as L,b as W,e as X}from"./DefaultPropsProvider-DayErvz-.js";function O(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(e){return parseFloat(e)}function T(e){return A("MuiSkeleton",e)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const V=e=>{const{classes:s,variant:n,animation:i,hasChildren:r,width:d,height:a}=e;return W({root:["root",n,i,r&&"withChildren",r&&!d&&"fitContent",r&&!a&&"heightAuto"]},T,s)},x=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,b=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,B=typeof x!="string"?C`
        animation: ${x} 2s ease-in-out 0.5s infinite;
      `:null,K=typeof b!="string"?C`
        &::after {
          animation: ${b} 2s linear 0.5s infinite;
        }
      `:null,z=D("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:n}=e;return[s.root,s[n.variant],n.animation!==!1&&s[n.animation],n.hasChildren&&s.withChildren,n.hasChildren&&!n.width&&s.fitContent,n.hasChildren&&!n.height&&s.heightAuto]}})(F(({theme:e})=>{const s=O(e.shape.borderRadius)||"px",n=P(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:X(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${s}/${Math.round(n/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:i})=>i.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:i})=>i.hasChildren&&!i.width,style:{maxWidth:"fit-content"}},{props:({ownerState:i})=>i.hasChildren&&!i.height,style:{height:"auto"}},{props:{animation:"pulse"},style:B||{animation:`${x} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:K||{"&::after":{animation:`${b} 2s linear 0.5s infinite`}}}]}})),Q=c.forwardRef(function(s,n){const i=I({props:s,name:"MuiSkeleton"}),{animation:r="pulse",className:d,component:a="span",height:h,style:m,variant:f="text",width:g,...p}=i,u={...i,animation:r,component:a,variant:f,hasChildren:!!p.children},v=V(u);return t.jsx(z,{as:a,ref:n,className:L(v.root,d),ownerState:u,...p,style:{width:g,height:h,...m}})});function y(){return t.jsx("div",{className:"container-episode-skeleton",children:t.jsx(Q,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:"100%",height:"100%"})})}const q=c.lazy(()=>$(()=>import("./Episode-HA1zdHBN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])));function Z({series:e,numeroTemporadas:s}){var p,u,v;const{language:n}=R(),i=N(),[r,d]=c.useState(1),{data:a,isLoading:h}=_(`seasons-${e.id}-${r}`,()=>E(M(e.id,r,n)),{enabled:e.number_of_seasons!=0}),[m,f]=c.useState(5),g=c.useRef(null);return c.useEffect(()=>{f(5)},[r]),c.useEffect(()=>{if(!(a!=null&&a.episodes))return;const l=new IntersectionObserver(S=>{S[0].isIntersecting&&f(w=>Math.min(w+8,a.episodes.length))},{rootMargin:"450px"}),o=g.current;return o&&l.observe(o),()=>{o&&l.unobserve(o)}},[a==null?void 0:a.episodes]),e.number_of_seasons?t.jsxs("div",{className:`containerSeason ${i>=1260&&"CSSinMargin"}`,children:[t.jsxs("div",{className:"contenedorSeleccionSeason gap-1",children:[t.jsx("h3",{className:"tituloSerie",children:e.name}),t.jsx("select",{onChange:l=>d(Number(l.target.value)),children:s&&[...Array(s)].map((l,o)=>t.jsxs("option",{value:o+1,children:["Temporada ",o+1]},o))})]}),t.jsx("div",{className:"contenedorEpisodios",children:!a||h?t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsx(y,{}),t.jsx(y,{})]}):((p=a==null?void 0:a.episodes)==null?void 0:p.length)===0?t.jsx(j.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:t.jsx("div",{className:"w-full text-center",children:t.jsx("p",{className:"overcoming text-center",children:"overcoming..."})})}):t.jsxs(t.Fragment,{children:[(u=a==null?void 0:a.episodes)==null?void 0:u.slice(0,m).map((l,o)=>t.jsx(j.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:l&&t.jsx(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(q,{episode:l,serie_backdrop:e.backdrop_path})})},o)),m<((v=a==null?void 0:a.episodes)==null?void 0:v.length)&&t.jsx("div",{ref:g,style:{height:"200px",background:"transparent"}})]})})]}):null}export{Z as default};
