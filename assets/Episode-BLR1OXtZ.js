import{o as N,r as h,d as b,c as v,j as s,m as E}from"./index-CPu5Wh8r.js";import{u as _,r as I,i as y,s as L}from"./BarMenu-CL3COuFv.js";import{f as u}from"./fetchData-DCFA1qTy.js";import{f as x,g as f}from"./Banner-DS5-Svcz.js";import"./useFavorites-DEh54i7_.js";import"./createSimplePaletteValueFilter-DiBWUW7V.js";function V({episode:e,serie_backdrop:n}){var c,m;const{seriesId:r}=N(),[l,g]=h.useState(null),i=_(),p=b(),{data:a,isLoading:j}=v(`images-${r}`,()=>u(y(r)),{enabled:!!r&&e.still_path==null,staleTime:1e3*60*30,cacheTime:1e3*60*30});h.useEffect(()=>{var d;(d=a==null?void 0:a.backdrops)!=null&&d.length&&l===null&&g(Math.floor(Math.random()*a.backdrops.length))},[a,l]);const{data:t}=v(`videos-${e.id}`,()=>u(L(r,e.season_number,e.episode_number)));if(j)return null;const o=e.still_path?e.still_path:(c=a==null?void 0:a.backdrops)!=null&&c.length&&l!==null?(m=a==null?void 0:a.backdrops[l])==null?void 0:m.file_path:n,w=()=>{f(t)?p(`/watch/${f(t)}`):E.error("No existe un trailer para este episodio")};return s.jsxs("div",{className:"flex flex-col containerEpisode",onClick:w,children:[s.jsxs("div",{className:"container-episode",children:[s.jsxs("div",{className:"wrapper-img-episode relative",children:[o&&s.jsx("img",{src:I+o||n,alt:e.name}),i<=580&&s.jsx("div",{className:"containerPlayMobile absolute",children:s.jsx("i",{className:"fa-solid fa-play play-icon absolute"})})]}),s.jsxs("div",{className:"info-episode",children:[s.jsxs("h4",{children:[e.episode_number,".  ",e.name]}),s.jsxs("div",{className:"flex flex-row detailsDate",children:[new Date(e.air_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),i>990&&s.jsx("p",{children:x(e.runtime)})]}),i<=990&&s.jsx("p",{children:x(e.runtime)}),i>990&&e.overview&&s.jsx("p",{children:e.overview.length>=(i>600?300:150)?e.overview.slice(0,(i>600?300:150)+1)+"...":e.overview})]}),i>580&&s.jsx("div",{className:"containerPlay",children:s.jsx("i",{className:"fa-solid fa-play"})})]}),i<=990&&e.overview&&s.jsx("div",{className:"overViewEpisodeC",children:s.jsx("p",{className:"overViewEpisode",children:e.overview.length>=(i>600?300:150)?e.overview.slice(0,(i>600?300:150)+1)+"...":e.overview})})]})}export{V as default};
