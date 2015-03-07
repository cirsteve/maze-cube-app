!function i(t,e,n){function r(a,c){if(!e[a]){if(!t[a]){var o="function"==typeof require&&require;if(!c&&o)return o(a,!0);if(s)return s(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var p=e[a]={exports:{}};t[a][0].call(p.exports,function(i){var e=t[a][1][i];return r(e?e:i)},p,p.exports,i,t,e,n)}return e[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(i,t){t.exports.Dispatcher=i("./lib/Dispatcher")},{"./lib/Dispatcher":2}],2:[function(i,t){"use strict";function e(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var n=i("./invariant"),r=1,s="ID_";e.prototype.register=function(i){var t=s+r++;return this.$Dispatcher_callbacks[t]=i,t},e.prototype.unregister=function(i){n(this.$Dispatcher_callbacks[i],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",i),delete this.$Dispatcher_callbacks[i]},e.prototype.waitFor=function(i){n(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var t=0;t<i.length;t++){var e=i[t];this.$Dispatcher_isPending[e]?n(this.$Dispatcher_isHandled[e],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",e):(n(this.$Dispatcher_callbacks[e],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",e),this.$Dispatcher_invokeCallback(e))}},e.prototype.dispatch=function(i){n(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(i);try{for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]||this.$Dispatcher_invokeCallback(t)}finally{this.$Dispatcher_stopDispatching()}},e.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},e.prototype.$Dispatcher_invokeCallback=function(i){this.$Dispatcher_isPending[i]=!0,this.$Dispatcher_callbacks[i](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[i]=!0},e.prototype.$Dispatcher_startDispatching=function(i){for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]=!1,this.$Dispatcher_isHandled[t]=!1;this.$Dispatcher_pendingPayload=i,this.$Dispatcher_isDispatching=!0},e.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},t.exports=e},{"./invariant":3}],3:[function(i,t){"use strict";var e=function(i,t,e,n,r,s,a,c){if(!i){var o;if(void 0===t)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[e,n,r,s,a,c],p=0;o=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return h[p++]}))}throw o.framesToPop=1,o}};t.exports=e},{}],4:[function(i,t){"use strict";var e=function(i){var t,e={};if(!(i instanceof Object)||Array.isArray(i))throw new Error("keyMirror(...): Argument must be an object.");for(t in i)i.hasOwnProperty(t)&&(e[t]=t);return e};t.exports=e},{}],5:[function(i,t){"use strict";function e(i){if(null==i)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}t.exports=Object.assign||function(i){for(var t,n,r=e(i),s=1;s<arguments.length;s++){t=arguments[s],n=Object.keys(Object(t));for(var a=0;a<n.length;a++)r[n[a]]=t[n[a]]}return r}},{}],6:[function(i,t){var e=i("../dispatcher/Dispatcher"),n=i("../constants/Constants"),r={initMaze:function(){e.handleViewAction({viewAction:n.ActionTypes.INIT_MAZE})},updateConfig:function(i,t){e.handleViewAction({viewAction:n.ActionTypes.UPDATE_CONFIG,dimension:i,value:t})},updatePosition:function(i,t){e.handleViewAction({viewAction:n.ActionTypes.UPDATE_POSITION,dimension:i,direction:t})}};t.exports=r},{"../constants/Constants":7,"../dispatcher/Dispatcher":8}],7:[function(i,t){var e=i("keymirror");t.exports={ActionTypes:e({INIT_MAZE:null,UPDATE_CONFIG:null,UPDATE_POSITION:null})}},{keymirror:4}],8:[function(i,t){var e=i("flux").Dispatcher,n=i("object-assign"),r=n(new e,{handleViewAction:function(i){this.dispatch({source:"VIEW_ACTION",action:i})},handleServerAction:function(i){this.dispatch({source:"SERVER_ACTION",action:i})}});t.exports=r},{flux:1,"object-assign":5}]},{},[6]);
//# sourceMappingURL=../static/actions/MazeActions.js.map