import{R as h,j as e,U as f,u as j,r as C}from"./index-DOSkgKYQ.js";import{u as g,B as v}from"./Banner-P8SApo5E.js";import{C as u}from"./index-D5znFxdk.js";function b(s,r){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${f}${s.profile_path}`,alt:s.name,className:"main-imageCM"}),e.jsxs("div",{className:"detailsCM flex flex-col",children:[e.jsx("p",{className:"nombre-caster",children:s.name}),e.jsx("p",{className:"papel",children:e.jsx("span",{children:r?s.job:s.character})})]})]})}const x=h.memo(({castMember:s,isCrew:r})=>e.jsx("div",{className:"contenedor-posterCM",children:e.jsx("div",{className:"cardContainerImageCM posterCM",children:b(s,r)})}));function R(){var n,o,c,d,m,p;const s=j(),{movie:r,language:t}=s.state,{movie:a}=g(r==null?void 0:r.id,t),l={desktop:{breakpoint:{max:3e3,min:1281},items:7,slidesToSlide:6},tablet:{breakpoint:{max:1280,min:769},items:6,slidesToSlide:5},mobileLarge:{breakpoint:{max:768,min:481},items:4,slidesToSlide:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}};return C.useEffect(()=>{window.scrollTo(0,0)},[]),a?e.jsxs("div",{className:"contenedorPrincipalMovie",children:[e.jsx(v,{language:t,movie:a,logoBuscar:!0,isShort:!1,isDetail:!0}),(((o=(n=a.credits)==null?void 0:n.cast)==null?void 0:o.length)>0||((d=(c=a.credits)==null?void 0:c.crew)==null?void 0:d.length)>0)&&e.jsx("div",{className:"infoMovieContainer",children:e.jsxs("div",{className:"detallesInfo",children:[((m=a.credits.cast)==null?void 0:m.length)>0&&e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:"Cast"}),e.jsx(u,{swipeable:!1,draggable:!1,showDots:!1,responsive:l,ssr:!0,infinite:!0,keyBoardControl:!1,children:a.credits.cast.map(i=>i.profile_path?e.jsx(x,{castMember:i},i.id):null)})]}),((p=a.credits.crew)==null?void 0:p.length)>0&&e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:"Crew"}),e.jsx(u,{swipeable:!1,draggable:!1,showDots:!1,responsive:l,ssr:!0,infinite:!0,keyBoardControl:!1,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",className:"carousel-react",children:a.credits.crew.map(i=>i.profile_path?e.jsx(x,{castMember:i,isCrew:!0},i.id):null)})]})]})})]}):e.jsx("div",{className:"w-screen h-screen bg-black"})}export{R as default};
