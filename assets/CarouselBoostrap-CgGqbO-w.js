const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Backdrop-DviqkohB.js","assets/index-DroBe1vi.js","assets/index-BDcjLdJv.css","assets/endPoints-D6Ym8Q8U.js","assets/Backdrop-C5hZIQAT.css","assets/Poster-CYwMVGxP.js","assets/Poster-Bmx5Ap-P.css"])))=>i.map(i=>d[i]);
import{r as n,j as c,J as Pe,R as ce,_ as me}from"./index-DroBe1vi.js";import{b as Z,d as O,o as Ve,l as he,e as Ue,g as Xe,h as Fe,j as He,i as le,A as fe}from"./useMergedRefs-B4PyyJSL.js";import{T as Be}from"./Transition-Di8KRRcO.js";import{u as ze}from"./useQuery-Drc2beFz.js";import{f as Ke}from"./fetchData-DCFA1qTy.js";import{c as Ye}from"./endPoints-D6Ym8Q8U.js";function We(e,t){const r=n.useRef(!0);n.useEffect(()=>{if(r.current){r.current=!1;return}return e()},t)}function Ze(){const e=n.useRef(!0),t=n.useRef(()=>e.current);return n.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function Je(e){const t=n.useRef(e);return t.current=e,t}function Qe(e){const t=Je(e);n.useEffect(()=>()=>t.current(),[])}const W=2**31-1;function ve(e,t,r){const a=r-Date.now();e.current=a<=W?setTimeout(t,a):setTimeout(()=>ve(e,t,r),W)}function qe(){const e=Ze(),t=n.useRef();return Qe(()=>clearTimeout(t.current)),n.useMemo(()=>{const r=()=>clearTimeout(t.current);function a(u,o=0){e()&&(r(),o<=W?t.current=setTimeout(u,o):ve(t,u,Date.now()+o))}return{set:a,clear:r,handleRef:t}},[])}const xe=n.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},u)=>(t=Z(t,"carousel-caption"),c.jsx(r,{ref:u,className:O(e,t),...a})));xe.displayName="CarouselCaption";const Ce=n.forwardRef(({as:e="div",bsPrefix:t,className:r,...a},u)=>{const o=O(r,Z(t,"carousel-item"));return c.jsx(e,{ref:u,...a,className:o})});Ce.displayName="CarouselItem";function de(e,t){let r=0;return n.Children.map(e,a=>n.isValidElement(a)?t(a,r++):a)}function Ge(e,t){let r=0;n.Children.forEach(e,a=>{n.isValidElement(a)&&t(a,r++)})}function et(e){var t=Ve(e);return t&&t.defaultView||window}function tt(e,t){return et(e).getComputedStyle(e,t)}var nt=/([A-Z])/g;function rt(e){return e.replace(nt,"-$1").toLowerCase()}var st=/^ms-/;function F(e){return rt(e).replace(st,"-ms-")}var at=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ot(e){return!!(e&&at.test(e))}function Ee(e,t){var r="",a="";if(typeof t=="string")return e.style.getPropertyValue(F(t))||tt(e).getPropertyValue(F(t));Object.keys(t).forEach(function(u){var o=t[u];!o&&o!==0?e.style.removeProperty(F(u)):ot(u)?a+=u+"("+o+") ":r+=F(u)+": "+o+";"}),a&&(r+="transform: "+a+";"),e.style.cssText+=";"+r}function ut(e,t,r,a){if(a===void 0&&(a=!0),e){var u=document.createEvent("HTMLEvents");u.initEvent(t,r,a),e.dispatchEvent(u)}}function it(e){var t=Ee(e,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function ct(e,t,r){r===void 0&&(r=5);var a=!1,u=setTimeout(function(){a||ut(e,"transitionend",!0)},t+r),o=he(e,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(u),o()}}function lt(e,t,r,a){r==null&&(r=it(e)||0);var u=ct(e,r,a),o=he(e,"transitionend",t);return function(){u(),o()}}function pe(e,t){const r=Ee(e,t)||"",a=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*a}function ft(e,t){const r=pe(e,"transitionDuration"),a=pe(e,"transitionDelay"),u=lt(e,o=>{o.target===e&&(u(),t(o))},r+a)}function dt(e){e.offsetHeight}function pt(e){return e&&"setState"in e?Pe.findDOMNode(e):e??null}const mt=ce.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:a,onExiting:u,onExited:o,addEndListener:E,children:k,childRef:_,...I},p)=>{const f=n.useRef(null),N=Ue(f,_),R=m=>{N(pt(m))},d=m=>T=>{m&&f.current&&m(f.current,T)},P=n.useCallback(d(e),[e]),M=n.useCallback(d(t),[t]),b=n.useCallback(d(r),[r]),$=n.useCallback(d(a),[a]),L=n.useCallback(d(u),[u]),y=n.useCallback(d(o),[o]),V=n.useCallback(d(E),[E]);return c.jsx(Be,{ref:p,...I,onEnter:P,onEntered:b,onEntering:M,onExit:$,onExited:y,onExiting:L,addEndListener:V,nodeRef:f,children:typeof k=="function"?(m,T)=>k(m,{...T,ref:R}):ce.cloneElement(k,{ref:R})})}),ht=40;function vt(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Re=n.forwardRef(({defaultActiveIndex:e=0,...t},r)=>{const{as:a="div",bsPrefix:u,slide:o=!0,fade:E=!1,controls:k=!0,indicators:_=!0,indicatorLabels:I=[],activeIndex:p,onSelect:f,onSlide:N,onSlid:R,interval:d=5e3,keyboard:P=!0,onKeyDown:M,pause:b="hover",onMouseOver:$,onMouseOut:L,wrap:y=!0,touch:V=!0,onTouchStart:m,onTouchMove:T,onTouchEnd:H,prevIcon:be=c.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:J="Previous",nextIcon:Ne=c.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Q="Next",variant:q,className:ye,children:B,...Te}=Xe({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),x=Z(u,"carousel"),j=Fe(),S=n.useRef(null),[G,ee]=n.useState("next"),[ge,U]=n.useState(!1),[w,te]=n.useState(!1),[l,De]=n.useState(p||0);n.useEffect(()=>{!w&&p!==l&&(S.current?ee(S.current):ee((p||0)>l?"next":"prev"),o&&te(!0),De(p||0))},[p,w,l,o]),n.useEffect(()=>{S.current&&(S.current=null)});let g=0,ne;Ge(B,(s,i)=>{++g,i===p&&(ne=s.props.interval)});const re=He(ne),h=n.useCallback(s=>{if(w)return;let i=l-1;if(i<0){if(!y)return;i=g-1}S.current="prev",f==null||f(i,s)},[w,l,f,y,g]),v=le(s=>{if(w)return;let i=l+1;if(i>=g){if(!y)return;i=0}S.current="next",f==null||f(i,s)}),z=n.useRef();n.useImperativeHandle(r,()=>({element:z.current,prev:h,next:v}));const se=le(()=>{!document.hidden&&vt(z.current)&&(j?h():v())}),D=G==="next"?"start":"end";We(()=>{o||(N==null||N(l,D),R==null||R(l,D))},[l]);const je=`${x}-item-${G}`,Se=`${x}-item-${D}`,we=n.useCallback(s=>{dt(s),N==null||N(l,D)},[N,l,D]),ke=n.useCallback(()=>{te(!1),R==null||R(l,D)},[R,l,D]),_e=n.useCallback(s=>{if(P&&!/input|textarea/i.test(s.target.tagName))switch(s.key){case"ArrowLeft":s.preventDefault(),j?v(s):h(s);return;case"ArrowRight":s.preventDefault(),j?h(s):v(s);return}M==null||M(s)},[P,M,h,v,j]),Ie=n.useCallback(s=>{b==="hover"&&U(!0),$==null||$(s)},[b,$]),Me=n.useCallback(s=>{U(!1),L==null||L(s)},[L]),ae=n.useRef(0),X=n.useRef(0),oe=qe(),$e=n.useCallback(s=>{ae.current=s.touches[0].clientX,X.current=0,b==="hover"&&U(!0),m==null||m(s)},[b,m]),Le=n.useCallback(s=>{s.touches&&s.touches.length>1?X.current=0:X.current=s.touches[0].clientX-ae.current,T==null||T(s)},[T]),Ae=n.useCallback(s=>{if(V){const i=X.current;Math.abs(i)>ht&&(i>0?h(s):v(s))}b==="hover"&&oe.set(()=>{U(!1)},d||void 0),H==null||H(s)},[V,b,h,v,oe,d,H]),ue=d!=null&&!ge&&!w,K=n.useRef();n.useEffect(()=>{var s,i;if(!ue)return;const C=j?h:v;return K.current=window.setInterval(document.visibilityState?se:C,(s=(i=re.current)!=null?i:d)!=null?s:void 0),()=>{K.current!==null&&clearInterval(K.current)}},[ue,h,v,re,d,se,j]);const ie=n.useMemo(()=>_&&Array.from({length:g},(s,i)=>C=>{f==null||f(i,C)}),[_,g,f]);return c.jsxs(a,{ref:z,...Te,onKeyDown:_e,onMouseOver:Ie,onMouseOut:Me,onTouchStart:$e,onTouchMove:Le,onTouchEnd:Ae,className:O(ye,x,o&&"slide",E&&`${x}-fade`,q&&`${x}-${q}`),children:[_&&c.jsx("div",{className:`${x}-indicators`,children:de(B,(s,i)=>c.jsx("button",{type:"button","data-bs-target":"","aria-label":I!=null&&I.length?I[i]:`Slide ${i+1}`,className:i===l?"active":void 0,onClick:ie?ie[i]:void 0,"aria-current":i===l},i))}),c.jsx("div",{className:`${x}-inner`,children:de(B,(s,i)=>{const C=i===l;return o?c.jsx(mt,{in:C,onEnter:C?we:void 0,onEntered:C?ke:void 0,addEndListener:ft,children:(A,Oe)=>n.cloneElement(s,{...Oe,className:O(s.props.className,C&&A!=="entered"&&je,(A==="entered"||A==="exiting")&&"active",(A==="entering"||A==="exiting")&&Se)})}):n.cloneElement(s,{className:O(s.props.className,C&&"active")})})}),k&&c.jsxs(c.Fragment,{children:[(y||p!==0)&&c.jsxs(fe,{className:`${x}-control-prev`,onClick:h,children:[be,J&&c.jsx("span",{className:"visually-hidden",children:J})]}),(y||p!==g-1)&&c.jsxs(fe,{className:`${x}-control-next`,onClick:v,children:[Ne,Q&&c.jsx("span",{className:"visually-hidden",children:Q})]})]})]})});Re.displayName="Carousel";const Y=Object.assign(Re,{Caption:xe,Item:Ce}),xt=n.lazy(()=>me(()=>import("./Backdrop-DviqkohB.js"),__vite__mapDeps([0,1,2,3,4]))),Ct=n.lazy(()=>me(()=>import("./Poster-CYwMVGxP.js"),__vite__mapDeps([5,1,2,3,6])));function gt({movie:e,isPoster:t}){var a,u;const{data:r}=ze(["movieIC",e==null?void 0:e.id],()=>Ke(Ye(e==null?void 0:e.id).movieDetails));return c.jsx("div",{className:`carousel-bootstrap ${t?"c-b-poster":"cb-backdrop"}`,children:c.jsx(Y,{fade:!0,interval:3e3,pause:"hover",children:t?(u=r==null?void 0:r.images)==null?void 0:u.posters.map((o,E)=>c.jsx(Y.Item,{className:"item-poster",children:c.jsx(Ct,{poster_path:o.file_path})},E)):(a=r==null?void 0:r.images)==null?void 0:a.backdrops.map((o,E)=>c.jsx(Y.Item,{children:c.jsx(xt,{backdrop_path:o.file_path})},E))})})}export{gt as C};
