const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Backdrop-DLBH2TBt.js","assets/index-Deu4rx9d.js","assets/index-CBdIeY0I.css","assets/CardItem-Ljusztfa.js","assets/CardItem-qggDfi2W.css","assets/Backdrop-C5hZIQAT.css"])))=>i.map(i=>d[i]);
import{i as Ke,H,R as P,r as i,j as f,_ as Ye,e as ze,c as Ze}from"./index-Deu4rx9d.js";import{b as re,d as G,o as Qe,l as Re,e as qe,g as Je,h as et,j as tt,i as Ee,A as xe}from"./useMergedRefs-bNVcf70h.js";import{_ as nt}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{T as Te}from"./TransitionGroupContext-UgS7QqHE.js";import{s as rt,c as st,e as at,m as it,f as ot}from"./CardItem-Ljusztfa.js";const Ce={disabled:!1};var ut=function(n){return n.scrollTop},V="unmounted",I="exited",w="entering",$="entered",te="exiting",T=function(e){Ke(n,e);function n(s,r){var t;t=e.call(this,s,r)||this;var u=r,l=u&&!u.isMounting?s.enter:s.appear,d;return t.appearStatus=null,s.in?l?(d=I,t.appearStatus=w):d=$:s.unmountOnExit||s.mountOnEnter?d=V:d=I,t.state={status:d},t.nextCallback=null,t}n.getDerivedStateFromProps=function(r,t){var u=r.in;return u&&t.status===V?{status:I}:null};var a=n.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(r){var t=null;if(r!==this.props){var u=this.state.status;this.props.in?u!==w&&u!==$&&(t=w):(u===w||u===$)&&(t=te)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var r=this.props.timeout,t,u,l;return t=u=l=r,r!=null&&typeof r!="number"&&(t=r.exit,u=r.enter,l=r.appear!==void 0?r.appear:u),{exit:t,enter:u,appear:l}},a.updateStatus=function(r,t){if(r===void 0&&(r=!1),t!==null)if(this.cancelNextCallback(),t===w){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:H.findDOMNode(this);u&&ut(u)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===I&&this.setState({status:V})},a.performEnter=function(r){var t=this,u=this.props.enter,l=this.context?this.context.isMounting:r,d=this.props.nodeRef?[l]:[H.findDOMNode(this),l],E=d[0],p=d[1],h=this.getTimeouts(),N=l?h.appear:h.enter;if(!r&&!u||Ce.disabled){this.safeSetState({status:$},function(){t.props.onEntered(E)});return}this.props.onEnter(E,p),this.safeSetState({status:w},function(){t.props.onEntering(E,p),t.onTransitionEnd(N,function(){t.safeSetState({status:$},function(){t.props.onEntered(E,p)})})})},a.performExit=function(){var r=this,t=this.props.exit,u=this.getTimeouts(),l=this.props.nodeRef?void 0:H.findDOMNode(this);if(!t||Ce.disabled){this.safeSetState({status:I},function(){r.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:te},function(){r.props.onExiting(l),r.onTransitionEnd(u.exit,function(){r.safeSetState({status:I},function(){r.props.onExited(l)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(r,t){t=this.setNextCallback(t),this.setState(r,t)},a.setNextCallback=function(r){var t=this,u=!0;return this.nextCallback=function(l){u&&(u=!1,t.nextCallback=null,r(l))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},a.onTransitionEnd=function(r,t){this.setNextCallback(t);var u=this.props.nodeRef?this.props.nodeRef.current:H.findDOMNode(this),l=r==null&&!this.props.addEndListener;if(!u||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],E=d[0],p=d[1];this.props.addEndListener(E,p)}r!=null&&setTimeout(this.nextCallback,r)},a.render=function(){var r=this.state.status;if(r===V)return null;var t=this.props,u=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var l=nt(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return P.createElement(Te.Provider,{value:null},typeof u=="function"?u(r,l):P.cloneElement(P.Children.only(u),l))},n}(P.Component);T.contextType=Te;T.propTypes={};function U(){}T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:U,onEntering:U,onEntered:U,onExit:U,onExiting:U,onExited:U};T.UNMOUNTED=V;T.EXITED=I;T.ENTERING=w;T.ENTERED=$;T.EXITING=te;function lt(e,n){const a=i.useRef(!0);i.useEffect(()=>{if(a.current){a.current=!1;return}return e()},n)}function ct(){const e=i.useRef(!0),n=i.useRef(()=>e.current);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function ft(e){const n=i.useRef(e);return n.current=e,n}function dt(e){const n=ft(e);i.useEffect(()=>()=>n.current(),[])}const ne=2**31-1;function Se(e,n,a){const s=a-Date.now();e.current=s<=ne?setTimeout(n,s):setTimeout(()=>Se(e,n,a),ne)}function pt(){const e=ct(),n=i.useRef();return dt(()=>clearTimeout(n.current)),i.useMemo(()=>{const a=()=>clearTimeout(n.current);function s(r,t=0){e()&&(a(),t<=ne?n.current=setTimeout(r,t):Se(n,r,Date.now()+t))}return{set:s,clear:a,handleRef:n}},[])}const De=i.forwardRef(({className:e,bsPrefix:n,as:a="div",...s},r)=>(n=re(n,"carousel-caption"),f.jsx(a,{ref:r,className:G(e,n),...s})));De.displayName="CarouselCaption";const ye=i.forwardRef(({as:e="div",bsPrefix:n,className:a,...s},r)=>{const t=G(a,re(n,"carousel-item"));return f.jsx(e,{ref:r,...s,className:t})});ye.displayName="CarouselItem";function be(e,n){let a=0;return i.Children.map(e,s=>i.isValidElement(s)?n(s,a++):s)}function ht(e,n){let a=0;i.Children.forEach(e,s=>{i.isValidElement(s)&&n(s,a++)})}function mt(e){var n=Qe(e);return n&&n.defaultView||window}function vt(e,n){return mt(e).getComputedStyle(e,n)}var Et=/([A-Z])/g;function xt(e){return e.replace(Et,"-$1").toLowerCase()}var Ct=/^ms-/;function Z(e){return xt(e).replace(Ct,"-ms-")}var bt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Nt(e){return!!(e&&bt.test(e))}function ke(e,n){var a="",s="";if(typeof n=="string")return e.style.getPropertyValue(Z(n))||vt(e).getPropertyValue(Z(n));Object.keys(n).forEach(function(r){var t=n[r];!t&&t!==0?e.style.removeProperty(Z(r)):Nt(r)?s+=r+"("+t+") ":a+=Z(r)+": "+t+";"}),s&&(a+="transform: "+s+";"),e.style.cssText+=";"+a}function gt(e,n,a,s){if(s===void 0&&(s=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(n,a,s),e.dispatchEvent(r)}}function Rt(e){var n=ke(e,"transitionDuration")||"",a=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*a}function Tt(e,n,a){a===void 0&&(a=5);var s=!1,r=setTimeout(function(){s||gt(e,"transitionend",!0)},n+a),t=Re(e,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(r),t()}}function St(e,n,a,s){a==null&&(a=Rt(e)||0);var r=Tt(e,a,s),t=Re(e,"transitionend",n);return function(){r(),t()}}function Ne(e,n){const a=ke(e,n)||"",s=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*s}function Dt(e,n){const a=Ne(e,"transitionDuration"),s=Ne(e,"transitionDelay"),r=St(e,t=>{t.target===e&&(r(),n(t))},a+s)}function yt(e){e.offsetHeight}function kt(e){return e&&"setState"in e?H.findDOMNode(e):e??null}const Mt=P.forwardRef(({onEnter:e,onEntering:n,onEntered:a,onExit:s,onExiting:r,onExited:t,addEndListener:u,children:l,childRef:d,...E},p)=>{const h=i.useRef(null),N=qe(h,d),S=x=>{N(kt(x))},v=x=>k=>{x&&h.current&&x(h.current,k)},B=i.useCallback(v(e),[e]),A=i.useCallback(v(n),[n]),D=i.useCallback(v(a),[a]),X=i.useCallback(v(s),[s]),F=i.useCallback(v(r),[r]),y=i.useCallback(v(t),[t]),K=i.useCallback(v(u),[u]);return f.jsx(T,{ref:p,...E,onEnter:B,onEntered:D,onEntering:A,onExit:X,onExited:y,onExiting:F,addEndListener:K,nodeRef:h,children:typeof l=="function"?(x,k)=>l(x,{...k,ref:S}):P.cloneElement(l,{ref:S})})}),Ot=40;function It(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Me=i.forwardRef(({defaultActiveIndex:e=0,...n},a)=>{const{as:s="div",bsPrefix:r,slide:t=!0,fade:u=!1,controls:l=!0,indicators:d=!0,indicatorLabels:E=[],activeIndex:p,onSelect:h,onSlide:N,onSlid:S,interval:v=5e3,keyboard:B=!0,onKeyDown:A,pause:D="hover",onMouseOver:X,onMouseOut:F,wrap:y=!0,touch:K=!0,onTouchStart:x,onTouchMove:k,onTouchEnd:Q,prevIcon:Oe=f.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:se="Previous",nextIcon:Ie=f.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:ae="Next",variant:ie,className:we,children:q,...je}=Je({defaultActiveIndex:e,...n},{activeIndex:"onSelect"}),g=re(r,"carousel"),j=et(),L=i.useRef(null),[oe,ue]=i.useState("next"),[Le,Y]=i.useState(!1),[_,le]=i.useState(!1),[m,_e]=i.useState(p||0);i.useEffect(()=>{!_&&p!==m&&(L.current?ue(L.current):ue((p||0)>m?"next":"prev"),t&&le(!0),_e(p||0))},[p,_,m,t]),i.useEffect(()=>{L.current&&(L.current=null)});let M=0,ce;ht(q,(o,c)=>{++M,c===p&&(ce=o.props.interval)});const fe=tt(ce),C=i.useCallback(o=>{if(_)return;let c=m-1;if(c<0){if(!y)return;c=M-1}L.current="prev",h==null||h(c,o)},[_,m,h,y,M]),b=Ee(o=>{if(_)return;let c=m+1;if(c>=M){if(!y)return;c=0}L.current="next",h==null||h(c,o)}),J=i.useRef();i.useImperativeHandle(a,()=>({element:J.current,prev:C,next:b}));const de=Ee(()=>{!document.hidden&&It(J.current)&&(j?C():b())}),O=oe==="next"?"start":"end";lt(()=>{t||(N==null||N(m,O),S==null||S(m,O))},[m]);const Ue=`${g}-item-${oe}`,$e=`${g}-item-${O}`,Pe=i.useCallback(o=>{yt(o),N==null||N(m,O)},[N,m,O]),Ae=i.useCallback(()=>{le(!1),S==null||S(m,O)},[S,m,O]),Xe=i.useCallback(o=>{if(B&&!/input|textarea/i.test(o.target.tagName))switch(o.key){case"ArrowLeft":o.preventDefault(),j?b(o):C(o);return;case"ArrowRight":o.preventDefault(),j?C(o):b(o);return}A==null||A(o)},[B,A,C,b,j]),Fe=i.useCallback(o=>{D==="hover"&&Y(!0),X==null||X(o)},[D,X]),We=i.useCallback(o=>{Y(!1),F==null||F(o)},[F]),pe=i.useRef(0),z=i.useRef(0),he=pt(),He=i.useCallback(o=>{pe.current=o.touches[0].clientX,z.current=0,D==="hover"&&Y(!0),x==null||x(o)},[D,x]),Ve=i.useCallback(o=>{o.touches&&o.touches.length>1?z.current=0:z.current=o.touches[0].clientX-pe.current,k==null||k(o)},[k]),Ge=i.useCallback(o=>{if(K){const c=z.current;Math.abs(c)>Ot&&(c>0?C(o):b(o))}D==="hover"&&he.set(()=>{Y(!1)},v||void 0),Q==null||Q(o)},[K,D,C,b,he,v,Q]),me=v!=null&&!Le&&!_,ee=i.useRef();i.useEffect(()=>{var o,c;if(!me)return;const R=j?C:b;return ee.current=window.setInterval(document.visibilityState?de:R,(o=(c=fe.current)!=null?c:v)!=null?o:void 0),()=>{ee.current!==null&&clearInterval(ee.current)}},[me,C,b,fe,v,de,j]);const ve=i.useMemo(()=>d&&Array.from({length:M},(o,c)=>R=>{h==null||h(c,R)}),[d,M,h]);return f.jsxs(s,{ref:J,...je,onKeyDown:Xe,onMouseOver:Fe,onMouseOut:We,onTouchStart:He,onTouchMove:Ve,onTouchEnd:Ge,className:G(we,g,t&&"slide",u&&`${g}-fade`,ie&&`${g}-${ie}`),children:[d&&f.jsx("div",{className:`${g}-indicators`,children:be(q,(o,c)=>f.jsx("button",{type:"button","data-bs-target":"","aria-label":E!=null&&E.length?E[c]:`Slide ${c+1}`,className:c===m?"active":void 0,onClick:ve?ve[c]:void 0,"aria-current":c===m},c))}),f.jsx("div",{className:`${g}-inner`,children:be(q,(o,c)=>{const R=c===m;return t?f.jsx(Mt,{in:R,onEnter:R?Pe:void 0,onEntered:R?Ae:void 0,addEndListener:Dt,children:(W,Be)=>i.cloneElement(o,{...Be,className:G(o.props.className,R&&W!=="entered"&&Ue,(W==="entered"||W==="exiting")&&"active",(W==="entering"||W==="exiting")&&$e)})}):i.cloneElement(o,{className:G(o.props.className,R&&"active")})})}),l&&f.jsxs(f.Fragment,{children:[(y||p!==0)&&f.jsxs(xe,{className:`${g}-control-prev`,onClick:C,children:[Oe,se&&f.jsx("span",{className:"visually-hidden",children:se})]}),(y||p!==M-1)&&f.jsxs(xe,{className:`${g}-control-next`,onClick:b,children:[Ie,ae&&f.jsx("span",{className:"visually-hidden",children:ae})]})]})]})});Me.displayName="Carousel";const ge=Object.assign(Me,{Caption:De,Item:ye}),wt=i.lazy(()=>Ye(()=>import("./Backdrop-DLBH2TBt.js"),__vite__mapDeps([0,1,2,3,4,5]))),Pt=i.memo(({item:e})=>{const{language:n}=ze(),a=rt(e)?st(e==null?void 0:e.id,n).movieDetails:at(e==null?void 0:e.id,n),{data:s}=Ze(["mediaDetails",e==null?void 0:e.id],()=>ot(a),{refetchOnWindowFocus:!1}),r=i.useMemo(()=>{var t;return!s||!("images"in s)?[]:((t=s.images)==null?void 0:t.backdrops)||[]},[s]);return f.jsx(it.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,ease:"easeOut"},children:f.jsx("div",{className:"carousel-bootstrap cb-backdrop",children:f.jsx(ge,{fade:!0,interval:3e3,pause:"hover",children:r.map((t,u)=>f.jsx(ge.Item,{children:f.jsx(wt,{backdrop_path:t.file_path})},u))})})})});export{Pt as default};
