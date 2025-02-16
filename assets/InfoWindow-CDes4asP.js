import{R as _,j as e,r as m,m as N,e as w,a as R,b as E}from"./index-BbztWz7H.js";import{r as y,C as S,B as L,a as D,b as T,c as M,S as k,u as U}from"./useRef-A7V1Ixqn.js";import{U as F,b as W,C as A,c as I,d as B,e as O,f as V,h as P,i as G}from"./CardItem-CiEXNK8C.js";import{u as v}from"./NavBar-CitUyH57.js";import{u as Q}from"./useFavorites-Dy8jXsQ9.js";import{S as q}from"./SkeletonCarousel-CP7xkJ0p.js";import{u as x}from"./useQuery-8bt0qfTN.js";import{f as j}from"./fetchData-DCFA1qTy.js";function z(a,o){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${F}${a.profile_path}`,alt:a.name,className:"main-imageCM"}),e.jsxs("div",{className:"detailsCM flex flex-col",children:[e.jsx("p",{className:"nombre-caster",children:a.name}),e.jsx("p",{className:"papel",children:e.jsx("span",{children:o?a.job:a.character})})]})]})}const g=_.memo(({castMember:a,isCrew:o})=>e.jsx("div",{className:"contenedor-posterCM",children:e.jsx("div",{className:"cardContainerImageCM posterCM",children:z(a,o)})})),$=_.memo(({title:a,isLarge:o=!1,item:s})=>{var n,r;const{handleAddFavorite:h}=Q(),c=v(),[l,f]=m.useState(o);m.useEffect(()=>{f(c>1e3?o:!1)},[c]);const{data:t,isLoading:d}=x(`collection-${s==null?void 0:s.id}`,()=>{var p;return j(W((p=s==null?void 0:s.belongs_to_collection)==null?void 0:p.id))},{refetchOnWindowFocus:!1,enabled:!!((n=s==null?void 0:s.belongs_to_collection)!=null&&n.id)}),u=m.useMemo(()=>y(l),[l]),i=m.useCallback(p=>p==null?void 0:p.map(C=>C.poster_path&&e.jsx(A,{item:C,isLarge:l,onAddFavorite:h},C.id)),[l]);return d||!((r=t==null?void 0:t.parts)!=null&&r.length)?e.jsx(q,{numItems:5,isLarge:o,title:a}):s!=null&&s.belongs_to_collection?e.jsxs("div",{className:"carousel",children:[e.jsx("h2",{className:"tituloCarousel",children:a}),e.jsx(S,{swipeable:!0,showDots:!1,responsive:u,ssr:!1,infinite:!0,autoPlay:!1,keyBoardControl:!0,partialVisible:!0,className:`${c<600?"carousel-cell":""}`,slidesToSlide:8,children:i(t==null?void 0:t.parts)})]}):null});function H(){var u,i;const{movieId:a}=N(),{language:o}=w(),{data:s}=x(`movieInfo-${a}`,()=>j(I(a).movieDetails),{refetchOnWindowFocus:!1,enabled:!!a});console.log(s);const h=v(),{setSearchTerm:c}=R(),{setOpenMenu:l}=E();m.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),l(!1),c("")},[a]);const f=n=>n.credits.cast.map(r=>r.profile_path?e.jsx(g,{castMember:r},r.id):null),t=n=>n.credits.crew.map(r=>r.profile_path?e.jsx(g,{castMember:r,isCrew:!0},r.id):null),d=({renderCredits:n,title:r})=>e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:r}),e.jsx(S,{swipeable:!0,draggable:!0,showDots:!1,responsive:M,ssr:!0,infinite:!0,keyBoardControl:!1,className:`carousel-cast ${h<630?"cast-visible":""}`,partialVisible:!0,minimumTouchDrag:0,children:n})]});return e.jsxs("div",{className:"contenedorPrincipalItem",children:[e.jsx(L,{itemId:a,logoBuscar:!0,isDetail:!0,type:"movie"}),e.jsxs("div",{className:"infoItemContainer",children:[e.jsxs("div",{className:"detallesInfo",children:[e.jsxs("div",{className:"contenedorSimilares",children:[(s==null?void 0:s.belongs_to_collection)&&e.jsx($,{title:"Collection",item:s}),s&&e.jsx(D,{URL:I(s==null?void 0:s.id,o).similar,title:"También te puede interesar",isLarge:!1})]}),s&&((u=s.credits.cast)==null?void 0:u.length)>0&&e.jsx(d,{renderCredits:f(s),title:"CAST"}),s&&((i=s.credits.crew)==null?void 0:i.length)>0&&e.jsx(d,{renderCredits:t(s),title:"CREW"})]}),e.jsx("div",{className:"contenedor-imagenes",children:e.jsx("div",{className:"flex flex-col backdropss",children:e.jsx(T,{item:s})})})]})]})}function J({episode:a}){var u;const{seriesId:o}=N(),[s,h]=m.useState(null),c=v(),{data:l,isLoading:f}=x(`images-${o}`,()=>j(O(o)),{enabled:!!o&&a.still_path==null,staleTime:1e3*60*30,cacheTime:1e3*60*30});if(m.useEffect(()=>{var i;(i=l==null?void 0:l.backdrops)!=null&&i.length&&s===null&&h(Math.floor(Math.random()*l.backdrops.length))},[l,s]),f)return null;const t=i=>{if(i<60)return`${i} min`;const n=Math.floor(i/60),r=i%60;return r>0?`${n} h ${r} min`:`${n} h`},d=a.still_path?a.still_path:(u=l==null?void 0:l.backdrops)!=null&&u.length&&s!==null?l.backdrops[s].file_path:"";return e.jsxs("div",{className:"flex flex-col containerEpisode",children:[e.jsxs("div",{className:"container-episode",children:[e.jsx("div",{className:"wrapper-img-episode",children:d?e.jsx("img",{src:B+d,alt:a.name}):e.jsx("div",{className:"placeholder-img",children:"No Image Available"})}),e.jsxs("div",{className:"info-episode",children:[e.jsxs("h4",{children:["S ",a.season_number," E ",a.episode_number," - ",a.name]}),e.jsxs("div",{className:"flex flex-row detailsDate",children:[new Date(a.air_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),c>735&&e.jsx("p",{children:t(a.runtime)})]}),c<=735&&e.jsx("p",{children:t(a.runtime)}),c>990&&e.jsx("p",{children:a.overview})]}),e.jsx("div",{className:"containerPlay",children:e.jsx("i",{className:"fa-solid fa-play"})})]}),c<990&&e.jsx("div",{className:"overViewEpisodeC",children:e.jsx("p",{className:"overViewEpisode",children:a.overview})})]})}function b(){return e.jsx("div",{className:"container-episode",children:e.jsx(k,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:"100%",height:"100%"})})}function K({seriesId:a,numeroTemporadas:o}){const{language:s}=w(),[h,c]=m.useState(1),[l,f]=m.useState(5),{data:t}=x(`seasons-${a}-${h}`,()=>j(V(a,h,s)),{refetchOnWindowFocus:!1}),d=m.useMemo(()=>t?t.episodes.slice(0,l):[],[t,l]),u=m.useCallback(()=>{t&&l<t.episodes.length&&f(n=>Math.min(n+5,t.episodes.length))},[t,l]),i=U(u);return e.jsxs("div",{className:"containerSeason",children:[e.jsx("div",{className:"contenedorSeleccionSeason",children:e.jsx("select",{onChange:n=>{c(Number(n.target.value)),setTimeout(()=>f(5),0)},children:o&&[...Array(o)].map((n,r)=>e.jsxs("option",{value:r+1,children:["Temporada ",r+1]},r))})}),e.jsxs("div",{className:"contenedorEpisodios",children:[t?d.map((n,r)=>e.jsx(J,{episode:n},r)):e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{})]}),e.jsx("div",{ref:i,style:{height:"50px",margin:"20px 0"}})]})]})}function X(){var u,i;const{seriesId:a}=N(),{language:o}=w(),{data:s}=x(`seriesInfo-${a}`,()=>j(G(a)),{refetchOnWindowFocus:!1,enabled:!!a}),h=v(),{setSearchTerm:c}=R(),{setOpenMenu:l}=E();m.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),l(!1),c("")},[a]);const f=n=>n.credits.cast.map(r=>r.profile_path?e.jsx(g,{castMember:r},r.id):null),t=n=>n.credits.crew.map(r=>r.profile_path?e.jsx(g,{castMember:r,isCrew:!0},r.id):null),d=({renderCredits:n,title:r})=>e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:r}),e.jsx(S,{swipeable:!0,draggable:!0,showDots:!1,responsive:M,ssr:!0,infinite:!0,keyBoardControl:!1,className:`carousel-cast ${h<630?"cast-visible":""}`,partialVisible:!0,minimumTouchDrag:0,children:n})]});return e.jsxs("div",{className:"contenedorPrincipalItem",children:[e.jsx(L,{itemId:a,logoBuscar:!0,isDetail:!0,type:"serie"}),e.jsx("div",{className:"infoItemContainer",children:e.jsxs("div",{className:"detallesInfo",children:[e.jsxs("div",{className:"contenedorSimilares",children:[(s==null?void 0:s.belongs_to_collection)&&e.jsx($,{title:"Collection",item:s}),s&&e.jsx(D,{URL:P(s==null?void 0:s.id,o),title:"También te puede interesar",isLarge:!1})]}),s&&((u=s.credits.cast)==null?void 0:u.length)>0&&e.jsx(d,{renderCredits:f(s),title:"CAST"}),s&&((i=s.credits.crew)==null?void 0:i.length)>0&&e.jsx(d,{renderCredits:t(s),title:"CREW"}),e.jsx(K,{seriesId:a,numeroTemporadas:s==null?void 0:s.number_of_seasons})]})})]})}function te({type:a}){return a=="movie"?e.jsx(H,{}):e.jsx(X,{})}export{te as default};
