!function n(t,r,e){function u(a,c){if(!r[a]){if(!t[a]){var o="function"==typeof require&&require;if(!c&&o)return o(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(n){var r=t[a][1][n];return u(r?r:n)},f,f.exports,n,t,r,e)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<e.length;a++)u(e[a]);return u}({1:[function(n,t,r){(function(){function n(t,r,e){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return t===r;if(t._chain&&(t=t._wrapped),r._chain&&(r=r._wrapped),t.isEqual&&A.isFunction(t.isEqual))return t.isEqual(r);if(r.isEqual&&A.isFunction(r.isEqual))return r.isEqual(t);var u=f.call(t);if(u!=f.call(r))return!1;switch(u){case"[object String]":return t==String(r);case"[object Number]":return t!=+t?r!=+r:0==t?1/t==1/r:t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object RegExp]":return t.source==r.source&&t.global==r.global&&t.multiline==r.multiline&&t.ignoreCase==r.ignoreCase}if("object"!=typeof t||"object"!=typeof r)return!1;for(var i=e.length;i--;)if(e[i]==t)return!0;e.push(t);var i=0,a=!0;if("[object Array]"==u){if(i=t.length,a=i==r.length)for(;i--&&(a=i in t==i in r&&n(t[i],r[i],e)););}else{if("constructor"in t!="constructor"in r||t.constructor!=r.constructor)return!1;for(var c in t)if(A.has(t,c)&&(i++,!(a=A.has(r,c)&&n(t[c],r[c],e))))break;if(a){for(c in r)if(A.has(r,c)&&!i--)break;a=!i}}return e.pop(),a}var e=this,u=e._,i={},a=Array.prototype,c=Object.prototype,o=a.slice,l=a.unshift,f=c.toString,s=c.hasOwnProperty,p=a.forEach,h=a.map,g=a.reduce,v=a.reduceRight,d=a.filter,m=a.every,y=a.some,b=a.indexOf,x=a.lastIndexOf,c=Array.isArray,_=Object.keys,j=Function.prototype.bind,A=function(n){return new k(n)};"undefined"!=typeof r?("undefined"!=typeof t&&t.exports&&(r=t.exports=A),r._=A):e._=A,A.VERSION="1.3.1";var w=A.each=A.forEach=function(n,t,r){if(null!=n)if(p&&n.forEach===p)n.forEach(t,r);else if(n.length===+n.length)for(var e=0,u=n.length;u>e&&!(e in n&&t.call(r,n[e],e,n)===i);e++);else for(e in n)if(A.has(n,e)&&t.call(r,n[e],e,n)===i)break};A.map=A.collect=function(n,t,r){var e=[];return null==n?e:h&&n.map===h?n.map(t,r):(w(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),n.length===+n.length&&(e.length=n.length),e)},A.reduce=A.foldl=A.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),g&&n.reduce===g)return e&&(t=A.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(w(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError("Reduce of empty array with no initial value");return r},A.reduceRight=A.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=A.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=A.toArray(n).reverse();return e&&!u&&(t=A.bind(t,e)),u?A.reduce(i,t,r,e):A.reduce(i,t)},A.find=A.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},A.filter=A.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(w(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},A.reject=function(n,t,r){var e=[];return null==n?e:(w(n,function(n,u,i){t.call(r,n,u,i)||(e[e.length]=n)}),e)},A.every=A.all=function(n,t,r){var e=!0;return null==n?e:m&&n.every===m?n.every(t,r):(w(n,function(n,u,a){return(e=e&&t.call(r,n,u,a))?void 0:i}),e)};var E=A.some=A.any=function(n,t,r){t||(t=A.identity);var e=!1;return null==n?e:y&&n.some===y?n.some(t,r):(w(n,function(n,u,a){return e||(e=t.call(r,n,u,a))?i:void 0}),!!e)};A.include=A.contains=function(n,t){var r=!1;return null==n?r:b&&n.indexOf===b?-1!=n.indexOf(t):r=E(n,function(n){return n===t})},A.invoke=function(n,t){var r=o.call(arguments,2);return A.map(n,function(n){return(A.isFunction(t)?t||n:n[t]).apply(n,r)})},A.pluck=function(n,t){return A.map(n,function(n){return n[t]})},A.max=function(n,t,r){if(!t&&A.isArray(n))return Math.max.apply(Math,n);if(!t&&A.isEmpty(n))return-1/0;var e={computed:-1/0};return w(n,function(n,u,i){u=t?t.call(r,n,u,i):n,u>=e.computed&&(e={value:n,computed:u})}),e.value},A.min=function(n,t,r){if(!t&&A.isArray(n))return Math.min.apply(Math,n);if(!t&&A.isEmpty(n))return 1/0;var e={computed:1/0};return w(n,function(n,u,i){u=t?t.call(r,n,u,i):n,u<e.computed&&(e={value:n,computed:u})}),e.value},A.shuffle=function(n){var t,r=[];return w(n,function(n,e){0==e?r[0]=n:(t=Math.floor(Math.random()*(e+1)),r[e]=r[t],r[t]=n)}),r},A.sortBy=function(n,t,r){return A.pluck(A.map(n,function(n,e,u){return{value:n,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;return e>r?-1:r>e?1:0}),"value")},A.groupBy=function(n,t){var r={},e=A.isFunction(t)?t:function(n){return n[t]};return w(n,function(n,t){var u=e(n,t);(r[u]||(r[u]=[])).push(n)}),r},A.sortedIndex=function(n,t,r){r||(r=A.identity);for(var e=0,u=n.length;u>e;){var i=e+u>>1;r(n[i])<r(t)?e=i+1:u=i}return e},A.toArray=function(n){return n?n.toArray?n.toArray():A.isArray(n)?o.call(n):A.isArguments(n)?o.call(n):A.values(n):[]},A.size=function(n){return A.toArray(n).length},A.first=A.head=function(n,t,r){return null==t||r?n[0]:o.call(n,0,t)},A.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},A.last=function(n,t,r){return null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},A.rest=A.tail=function(n,t,r){return o.call(n,null==t||r?1:t)},A.compact=function(n){return A.filter(n,function(n){return!!n})},A.flatten=function(n,t){return A.reduce(n,function(n,r){return A.isArray(r)?n.concat(t?r:A.flatten(r)):(n[n.length]=r,n)},[])},A.without=function(n){return A.difference(n,o.call(arguments,1))},A.uniq=A.unique=function(n,t,r){var r=r?A.map(n,r):n,e=[];return A.reduce(r,function(r,u,i){return 0!=i&&(t===!0?A.last(r)==u:A.include(r,u))||(r[r.length]=u,e[e.length]=n[i]),r},[]),e},A.union=function(){return A.uniq(A.flatten(arguments,!0))},A.intersection=A.intersect=function(n){var t=o.call(arguments,1);return A.filter(A.uniq(n),function(n){return A.every(t,function(t){return A.indexOf(t,n)>=0})})},A.difference=function(n){var t=A.flatten(o.call(arguments,1));return A.filter(n,function(n){return!A.include(t,n)})},A.zip=function(){for(var n=o.call(arguments),t=A.max(A.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=A.pluck(n,""+e);return r},A.indexOf=function(n,t,r){if(null==n)return-1;var e;if(r)return r=A.sortedIndex(n,t),n[r]===t?r:-1;if(b&&n.indexOf===b)return n.indexOf(t);for(r=0,e=n.length;e>r;r++)if(r in n&&n[r]===t)return r;return-1},A.lastIndexOf=function(n,t){if(null==n)return-1;if(x&&n.lastIndexOf===x)return n.lastIndexOf(t);for(var r=n.length;r--;)if(r in n&&n[r]===t)return r;return-1},A.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0);for(var r=arguments[2]||1,e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var O=function(){};A.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!A.isFunction(n))throw new TypeError;return e=o.call(arguments,2),r=function(){if(!(this instanceof r))return n.apply(t,e.concat(o.call(arguments)));O.prototype=n.prototype;var u=new O,i=n.apply(u,e.concat(o.call(arguments)));return Object(i)===i?i:u}},A.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=A.functions(n)),w(t,function(t){n[t]=A.bind(n[t],n)}),n},A.memoize=function(n,t){var r={};return t||(t=A.identity),function(){var e=t.apply(this,arguments);return A.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},A.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(n,r)},t)},A.defer=function(n){return A.delay.apply(A,[n,1].concat(o.call(arguments,1)))},A.throttle=function(n,t){var r,e,u,i,a,c=A.debounce(function(){a=i=!1},t);return function(){r=this,e=arguments;u||(u=setTimeout(function(){u=null,a&&n.apply(r,e),c()},t)),i?a=!0:n.apply(r,e),c(),i=!0}},A.debounce=function(n,t){var r;return function(){var e=this,u=arguments;clearTimeout(r),r=setTimeout(function(){r=null,n.apply(e,u)},t)}},A.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments))}},A.wrap=function(n,t){return function(){var r=[n].concat(o.call(arguments,0));return t.apply(this,r)}},A.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},A.after=function(n,t){return 0>=n?t():function(){return--n<1?t.apply(this,arguments):void 0}},A.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t,r=[];for(t in n)A.has(n,t)&&(r[r.length]=t);return r},A.values=function(n){return A.map(n,A.identity)},A.functions=A.methods=function(n){var t,r=[];for(t in n)A.isFunction(n[t])&&r.push(t);return r.sort()},A.extend=function(n){return w(o.call(arguments,1),function(t){for(var r in t)n[r]=t[r]}),n},A.defaults=function(n){return w(o.call(arguments,1),function(t){for(var r in t)null==n[r]&&(n[r]=t[r])}),n},A.clone=function(n){return A.isObject(n)?A.isArray(n)?n.slice():A.extend({},n):n},A.tap=function(n,t){return t(n),n},A.isEqual=function(t,r){return n(t,r,[])},A.isEmpty=function(n){if(A.isArray(n)||A.isString(n))return 0===n.length;for(var t in n)if(A.has(n,t))return!1;return!0},A.isElement=function(n){return!(!n||1!=n.nodeType)},A.isArray=c||function(n){return"[object Array]"==f.call(n)},A.isObject=function(n){return n===Object(n)},A.isArguments=function(n){return"[object Arguments]"==f.call(n)},A.isArguments(arguments)||(A.isArguments=function(n){return!(!n||!A.has(n,"callee"))}),A.isFunction=function(n){return"[object Function]"==f.call(n)},A.isString=function(n){return"[object String]"==f.call(n)},A.isNumber=function(n){return"[object Number]"==f.call(n)},A.isNaN=function(n){return n!==n},A.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==f.call(n)},A.isDate=function(n){return"[object Date]"==f.call(n)},A.isRegExp=function(n){return"[object RegExp]"==f.call(n)},A.isNull=function(n){return null===n},A.isUndefined=function(n){return void 0===n},A.has=function(n,t){return s.call(n,t)},A.noConflict=function(){return e._=u,this},A.identity=function(n){return n},A.times=function(n,t,r){for(var e=0;n>e;e++)t.call(r,e)},A.escape=function(n){return(""+n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},A.mixin=function(n){w(A.functions(n),function(t){R(t,A[t]=n[t])})};var q=0;A.uniqueId=function(n){var t=q++;return n?n+t:t},A.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F=/.^/,S=function(n){return n.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};A.template=function(n,t){var r=A.templateSettings,r="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+n.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(r.escape||F,function(n,t){return"',_.escape("+S(t)+"),'"}).replace(r.interpolate||F,function(n,t){return"',"+S(t)+",'"}).replace(r.evaluate||F,function(n,t){return"');"+S(t).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",r);return t?e(t,A):function(n){return e.call(this,n,A)}},A.chain=function(n){return A(n).chain()};var k=function(n){this._wrapped=n};A.prototype=k.prototype;var M=function(n,t){return t?A(n).chain():n},R=function(n,t){k.prototype[n]=function(){var n=o.call(arguments);return l.call(n,this._wrapped),M(t.apply(A,n),this._chain)}};A.mixin(A),w("pop,push,reverse,shift,sort,splice,unshift".split(","),function(n){var t=a[n];k.prototype[n]=function(){var r=this._wrapped;t.apply(r,arguments);var e=r.length;return("shift"==n||"splice"==n)&&0===e&&delete r[0],M(r,this._chain)}}),w(["concat","join","slice"],function(n){var t=a[n];k.prototype[n]=function(){return M(t.apply(this._wrapped,arguments),this._chain)}}),k.prototype.chain=function(){return this._chain=!0,this},k.prototype.value=function(){return this._wrapped}}).call(this)},{}]},{},[1]);
//# sourceMappingURL=static/underscore.js.map