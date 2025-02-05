import{q as N,s as P,t as $,v as x,w,x as j,y as K,z as A,A as k,B as W,C as q,D as g,S as V,R as b,a as z,E as G}from"./index-DweVAoJC.js";var H=function(u){N(a,u);function a(n,t){var e;return e=u.call(this)||this,e.client=n,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var s=a.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),L(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return O(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return O(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(t,e){var i=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();var c=this.hasListeners();c&&_(this.currentQuery,r,this.options,i)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},s.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),i=this.client.getQueryCache().build(this.client,e);return this.createResult(i,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(t,e){var i=this,r={},c=function(h){i.trackedProps.includes(h)||i.trackedProps.push(h)};return Object.keys(t).forEach(function(o){Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:function(){return c(o),t[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},s.getNextResult=function(t){var e=this;return new Promise(function(i,r){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(t!=null&&t.throwOnError)?r(o.error):i(o))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(t){return this.fetch(P({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},s.fetchOptimistic=function(t){var e=this,i=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,i);return r.fetch().then(function(){return e.createResult(r,i)})},s.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch($)),e},s.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(x||this.currentResult.isStale||!w(this.options.staleTime))){var e=j(this.currentResult.dataUpdatedAt,this.options.staleTime),i=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},i)}},s.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},s.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(x||this.options.enabled===!1||!w(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||K.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(t,e){var i=this.currentQuery,r=this.options,c=this.currentResult,o=this.currentResultState,h=this.currentResultOptions,d=t!==i,v=d?t.state:this.currentQueryInitialState,R=d?this.currentResult:this.previousQueryResult,l=t.state,m=l.dataUpdatedAt,I=l.error,C=l.errorUpdatedAt,S=l.isFetching,f=l.status,T=!1,U=!1,p;if(e.optimisticResults){var F=this.hasListeners(),M=!F&&L(t,e),B=F&&_(t,i,e,r);(M||B)&&(S=!0,m||(f="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(R!=null&&R.isSuccess)&&f!=="error")p=R.data,m=R.dataUpdatedAt,f=R.status,T=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(o==null?void 0:o.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(l.data),e.structuralSharing!==!1&&(p=A(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(Q){k().error(Q),this.selectError=Q}else p=l.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&(f==="loading"||f==="idle")){var y;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))y=c.data;else if(y=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof y<"u")try{y=e.select(y),e.structuralSharing!==!1&&(y=A(c==null?void 0:c.data,y)),this.selectError=null}catch(Q){k().error(Q),this.selectError=Q}typeof y<"u"&&(f="success",p=y,U=!0)}this.selectError&&(I=this.selectError,p=this.selectResult,C=Date.now(),f="error");var D={status:f,isLoading:f==="loading",isSuccess:f==="success",isError:f==="error",isIdle:f==="idle",data:p,dataUpdatedAt:m,error:I,errorUpdatedAt:C,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>v.dataUpdateCount||l.errorUpdateCount>v.errorUpdateCount,isFetching:S,isRefetching:S&&f!=="loading",isLoadingError:f==="error"&&l.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:T,isRefetchError:f==="error"&&l.dataUpdatedAt!==0,isStale:E(t,e),refetch:this.refetch,remove:this.remove};return D},s.shouldNotifyListeners=function(t,e){if(!e)return!0;var i=this.options,r=i.notifyOnChangeProps,c=i.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var o=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var d=h,v=t[d]!==e[d],R=o==null?void 0:o.some(function(m){return m===h}),l=c==null?void 0:c.some(function(m){return m===h});return v&&!l&&(!o||R)})},s.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!W(this.currentResult,e)){var i={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(i.listeners=!0),this.notify(P({},i,t))}},s.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},s.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!q(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(t){var e=this;g.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(i){i(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},a}(V);function J(u,a){return a.enabled!==!1&&!u.state.dataUpdatedAt&&!(u.state.status==="error"&&a.retryOnMount===!1)}function L(u,a){return J(u,a)||u.state.dataUpdatedAt>0&&O(u,a,a.refetchOnMount)}function O(u,a,s){if(a.enabled!==!1){var n=typeof s=="function"?s(u):s;return n==="always"||n!==!1&&E(u,a)}return!1}function _(u,a,s,n){return s.enabled!==!1&&(u!==a||n.enabled===!1)&&(!s.suspense||u.state.status!=="error")&&E(u,s)}function E(u,a){return u.isStaleByTime(a.staleTime)}function X(){var u=!1;return{clearReset:function(){u=!1},reset:function(){u=!0},isReset:function(){return u}}}var Y=b.createContext(X()),Z=function(){return b.useContext(Y)};function ee(u,a,s){return typeof a=="function"?a.apply(void 0,s):typeof a=="boolean"?a:!!u}function te(u,a){var s=b.useRef(!1),n=b.useState(0),t=n[1],e=z(),i=Z(),r=e.defaultQueryObserverOptions(u);r.optimisticResults=!0,r.onError&&(r.onError=g.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=g.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=g.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(i.isReset()||(r.retryOnMount=!1));var c=b.useState(function(){return new a(e,r)}),o=c[0],h=o.getOptimisticResult(r);if(b.useEffect(function(){s.current=!0,i.clearReset();var d=o.subscribe(g.batchCalls(function(){s.current&&t(function(v){return v+1})}));return o.updateResult(),function(){s.current=!1,d()}},[i,o]),b.useEffect(function(){o.setOptions(r,{listeners:!1})},[r,o]),r.suspense&&h.isLoading)throw o.fetchOptimistic(r).then(function(d){var v=d.data;r.onSuccess==null||r.onSuccess(v),r.onSettled==null||r.onSettled(v,null)}).catch(function(d){i.clearReset(),r.onError==null||r.onError(d),r.onSettled==null||r.onSettled(void 0,d)});if(h.isError&&!i.isReset()&&!h.isFetching&&ee(r.suspense,r.useErrorBoundary,[h.error,o.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=o.trackResult(h,r)),h}function se(u,a,s){var n=G(u,a,s);return te(n,H)}export{se as u};
