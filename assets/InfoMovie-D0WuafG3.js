import{R as v,j as e,n as g,b as N,c as b,r as M,S as R}from"./index-nLxA1X93.js";import{B as w,C as I,a as B}from"./ResponsiveCarrousel-DwANebFd.js";import{b as E,c as D}from"./endPoints-D6Ym8Q8U.js";import{f as L}from"./fetchData-DCFA1qTy.js";import{u as S}from"./useQuery--5MvWUps.js";import{C as _}from"./CarouselBoostrap-Cjp7i3Fh.js";import"./NavBar-CxuLc1AR.js";import"./useMergedRefs-cLb7Wx4x.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./Transition-BlqVJSux.js";function F(r,s){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${E}${r.profile_path}`,alt:r.name,className:"main-imageCM"}),e.jsxs("div",{className:"detailsCM flex flex-col",children:[e.jsx("p",{className:"nombre-caster",children:r.name}),e.jsx("p",{className:"papel",children:e.jsx("span",{children:s?r.job:r.character})})]})]})}const u=v.memo(({castMember:r,isCrew:s})=>e.jsx("div",{className:"contenedor-posterCM",children:e.jsx("div",{className:"cardContainerImageCM posterCM",children:F(r,s)})}));function W(){var o,l,c,d,m,p;const r=g(),{movie:s}=r.state,{data:t,isLoading:f}=S(`movieInfo-${s==null?void 0:s.id}`,()=>L(D(s==null?void 0:s.id).movieDetails)),{setSearchTerm:x}=N(),{setOpenMenu:h}=b(),j=n=>n.credits.cast.map(a=>a.profile_path?e.jsx(u,{castMember:a},a.id):null),C=n=>n.credits.crew.map(a=>a.profile_path?e.jsx(u,{castMember:a,isCrew:!0},a.id):null),i=({renderCredits:n,title:a})=>e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:a}),e.jsx(I,{swipeable:!1,draggable:!1,showDots:!1,responsive:B,ssr:!0,infinite:!0,keyBoardControl:!1,className:"carousel-cast",children:n})]});return M.useEffect(()=>{window.scroll({top:0,left:0,behavior:"instant"}),h(!1),x("")},[]),!t||f?e.jsx(R,{}):e.jsxs("div",{className:"contenedorPrincipalMovie",children:[e.jsx(w,{movie:s,logoBuscar:!0,isDetail:!0}),(((l=(o=t.credits)==null?void 0:o.cast)==null?void 0:l.length)>0||((d=(c=t.credits)==null?void 0:c.crew)==null?void 0:d.length)>0)&&e.jsxs("div",{className:"infoMovieContainer",children:[e.jsxs("div",{className:"detallesInfo",children:[((m=t.credits.cast)==null?void 0:m.length)>0&&e.jsx(e.Fragment,{children:e.jsx(i,{renderCredits:j(t),title:"CAST"})}),((p=t.credits.crew)==null?void 0:p.length)>0&&e.jsx(e.Fragment,{children:e.jsx(i,{renderCredits:C(t),title:"CREW"})})]}),e.jsx("div",{className:"contenedor-imagenes",children:e.jsxs("div",{className:"flex flex-col backdropss",children:[e.jsx("h2",{children:"Backdrops"}),e.jsx(_,{movie:t})]})})]})]})}export{W as default};
