const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DetalleBaner-BuRgMKBr.js","assets/index-D2sbGu3I.js","assets/index-BRG9CBly.css","assets/DetalleBaner-Bo0QwDtA.css","assets/ModalVideo-Ohjjblwn.js","assets/index-s5PfA2aP.js","assets/DefaultPropsProvider-B-oG4WvL.js","assets/Transition-Dtb9eeYa.js","assets/objectWithoutPropertiesLoose-Dsqj8S3w.js"])))=>i.map(i=>d[i]);
import{n as L,o as De,j as w,r as x,R as je,_ as Ce,c as Ae,e as We}from"./index-D2sbGu3I.js";/* empty css               */import{u as H,C as Le,B as re,f as ke,h as Ne,c as Ve,e as qe,i as Be,j as Fe}from"./BarMenu-CXGq4Vqt.js";import{u as Z}from"./useQuery-DaHBGjQS.js";import{f as V}from"./fetchData-DCFA1qTy.js";import{u as Ie}from"./useFavorites-BfwIQ_63.js";var B={},k={},I={},Y={},ne;function ee(){return ne||(ne=1,function(n){function v(u,r,f){var a=r.slidesToShow,T=r.currentSlide;return f.length>2*a?u+2*a:T>=f.length?f.length+u:u}function d(u,r){if(r.length>2*u){for(var f={},a=r.length-2*u,T=r.length-a,h=a,i=0;i<T;i++)f[i]=h,h++;var t=r.length+T,e=t+r.slice(0,2*u).length,o=0;for(i=t;i<=e;i++)f[i]=o,o++;var s=t,m=0;for(i=T;i<s;i++)f[i]=m,m++;return f}f={};var g=3*r.length,S=0;for(i=0;i<g;i++)f[i]=S,++S===r.length&&(S=0);return f}function c(u,r){return r.length<u?r:r.length>2*u?r.slice(r.length-2*u,r.length).concat(r,r.slice(0,2*u)):r.concat(r,r)}function l(u,r){return r.length>2*u?2*u:r.length}function p(u,r,f){var a,T=u.currentSlide,h=u.slidesToShow,i=u.itemWidth,t=u.totalItems,e=0,o=0,s=T===0,m=r.length-(r.length-2*h);return r.length<h?(o=e=0,s=a=!1):r.length>2*h?((a=T>=m+r.length)&&(o=-i*(e=T-r.length)),s&&(o=-i*(e=m+(r.length-2*h)))):((a=T>=2*r.length)&&(o=-i*(e=T-r.length)),s&&(o=f.showDots?-i*(e=r.length):-i*(e=t/3))),{isReachingTheEnd:a,isReachingTheStart:s,nextSlide:e,nextPosition:o}}Object.defineProperty(n,"__esModule",{value:!0}),n.getOriginalCounterPart=v,n.getOriginalIndexLookupTableByClones=d,n.getClones=c,n.getInitialSlideInInfiniteMode=l,n.checkClonesPosition=p}(Y)),Y}var A={},se;function Re(){if(se)return A;se=1,Object.defineProperty(A,"__esModule",{value:!0});function n(c,l,p,u){var r=0,f=u||p;return l&&f&&(r=c[f].partialVisibilityGutter||c[f].paritialVisibilityGutter),r}function v(c,l){var p;return l[c]&&(p=(100/l[c].items).toFixed(1)),p}function d(c,l,p){return Math.round(p/(l+(c.centerMode?1:0)))}return A.getPartialVisibilityGutter=n,A.getWidthFromDeviceType=v,A.getItemClientSideWidth=d,A}var _={},ae;function D(){if(ae)return _;ae=1,Object.defineProperty(_,"__esModule",{value:!0});var n=Re();function v(h){var i=h.slidesToShow;return h.totalItems<i}function d(h,i){var t,e=h.domLoaded,o=h.slidesToShow,s=h.containerWidth,m=h.itemWidth,g=i.deviceType,S=i.responsive,y=i.ssr,b=i.partialVisbile,C=i.partialVisible,M=!!(e&&o&&s&&m);y&&g&&!M&&(t=n.getWidthFromDeviceType(g,S));var R=!!(y&&g&&!M&&t);return{shouldRenderOnSSR:R,flexBisis:t,domFullyLoaded:M,partialVisibilityGutter:n.getPartialVisibilityGutter(S,b||C,g,h.deviceType),shouldRenderAtAll:R||M}}function c(h,i){var t=i.currentSlide,e=i.slidesToShow;return t<=h&&h<t+e}function l(h,i,t){var e=t||h.transform;return!i.infinite&&h.currentSlide===0||v(h)?e:e+h.itemWidth/2}function p(h){return!(0<h.currentSlide)}function u(h){var i=h.currentSlide,t=h.totalItems;return!(i+h.slidesToShow<t)}function r(h,i,t,e){i===void 0&&(i=0);var o=h.currentSlide,s=h.slidesToShow,m=u(h),g=!t.infinite&&m,S=e||h.transform;if(v(h))return S;var y=S+o*i;return g?y+(h.containerWidth-(h.itemWidth-i)*s):y}function f(h,i){return h.rtl?-1*i:i}function a(h,i,t){var e=i.partialVisbile,o=i.partialVisible,s=i.responsive,m=i.deviceType,g=i.centerMode,S=t||h.transform,y=n.getPartialVisibilityGutter(s,e||o,m,h.deviceType);return f(i,o||e?r(h,y,i,t):g?l(h,i,t):S)}function T(h,i){var t=h.domLoaded,e=h.slidesToShow,o=h.containerWidth,s=h.itemWidth,m=i.deviceType,g=i.responsive,S=i.slidesToSlide||1,y=!!(t&&e&&o&&s);return i.ssr&&i.deviceType&&!y&&Object.keys(g).forEach(function(b){var C=g[b].slidesToSlide;m===b&&C&&(S=C)}),y&&Object.keys(g).forEach(function(b){var C=g[b],M=C.breakpoint,R=C.slidesToSlide,P=M.max,E=M.min;R&&window.innerWidth>=E&&window.innerWidth<=P&&(S=R)}),S}return _.notEnoughChildren=v,_.getInitialState=d,_.getIfSlideIsVisbile=c,_.getTransformForCenterMode=l,_.isInLeftEnd=p,_.isInRightEnd=u,_.getTransformForPartialVsibile=r,_.parsePosition=f,_.getTransform=a,_.getSlidesToSlide=T,_}var F={},le;function Ge(){if(le)return F;le=1,Object.defineProperty(F,"__esModule",{value:!0});var n=function(v,d,c){var l;return function(){var p=arguments;l||(v.apply(this,p),l=!0,typeof c=="function"&&c(!0),setTimeout(function(){l=!1,typeof c=="function"&&c(!1)},d))}};return F.default=n,F}var K={},ue;function Ue(){return ue||(ue=1,function(n){function v(d,c){var l=c.partialVisbile,p=c.partialVisible,u=c.centerMode,r=c.ssr,f=c.responsive;if((l||p)&&u)throw new Error("center mode can not be used at the same time with partialVisible");if(!f)throw r?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(f&&typeof f!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=v}(K)),K}var G={},de;function $e(){if(de)return G;de=1,Object.defineProperty(G,"__esModule",{value:!0});var n=D();function v(d,c,l){l===void 0&&(l=0);var p,u,r=d.slidesToShow,f=d.currentSlide,a=d.itemWidth,T=d.totalItems,h=n.getSlidesToSlide(d,c),i=f+1+l+r+(0<l?0:h);return u=i<=T?-a*(p=f+l+(0<l?0:h)):T<i&&f!==T-r?-a*(p=T-r):p=void 0,{nextSlides:p,nextPosition:u}}return G.populateNextSlides=v,G}var U={},he;function Xe(){if(he)return U;he=1,Object.defineProperty(U,"__esModule",{value:!0});var n=L(),v=D(),d=D();function c(l,p,u){u===void 0&&(u=0);var r,f,a=l.currentSlide,T=l.itemWidth,h=l.slidesToShow,i=p.children,t=p.showDots,e=p.infinite,o=v.getSlidesToSlide(l,p),s=a-u-(0<u?0:o),m=(n.Children.toArray(i).length-h)%o;return f=0<=s?(r=s,t&&!e&&0<m&&d.isInRightEnd(l)&&(r=a-m),-T*r):r=s<0&&a!==0?0:void 0,{nextSlides:r,nextPosition:f}}return U.populatePreviousSlides=c,U}var Q={},ce;function ze(){return ce||(ce=1,function(n){function v(d,c,l,p,u,r){var f,a,T=d.itemWidth,h=d.slidesToShow,i=d.totalItems,t=d.currentSlide,e=c.infinite,o=!1,s=Math.round((l-p)/T),m=Math.round((p-l)/T),g=l<u;if(u<l&&s<=h){f="right";var S=Math.abs(-T*(i-h)),y=r-(p-u),b=t===i-h;(Math.abs(y)<=S||b&&e)&&(a=y,o=!0)}return g&&m<=h&&(f="left",((y=r+(u-p))<=0||t===0&&e)&&(o=!0,a=y)),{direction:f,nextPosition:a,canContinue:o}}Object.defineProperty(n,"__esModule",{value:!0}),n.populateSlidesOnMouseTouchMove=v}(Q)),Q}var fe;function Me(){if(fe)return I;fe=1,Object.defineProperty(I,"__esModule",{value:!0});var n=ee();I.getOriginalCounterPart=n.getOriginalCounterPart,I.getClones=n.getClones,I.checkClonesPosition=n.checkClonesPosition,I.getInitialSlideInInfiniteMode=n.getInitialSlideInInfiniteMode;var v=Re();I.getWidthFromDeviceType=v.getWidthFromDeviceType,I.getPartialVisibilityGutter=v.getPartialVisibilityGutter,I.getItemClientSideWidth=v.getItemClientSideWidth;var d=D();I.getInitialState=d.getInitialState,I.getIfSlideIsVisbile=d.getIfSlideIsVisbile,I.getTransformForCenterMode=d.getTransformForCenterMode,I.getTransformForPartialVsibile=d.getTransformForPartialVsibile,I.isInLeftEnd=d.isInLeftEnd,I.isInRightEnd=d.isInRightEnd,I.notEnoughChildren=d.notEnoughChildren,I.getSlidesToSlide=d.getSlidesToSlide;var c=Ge();I.throttle=c.default;var l=Ue();I.throwError=l.default;var p=$e();I.populateNextSlides=p.populateNextSlides;var u=Xe();I.populatePreviousSlides=u.populatePreviousSlides;var r=ze();return I.populateSlidesOnMouseTouchMove=r.populateSlidesOnMouseTouchMove,I}var W={},pe;function Ye(){if(pe)return W;pe=1;var n=W.__extends||function(){var l=function(p,u){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,f){r.__proto__=f}||function(r,f){for(var a in f)f.hasOwnProperty(a)&&(r[a]=f[a])})(p,u)};return function(p,u){function r(){this.constructor=p}l(p,u),p.prototype=u===null?Object.create(u):(r.prototype=u.prototype,new r)}}();Object.defineProperty(W,"__esModule",{value:!0});var v=L();function d(l){return"clientY"in l}W.isMouseMoveEvent=d;var c=function(l){function p(){return l!==null&&l.apply(this,arguments)||this}return n(p,l),p}(v.Component);return W.default=c,W}var $={},X={},me;function Ke(){if(me)return X;me=1,Object.defineProperty(X,"__esModule",{value:!0});var n=ee(),v=D();function d(c,l,p,u){var r={},f=v.getSlidesToSlide(l,p);return Array(c).fill(0).forEach(function(a,T){var h=n.getOriginalCounterPart(T,l,u);if(T===0)r[0]=h;else{var i=r[T-1]+f;r[T]=i}}),r}return X.getLookupTableForNextSlides=d,X}var ve;function Qe(){if(ve)return $;ve=1,Object.defineProperty($,"__esModule",{value:!0});var n=L(),v=ee(),d=Ke(),c=D(),l=function(p){var u=p.props,r=p.state,f=p.goToSlide,a=p.getState,T=u.showDots,h=u.customDot,i=u.dotListClass,t=u.infinite,e=u.children;if(!T||c.notEnoughChildren(r))return null;var o,s=r.currentSlide,m=r.slidesToShow,g=c.getSlidesToSlide(r,u),S=n.Children.toArray(e);o=t?Math.ceil(S.length/g):Math.ceil((S.length-m)/g)+1;var y=d.getLookupTableForNextSlides(o,r,u,S),b=v.getOriginalIndexLookupTableByClones(m,S),C=b[s];return n.createElement("ul",{className:"react-multi-carousel-dot-list "+i},Array(o).fill(0).map(function(M,R){var P,E;if(t){E=y[R];var j=b[E];P=C===j||j<=C&&C<j+g}else{var q=S.length-m,O=R*g;P=(E=q<O?q:O)===s||E<s&&s<E+g&&s<S.length-m}return h?n.cloneElement(h,{index:R,active:P,key:R,onClick:function(){return f(E)},carouselState:a()}):n.createElement("li",{"data-index":R,key:R,className:"react-multi-carousel-dot "+(P?"react-multi-carousel-dot--active":"")},n.createElement("button",{"aria-label":"Go to slide "+(R+1),onClick:function(){return f(E)}}))}))};return $.default=l,$}var N={},ge;function Je(){if(ge)return N;ge=1,Object.defineProperty(N,"__esModule",{value:!0});var n=L(),v=function(c){var l=c.customLeftArrow,p=c.getState,u=c.previous,r=c.disabled,f=c.rtl;if(l)return n.cloneElement(l,{onClick:function(){return u()},carouselState:p(),disabled:r,rtl:f});var a=f?"rtl":"";return n.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+a,onClick:function(){return u()},type:"button",disabled:r})};N.LeftArrow=v;var d=function(c){var l=c.customRightArrow,p=c.getState,u=c.next,r=c.disabled,f=c.rtl;if(l)return n.cloneElement(l,{onClick:function(){return u()},carouselState:p(),disabled:r,rtl:f});var a=f?"rtl":"";return n.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+a,onClick:function(){return u()},type:"button",disabled:r})};return N.RightArrow=d,N}var z={},Se;function Ze(){if(Se)return z;Se=1,Object.defineProperty(z,"__esModule",{value:!0});var n=L(),v=Me(),d=function(c){var l=c.props,p=c.state,u=c.goToSlide,r=c.clones,f=c.notEnoughChildren,a=p.itemWidth,T=l.children,h=l.infinite,i=l.itemClass,t=l.itemAriaLabel,e=l.partialVisbile,o=l.partialVisible,s=v.getInitialState(p,l),m=s.flexBisis,g=s.shouldRenderOnSSR,S=s.domFullyLoaded,y=s.partialVisibilityGutter;return s.shouldRenderAtAll?(e&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),n.createElement(n.Fragment,null,(h?r:n.Children.toArray(T)).map(function(b,C){return n.createElement("li",{key:C,"data-index":C,onClick:function(){l.focusOnSelect&&u(C)},"aria-hidden":v.getIfSlideIsVisbile(C,p)?"false":"true","aria-label":t||(b.props.ariaLabel?b.props.ariaLabel:null),style:{flex:g?"1 0 "+m+"%":"auto",position:"relative",width:S?((e||o)&&y&&!f?a-y:a)+"px":"auto"},className:"react-multi-carousel-item "+(v.getIfSlideIsVisbile(C,p)?"react-multi-carousel-item--active":"")+" "+i},b)}))):null};return z.default=d,z}var ye;function He(){if(ye)return k;ye=1;var n=k.__extends||function(){var h=function(i,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var s in o)o.hasOwnProperty(s)&&(e[s]=o[s])})(i,t)};return function(i,t){function e(){this.constructor=i}h(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(k,"__esModule",{value:!0});var v=L(),d=Me(),c=Ye(),l=Qe(),p=Je(),u=Ze(),r=D(),f=400,a="transform 400ms ease-in-out",T=function(h){function i(t){var e=h.call(this,t)||this;return e.containerRef=v.createRef(),e.listRef=v.createRef(),e.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:v.Children.count(t.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},e.onResize=e.onResize.bind(e),e.handleDown=e.handleDown.bind(e),e.handleMove=e.handleMove.bind(e),e.handleOut=e.handleOut.bind(e),e.onKeyUp=e.onKeyUp.bind(e),e.handleEnter=e.handleEnter.bind(e),e.setIsInThrottle=e.setIsInThrottle.bind(e),e.next=d.throttle(e.next.bind(e),t.transitionDuration||f,e.setIsInThrottle),e.previous=d.throttle(e.previous.bind(e),t.transitionDuration||f,e.setIsInThrottle),e.goToSlide=d.throttle(e.goToSlide.bind(e),t.transitionDuration||f,e.setIsInThrottle),e.onMove=!1,e.initialX=0,e.lastX=0,e.isAnimationAllowed=!1,e.direction="",e.initialY=0,e.isInThrottle=!1,e.transformPlaceHolder=0,e}return n(i,h),i.prototype.resetTotalItems=function(){var t=this,e=v.Children.count(this.props.children),o=d.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:o},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},i.prototype.setIsInThrottle=function(t){t===void 0&&(t=!1),this.isInThrottle=t},i.prototype.setTransformDirectly=function(t,e){var o=this.props.additionalTransfrom;this.transformPlaceHolder=t;var s=r.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(s+o)+"px,0,0)")},i.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||a:"none")},i.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.setClones=function(t,e,o,s){var m=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var g=v.Children.toArray(this.props.children),S=d.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,g),y=d.getClones(this.state.slidesToShow,g),b=g.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:y.length,currentSlide:o&&!s?b:S},function(){m.correctItemsPosition(e||m.state.itemWidth)})},i.prototype.setItemsToShow=function(t,e){var o=this,s=this.props.responsive;Object.keys(s).forEach(function(m){var g=s[m],S=g.breakpoint,y=g.items,b=S.max,C=S.min,M=[window.innerWidth];window.screen&&window.screen.width&&M.push(window.screen.width);var R=Math.min.apply(Math,M);C<=R&&R<=b&&(o.setState({slidesToShow:y,deviceType:m}),o.setContainerAndItemWidth(y,t,e))})},i.prototype.setContainerAndItemWidth=function(t,e,o){var s=this;if(this.containerRef&&this.containerRef.current){var m=this.containerRef.current.offsetWidth,g=d.getItemClientSideWidth(this.props,t,m);this.setState({containerWidth:m,itemWidth:g},function(){s.props.infinite&&s.setClones(t,g,e,o)}),e&&this.correctItemsPosition(g)}},i.prototype.correctItemsPosition=function(t,e,o){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;o&&this.setTransformDirectly(s,!0),this.setState({transform:s})},i.prototype.onResize=function(t){var e;e=!!this.props.infinite&&(typeof t!="boolean"||!t),this.setItemsToShow(e)},i.prototype.componentDidUpdate=function(t,e){var o=this,s=t.keyBoardControl,m=t.autoPlay,g=t.children,S=e.containerWidth,y=e.domLoaded,b=e.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==S&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){o.setItemsToShow(!0)},this.props.transitionDuration||f)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),m&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),m||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),g.length!==this.props.children.length?i.clonesTimeout=setTimeout(function(){o.props.infinite?o.setClones(o.state.slidesToShow,o.state.itemWidth,!0,!0):o.resetTotalItems()},this.props.transitionDuration||f):this.props.infinite&&this.state.currentSlide!==b&&this.correctClonesPosition({domLoaded:y}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&d.isInRightEnd(this.state)){var C=this.props.transitionDuration||f;i.isInThrottleTimeout=setTimeout(function(){o.setIsInThrottle(!1),o.resetAutoplayInterval(),o.goToSlide(0,void 0,!!o.props.rewindWithAnimation)},C+this.props.autoPlaySpeed)}},i.prototype.correctClonesPosition=function(t){var e=this,o=t.domLoaded,s=v.Children.toArray(this.props.children),m=d.checkClonesPosition(this.state,s,this.props),g=m.isReachingTheEnd,S=m.isReachingTheStart,y=m.nextSlide,b=m.nextPosition;this.state.domLoaded&&o&&(g||S)&&(this.isAnimationAllowed=!1,i.transformTimeout=setTimeout(function(){e.setState({transform:b,currentSlide:y})},this.props.transitionDuration||f))},i.prototype.next=function(t){var e=this;t===void 0&&(t=0);var o=this.props,s=o.afterChange,m=o.beforeChange;if(!d.notEnoughChildren(this.state)){var g=d.populateNextSlides(this.state,this.props,t),S=g.nextSlides,y=g.nextPosition,b=this.state.currentSlide;S!==void 0&&y!==void 0&&(typeof m=="function"&&m(S,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:y,currentSlide:S},function(){typeof s=="function"&&(i.afterChangeTimeout=setTimeout(function(){s(b,e.getState())},e.props.transitionDuration||f))}))}},i.prototype.previous=function(t){var e=this;t===void 0&&(t=0);var o=this.props,s=o.afterChange,m=o.beforeChange;if(!d.notEnoughChildren(this.state)){var g=d.populatePreviousSlides(this.state,this.props,t),S=g.nextSlides,y=g.nextPosition;if(S!==void 0&&y!==void 0){var b=this.state.currentSlide;typeof m=="function"&&m(S,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:y,currentSlide:S},function(){typeof s=="function"&&(i.afterChangeTimeout2=setTimeout(function(){s(b,e.getState())},e.props.transitionDuration||f))})}}},i.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),i.clonesTimeout&&clearTimeout(i.clonesTimeout),i.isInThrottleTimeout&&clearTimeout(i.isInThrottleTimeout),i.transformTimeout&&clearTimeout(i.transformTimeout),i.afterChangeTimeout&&clearTimeout(i.afterChangeTimeout),i.afterChangeTimeout2&&clearTimeout(i.afterChangeTimeout2),i.afterChangeTimeout3&&clearTimeout(i.afterChangeTimeout3)},i.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},i.prototype.getCords=function(t){var e=t.clientX,o=t.clientY;return{clientX:r.parsePosition(this.props,e),clientY:r.parsePosition(this.props,o)}},i.prototype.handleDown=function(t){if(!(!c.isMouseMoveEvent(t)&&!this.props.swipeable||c.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=this.getCords(c.isMouseMoveEvent(t)?t:t.touches[0]),o=e.clientX,s=e.clientY;this.onMove=!0,this.initialX=o,this.initialY=s,this.lastX=o,this.isAnimationAllowed=!1}},i.prototype.handleMove=function(t){if(!(!c.isMouseMoveEvent(t)&&!this.props.swipeable||c.isMouseMoveEvent(t)&&!this.props.draggable||d.notEnoughChildren(this.state))){var e=this.getCords(c.isMouseMoveEvent(t)?t:t.touches[0]),o=e.clientX,s=e.clientY,m=this.initialX-o,g=this.initialY-s;if(this.onMove){if(!(Math.abs(m)>Math.abs(g)))return;var S=d.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,o,this.transformPlaceHolder),y=S.direction,b=S.nextPosition,C=S.canContinue;y&&(this.direction=y,C&&b!==void 0&&this.setTransformDirectly(b)),this.lastX=o}}},i.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e=t.type==="touchend"&&!this.props.swipeable,o=(t.type==="mouseleave"||t.type==="mouseup")&&!this.props.draggable;if(!e&&!o&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},i.prototype.isInViewport=function(t){var e=t.getBoundingClientRect(),o=e.top,s=o===void 0?0:o,m=e.left,g=m===void 0?0:m,S=e.bottom,y=S===void 0?0:S,b=e.right,C=b===void 0?0:b;return 0<=s&&0<=g&&y<=(window.innerHeight||document.documentElement.clientHeight)&&C<=(window.innerWidth||document.documentElement.clientWidth)},i.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},i.prototype.onKeyUp=function(t){var e=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(e))return this.previous();break;case 39:if(this.isChildOfCarousel(e))return this.next();break;case 9:if(this.isChildOfCarousel(e)&&e instanceof HTMLInputElement&&this.isInViewport(e))return this.next()}},i.prototype.handleEnter=function(t){c.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},i.prototype.goToSlide=function(t,e,o){var s=this;if(o===void 0&&(o=!0),!this.isInThrottle){var m=this.state.itemWidth,g=this.props,S=g.afterChange,y=g.beforeChange,b=this.state.currentSlide;typeof y!="function"||e&&(typeof e!="object"||e.skipBeforeChange)||y(t,this.getState()),this.isAnimationAllowed=o,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-m*t},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof S!="function"||e&&(typeof e!="object"||e.skipAfterChange)||(i.afterChangeTimeout3=setTimeout(function(){S(b,s.getState())},s.props.transitionDuration||f))})}},i.prototype.getState=function(){return this.state},i.prototype.renderLeftArrow=function(t){var e=this,o=this.props,s=o.customLeftArrow,m=o.rtl;return v.createElement(p.LeftArrow,{customLeftArrow:s,getState:function(){return e.getState()},previous:this.previous,disabled:t,rtl:m})},i.prototype.renderRightArrow=function(t){var e=this,o=this.props,s=o.customRightArrow,m=o.rtl;return v.createElement(p.RightArrow,{customRightArrow:s,getState:function(){return e.getState()},next:this.next,disabled:t,rtl:m})},i.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?v.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(o,s){return t.goToSlide(o,s)},carouselState:this.getState()}):null},i.prototype.renderDotsList=function(){var t=this;return v.createElement(l.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},i.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=v.Children.toArray(this.props.children);t=d.getClones(this.state.slidesToShow,e)}return v.createElement(u.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:d.notEnoughChildren(this.state),props:this.props})},i.prototype.render=function(){var t=this.props,e=t.deviceType,o=t.arrows,s=t.renderArrowsWhenDisabled,m=t.removeArrowOnDeviceType,g=t.infinite,S=t.containerClass,y=t.sliderClass,b=t.customTransition,C=t.additionalTransfrom,M=t.renderDotsOutside,R=t.renderButtonGroupOutside,P=t.className,E=t.rtl,j=d.getInitialState(this.state,this.props),q=j.shouldRenderOnSSR,O=j.shouldRenderAtAll,Ee=d.isInLeftEnd(this.state),Pe=d.isInRightEnd(this.state),te=o&&!(m&&(e&&-1<m.indexOf(e)||this.state.deviceType&&-1<m.indexOf(this.state.deviceType)))&&!d.notEnoughChildren(this.state)&&O,ie=!g&&Ee,oe=!g&&Pe,Oe=r.getTransform(this.state,this.props);return v.createElement(v.Fragment,null,v.createElement("div",{className:"react-multi-carousel-list "+S+" "+P,dir:E?"rtl":"ltr",ref:this.containerRef},v.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+y,style:{transition:this.isAnimationAllowed?b||a:"none",overflow:q?"hidden":"unset",transform:"translate3d("+(Oe+C)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),te&&(!ie||s)&&this.renderLeftArrow(ie),te&&(!oe||s)&&this.renderRightArrow(oe),O&&!R&&this.renderButtonGroups(),O&&!M&&this.renderDotsList()),O&&M&&this.renderDotsList(),O&&R&&this.renderButtonGroups())},i.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},i}(v.Component);return k.default=T,k}var Te;function et(){if(Te)return B;Te=1,Object.defineProperty(B,"__esModule",{value:!0});var n=He();return B.default=n.default,B}var J,we;function tt(){return we||(we=1,J=et()),J}var it=tt();const _e=De(it),ft={desktop:{breakpoint:{max:3e3,min:1281},items:9,slidesToSlide:6,partialVisibilityGutter:12},tablet:{breakpoint:{max:1280,min:769},items:7,slidesToSlide:5,partialVisibilityGutter:12},mobileLarge:{breakpoint:{max:768,min:481},items:5,slidesToSlide:4,partialVisibilityGutter:12},mobileSmall:{breakpoint:{max:480,min:0},items:3,slidesToSlide:3,partialVisibilityGutter:12}},xe=n=>({desktop:{breakpoint:{max:3e3,min:1321},items:n?6:8,slidesToSlide:n?6:8,partialVisibilityGutter:12},tablet:{breakpoint:{max:1320,min:769},items:n?5:6,slidesToSlide:n?4:5,partialVisibilityGutter:12},mobileLarge:{breakpoint:{max:768,min:481},items:n?3:4,slidesToSlide:8,partialVisibilityGutter:12},mobileSmall:{breakpoint:{max:480,min:0},items:3,slidesToSlide:3,partialVisibilityGutter:12}});function ot({isLarge:n}){return w.jsx("div",{className:`contenedor-poster ${n?"large":""}`,children:w.jsx("div",{className:`cardContainerImage ${n?"backdrop":"poster"}`,children:w.jsx("div",{className:`fondoCardItem h-full w-full absolute inset-0 opacity-100"
                        } transition-opacity duration-400`})})})}function rt({isLarge:n=!0,numItems:v,title:d}){const c=x.useMemo(()=>xe(n),[n]),l=H(),p=u=>Array.from({length:u}).map((r,f)=>w.jsx(ot,{isLarge:n},f));return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"carousel",children:[w.jsx("h2",{className:"tituloCarousel",children:d}),w.jsx(_e,{swipeable:!1,draggable:!1,showDots:!1,responsive:c,ssr:!0,infinite:!0,autoPlay:!1,className:`${l<600?"carousel-cell":""}`,partialVisible:!0,children:p(v)})]})})}const pt=je.memo(({URL:n,title:v,isLarge:d})=>{const{handleAddFavorite:c}=Ie(),l=H(),{data:p}=Z(["items",n,v],()=>V(n),{refetchOnWindowFocus:!1}),u=x.useMemo(()=>{var a;return((a=p==null?void 0:p.results)==null?void 0:a.filter(T=>T.backdrop_path))||[]},[p]),r=x.useMemo(()=>xe(l>1e3?d:!1),[l,d]),f=x.useCallback(a=>a.map(T=>w.jsx(Le,{item:T,isLarge:l>1e3?d:!1,onAddFavorite:c},T.id)),[l,d,c]);return u.length?w.jsxs("div",{className:"carousel",children:[w.jsx("h2",{className:"tituloCarousel",children:v}),w.jsx(_e,{swipeable:!0,showDots:!1,responsive:r,ssr:!1,infinite:!0,autoPlay:!1,keyBoardControl:!0,partialVisible:!0,className:`${l<600?"carousel-cell":""}`,slidesToSlide:8,children:f(u)})]}):w.jsx(rt,{numItems:10,isLarge:l>1e3?d:!1,title:v})}),be=(n,v="US")=>{var d,c,l,p,u;return n&&"content_ratings"in n?(d=n.content_ratings.results.filter(a=>a.iso_3166_1===v||"US").filter(a=>(a==null?void 0:a.rating)!="")[0])==null?void 0:d.rating:n&&"release_dates"in n?(u=(p=(l=((c=n==null?void 0:n.release_dates)==null?void 0:c.results.filter(a=>a.iso_3166_1===v))[0])==null?void 0:l.release_dates)==null?void 0:p.filter(a=>a.certification!="")[0])==null?void 0:u.certification:null},nt=x.lazy(()=>Ce(()=>import("./DetalleBaner-BuRgMKBr.js"),__vite__mapDeps([0,1,2,3]))),st=x.lazy(()=>Ce(()=>import("./ModalVideo-Ohjjblwn.js"),__vite__mapDeps([4,1,2,5,6,7,8])));function mt({itemId:n,isDetail:v=!1,type:d}){var g,S,y,b,C,M,R;const c=Ae(),{handleAddFavorite:l}=Ie(),{language:p}=We(),u=H(),[r,f]=x.useState(!1),{data:a}=Z(`movie-${n}`,()=>d==="movie"?V(Ve(n).movieDetails):V(qe(n)),{enabled:!!n}),{data:T}=Z(`logo-item-${d}-${n}`,()=>d=="movie"?V(Be(n)):V(Fe(n)),{enabled:!!n,staleTime:1e3*60*5}),h=((y=(S=(g=a==null?void 0:a.images)==null?void 0:g.logos)==null?void 0:S.find(P=>P.iso_639_1===p))==null?void 0:y.file_path)||((M=(C=(b=a==null?void 0:a.images)==null?void 0:b.logos)==null?void 0:C[0])==null?void 0:M.file_path)||((R=T==null?void 0:T.logos[0])==null?void 0:R.file_path)||null,i=x.useCallback(()=>f(!0),[]),t=x.useCallback(()=>f(!1),[]),e=x.useCallback(()=>{c(`/${d}/${a==null?void 0:a.id}`)},[c,a==null?void 0:a.id]),o=()=>a!=null&&a.overview?w.jsxs("p",{className:"overview",children:[u>600?a==null?void 0:a.overview.slice(0,350):a==null?void 0:a.overview.slice(0,150),"..."]}):null,s=()=>h?w.jsx("img",{className:"logo-banner",src:`${Ne}${h}`,alt:"Logo"}):null;function m(){return w.jsxs("div",{className:"botones",children:[w.jsxs("button",{className:"play",onClick:i,children:[w.jsx("i",{className:"fa-solid fa-play"})," Play"]}),r&&w.jsx(x.Suspense,{fallback:w.jsx(w.Fragment,{}),children:w.jsx(st,{item:a,open:r,onClose:t})}),location.hash!=="#/info"&&w.jsxs("button",{onClick:e,className:"boton-info-banner",children:[w.jsx("i",{className:"fa-solid fa-circle-info"})," More Information"]}),w.jsx("button",{onClick:()=>l(a),className:"botonMeGustaBanner",children:w.jsx("i",{className:"fa-solid fa-heart"})})]})}return!n||!a?w.jsxs("div",{className:"header",children:[w.jsx(re,{}),w.jsx("div",{className:"fondoCardItem h-full w-full absolute inset-0 opacity-100 transition-opacity duration-400"})]}):w.jsxs("div",{className:"header",children:[w.jsx("img",{className:"fondo",src:`${ke}${a==null?void 0:a.backdrop_path}`}),w.jsx(re,{}),w.jsx("div",{className:"cuerpoBanner",children:w.jsxs("div",{className:`contenedorLogo ${v?"contenedorDetailN":""}`,children:[w.jsxs("div",{className:"flex flex-row gap-3 items-center",children:[w.jsx(s,{}),be(a)&&u<=600&&w.jsxs("span",{className:"edadParaPublico inline-block max-h-fit",children:[be(a),"+"]})]}),v&&w.jsx(x.Suspense,{fallback:w.jsx(w.Fragment,{}),children:w.jsx(nt,{item:a})}),w.jsx(m,{}),o()]})})]})}export{mt as B,_e as C,rt as S,pt as a,ft as b,be as g,xe as r};
