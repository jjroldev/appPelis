import{R as h,j as e}from"./index-BnPToACK.js";import{C as m,a as u}from"./SkeletonCarousel-CojWiGtF.js";import{n as x,u as f}from"./BarMenu-DtA6XHQf.js";function j(s,a){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${x}${s.profile_path}`,alt:s.name,className:"main-imageCM"}),e.jsxs("div",{className:"detailsCM flex flex-col",children:[e.jsx("p",{className:"nombre-caster",children:s.name}),e.jsx("p",{className:"papel",children:e.jsx("span",{children:a?s.job:s.character})})]})]})}const c=h.memo(({castMember:s,isCrew:a})=>e.jsx("div",{className:"contenedor-posterCM",children:e.jsx("div",{className:"cardContainerImageCM posterCM",children:j(s,a)})})),v=({item:s,title:a})=>{var i,o,t,d;const p=f(),l=((o=(i=s==null?void 0:s.credits)==null?void 0:i.cast)==null?void 0:o.filter(r=>r==null?void 0:r.profile_path))||[],n=((d=(t=s==null?void 0:s.credits)==null?void 0:t.crew)==null?void 0:d.filter(r=>r==null?void 0:r.profile_path))||[];return l.length===0&&n.length===0?null:e.jsxs("div",{className:"detallesReparto",children:[e.jsx("h2",{children:a}),e.jsxs(m,{swipeable:!0,draggable:!0,showDots:!1,responsive:u,ssr:!0,infinite:!0,keyBoardControl:!1,className:`carousel-cast ${p<630?"cast-visible":""}`,partialVisible:!0,minimumTouchDrag:0,children:[l.map(r=>e.jsx(c,{castMember:r},r.id)),n.map(r=>e.jsx(c,{castMember:r,isCrew:!0},r.id))]})]})};export{v as default};
