const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Backdrop-CL86s5z-.js","assets/index-BPSd4uE0.js","assets/index-CxIML9Di.css","assets/CardItem-BpziOWWH.js","assets/CardItem-_deXlwQO.css","assets/Backdrop-C5hZIQAT.css"])))=>i.map(i=>d[i]);
import{r as n,j as c,K as Oe,R as ie,_ as Pe}from"./index-BPSd4uE0.js";import{a as z,c as O,o as Ue,l as he,b as Ve,d as Xe,e as Fe,f as He,g as ce,A as le}from"./NavBar-BjEkIwix.js";import{T as We}from"./Transition-CQsCMZnL.js";import{u as Be}from"./useQuery-CLpCv9xd.js";import{f as Ke}from"./fetchData-DCFA1qTy.js";import{b as Ye,d as ze}from"./CardItem-BpziOWWH.js";function Ze(e,t){const r=n.useRef(!0);n.useEffect(()=>{if(r.current){r.current=!1;return}return e()},t)}function Qe(){const e=n.useRef(!0),t=n.useRef(()=>e.current);return n.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function qe(e){const t=n.useRef(e);return t.current=e,t}function Ge(e){const t=qe(e);n.useEffect(()=>()=>t.current(),[])}const Y=2**31-1;function pe(e,t,r){const a=r-Date.now();e.current=a<=Y?setTimeout(t,a):setTimeout(()=>pe(e,t,r),Y)}function Je(){const e=Qe(),t=n.useRef();return Ge(()=>clearTimeout(t.current)),n.useMemo(()=>{const r=()=>clearTimeout(t.current);function a(u,o=0){e()&&(r(),o<=Y?t.current=setTimeout(u,o):pe(t,u,Date.now()+o))}return{set:a,clear:r,handleRef:t}},[])}const ve=n.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},u)=>(t=z(t,"carousel-caption"),c.jsx(r,{ref:u,className:O(e,t),...a})));ve.displayName="CarouselCaption";const xe=n.forwardRef(({as:e="div",bsPrefix:t,className:r,...a},u)=>{const o=O(r,z(t,"carousel-item"));return c.jsx(e,{ref:u,...a,className:o})});xe.displayName="CarouselItem";function fe(e,t){let r=0;return n.Children.map(e,a=>n.isValidElement(a)?t(a,r++):a)}function et(e,t){let r=0;n.Children.forEach(e,a=>{n.isValidElement(a)&&t(a,r++)})}function tt(e){var t=Ue(e);return t&&t.defaultView||window}function nt(e,t){return tt(e).getComputedStyle(e,t)}var rt=/([A-Z])/g;function st(e){return e.replace(rt,"-$1").toLowerCase()}var at=/^ms-/;function F(e){return st(e).replace(at,"-ms-")}var ot=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ut(e){return!!(e&&ot.test(e))}function Ce(e,t){var r="",a="";if(typeof t=="string")return e.style.getPropertyValue(F(t))||nt(e).getPropertyValue(F(t));Object.keys(t).forEach(function(u){var o=t[u];!o&&o!==0?e.style.removeProperty(F(u)):ut(u)?a+=u+"("+o+") ":r+=F(u)+": "+o+";"}),a&&(r+="transform: "+a+";"),e.style.cssText+=";"+r}function it(e,t,r,a){if(a===void 0&&(a=!0),e){var u=document.createEvent("HTMLEvents");u.initEvent(t,r,a),e.dispatchEvent(u)}}function ct(e){var t=Ce(e,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function lt(e,t,r){r===void 0&&(r=5);var a=!1,u=setTimeout(function(){a||it(e,"transitionend",!0)},t+r),o=he(e,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(u),o()}}function ft(e,t,r,a){r==null&&(r=ct(e)||0);var u=lt(e,r,a),o=he(e,"transitionend",t);return function(){u(),o()}}function de(e,t){const r=Ce(e,t)||"",a=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*a}function dt(e,t){const r=de(e,"transitionDuration"),a=de(e,"transitionDelay"),u=ft(e,o=>{o.target===e&&(u(),t(o))},r+a)}function mt(e){e.offsetHeight}function ht(e){return e&&"setState"in e?Oe.findDOMNode(e):e??null}const pt=ie.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:a,onExiting:u,onExited:o,addEndListener:D,children:M,childRef:j,...I},m)=>{const f=n.useRef(null),g=Ve(f,j),R=h=>{g(ht(h))},d=h=>N=>{h&&f.current&&h(f.current,N)},P=n.useCallback(d(e),[e]),L=n.useCallback(d(t),[t]),E=n.useCallback(d(r),[r]),_=n.useCallback(d(a),[a]),$=n.useCallback(d(u),[u]),b=n.useCallback(d(o),[o]),U=n.useCallback(d(D),[D]);return c.jsx(We,{ref:m,...I,onEnter:P,onEntered:E,onEntering:L,onExit:_,onExited:b,onExiting:$,addEndListener:U,nodeRef:f,children:typeof M=="function"?(h,N)=>M(h,{...N,ref:R}):ie.cloneElement(M,{ref:R})})}),vt=40;function xt(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Re=n.forwardRef(({defaultActiveIndex:e=0,...t},r)=>{const{as:a="div",bsPrefix:u,slide:o=!0,fade:D=!1,controls:M=!0,indicators:j=!0,indicatorLabels:I=[],activeIndex:m,onSelect:f,onSlide:g,onSlid:R,interval:d=5e3,keyboard:P=!0,onKeyDown:L,pause:E="hover",onMouseOver:_,onMouseOut:$,wrap:b=!0,touch:U=!0,onTouchStart:h,onTouchMove:N,onTouchEnd:H,prevIcon:Ee=c.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Z="Previous",nextIcon:ge=c.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Q="Next",variant:q,className:be,children:W,...Ne}=Xe({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),x=z(u,"carousel"),S=Fe(),w=n.useRef(null),[G,J]=n.useState("next"),[ye,V]=n.useState(!1),[k,ee]=n.useState(!1),[l,Te]=n.useState(m||0);n.useEffect(()=>{!k&&m!==l&&(w.current?J(w.current):J((m||0)>l?"next":"prev"),o&&ee(!0),Te(m||0))},[m,k,l,o]),n.useEffect(()=>{w.current&&(w.current=null)});let y=0,te;et(W,(s,i)=>{++y,i===m&&(te=s.props.interval)});const ne=He(te),p=n.useCallback(s=>{if(k)return;let i=l-1;if(i<0){if(!b)return;i=y-1}w.current="prev",f==null||f(i,s)},[k,l,f,b,y]),v=ce(s=>{if(k)return;let i=l+1;if(i>=y){if(!b)return;i=0}w.current="next",f==null||f(i,s)}),B=n.useRef();n.useImperativeHandle(r,()=>({element:B.current,prev:p,next:v}));const re=ce(()=>{!document.hidden&&xt(B.current)&&(S?p():v())}),T=G==="next"?"start":"end";Ze(()=>{o||(g==null||g(l,T),R==null||R(l,T))},[l]);const De=`${x}-item-${G}`,Se=`${x}-item-${T}`,we=n.useCallback(s=>{mt(s),g==null||g(l,T)},[g,l,T]),ke=n.useCallback(()=>{ee(!1),R==null||R(l,T)},[R,l,T]),Me=n.useCallback(s=>{if(P&&!/input|textarea/i.test(s.target.tagName))switch(s.key){case"ArrowLeft":s.preventDefault(),S?v(s):p(s);return;case"ArrowRight":s.preventDefault(),S?p(s):v(s);return}L==null||L(s)},[P,L,p,v,S]),je=n.useCallback(s=>{E==="hover"&&V(!0),_==null||_(s)},[E,_]),Ie=n.useCallback(s=>{V(!1),$==null||$(s)},[$]),se=n.useRef(0),X=n.useRef(0),ae=Je(),Le=n.useCallback(s=>{se.current=s.touches[0].clientX,X.current=0,E==="hover"&&V(!0),h==null||h(s)},[E,h]),_e=n.useCallback(s=>{s.touches&&s.touches.length>1?X.current=0:X.current=s.touches[0].clientX-se.current,N==null||N(s)},[N]),$e=n.useCallback(s=>{if(U){const i=X.current;Math.abs(i)>vt&&(i>0?p(s):v(s))}E==="hover"&&ae.set(()=>{V(!1)},d||void 0),H==null||H(s)},[U,E,p,v,ae,d,H]),oe=d!=null&&!ye&&!k,K=n.useRef();n.useEffect(()=>{var s,i;if(!oe)return;const C=S?p:v;return K.current=window.setInterval(document.visibilityState?re:C,(s=(i=ne.current)!=null?i:d)!=null?s:void 0),()=>{K.current!==null&&clearInterval(K.current)}},[oe,p,v,ne,d,re,S]);const ue=n.useMemo(()=>j&&Array.from({length:y},(s,i)=>C=>{f==null||f(i,C)}),[j,y,f]);return c.jsxs(a,{ref:B,...Ne,onKeyDown:Me,onMouseOver:je,onMouseOut:Ie,onTouchStart:Le,onTouchMove:_e,onTouchEnd:$e,className:O(be,x,o&&"slide",D&&`${x}-fade`,q&&`${x}-${q}`),children:[j&&c.jsx("div",{className:`${x}-indicators`,children:fe(W,(s,i)=>c.jsx("button",{type:"button","data-bs-target":"","aria-label":I!=null&&I.length?I[i]:`Slide ${i+1}`,className:i===l?"active":void 0,onClick:ue?ue[i]:void 0,"aria-current":i===l},i))}),c.jsx("div",{className:`${x}-inner`,children:fe(W,(s,i)=>{const C=i===l;return o?c.jsx(pt,{in:C,onEnter:C?we:void 0,onEntered:C?ke:void 0,addEndListener:dt,children:(A,Ae)=>n.cloneElement(s,{...Ae,className:O(s.props.className,C&&A!=="entered"&&De,(A==="entered"||A==="exiting")&&"active",(A==="entering"||A==="exiting")&&Se)})}):n.cloneElement(s,{className:O(s.props.className,C&&"active")})})}),M&&c.jsxs(c.Fragment,{children:[(b||m!==0)&&c.jsxs(le,{className:`${x}-control-prev`,onClick:p,children:[Ee,Z&&c.jsx("span",{className:"visually-hidden",children:Z})]}),(b||m!==y-1)&&c.jsxs(le,{className:`${x}-control-next`,onClick:v,children:[ge,Q&&c.jsx("span",{className:"visually-hidden",children:Q})]})]})]})});Re.displayName="Carousel";const me=Object.assign(Re,{Caption:ve,Item:xe}),Ct=n.lazy(()=>Pe(()=>import("./Backdrop-CL86s5z-.js"),__vite__mapDeps([0,1,2,3,4,5]))),Tt=n.memo(({item:e})=>{const r=e&&"title"in e?Ye(e==null?void 0:e.id).movieDetails:ze(e==null?void 0:e.id),{data:a}=Be(["mediaDetails",e==null?void 0:e.id],()=>Ke(r),{refetchOnWindowFocus:!1}),u=n.useMemo(()=>{var o;return!a||!("images"in a)?[]:((o=a.images)==null?void 0:o.backdrops)||[]},[a]);return c.jsx("div",{className:"carousel-bootstrap cb-backdrop",children:c.jsx(me,{fade:!0,interval:3e3,pause:"hover",children:u.map((o,D)=>c.jsx(me.Item,{children:c.jsx(Ct,{backdrop_path:o.file_path})},D))})})});export{Tt as C};
