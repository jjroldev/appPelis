const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModalVideo-Df9kV0Uv.js","assets/index-DpTpVCke.js","assets/index-CAJZcp9t.css","assets/useQuery-Co3oNWgm.js","assets/fetchData-AUSfi4jN.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js","assets/DetalleBaner-D1foisKv.js","assets/CarouselBoostrap-Buj3bF2t.js","assets/useMergedRefs-CelwkJnb.js","assets/CarouselBoostrap-B1CN3x4M.css","assets/NavBar-BLWZuKqg.js","assets/NavBar-KQtWf3WD.css","assets/DetalleBaner-BzNCLA6X.css"])))=>i.map(i=>d[i]);
import{r as N,_ as Tt,u as Mt,$ as Rt,a as _t,d as Et,g as xt,j as M,f as Pt,n as W,o as Ot}from"./index-DpTpVCke.js";import{N as At}from"./NavBar-BLWZuKqg.js";import{f as Lt,c as Dt,d as Wt,e as kt}from"./fetchData-AUSfi4jN.js";import{u as et}from"./useQuery-Co3oNWgm.js";const jt=N.lazy(()=>Tt(()=>import("./ModalVideo-Df9kV0Uv.js"),__vite__mapDeps([0,1,2,3,4,5]))),Nt=N.lazy(()=>Tt(()=>import("./DetalleBaner-D1foisKv.js"),__vite__mapDeps([6,1,2,7,8,5,4,3,9,10,11,12])));function oe({movie:r,logoBuscar:g,isDetail:c=!1}){var v,S,y,b,R;const{currentPerfil:l,currentUser:a}=Mt(),[p,d]=Rt.useState(!1),{data:n,isLoading:h}=et(`movie-${r==null?void 0:r.id}`,()=>Lt(Dt(r==null?void 0:r.id).movieDetails),{enabled:!!(r!=null&&r.id)}),T=_t(),w=Et(),u=N.useCallback(()=>d(!0),[]),i=N.useCallback(()=>d(!1),[]),e=N.useCallback(()=>{w("/info",{state:{movie:r}})},[w,r]);et(`favorites-${a==null?void 0:a.id}-${l==null?void 0:l.id}`,()=>xt(a==null?void 0:a.id,l==null?void 0:l.id),{enabled:!!(a!=null&&a.id)&&!!(l!=null&&l.id)});const t=async C=>{await Pt(a==null?void 0:a.id,l==null?void 0:l.id,C),await T.invalidateQueries(`favorites-${a==null?void 0:a.id}-${l==null?void 0:l.id}`)},o=((y=(S=(v=n==null?void 0:n.images)==null?void 0:v.logos)==null?void 0:S.find(C=>C.iso_639_1==="en"))==null?void 0:y.file_path)||((R=(b=n==null?void 0:n.images)==null?void 0:b.logos[0])==null?void 0:R.file_path),s=()=>r!=null&&r.overview?M.jsx("p",{className:"overview",children:r.overview.slice(0,r.overview.indexOf(".")+1)}):null,f=()=>o?M.jsxs(M.Fragment,{children:[M.jsx("img",{className:"logo-banner",src:`${kt}${o}`,alt:r==null?void 0:r.title}),c?M.jsx(Nt,{movie:n}):s()]}):s(),m=()=>M.jsxs("div",{className:"botones",children:[M.jsxs("button",{onClick:u,children:[M.jsx("i",{className:"fa-solid fa-play"})," Play"]}),M.jsx(jt,{movie:r,open:p,onClose:i}),M.jsxs("button",{onClick:e,className:"boton-info-banner",children:[M.jsx("i",{className:"fa-solid fa-circle-info"})," More Information"]}),M.jsx("button",{onClick:()=>{t(r)},className:"botonMeGustaBanner",children:M.jsx("i",{className:"fa-solid fa-heart"})})]});return h||!r?M.jsx("div",{className:"header",children:M.jsx("div",{className:"cuerpoBanner",children:M.jsx("div",{className:`contenedorLogo ${c?"contenedorDetailN":""}`})})}):M.jsxs("div",{className:"header",children:[M.jsx("img",{className:"fondo",src:`${Wt}${r==null?void 0:r.backdrop_path}`,alt:r==null?void 0:r.title}),M.jsx(At,{perfil:!0,menu:!0,logoBuscar:g}),M.jsx("div",{className:"cuerpoBanner",children:M.jsxs("div",{className:`contenedorLogo ${c?"contenedorDetailN":""}`,children:[f(),m()]})})]})}var q={},k={},I={},Y={},it;function J(){return it||(it=1,function(r){function g(d,n,h){var T=n.slidesToShow,w=n.currentSlide;return h.length>2*T?d+2*T:w>=h.length?h.length+d:d}function c(d,n){if(n.length>2*d){for(var h={},T=n.length-2*d,w=n.length-T,u=T,i=0;i<w;i++)h[i]=u,u++;var e=n.length+w,t=e+n.slice(0,2*d).length,o=0;for(i=e;i<=t;i++)h[i]=o,o++;var s=e,f=0;for(i=w;i<s;i++)h[i]=f,f++;return h}h={};var m=3*n.length,v=0;for(i=0;i<m;i++)h[i]=v,++v===n.length&&(v=0);return h}function l(d,n){return n.length<d?n:n.length>2*d?n.slice(n.length-2*d,n.length).concat(n,n.slice(0,2*d)):n.concat(n,n)}function a(d,n){return n.length>2*d?2*d:n.length}function p(d,n,h){var T,w=d.currentSlide,u=d.slidesToShow,i=d.itemWidth,e=d.totalItems,t=0,o=0,s=w===0,f=n.length-(n.length-2*u);return n.length<u?(o=t=0,s=T=!1):n.length>2*u?((T=w>=f+n.length)&&(o=-i*(t=w-n.length)),s&&(o=-i*(t=f+(n.length-2*u)))):((T=w>=2*n.length)&&(o=-i*(t=w-n.length)),s&&(o=h.showDots?-i*(t=n.length):-i*(t=e/3))),{isReachingTheEnd:T,isReachingTheStart:s,nextSlide:t,nextPosition:o}}Object.defineProperty(r,"__esModule",{value:!0}),r.getOriginalCounterPart=g,r.getOriginalIndexLookupTableByClones=c,r.getClones=l,r.getInitialSlideInInfiniteMode=a,r.checkClonesPosition=p}(Y)),Y}var L={},ot;function yt(){if(ot)return L;ot=1,Object.defineProperty(L,"__esModule",{value:!0});function r(l,a,p,d){var n=0,h=d||p;return a&&h&&(n=l[h].partialVisibilityGutter||l[h].paritialVisibilityGutter),n}function g(l,a){var p;return a[l]&&(p=(100/a[l].items).toFixed(1)),p}function c(l,a,p){return Math.round(p/(a+(l.centerMode?1:0)))}return L.getPartialVisibilityGutter=r,L.getWidthFromDeviceType=g,L.getItemClientSideWidth=c,L}var _={},nt;function O(){if(nt)return _;nt=1,Object.defineProperty(_,"__esModule",{value:!0});var r=yt();function g(u){var i=u.slidesToShow;return u.totalItems<i}function c(u,i){var e,t=u.domLoaded,o=u.slidesToShow,s=u.containerWidth,f=u.itemWidth,m=i.deviceType,v=i.responsive,S=i.ssr,y=i.partialVisbile,b=i.partialVisible,R=!!(t&&o&&s&&f);S&&m&&!R&&(e=r.getWidthFromDeviceType(m,v));var C=!!(S&&m&&!R&&e);return{shouldRenderOnSSR:C,flexBisis:e,domFullyLoaded:R,partialVisibilityGutter:r.getPartialVisibilityGutter(v,y||b,m,u.deviceType),shouldRenderAtAll:C||R}}function l(u,i){var e=i.currentSlide,t=i.slidesToShow;return e<=u&&u<e+t}function a(u,i,e){var t=e||u.transform;return!i.infinite&&u.currentSlide===0||g(u)?t:t+u.itemWidth/2}function p(u){return!(0<u.currentSlide)}function d(u){var i=u.currentSlide,e=u.totalItems;return!(i+u.slidesToShow<e)}function n(u,i,e,t){i===void 0&&(i=0);var o=u.currentSlide,s=u.slidesToShow,f=d(u),m=!e.infinite&&f,v=t||u.transform;if(g(u))return v;var S=v+o*i;return m?S+(u.containerWidth-(u.itemWidth-i)*s):S}function h(u,i){return u.rtl?-1*i:i}function T(u,i,e){var t=i.partialVisbile,o=i.partialVisible,s=i.responsive,f=i.deviceType,m=i.centerMode,v=e||u.transform,S=r.getPartialVisibilityGutter(s,t||o,f,u.deviceType);return h(i,o||t?n(u,S,i,e):m?a(u,i,e):v)}function w(u,i){var e=u.domLoaded,t=u.slidesToShow,o=u.containerWidth,s=u.itemWidth,f=i.deviceType,m=i.responsive,v=i.slidesToSlide||1,S=!!(e&&t&&o&&s);return i.ssr&&i.deviceType&&!S&&Object.keys(m).forEach(function(y){var b=m[y].slidesToSlide;f===y&&b&&(v=b)}),S&&Object.keys(m).forEach(function(y){var b=m[y],R=b.breakpoint,C=b.slidesToSlide,x=R.max,E=R.min;C&&window.innerWidth>=E&&window.innerWidth<=x&&(v=C)}),v}return _.notEnoughChildren=g,_.getInitialState=c,_.getIfSlideIsVisbile=l,_.getTransformForCenterMode=a,_.isInLeftEnd=p,_.isInRightEnd=d,_.getTransformForPartialVsibile=n,_.parsePosition=h,_.getTransform=T,_.getSlidesToSlide=w,_}var B={},rt;function Vt(){if(rt)return B;rt=1,Object.defineProperty(B,"__esModule",{value:!0});var r=function(g,c,l){var a;return function(){var p=arguments;a||(g.apply(this,p),a=!0,typeof l=="function"&&l(!0),setTimeout(function(){a=!1,typeof l=="function"&&l(!1)},c))}};return B.default=r,B}var K={},st;function qt(){return st||(st=1,function(r){function g(c,l){var a=l.partialVisbile,p=l.partialVisible,d=l.centerMode,n=l.ssr,h=l.responsive;if((a||p)&&d)throw new Error("center mode can not be used at the same time with partialVisible");if(!h)throw n?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(h&&typeof h!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(r,"__esModule",{value:!0}),r.default=g}(K)),K}var F={},at;function Bt(){if(at)return F;at=1,Object.defineProperty(F,"__esModule",{value:!0});var r=O();function g(c,l,a){a===void 0&&(a=0);var p,d,n=c.slidesToShow,h=c.currentSlide,T=c.itemWidth,w=c.totalItems,u=r.getSlidesToSlide(c,l),i=h+1+a+n+(0<a?0:u);return d=i<=w?-T*(p=h+a+(0<a?0:u)):w<i&&h!==w-n?-T*(p=w-n):p=void 0,{nextSlides:p,nextPosition:d}}return F.populateNextSlides=g,F}var G={},lt;function Ft(){if(lt)return G;lt=1,Object.defineProperty(G,"__esModule",{value:!0});var r=W(),g=O(),c=O();function l(a,p,d){d===void 0&&(d=0);var n,h,T=a.currentSlide,w=a.itemWidth,u=a.slidesToShow,i=p.children,e=p.showDots,t=p.infinite,o=g.getSlidesToSlide(a,p),s=T-d-(0<d?0:o),f=(r.Children.toArray(i).length-u)%o;return h=0<=s?(n=s,e&&!t&&0<f&&c.isInRightEnd(a)&&(n=T-f),-w*n):n=s<0&&T!==0?0:void 0,{nextSlides:n,nextPosition:h}}return G.populatePreviousSlides=l,G}var U={},ut;function Gt(){return ut||(ut=1,function(r){function g(c,l,a,p,d,n){var h,T,w=c.itemWidth,u=c.slidesToShow,i=c.totalItems,e=c.currentSlide,t=l.infinite,o=!1,s=Math.round((a-p)/w),f=Math.round((p-a)/w),m=a<d;if(d<a&&s<=u){h="right";var v=Math.abs(-w*(i-u)),S=n-(p-d),y=e===i-u;(Math.abs(S)<=v||y&&t)&&(T=S,o=!0)}return m&&f<=u&&(h="left",((S=n+(d-p))<=0||e===0&&t)&&(o=!0,T=S)),{direction:h,nextPosition:T,canContinue:o}}Object.defineProperty(r,"__esModule",{value:!0}),r.populateSlidesOnMouseTouchMove=g}(U)),U}var dt;function wt(){if(dt)return I;dt=1,Object.defineProperty(I,"__esModule",{value:!0});var r=J();I.getOriginalCounterPart=r.getOriginalCounterPart,I.getClones=r.getClones,I.checkClonesPosition=r.checkClonesPosition,I.getInitialSlideInInfiniteMode=r.getInitialSlideInInfiniteMode;var g=yt();I.getWidthFromDeviceType=g.getWidthFromDeviceType,I.getPartialVisibilityGutter=g.getPartialVisibilityGutter,I.getItemClientSideWidth=g.getItemClientSideWidth;var c=O();I.getInitialState=c.getInitialState,I.getIfSlideIsVisbile=c.getIfSlideIsVisbile,I.getTransformForCenterMode=c.getTransformForCenterMode,I.getTransformForPartialVsibile=c.getTransformForPartialVsibile,I.isInLeftEnd=c.isInLeftEnd,I.isInRightEnd=c.isInRightEnd,I.notEnoughChildren=c.notEnoughChildren,I.getSlidesToSlide=c.getSlidesToSlide;var l=Vt();I.throttle=l.default;var a=qt();I.throwError=a.default;var p=Bt();I.populateNextSlides=p.populateNextSlides;var d=Ft();I.populatePreviousSlides=d.populatePreviousSlides;var n=Gt();return I.populateSlidesOnMouseTouchMove=n.populateSlidesOnMouseTouchMove,I}var D={},ht;function $t(){if(ht)return D;ht=1;var r=D.__extends||function(){var a=function(p,d){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,h){n.__proto__=h}||function(n,h){for(var T in h)h.hasOwnProperty(T)&&(n[T]=h[T])})(p,d)};return function(p,d){function n(){this.constructor=p}a(p,d),p.prototype=d===null?Object.create(d):(n.prototype=d.prototype,new n)}}();Object.defineProperty(D,"__esModule",{value:!0});var g=W();function c(a){return"clientY"in a}D.isMouseMoveEvent=c;var l=function(a){function p(){return a!==null&&a.apply(this,arguments)||this}return r(p,a),p}(g.Component);return D.default=l,D}var $={},X={},ct;function Xt(){if(ct)return X;ct=1,Object.defineProperty(X,"__esModule",{value:!0});var r=J(),g=O();function c(l,a,p,d){var n={},h=g.getSlidesToSlide(a,p);return Array(l).fill(0).forEach(function(T,w){var u=r.getOriginalCounterPart(w,a,d);if(w===0)n[0]=u;else{var i=n[w-1]+h;n[w]=i}}),n}return X.getLookupTableForNextSlides=c,X}var ft;function zt(){if(ft)return $;ft=1,Object.defineProperty($,"__esModule",{value:!0});var r=W(),g=J(),c=Xt(),l=O(),a=function(p){var d=p.props,n=p.state,h=p.goToSlide,T=p.getState,w=d.showDots,u=d.customDot,i=d.dotListClass,e=d.infinite,t=d.children;if(!w||l.notEnoughChildren(n))return null;var o,s=n.currentSlide,f=n.slidesToShow,m=l.getSlidesToSlide(n,d),v=r.Children.toArray(t);o=e?Math.ceil(v.length/m):Math.ceil((v.length-f)/m)+1;var S=c.getLookupTableForNextSlides(o,n,d,v),y=g.getOriginalIndexLookupTableByClones(f,v),b=y[s];return r.createElement("ul",{className:"react-multi-carousel-dot-list "+i},Array(o).fill(0).map(function(R,C){var x,E;if(e){E=S[C];var A=y[E];x=b===A||A<=b&&b<A+m}else{var V=v.length-f,P=C*m;x=(E=V<P?V:P)===s||E<s&&s<E+m&&s<v.length-f}return u?r.cloneElement(u,{index:C,active:x,key:C,onClick:function(){return h(E)},carouselState:T()}):r.createElement("li",{"data-index":C,key:C,className:"react-multi-carousel-dot "+(x?"react-multi-carousel-dot--active":"")},r.createElement("button",{"aria-label":"Go to slide "+(C+1),onClick:function(){return h(E)}}))}))};return $.default=a,$}var j={},pt;function Yt(){if(pt)return j;pt=1,Object.defineProperty(j,"__esModule",{value:!0});var r=W(),g=function(l){var a=l.customLeftArrow,p=l.getState,d=l.previous,n=l.disabled,h=l.rtl;if(a)return r.cloneElement(a,{onClick:function(){return d()},carouselState:p(),disabled:n,rtl:h});var T=h?"rtl":"";return r.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+T,onClick:function(){return d()},type:"button",disabled:n})};j.LeftArrow=g;var c=function(l){var a=l.customRightArrow,p=l.getState,d=l.next,n=l.disabled,h=l.rtl;if(a)return r.cloneElement(a,{onClick:function(){return d()},carouselState:p(),disabled:n,rtl:h});var T=h?"rtl":"";return r.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+T,onClick:function(){return d()},type:"button",disabled:n})};return j.RightArrow=c,j}var z={},mt;function Kt(){if(mt)return z;mt=1,Object.defineProperty(z,"__esModule",{value:!0});var r=W(),g=wt(),c=function(l){var a=l.props,p=l.state,d=l.goToSlide,n=l.clones,h=l.notEnoughChildren,T=p.itemWidth,w=a.children,u=a.infinite,i=a.itemClass,e=a.itemAriaLabel,t=a.partialVisbile,o=a.partialVisible,s=g.getInitialState(p,a),f=s.flexBisis,m=s.shouldRenderOnSSR,v=s.domFullyLoaded,S=s.partialVisibilityGutter;return s.shouldRenderAtAll?(t&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),r.createElement(r.Fragment,null,(u?n:r.Children.toArray(w)).map(function(y,b){return r.createElement("li",{key:b,"data-index":b,onClick:function(){a.focusOnSelect&&d(b)},"aria-hidden":g.getIfSlideIsVisbile(b,p)?"false":"true","aria-label":e||(y.props.ariaLabel?y.props.ariaLabel:null),style:{flex:m?"1 0 "+f+"%":"auto",position:"relative",width:v?((t||o)&&S&&!h?T-S:T)+"px":"auto"},className:"react-multi-carousel-item "+(g.getIfSlideIsVisbile(b,p)?"react-multi-carousel-item--active":"")+" "+i},y)}))):null};return z.default=c,z}var vt;function Ut(){if(vt)return k;vt=1;var r=k.__extends||function(){var u=function(i,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var s in o)o.hasOwnProperty(s)&&(t[s]=o[s])})(i,e)};return function(i,e){function t(){this.constructor=i}u(i,e),i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}();Object.defineProperty(k,"__esModule",{value:!0});var g=W(),c=wt(),l=$t(),a=zt(),p=Yt(),d=Kt(),n=O(),h=400,T="transform 400ms ease-in-out",w=function(u){function i(e){var t=u.call(this,e)||this;return t.containerRef=g.createRef(),t.listRef=g.createRef(),t.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:g.Children.count(e.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},t.onResize=t.onResize.bind(t),t.handleDown=t.handleDown.bind(t),t.handleMove=t.handleMove.bind(t),t.handleOut=t.handleOut.bind(t),t.onKeyUp=t.onKeyUp.bind(t),t.handleEnter=t.handleEnter.bind(t),t.setIsInThrottle=t.setIsInThrottle.bind(t),t.next=c.throttle(t.next.bind(t),e.transitionDuration||h,t.setIsInThrottle),t.previous=c.throttle(t.previous.bind(t),e.transitionDuration||h,t.setIsInThrottle),t.goToSlide=c.throttle(t.goToSlide.bind(t),e.transitionDuration||h,t.setIsInThrottle),t.onMove=!1,t.initialX=0,t.lastX=0,t.isAnimationAllowed=!1,t.direction="",t.initialY=0,t.isInThrottle=!1,t.transformPlaceHolder=0,t}return r(i,u),i.prototype.resetTotalItems=function(){var e=this,t=g.Children.count(this.props.children),o=c.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,t));this.setState({totalItems:t,currentSlide:o},function(){e.setContainerAndItemWidth(e.state.slidesToShow,!0)})},i.prototype.setIsInThrottle=function(e){e===void 0&&(e=!1),this.isInThrottle=e},i.prototype.setTransformDirectly=function(e,t){var o=this.props.additionalTransfrom;this.transformPlaceHolder=e;var s=n.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(t),this.listRef.current.style.transform="translate3d("+(s+o)+"px,0,0)")},i.prototype.setAnimationDirectly=function(e){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=e?this.props.customTransition||T:"none")},i.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.setClones=function(e,t,o,s){var f=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var m=g.Children.toArray(this.props.children),v=c.getInitialSlideInInfiniteMode(e||this.state.slidesToShow,m),S=c.getClones(this.state.slidesToShow,m),y=m.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:S.length,currentSlide:o&&!s?y:v},function(){f.correctItemsPosition(t||f.state.itemWidth)})},i.prototype.setItemsToShow=function(e,t){var o=this,s=this.props.responsive;Object.keys(s).forEach(function(f){var m=s[f],v=m.breakpoint,S=m.items,y=v.max,b=v.min,R=[window.innerWidth];window.screen&&window.screen.width&&R.push(window.screen.width);var C=Math.min.apply(Math,R);b<=C&&C<=y&&(o.setState({slidesToShow:S,deviceType:f}),o.setContainerAndItemWidth(S,e,t))})},i.prototype.setContainerAndItemWidth=function(e,t,o){var s=this;if(this.containerRef&&this.containerRef.current){var f=this.containerRef.current.offsetWidth,m=c.getItemClientSideWidth(this.props,e,f);this.setState({containerWidth:f,itemWidth:m},function(){s.props.infinite&&s.setClones(e,m,t,o)}),t&&this.correctItemsPosition(m)}},i.prototype.correctItemsPosition=function(e,t,o){t&&(this.isAnimationAllowed=!0),!t&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-e*this.state.currentSlide;o&&this.setTransformDirectly(s,!0),this.setState({transform:s})},i.prototype.onResize=function(e){var t;t=!!this.props.infinite&&(typeof e!="boolean"||!e),this.setItemsToShow(t)},i.prototype.componentDidUpdate=function(e,t){var o=this,s=e.keyBoardControl,f=e.autoPlay,m=e.children,v=t.containerWidth,S=t.domLoaded,y=t.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==v&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){o.setItemsToShow(!0)},this.props.transitionDuration||h)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),f&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),f||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),m.length!==this.props.children.length?i.clonesTimeout=setTimeout(function(){o.props.infinite?o.setClones(o.state.slidesToShow,o.state.itemWidth,!0,!0):o.resetTotalItems()},this.props.transitionDuration||h):this.props.infinite&&this.state.currentSlide!==y&&this.correctClonesPosition({domLoaded:S}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&c.isInRightEnd(this.state)){var b=this.props.transitionDuration||h;i.isInThrottleTimeout=setTimeout(function(){o.setIsInThrottle(!1),o.resetAutoplayInterval(),o.goToSlide(0,void 0,!!o.props.rewindWithAnimation)},b+this.props.autoPlaySpeed)}},i.prototype.correctClonesPosition=function(e){var t=this,o=e.domLoaded,s=g.Children.toArray(this.props.children),f=c.checkClonesPosition(this.state,s,this.props),m=f.isReachingTheEnd,v=f.isReachingTheStart,S=f.nextSlide,y=f.nextPosition;this.state.domLoaded&&o&&(m||v)&&(this.isAnimationAllowed=!1,i.transformTimeout=setTimeout(function(){t.setState({transform:y,currentSlide:S})},this.props.transitionDuration||h))},i.prototype.next=function(e){var t=this;e===void 0&&(e=0);var o=this.props,s=o.afterChange,f=o.beforeChange;if(!c.notEnoughChildren(this.state)){var m=c.populateNextSlides(this.state,this.props,e),v=m.nextSlides,S=m.nextPosition,y=this.state.currentSlide;v!==void 0&&S!==void 0&&(typeof f=="function"&&f(v,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:S,currentSlide:v},function(){typeof s=="function"&&(i.afterChangeTimeout=setTimeout(function(){s(y,t.getState())},t.props.transitionDuration||h))}))}},i.prototype.previous=function(e){var t=this;e===void 0&&(e=0);var o=this.props,s=o.afterChange,f=o.beforeChange;if(!c.notEnoughChildren(this.state)){var m=c.populatePreviousSlides(this.state,this.props,e),v=m.nextSlides,S=m.nextPosition;if(v!==void 0&&S!==void 0){var y=this.state.currentSlide;typeof f=="function"&&f(v,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:S,currentSlide:v},function(){typeof s=="function"&&(i.afterChangeTimeout2=setTimeout(function(){s(y,t.getState())},t.props.transitionDuration||h))})}}},i.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),i.clonesTimeout&&clearTimeout(i.clonesTimeout),i.isInThrottleTimeout&&clearTimeout(i.isInThrottleTimeout),i.transformTimeout&&clearTimeout(i.transformTimeout),i.afterChangeTimeout&&clearTimeout(i.afterChangeTimeout),i.afterChangeTimeout2&&clearTimeout(i.afterChangeTimeout2),i.afterChangeTimeout3&&clearTimeout(i.afterChangeTimeout3)},i.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},i.prototype.getCords=function(e){var t=e.clientX,o=e.clientY;return{clientX:n.parsePosition(this.props,t),clientY:n.parsePosition(this.props,o)}},i.prototype.handleDown=function(e){if(!(!l.isMouseMoveEvent(e)&&!this.props.swipeable||l.isMouseMoveEvent(e)&&!this.props.draggable||this.isInThrottle)){var t=this.getCords(l.isMouseMoveEvent(e)?e:e.touches[0]),o=t.clientX,s=t.clientY;this.onMove=!0,this.initialX=o,this.initialY=s,this.lastX=o,this.isAnimationAllowed=!1}},i.prototype.handleMove=function(e){if(!(!l.isMouseMoveEvent(e)&&!this.props.swipeable||l.isMouseMoveEvent(e)&&!this.props.draggable||c.notEnoughChildren(this.state))){var t=this.getCords(l.isMouseMoveEvent(e)?e:e.touches[0]),o=t.clientX,s=t.clientY,f=this.initialX-o,m=this.initialY-s;if(this.onMove){if(!(Math.abs(f)>Math.abs(m)))return;var v=c.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,o,this.transformPlaceHolder),S=v.direction,y=v.nextPosition,b=v.canContinue;S&&(this.direction=S,b&&y!==void 0&&this.setTransformDirectly(y)),this.lastX=o}}},i.prototype.handleOut=function(e){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var t=e.type==="touchend"&&!this.props.swipeable,o=(e.type==="mouseleave"||e.type==="mouseup")&&!this.props.draggable;if(!t&&!o&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},i.prototype.isInViewport=function(e){var t=e.getBoundingClientRect(),o=t.top,s=o===void 0?0:o,f=t.left,m=f===void 0?0:f,v=t.bottom,S=v===void 0?0:v,y=t.right,b=y===void 0?0:y;return 0<=s&&0<=m&&S<=(window.innerHeight||document.documentElement.clientHeight)&&b<=(window.innerWidth||document.documentElement.clientWidth)},i.prototype.isChildOfCarousel=function(e){return!!(e instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(e)},i.prototype.onKeyUp=function(e){var t=e.target;switch(e.keyCode){case 37:if(this.isChildOfCarousel(t))return this.previous();break;case 39:if(this.isChildOfCarousel(t))return this.next();break;case 9:if(this.isChildOfCarousel(t)&&t instanceof HTMLInputElement&&this.isInViewport(t))return this.next()}},i.prototype.handleEnter=function(e){l.isMouseMoveEvent(e)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},i.prototype.goToSlide=function(e,t,o){var s=this;if(o===void 0&&(o=!0),!this.isInThrottle){var f=this.state.itemWidth,m=this.props,v=m.afterChange,S=m.beforeChange,y=this.state.currentSlide;typeof S!="function"||t&&(typeof t!="object"||t.skipBeforeChange)||S(e,this.getState()),this.isAnimationAllowed=o,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:e,transform:-f*e},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof v!="function"||t&&(typeof t!="object"||t.skipAfterChange)||(i.afterChangeTimeout3=setTimeout(function(){v(y,s.getState())},s.props.transitionDuration||h))})}},i.prototype.getState=function(){return this.state},i.prototype.renderLeftArrow=function(e){var t=this,o=this.props,s=o.customLeftArrow,f=o.rtl;return g.createElement(p.LeftArrow,{customLeftArrow:s,getState:function(){return t.getState()},previous:this.previous,disabled:e,rtl:f})},i.prototype.renderRightArrow=function(e){var t=this,o=this.props,s=o.customRightArrow,f=o.rtl;return g.createElement(p.RightArrow,{customRightArrow:s,getState:function(){return t.getState()},next:this.next,disabled:e,rtl:f})},i.prototype.renderButtonGroups=function(){var e=this,t=this.props.customButtonGroup;return t?g.cloneElement(t,{previous:function(){return e.previous()},next:function(){return e.next()},goToSlide:function(o,s){return e.goToSlide(o,s)},carouselState:this.getState()}):null},i.prototype.renderDotsList=function(){var e=this;return g.createElement(a.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return e.getState()}})},i.prototype.renderCarouselItems=function(){var e=[];if(this.props.infinite){var t=g.Children.toArray(this.props.children);e=c.getClones(this.state.slidesToShow,t)}return g.createElement(d.default,{clones:e,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:c.notEnoughChildren(this.state),props:this.props})},i.prototype.render=function(){var e=this.props,t=e.deviceType,o=e.arrows,s=e.renderArrowsWhenDisabled,f=e.removeArrowOnDeviceType,m=e.infinite,v=e.containerClass,S=e.sliderClass,y=e.customTransition,b=e.additionalTransfrom,R=e.renderDotsOutside,C=e.renderButtonGroupOutside,x=e.className,E=e.rtl,A=c.getInitialState(this.state,this.props),V=A.shouldRenderOnSSR,P=A.shouldRenderAtAll,bt=c.isInLeftEnd(this.state),Ct=c.isInRightEnd(this.state),Z=o&&!(f&&(t&&-1<f.indexOf(t)||this.state.deviceType&&-1<f.indexOf(this.state.deviceType)))&&!c.notEnoughChildren(this.state)&&P,H=!m&&bt,tt=!m&&Ct,It=n.getTransform(this.state,this.props);return g.createElement(g.Fragment,null,g.createElement("div",{className:"react-multi-carousel-list "+v+" "+x,dir:E?"rtl":"ltr",ref:this.containerRef},g.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+S,style:{transition:this.isAnimationAllowed?y||T:"none",overflow:V?"hidden":"unset",transform:"translate3d("+(It+b)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),Z&&(!H||s)&&this.renderLeftArrow(H),Z&&(!tt||s)&&this.renderRightArrow(tt),P&&!C&&this.renderButtonGroups(),P&&!R&&this.renderDotsList()),P&&R&&this.renderDotsList(),P&&C&&this.renderButtonGroups())},i.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},i}(g.Component);return k.default=w,k}var gt;function Qt(){if(gt)return q;gt=1,Object.defineProperty(q,"__esModule",{value:!0});var r=Ut();return q.default=r.default,q}var Q,St;function Jt(){return St||(St=1,Q=Qt()),Q}var Zt=Jt();const ne=Ot(Zt),re={desktop:{breakpoint:{max:3e3,min:1281},items:7,slidesToSlide:6},tablet:{breakpoint:{max:1280,min:769},items:6,slidesToSlide:5},mobileLarge:{breakpoint:{max:768,min:481},items:4,slidesToSlide:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}},se={desktop:{breakpoint:{max:3e3,min:1281},items:8,slidesToSlide:6},tablet:{breakpoint:{max:1280,min:769},items:6,slidesToSlide:5},mobileLarge:{breakpoint:{max:768,min:481},items:4,slidesToSlide:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}},ae=r=>({desktop:{breakpoint:{max:3e3,min:1281},items:r?6:8,slidesToSlide:r?4:6},tablet:{breakpoint:{max:1280,min:769},items:r?4:6,slidesToSlide:r?3:5},mobileLarge:{breakpoint:{max:768,min:481},items:r?3:4,slidesToSlide:r?2:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}});export{oe as B,ne as C,se as a,re as b,ae as r};
