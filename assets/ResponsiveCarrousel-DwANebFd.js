const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModalVideo-D5G4i8Gp.js","assets/index-nLxA1X93.js","assets/index-BuC96A4J.css","assets/useQuery--5MvWUps.js","assets/fetchData-DCFA1qTy.js","assets/endPoints-D6Ym8Q8U.js","assets/Transition-BlqVJSux.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js","assets/DetalleBaner-CM4ECHrx.js","assets/CarouselBoostrap-Cjp7i3Fh.js","assets/useMergedRefs-cLb7Wx4x.js","assets/CarouselBoostrap-B1CN3x4M.css","assets/NavBar-CxuLc1AR.js","assets/NavBar-CjEBi0FN.css","assets/DetalleBaner-BzNCLA6X.css"])))=>i.map(i=>d[i]);
import{r as O,_ as Te,u as Re,R as Me,a as _e,e as Ee,g as xe,j as R,h as Pe,o as k,p as Oe}from"./index-nLxA1X93.js";import{N as Ae}from"./NavBar-CxuLc1AR.js";import{c as Le,d as De,e as We}from"./endPoints-D6Ym8Q8U.js";import{u as te}from"./useQuery--5MvWUps.js";import{f as ke}from"./fetchData-DCFA1qTy.js";const je=O.lazy(()=>Te(()=>import("./ModalVideo-D5G4i8Gp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Ne=O.lazy(()=>Te(()=>import("./DetalleBaner-CM4ECHrx.js"),__vite__mapDeps([8,1,2,9,10,7,6,3,4,5,11,12,13,14])));function nt({movie:r,logoBuscar:g,isDetail:c=!1}){var y,b,_,I,x;const{currentPerfil:l,currentUser:a}=Re(),[p,d]=Me.useState(!1),{data:n,isLoading:h}=te(`movie-${r==null?void 0:r.id}`,()=>ke(Le(r==null?void 0:r.id).movieDetails),{enabled:!!(r!=null&&r.id)}),[T,w]=O.useState(window.innerWidth),u=_e(),i=Ee(),t=O.useCallback(()=>d(!0),[]),e=O.useCallback(()=>d(!1),[]),o=O.useCallback(()=>{i("/info",{state:{movie:r}})},[i,r]);te(`favorites-${a==null?void 0:a.id}-${l==null?void 0:l.id}`,()=>xe(a==null?void 0:a.id,l==null?void 0:l.id),{enabled:!!(a!=null&&a.id)&&!!(l!=null&&l.id)}),O.useEffect(()=>{const M=()=>w(window.innerWidth);return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);const s=async M=>{await Pe(a==null?void 0:a.id,l==null?void 0:l.id,M),await u.invalidateQueries(`favorites-${a==null?void 0:a.id}-${l==null?void 0:l.id}`)},f=((_=(b=(y=n==null?void 0:n.images)==null?void 0:y.logos)==null?void 0:b.find(M=>M.iso_639_1==="en"))==null?void 0:_.file_path)||((x=(I=n==null?void 0:n.images)==null?void 0:I.logos[0])==null?void 0:x.file_path),m=()=>r!=null&&r.overview?R.jsx("p",{className:"overview",children:r.overview.slice(0,r.overview.indexOf(".")+1)}):null,v=()=>f?R.jsxs(R.Fragment,{children:[R.jsx("img",{className:"logo-banner",src:`${We}${f}`,alt:r==null?void 0:r.title}),c?R.jsx(Ne,{movie:n}):m()]}):m(),S=()=>R.jsxs("div",{className:"botones",children:[R.jsxs("button",{onClick:t,children:[R.jsx("i",{className:"fa-solid fa-play"})," Play"]}),R.jsx(je,{movie:r,open:p,onClose:e}),R.jsxs("button",{onClick:o,className:"boton-info-banner",children:[R.jsx("i",{className:"fa-solid fa-circle-info"})," ",T>=1e3?"More Information":""]}),R.jsx("button",{onClick:()=>{s(r)},className:"botonMeGustaBanner",children:R.jsx("i",{className:"fa-solid fa-heart"})})]});return h||!r?R.jsx("div",{className:"header",children:R.jsx("div",{className:"cuerpoBanner",children:R.jsx("div",{className:`contenedorLogo ${c?"contenedorDetailN":""}`})})}):R.jsxs("div",{className:"header",children:[R.jsx("img",{className:"fondo",src:`${De}${r==null?void 0:r.backdrop_path}`,alt:r==null?void 0:r.title}),R.jsx(Ae,{perfil:!0,menu:!0,logoBuscar:g}),R.jsx("div",{className:"cuerpoBanner",children:R.jsxs("div",{className:`contenedorLogo ${c?"contenedorDetailN":""}`,children:[v(),S()]})})]})}var q={},j={},C={},Y={},ie;function J(){return ie||(ie=1,function(r){function g(d,n,h){var T=n.slidesToShow,w=n.currentSlide;return h.length>2*T?d+2*T:w>=h.length?h.length+d:d}function c(d,n){if(n.length>2*d){for(var h={},T=n.length-2*d,w=n.length-T,u=T,i=0;i<w;i++)h[i]=u,u++;var t=n.length+w,e=t+n.slice(0,2*d).length,o=0;for(i=t;i<=e;i++)h[i]=o,o++;var s=t,f=0;for(i=w;i<s;i++)h[i]=f,f++;return h}h={};var m=3*n.length,v=0;for(i=0;i<m;i++)h[i]=v,++v===n.length&&(v=0);return h}function l(d,n){return n.length<d?n:n.length>2*d?n.slice(n.length-2*d,n.length).concat(n,n.slice(0,2*d)):n.concat(n,n)}function a(d,n){return n.length>2*d?2*d:n.length}function p(d,n,h){var T,w=d.currentSlide,u=d.slidesToShow,i=d.itemWidth,t=d.totalItems,e=0,o=0,s=w===0,f=n.length-(n.length-2*u);return n.length<u?(o=e=0,s=T=!1):n.length>2*u?((T=w>=f+n.length)&&(o=-i*(e=w-n.length)),s&&(o=-i*(e=f+(n.length-2*u)))):((T=w>=2*n.length)&&(o=-i*(e=w-n.length)),s&&(o=h.showDots?-i*(e=n.length):-i*(e=t/3))),{isReachingTheEnd:T,isReachingTheStart:s,nextSlide:e,nextPosition:o}}Object.defineProperty(r,"__esModule",{value:!0}),r.getOriginalCounterPart=g,r.getOriginalIndexLookupTableByClones=c,r.getClones=l,r.getInitialSlideInInfiniteMode=a,r.checkClonesPosition=p}(Y)),Y}var D={},oe;function ye(){if(oe)return D;oe=1,Object.defineProperty(D,"__esModule",{value:!0});function r(l,a,p,d){var n=0,h=d||p;return a&&h&&(n=l[h].partialVisibilityGutter||l[h].paritialVisibilityGutter),n}function g(l,a){var p;return a[l]&&(p=(100/a[l].items).toFixed(1)),p}function c(l,a,p){return Math.round(p/(a+(l.centerMode?1:0)))}return D.getPartialVisibilityGutter=r,D.getWidthFromDeviceType=g,D.getItemClientSideWidth=c,D}var E={},ne;function A(){if(ne)return E;ne=1,Object.defineProperty(E,"__esModule",{value:!0});var r=ye();function g(u){var i=u.slidesToShow;return u.totalItems<i}function c(u,i){var t,e=u.domLoaded,o=u.slidesToShow,s=u.containerWidth,f=u.itemWidth,m=i.deviceType,v=i.responsive,S=i.ssr,y=i.partialVisbile,b=i.partialVisible,_=!!(e&&o&&s&&f);S&&m&&!_&&(t=r.getWidthFromDeviceType(m,v));var I=!!(S&&m&&!_&&t);return{shouldRenderOnSSR:I,flexBisis:t,domFullyLoaded:_,partialVisibilityGutter:r.getPartialVisibilityGutter(v,y||b,m,u.deviceType),shouldRenderAtAll:I||_}}function l(u,i){var t=i.currentSlide,e=i.slidesToShow;return t<=u&&u<t+e}function a(u,i,t){var e=t||u.transform;return!i.infinite&&u.currentSlide===0||g(u)?e:e+u.itemWidth/2}function p(u){return!(0<u.currentSlide)}function d(u){var i=u.currentSlide,t=u.totalItems;return!(i+u.slidesToShow<t)}function n(u,i,t,e){i===void 0&&(i=0);var o=u.currentSlide,s=u.slidesToShow,f=d(u),m=!t.infinite&&f,v=e||u.transform;if(g(u))return v;var S=v+o*i;return m?S+(u.containerWidth-(u.itemWidth-i)*s):S}function h(u,i){return u.rtl?-1*i:i}function T(u,i,t){var e=i.partialVisbile,o=i.partialVisible,s=i.responsive,f=i.deviceType,m=i.centerMode,v=t||u.transform,S=r.getPartialVisibilityGutter(s,e||o,f,u.deviceType);return h(i,o||e?n(u,S,i,t):m?a(u,i,t):v)}function w(u,i){var t=u.domLoaded,e=u.slidesToShow,o=u.containerWidth,s=u.itemWidth,f=i.deviceType,m=i.responsive,v=i.slidesToSlide||1,S=!!(t&&e&&o&&s);return i.ssr&&i.deviceType&&!S&&Object.keys(m).forEach(function(y){var b=m[y].slidesToSlide;f===y&&b&&(v=b)}),S&&Object.keys(m).forEach(function(y){var b=m[y],_=b.breakpoint,I=b.slidesToSlide,x=_.max,M=_.min;I&&window.innerWidth>=M&&window.innerWidth<=x&&(v=I)}),v}return E.notEnoughChildren=g,E.getInitialState=c,E.getIfSlideIsVisbile=l,E.getTransformForCenterMode=a,E.isInLeftEnd=p,E.isInRightEnd=d,E.getTransformForPartialVsibile=n,E.parsePosition=h,E.getTransform=T,E.getSlidesToSlide=w,E}var B={},re;function Ve(){if(re)return B;re=1,Object.defineProperty(B,"__esModule",{value:!0});var r=function(g,c,l){var a;return function(){var p=arguments;a||(g.apply(this,p),a=!0,typeof l=="function"&&l(!0),setTimeout(function(){a=!1,typeof l=="function"&&l(!1)},c))}};return B.default=r,B}var K={},se;function qe(){return se||(se=1,function(r){function g(c,l){var a=l.partialVisbile,p=l.partialVisible,d=l.centerMode,n=l.ssr,h=l.responsive;if((a||p)&&d)throw new Error("center mode can not be used at the same time with partialVisible");if(!h)throw n?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(h&&typeof h!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(r,"__esModule",{value:!0}),r.default=g}(K)),K}var F={},ae;function Be(){if(ae)return F;ae=1,Object.defineProperty(F,"__esModule",{value:!0});var r=A();function g(c,l,a){a===void 0&&(a=0);var p,d,n=c.slidesToShow,h=c.currentSlide,T=c.itemWidth,w=c.totalItems,u=r.getSlidesToSlide(c,l),i=h+1+a+n+(0<a?0:u);return d=i<=w?-T*(p=h+a+(0<a?0:u)):w<i&&h!==w-n?-T*(p=w-n):p=void 0,{nextSlides:p,nextPosition:d}}return F.populateNextSlides=g,F}var G={},le;function Fe(){if(le)return G;le=1,Object.defineProperty(G,"__esModule",{value:!0});var r=k(),g=A(),c=A();function l(a,p,d){d===void 0&&(d=0);var n,h,T=a.currentSlide,w=a.itemWidth,u=a.slidesToShow,i=p.children,t=p.showDots,e=p.infinite,o=g.getSlidesToSlide(a,p),s=T-d-(0<d?0:o),f=(r.Children.toArray(i).length-u)%o;return h=0<=s?(n=s,t&&!e&&0<f&&c.isInRightEnd(a)&&(n=T-f),-w*n):n=s<0&&T!==0?0:void 0,{nextSlides:n,nextPosition:h}}return G.populatePreviousSlides=l,G}var U={},ue;function Ge(){return ue||(ue=1,function(r){function g(c,l,a,p,d,n){var h,T,w=c.itemWidth,u=c.slidesToShow,i=c.totalItems,t=c.currentSlide,e=l.infinite,o=!1,s=Math.round((a-p)/w),f=Math.round((p-a)/w),m=a<d;if(d<a&&s<=u){h="right";var v=Math.abs(-w*(i-u)),S=n-(p-d),y=t===i-u;(Math.abs(S)<=v||y&&e)&&(T=S,o=!0)}return m&&f<=u&&(h="left",((S=n+(d-p))<=0||t===0&&e)&&(o=!0,T=S)),{direction:h,nextPosition:T,canContinue:o}}Object.defineProperty(r,"__esModule",{value:!0}),r.populateSlidesOnMouseTouchMove=g}(U)),U}var de;function we(){if(de)return C;de=1,Object.defineProperty(C,"__esModule",{value:!0});var r=J();C.getOriginalCounterPart=r.getOriginalCounterPart,C.getClones=r.getClones,C.checkClonesPosition=r.checkClonesPosition,C.getInitialSlideInInfiniteMode=r.getInitialSlideInInfiniteMode;var g=ye();C.getWidthFromDeviceType=g.getWidthFromDeviceType,C.getPartialVisibilityGutter=g.getPartialVisibilityGutter,C.getItemClientSideWidth=g.getItemClientSideWidth;var c=A();C.getInitialState=c.getInitialState,C.getIfSlideIsVisbile=c.getIfSlideIsVisbile,C.getTransformForCenterMode=c.getTransformForCenterMode,C.getTransformForPartialVsibile=c.getTransformForPartialVsibile,C.isInLeftEnd=c.isInLeftEnd,C.isInRightEnd=c.isInRightEnd,C.notEnoughChildren=c.notEnoughChildren,C.getSlidesToSlide=c.getSlidesToSlide;var l=Ve();C.throttle=l.default;var a=qe();C.throwError=a.default;var p=Be();C.populateNextSlides=p.populateNextSlides;var d=Fe();C.populatePreviousSlides=d.populatePreviousSlides;var n=Ge();return C.populateSlidesOnMouseTouchMove=n.populateSlidesOnMouseTouchMove,C}var W={},he;function $e(){if(he)return W;he=1;var r=W.__extends||function(){var a=function(p,d){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,h){n.__proto__=h}||function(n,h){for(var T in h)h.hasOwnProperty(T)&&(n[T]=h[T])})(p,d)};return function(p,d){function n(){this.constructor=p}a(p,d),p.prototype=d===null?Object.create(d):(n.prototype=d.prototype,new n)}}();Object.defineProperty(W,"__esModule",{value:!0});var g=k();function c(a){return"clientY"in a}W.isMouseMoveEvent=c;var l=function(a){function p(){return a!==null&&a.apply(this,arguments)||this}return r(p,a),p}(g.Component);return W.default=l,W}var $={},z={},ce;function ze(){if(ce)return z;ce=1,Object.defineProperty(z,"__esModule",{value:!0});var r=J(),g=A();function c(l,a,p,d){var n={},h=g.getSlidesToSlide(a,p);return Array(l).fill(0).forEach(function(T,w){var u=r.getOriginalCounterPart(w,a,d);if(w===0)n[0]=u;else{var i=n[w-1]+h;n[w]=i}}),n}return z.getLookupTableForNextSlides=c,z}var fe;function Xe(){if(fe)return $;fe=1,Object.defineProperty($,"__esModule",{value:!0});var r=k(),g=J(),c=ze(),l=A(),a=function(p){var d=p.props,n=p.state,h=p.goToSlide,T=p.getState,w=d.showDots,u=d.customDot,i=d.dotListClass,t=d.infinite,e=d.children;if(!w||l.notEnoughChildren(n))return null;var o,s=n.currentSlide,f=n.slidesToShow,m=l.getSlidesToSlide(n,d),v=r.Children.toArray(e);o=t?Math.ceil(v.length/m):Math.ceil((v.length-f)/m)+1;var S=c.getLookupTableForNextSlides(o,n,d,v),y=g.getOriginalIndexLookupTableByClones(f,v),b=y[s];return r.createElement("ul",{className:"react-multi-carousel-dot-list "+i},Array(o).fill(0).map(function(_,I){var x,M;if(t){M=S[I];var L=y[M];x=b===L||L<=b&&b<L+m}else{var V=v.length-f,P=I*m;x=(M=V<P?V:P)===s||M<s&&s<M+m&&s<v.length-f}return u?r.cloneElement(u,{index:I,active:x,key:I,onClick:function(){return h(M)},carouselState:T()}):r.createElement("li",{"data-index":I,key:I,className:"react-multi-carousel-dot "+(x?"react-multi-carousel-dot--active":"")},r.createElement("button",{"aria-label":"Go to slide "+(I+1),onClick:function(){return h(M)}}))}))};return $.default=a,$}var N={},pe;function Ye(){if(pe)return N;pe=1,Object.defineProperty(N,"__esModule",{value:!0});var r=k(),g=function(l){var a=l.customLeftArrow,p=l.getState,d=l.previous,n=l.disabled,h=l.rtl;if(a)return r.cloneElement(a,{onClick:function(){return d()},carouselState:p(),disabled:n,rtl:h});var T=h?"rtl":"";return r.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+T,onClick:function(){return d()},type:"button",disabled:n})};N.LeftArrow=g;var c=function(l){var a=l.customRightArrow,p=l.getState,d=l.next,n=l.disabled,h=l.rtl;if(a)return r.cloneElement(a,{onClick:function(){return d()},carouselState:p(),disabled:n,rtl:h});var T=h?"rtl":"";return r.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+T,onClick:function(){return d()},type:"button",disabled:n})};return N.RightArrow=c,N}var X={},me;function Ke(){if(me)return X;me=1,Object.defineProperty(X,"__esModule",{value:!0});var r=k(),g=we(),c=function(l){var a=l.props,p=l.state,d=l.goToSlide,n=l.clones,h=l.notEnoughChildren,T=p.itemWidth,w=a.children,u=a.infinite,i=a.itemClass,t=a.itemAriaLabel,e=a.partialVisbile,o=a.partialVisible,s=g.getInitialState(p,a),f=s.flexBisis,m=s.shouldRenderOnSSR,v=s.domFullyLoaded,S=s.partialVisibilityGutter;return s.shouldRenderAtAll?(e&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),r.createElement(r.Fragment,null,(u?n:r.Children.toArray(w)).map(function(y,b){return r.createElement("li",{key:b,"data-index":b,onClick:function(){a.focusOnSelect&&d(b)},"aria-hidden":g.getIfSlideIsVisbile(b,p)?"false":"true","aria-label":t||(y.props.ariaLabel?y.props.ariaLabel:null),style:{flex:m?"1 0 "+f+"%":"auto",position:"relative",width:v?((e||o)&&S&&!h?T-S:T)+"px":"auto"},className:"react-multi-carousel-item "+(g.getIfSlideIsVisbile(b,p)?"react-multi-carousel-item--active":"")+" "+i},y)}))):null};return X.default=c,X}var ve;function Ue(){if(ve)return j;ve=1;var r=j.__extends||function(){var u=function(i,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var s in o)o.hasOwnProperty(s)&&(e[s]=o[s])})(i,t)};return function(i,t){function e(){this.constructor=i}u(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(j,"__esModule",{value:!0});var g=k(),c=we(),l=$e(),a=Xe(),p=Ye(),d=Ke(),n=A(),h=400,T="transform 400ms ease-in-out",w=function(u){function i(t){var e=u.call(this,t)||this;return e.containerRef=g.createRef(),e.listRef=g.createRef(),e.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:g.Children.count(t.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},e.onResize=e.onResize.bind(e),e.handleDown=e.handleDown.bind(e),e.handleMove=e.handleMove.bind(e),e.handleOut=e.handleOut.bind(e),e.onKeyUp=e.onKeyUp.bind(e),e.handleEnter=e.handleEnter.bind(e),e.setIsInThrottle=e.setIsInThrottle.bind(e),e.next=c.throttle(e.next.bind(e),t.transitionDuration||h,e.setIsInThrottle),e.previous=c.throttle(e.previous.bind(e),t.transitionDuration||h,e.setIsInThrottle),e.goToSlide=c.throttle(e.goToSlide.bind(e),t.transitionDuration||h,e.setIsInThrottle),e.onMove=!1,e.initialX=0,e.lastX=0,e.isAnimationAllowed=!1,e.direction="",e.initialY=0,e.isInThrottle=!1,e.transformPlaceHolder=0,e}return r(i,u),i.prototype.resetTotalItems=function(){var t=this,e=g.Children.count(this.props.children),o=c.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:o},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},i.prototype.setIsInThrottle=function(t){t===void 0&&(t=!1),this.isInThrottle=t},i.prototype.setTransformDirectly=function(t,e){var o=this.props.additionalTransfrom;this.transformPlaceHolder=t;var s=n.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(s+o)+"px,0,0)")},i.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||T:"none")},i.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.setClones=function(t,e,o,s){var f=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var m=g.Children.toArray(this.props.children),v=c.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,m),S=c.getClones(this.state.slidesToShow,m),y=m.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:S.length,currentSlide:o&&!s?y:v},function(){f.correctItemsPosition(e||f.state.itemWidth)})},i.prototype.setItemsToShow=function(t,e){var o=this,s=this.props.responsive;Object.keys(s).forEach(function(f){var m=s[f],v=m.breakpoint,S=m.items,y=v.max,b=v.min,_=[window.innerWidth];window.screen&&window.screen.width&&_.push(window.screen.width);var I=Math.min.apply(Math,_);b<=I&&I<=y&&(o.setState({slidesToShow:S,deviceType:f}),o.setContainerAndItemWidth(S,t,e))})},i.prototype.setContainerAndItemWidth=function(t,e,o){var s=this;if(this.containerRef&&this.containerRef.current){var f=this.containerRef.current.offsetWidth,m=c.getItemClientSideWidth(this.props,t,f);this.setState({containerWidth:f,itemWidth:m},function(){s.props.infinite&&s.setClones(t,m,e,o)}),e&&this.correctItemsPosition(m)}},i.prototype.correctItemsPosition=function(t,e,o){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;o&&this.setTransformDirectly(s,!0),this.setState({transform:s})},i.prototype.onResize=function(t){var e;e=!!this.props.infinite&&(typeof t!="boolean"||!t),this.setItemsToShow(e)},i.prototype.componentDidUpdate=function(t,e){var o=this,s=t.keyBoardControl,f=t.autoPlay,m=t.children,v=e.containerWidth,S=e.domLoaded,y=e.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==v&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){o.setItemsToShow(!0)},this.props.transitionDuration||h)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),f&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),f||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),m.length!==this.props.children.length?i.clonesTimeout=setTimeout(function(){o.props.infinite?o.setClones(o.state.slidesToShow,o.state.itemWidth,!0,!0):o.resetTotalItems()},this.props.transitionDuration||h):this.props.infinite&&this.state.currentSlide!==y&&this.correctClonesPosition({domLoaded:S}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&c.isInRightEnd(this.state)){var b=this.props.transitionDuration||h;i.isInThrottleTimeout=setTimeout(function(){o.setIsInThrottle(!1),o.resetAutoplayInterval(),o.goToSlide(0,void 0,!!o.props.rewindWithAnimation)},b+this.props.autoPlaySpeed)}},i.prototype.correctClonesPosition=function(t){var e=this,o=t.domLoaded,s=g.Children.toArray(this.props.children),f=c.checkClonesPosition(this.state,s,this.props),m=f.isReachingTheEnd,v=f.isReachingTheStart,S=f.nextSlide,y=f.nextPosition;this.state.domLoaded&&o&&(m||v)&&(this.isAnimationAllowed=!1,i.transformTimeout=setTimeout(function(){e.setState({transform:y,currentSlide:S})},this.props.transitionDuration||h))},i.prototype.next=function(t){var e=this;t===void 0&&(t=0);var o=this.props,s=o.afterChange,f=o.beforeChange;if(!c.notEnoughChildren(this.state)){var m=c.populateNextSlides(this.state,this.props,t),v=m.nextSlides,S=m.nextPosition,y=this.state.currentSlide;v!==void 0&&S!==void 0&&(typeof f=="function"&&f(v,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:S,currentSlide:v},function(){typeof s=="function"&&(i.afterChangeTimeout=setTimeout(function(){s(y,e.getState())},e.props.transitionDuration||h))}))}},i.prototype.previous=function(t){var e=this;t===void 0&&(t=0);var o=this.props,s=o.afterChange,f=o.beforeChange;if(!c.notEnoughChildren(this.state)){var m=c.populatePreviousSlides(this.state,this.props,t),v=m.nextSlides,S=m.nextPosition;if(v!==void 0&&S!==void 0){var y=this.state.currentSlide;typeof f=="function"&&f(v,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:S,currentSlide:v},function(){typeof s=="function"&&(i.afterChangeTimeout2=setTimeout(function(){s(y,e.getState())},e.props.transitionDuration||h))})}}},i.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),i.clonesTimeout&&clearTimeout(i.clonesTimeout),i.isInThrottleTimeout&&clearTimeout(i.isInThrottleTimeout),i.transformTimeout&&clearTimeout(i.transformTimeout),i.afterChangeTimeout&&clearTimeout(i.afterChangeTimeout),i.afterChangeTimeout2&&clearTimeout(i.afterChangeTimeout2),i.afterChangeTimeout3&&clearTimeout(i.afterChangeTimeout3)},i.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},i.prototype.getCords=function(t){var e=t.clientX,o=t.clientY;return{clientX:n.parsePosition(this.props,e),clientY:n.parsePosition(this.props,o)}},i.prototype.handleDown=function(t){if(!(!l.isMouseMoveEvent(t)&&!this.props.swipeable||l.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=this.getCords(l.isMouseMoveEvent(t)?t:t.touches[0]),o=e.clientX,s=e.clientY;this.onMove=!0,this.initialX=o,this.initialY=s,this.lastX=o,this.isAnimationAllowed=!1}},i.prototype.handleMove=function(t){if(!(!l.isMouseMoveEvent(t)&&!this.props.swipeable||l.isMouseMoveEvent(t)&&!this.props.draggable||c.notEnoughChildren(this.state))){var e=this.getCords(l.isMouseMoveEvent(t)?t:t.touches[0]),o=e.clientX,s=e.clientY,f=this.initialX-o,m=this.initialY-s;if(this.onMove){if(!(Math.abs(f)>Math.abs(m)))return;var v=c.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,o,this.transformPlaceHolder),S=v.direction,y=v.nextPosition,b=v.canContinue;S&&(this.direction=S,b&&y!==void 0&&this.setTransformDirectly(y)),this.lastX=o}}},i.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e=t.type==="touchend"&&!this.props.swipeable,o=(t.type==="mouseleave"||t.type==="mouseup")&&!this.props.draggable;if(!e&&!o&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},i.prototype.isInViewport=function(t){var e=t.getBoundingClientRect(),o=e.top,s=o===void 0?0:o,f=e.left,m=f===void 0?0:f,v=e.bottom,S=v===void 0?0:v,y=e.right,b=y===void 0?0:y;return 0<=s&&0<=m&&S<=(window.innerHeight||document.documentElement.clientHeight)&&b<=(window.innerWidth||document.documentElement.clientWidth)},i.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},i.prototype.onKeyUp=function(t){var e=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(e))return this.previous();break;case 39:if(this.isChildOfCarousel(e))return this.next();break;case 9:if(this.isChildOfCarousel(e)&&e instanceof HTMLInputElement&&this.isInViewport(e))return this.next()}},i.prototype.handleEnter=function(t){l.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},i.prototype.goToSlide=function(t,e,o){var s=this;if(o===void 0&&(o=!0),!this.isInThrottle){var f=this.state.itemWidth,m=this.props,v=m.afterChange,S=m.beforeChange,y=this.state.currentSlide;typeof S!="function"||e&&(typeof e!="object"||e.skipBeforeChange)||S(t,this.getState()),this.isAnimationAllowed=o,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-f*t},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof v!="function"||e&&(typeof e!="object"||e.skipAfterChange)||(i.afterChangeTimeout3=setTimeout(function(){v(y,s.getState())},s.props.transitionDuration||h))})}},i.prototype.getState=function(){return this.state},i.prototype.renderLeftArrow=function(t){var e=this,o=this.props,s=o.customLeftArrow,f=o.rtl;return g.createElement(p.LeftArrow,{customLeftArrow:s,getState:function(){return e.getState()},previous:this.previous,disabled:t,rtl:f})},i.prototype.renderRightArrow=function(t){var e=this,o=this.props,s=o.customRightArrow,f=o.rtl;return g.createElement(p.RightArrow,{customRightArrow:s,getState:function(){return e.getState()},next:this.next,disabled:t,rtl:f})},i.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?g.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(o,s){return t.goToSlide(o,s)},carouselState:this.getState()}):null},i.prototype.renderDotsList=function(){var t=this;return g.createElement(a.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},i.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=g.Children.toArray(this.props.children);t=c.getClones(this.state.slidesToShow,e)}return g.createElement(d.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:c.notEnoughChildren(this.state),props:this.props})},i.prototype.render=function(){var t=this.props,e=t.deviceType,o=t.arrows,s=t.renderArrowsWhenDisabled,f=t.removeArrowOnDeviceType,m=t.infinite,v=t.containerClass,S=t.sliderClass,y=t.customTransition,b=t.additionalTransfrom,_=t.renderDotsOutside,I=t.renderButtonGroupOutside,x=t.className,M=t.rtl,L=c.getInitialState(this.state,this.props),V=L.shouldRenderOnSSR,P=L.shouldRenderAtAll,be=c.isInLeftEnd(this.state),Ce=c.isInRightEnd(this.state),Z=o&&!(f&&(e&&-1<f.indexOf(e)||this.state.deviceType&&-1<f.indexOf(this.state.deviceType)))&&!c.notEnoughChildren(this.state)&&P,H=!m&&be,ee=!m&&Ce,Ie=n.getTransform(this.state,this.props);return g.createElement(g.Fragment,null,g.createElement("div",{className:"react-multi-carousel-list "+v+" "+x,dir:M?"rtl":"ltr",ref:this.containerRef},g.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+S,style:{transition:this.isAnimationAllowed?y||T:"none",overflow:V?"hidden":"unset",transform:"translate3d("+(Ie+b)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),Z&&(!H||s)&&this.renderLeftArrow(H),Z&&(!ee||s)&&this.renderRightArrow(ee),P&&!I&&this.renderButtonGroups(),P&&!_&&this.renderDotsList()),P&&_&&this.renderDotsList(),P&&I&&this.renderButtonGroups())},i.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},i}(g.Component);return j.default=w,j}var ge;function Qe(){if(ge)return q;ge=1,Object.defineProperty(q,"__esModule",{value:!0});var r=Ue();return q.default=r.default,q}var Q,Se;function Je(){return Se||(Se=1,Q=Qe()),Q}var Ze=Je();const rt=Oe(Ze),st={desktop:{breakpoint:{max:3e3,min:1281},items:7,slidesToSlide:6},tablet:{breakpoint:{max:1280,min:769},items:6,slidesToSlide:5},mobileLarge:{breakpoint:{max:768,min:481},items:4,slidesToSlide:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}},at={desktop:{breakpoint:{max:3e3,min:1281},items:8,slidesToSlide:6},tablet:{breakpoint:{max:1280,min:769},items:6,slidesToSlide:5},mobileLarge:{breakpoint:{max:768,min:481},items:4,slidesToSlide:3},mobileSmall:{breakpoint:{max:480,min:0},items:2,slidesToSlide:1}},lt=r=>({desktop:{breakpoint:{max:3e3,min:1281},items:r?6:8,slidesToSlide:r?4:6},tablet:{breakpoint:{max:1280,min:769},items:r?4:6,slidesToSlide:r?3:5},mobileLarge:{breakpoint:{max:768,min:481},items:r?3:4,slidesToSlide:r?2:3},mobileSmall:{breakpoint:{max:480,min:0},items:3,slidesToSlide:3}});export{nt as B,rt as C,at as a,st as b,lt as r};
