import{$ as C,j as e,m as v,b as g,r as N,S as b}from"./index-qPRpgYuD.js";import{B as w,C as B,a as I}from"./ResponsiveCarrousel-jWcA7YkV.js";import{b as E,f as M,c as R}from"./fetchData-CYFUk2L8.js";import{u as $}from"./useQuery-BFWmqAXx.js";import{C as D}from"./CarouselBoostrap-Cf4MT5Jq.js";import"./NavBar-BQB9r-hO.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useMergedRefs-Bbv6Ib9Y.js";function L(r,s){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${E}${r.profile_path}`,alt:r.name,className:"main-imageCM"}),e.jsxs("div",{className:"detailsCM flex flex-col",children:[e.jsx("p",{className:"nombre-caster",children:r.name}),e.jsx("p",{className:"papel",children:e.jsx("span",{children:s?r.job:r.character})})]})]})}const x=C.memo(({castMember:r,isCrew:s})=>e.jsx("div",{className:"contenedor-posterCM",children:e.jsx("div",{className:"cardContainerImageCM posterCM",children:L(r,s)})}));function U(){var o,l,c,d,m,p;const r=v(),{movie:s}=r.state,{data:t,isLoading:f}=$(`movieInfo-${s==null?void 0:s.id}`,()=>M(R(s==null?void 0:s.id).movieDetails)),{setSearchTerm:h}=g(),u=n=>n.credits.cast.map(a=>a.profile_path?e.jsx(x,{castMember:a},a.id):null),j=n=>n.credits.crew.map(a=>a.profile_path?e.jsx(x,{castMember:a,isCrew:!0},a.id):null),i=({renderCredits:n,title:a})=>e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:a}),e.jsx(B,{swipeable:!1,draggable:!1,showDots:!1,responsive:I,ssr:!0,infinite:!0,keyBoardControl:!1,className:"carousel-cast",children:n})]});return N.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),h("")},[]),!t||f?e.jsx(b,{}):e.jsxs("div",{className:"contenedorPrincipalMovie",children:[e.jsx(w,{movie:s,logoBuscar:!0,isDetail:!0}),(((l=(o=t.credits)==null?void 0:o.cast)==null?void 0:l.length)>0||((d=(c=t.credits)==null?void 0:c.crew)==null?void 0:d.length)>0)&&e.jsxs("div",{className:"infoMovieContainer",children:[e.jsxs("div",{className:"detallesInfo",children:[((m=t.credits.cast)==null?void 0:m.length)>0&&e.jsx(e.Fragment,{children:e.jsx(i,{renderCredits:u(t),title:"CAST"})}),((p=t.credits.crew)==null?void 0:p.length)>0&&e.jsx(e.Fragment,{children:e.jsx(i,{renderCredits:j(t),title:"CREW"})})]}),e.jsx("div",{className:"contenedor-imagenes",children:e.jsxs("div",{className:"flex flex-col backdropss",children:[e.jsx("h2",{children:"Backdrops"}),e.jsx(D,{movie:t})]})})]})]})}export{U as default};
