// Include underscore if not found
if(!window._){
	(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
}

if(!window.moment){
//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return fd.apply(null,arguments)}function b(a){fd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ja(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a),c=gd.call(b.parsedDateParts,function(a){return null!=a});a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),hd.length>0)for(c in hd)d=hd[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),id===!1&&(id=!0,a.updateOffset(this),id=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function u(b,c){var d=!0;return g(function(){return null!=a.deprecationHandler&&a.deprecationHandler(null,b),d&&(t(b+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),d=!1),c.apply(this,arguments)},c)}function v(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),jd[b]||(t(c),jd[b]=!0)}function w(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function x(a){return"[object Object]"===Object.prototype.toString.call(a)}function y(a){var b,c;for(c in a)b=a[c],w(b)?this[c]=b:this["_"+c]=b;this._config=a,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function z(a,b){var c,d=g({},a);for(c in b)f(b,c)&&(x(a[c])&&x(b[c])?(d[c]={},g(d[c],a[c]),g(d[c],b[c])):null!=b[c]?d[c]=b[c]:delete d[c]);return d}function A(a){null!=a&&this.set(a)}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a){for(var b,c,d,e,f=0;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,c=B(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=D(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function D(a){var b=null;if(!nd[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=ld._abbr,require("./locale/"+a),E(b)}catch(c){}return nd[a]}function E(a,b){var c;return a&&(c=m(b)?H(a):F(a,b),c&&(ld=c)),ld._abbr}function F(a,b){return null!==b?(b.abbr=a,null!=nd[a]?(v("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),b=z(nd[a]._config,b)):null!=b.parentLocale&&(null!=nd[b.parentLocale]?b=z(nd[b.parentLocale]._config,b):v("parentLocaleUndefined","specified parentLocale is not defined yet")),nd[a]=new A(b),E(a),nd[a]):(delete nd[a],null)}function G(a,b){if(null!=b){var c;null!=nd[a]&&(b=z(nd[a]._config,b)),c=new A(b),c.parentLocale=nd[a],nd[a]=c,E(a)}else null!=nd[a]&&(null!=nd[a].parentLocale?nd[a]=nd[a].parentLocale:null!=nd[a]&&delete nd[a]);return nd[a]}function H(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return ld;if(!c(a)){if(b=D(a))return b;a=[a]}return C(a)}function I(){return kd(nd)}function J(a,b){var c=a.toLowerCase();od[c]=od[c+"s"]=od[b]=a}function K(a){return"string"==typeof a?od[a]||od[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)f(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(b,c){return function(d){return null!=d?(O(this,b,d),a.updateOffset(this,c),this):N(this,b)}}function N(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function O(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function P(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=K(a),w(this[a]))return this[a](b);return this}function Q(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function R(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(sd[a]=e),b&&(sd[b[0]]=function(){return Q(e.apply(this,arguments),b[1],b[2])}),c&&(sd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function S(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function T(a){var b,c,d=a.match(pd);for(b=0,c=d.length;c>b;b++)sd[d[b]]?d[b]=sd[d[b]]:d[b]=S(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}function U(a,b){return a.isValid()?(b=V(b,a.localeData()),rd[b]=rd[b]||T(b),rd[b](a)):a.localeData().invalidDate()}function V(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(qd.lastIndex=0;d>=0&&qd.test(a);)a=a.replace(qd,c),qd.lastIndex=0,d-=1;return a}function W(a,b,c){Kd[a]=w(b)?b:function(a,d){return a&&c?c:b}}function X(a,b){return f(Kd,a)?Kd[a](b._strict,b._locale):new RegExp(Y(a))}function Y(a){return Z(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function Z(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)Ld[a[c]]=d}function _(a,b){$(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function aa(a,b,c){null!=b&&f(Ld,a)&&Ld[a](b,c._a,c,a)}function ba(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ca(a,b){return c(this._months)?this._months[a.month()]:this._months[Vd.test(b)?"format":"standalone"][a.month()]}function da(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Vd.test(b)?"format":"standalone"][a.month()]}function ea(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=h([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:null):(e=md.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:(e=md.call(this._longMonthsParse,g),-1!==e?e:null)):(e=md.call(this._longMonthsParse,g),-1!==e?e:(e=md.call(this._shortMonthsParse,g),-1!==e?e:null))}function fa(a,b,c){var d,e,f;if(this._monthsParseExact)return ea.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ga(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=r(b);else if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),ba(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ha(b){return null!=b?(ga(this,b),a.updateOffset(this,!0),this):N(this,"Month")}function ia(){return ba(this.year(),this.month())}function ja(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ka(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function la(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=Z(d[b]),e[b]=Z(e[b]),f[b]=Z(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function ma(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[Nd]<0||c[Nd]>11?Nd:c[Od]<1||c[Od]>ba(c[Md],c[Nd])?Od:c[Pd]<0||c[Pd]>24||24===c[Pd]&&(0!==c[Qd]||0!==c[Rd]||0!==c[Sd])?Pd:c[Qd]<0||c[Qd]>59?Qd:c[Rd]<0||c[Rd]>59?Rd:c[Sd]<0||c[Sd]>999?Sd:-1,j(a)._overflowDayOfYear&&(Md>b||b>Od)&&(b=Od),j(a)._overflowWeeks&&-1===b&&(b=Td),j(a)._overflowWeekday&&-1===b&&(b=Ud),j(a).overflow=b),a}function na(a){var b,c,d,e,f,g,h=a._i,i=$d.exec(h)||_d.exec(h);if(i){for(j(a).iso=!0,b=0,c=be.length;c>b;b++)if(be[b][1].exec(i[1])){e=be[b][0],d=be[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=ce.length;c>b;b++)if(ce[b][1].exec(i[3])){f=(i[2]||" ")+ce[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ae.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),Ca(a)}else a._isValid=!1}function oa(b){var c=de.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(na(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function pa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function qa(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ra(a){return sa(a)?366:365}function sa(a){return a%4===0&&a%100!==0||a%400===0}function ta(){return sa(this.year())}function ua(a,b,c){var d=7+b-c,e=(7+qa(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=ra(f)+j):j>ra(a)?(f=a+1,g=j-ra(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(ra(a)-d+e)/7}function ya(a,b,c){return null!=a?a:null!=b?b:c}function za(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function Aa(a){var b,c,d,e,f=[];if(!a._d){for(d=za(a),a._w&&null==a._a[Od]&&null==a._a[Nd]&&Ba(a),a._dayOfYear&&(e=ya(a._a[Md],d[Md]),a._dayOfYear>ra(e)&&(j(a)._overflowDayOfYear=!0),c=qa(e,0,a._dayOfYear),a._a[Nd]=c.getUTCMonth(),a._a[Od]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[Pd]&&0===a._a[Qd]&&0===a._a[Rd]&&0===a._a[Sd]&&(a._nextDay=!0,a._a[Pd]=0),a._d=(a._useUTC?qa:pa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Pd]=24)}}function Ba(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ya(b.GG,a._a[Md],wa(Ka(),1,4).year),d=ya(b.W,1),e=ya(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ya(b.gg,a._a[Md],wa(Ka(),f,g).year),d=ya(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>xa(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[Md]=h.year,a._dayOfYear=h.dayOfYear)}function Ca(b){if(b._f===a.ISO_8601)return void na(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=V(b._f,b._locale).match(pd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(X(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),sd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),aa(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[Pd]<=12&&b._a[Pd]>0&&(j(b).bigHour=void 0),j(b).parsedDateParts=b._a.slice(0),j(b).meridiem=b._meridiem,b._a[Pd]=Da(b._locale,b._a[Pd],b._meridiem),Aa(b),ma(b)}function Da(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function Ea(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],Ca(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function Fa(a){if(!a._d){var b=L(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),Aa(a)}}function Ga(a){var b=new o(ma(Ha(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ha(a){var b=a._i,e=a._f;return a._locale=a._locale||H(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(ma(b)):(c(e)?Ea(a):e?Ca(a):d(b)?a._d=b:Ia(a),k(a)||(a._d=null),a))}function Ia(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(f.valueOf()):"string"==typeof f?oa(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),Aa(b)):"object"==typeof f?Fa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ja(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Ga(f)}function Ka(a,b,c,d){return Ja(a,b,c,d,!1)}function La(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ka();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ma(){var a=[].slice.call(arguments,0);return La("isBefore",a)}function Na(){var a=[].slice.call(arguments,0);return La("isAfter",a)}function Oa(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=H(),this._bubble()}function Pa(a){return a instanceof Oa}function Qa(a,b){R(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+Q(~~(a/60),2)+b+Q(~~a%60,2)})}function Ra(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(ie)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Sa(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?b.valueOf():Ka(b).valueOf())-e.valueOf(),e._d.setTime(e._d.valueOf()+f),a.updateOffset(e,!1),e):Ka(b).local()}function Ta(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ua(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=Ra(Hd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ta(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?jb(this,db(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ta(this):null!=b?this:NaN}function Va(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Wa(a){return this.utcOffset(0,a)}function Xa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ta(this),"m")),this}function Ya(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ra(Gd,this._i)),this}function Za(a){return this.isValid()?(a=a?Ka(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function $a(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function _a(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ha(a),a._a){var b=a._isUTC?h(a._a):Ka(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ab(){return this.isValid()?!this._isUTC:!1}function bb(){return this.isValid()?this._isUTC:!1}function cb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function db(a,b){var c,d,e,g=a,h=null;return Pa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=je.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[Od])*c,h:r(h[Pd])*c,m:r(h[Qd])*c,s:r(h[Rd])*c,ms:r(h[Sd])*c}):(h=ke.exec(a))?(c="-"===h[1]?-1:1,g={y:eb(h[2],c),M:eb(h[3],c),w:eb(h[4],c),d:eb(h[5],c),h:eb(h[6],c),m:eb(h[7],c),s:eb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=gb(Ka(g.from),Ka(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Oa(g),Pa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function eb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function fb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function gb(a,b){var c;return a.isValid()&&b.isValid()?(b=Sa(b,a),a.isBefore(b)?c=fb(a,b):(c=fb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function hb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}function ib(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(v(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=db(c,d),jb(this,e,a),this}}function jb(b,c,d,e){var f=c._milliseconds,g=hb(c._days),h=hb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&O(b,"Date",N(b,"Date")+g*d),h&&ga(b,N(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function kb(a,b){var c=a||Ka(),d=Sa(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(w(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ka(c)))}function lb(){return new o(this)}function mb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function nb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function ob(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function pb(a,b){var c,d=p(a)?a:Ka(a);return this.isValid()&&d.isValid()?(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function qb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function rb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function sb(a,b,c){var d,e,f,g;return this.isValid()?(d=Sa(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=tb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function tb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function ub(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function vb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():U(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):U(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function wb(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=U(this,b);return this.localeData().postformat(c)}function xb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function yb(a){return this.from(Ka(),a)}function zb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function Ab(a){return this.to(Ka(),a)}function Bb(a){var b;return void 0===a?this._locale._abbr:(b=H(a),null!=b&&(this._locale=b),this)}function Cb(){return this._locale}function Db(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function Eb(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function Fb(){return this._d.valueOf()-6e4*(this._offset||0)}function Gb(){return Math.floor(this.valueOf()/1e3)}function Hb(){return this._offset?new Date(this.valueOf()):this._d}function Ib(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Jb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Kb(){return this.isValid()?this.toISOString():null}function Lb(){return k(this)}function Mb(){return g({},j(this))}function Nb(){return j(this).overflow}function Ob(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Pb(a,b){R(0,[a,a.length],0,b)}function Qb(a){return Ub.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rb(a){return Ub.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Sb(){return xa(this.year(),1,4)}function Tb(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ub(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Vb.call(this,a,b,c,d,e))}function Vb(a,b,c,d,e){var f=va(a,b,c,d,e),g=qa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Wb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Xb(a){return wa(a,this._week.dow,this._week.doy).week}function Yb(){return this._week.dow}function Zb(){return this._week.doy}function $b(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function _b(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function ac(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function bc(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function cc(a){return this._weekdaysShort[a.day()]}function dc(a){return this._weekdaysMin[a.day()]}function ec(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=h([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function fc(a,b,c){var d,e,f;if(this._weekdaysParseExact)return ec.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=h([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function gc(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=ac(a,this.localeData()),this.add(a-b,"d")):b}function hc(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function ic(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function jc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex}function kc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function lc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function mc(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],i=[],j=[],k=[];for(b=0;7>b;b++)c=h([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),i.push(e),j.push(f),k.push(d),k.push(e),k.push(f);for(g.sort(a),i.sort(a),j.sort(a),k.sort(a),b=0;7>b;b++)i[b]=Z(i[b]),j[b]=Z(j[b]),k[b]=Z(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function nc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function oc(){return this.hours()%12||12}function pc(){return this.hours()||24}function qc(a,b){R(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function rc(a,b){return b._meridiemParse}function sc(a){return"p"===(a+"").toLowerCase().charAt(0)}function tc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function uc(a,b){b[Sd]=r(1e3*("0."+a))}function vc(){return this._isUTC?"UTC":""}function wc(){return this._isUTC?"Coordinated Universal Time":""}function xc(a){return Ka(1e3*a)}function yc(){return Ka.apply(null,arguments).parseZone()}function zc(a,b,c){var d=this._calendar[a];return w(d)?d.call(b,c):d}function Ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function Bc(){return this._invalidDate}function Cc(a){return this._ordinal.replace("%d",a)}function Dc(a){return a}function Ec(a,b,c,d){var e=this._relativeTime[c];return w(e)?e(a,b,c,d):e.replace(/%d/i,a)}function Fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return w(c)?c(b):c.replace(/%s/i,b)}function Gc(a,b,c,d){var e=H(),f=h().set(d,b);return e[c](f,a)}function Hc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Gc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Gc(a,d,c,"month");return e}function Ic(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=H(),f=a?e._week.dow:0;if(null!=c)return Gc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Gc(b,(g+f)%7,d,"day");return h}function Jc(a,b){return Hc(a,b,"months")}function Kc(a,b){return Hc(a,b,"monthsShort")}function Lc(a,b,c){return Ic(a,b,c,"weekdays")}function Mc(a,b,c){return Ic(a,b,c,"weekdaysShort")}function Nc(a,b,c){return Ic(a,b,c,"weekdaysMin")}function Oc(){var a=this._data;return this._milliseconds=Le(this._milliseconds),this._days=Le(this._days),this._months=Le(this._months),a.milliseconds=Le(a.milliseconds),a.seconds=Le(a.seconds),a.minutes=Le(a.minutes),a.hours=Le(a.hours),a.months=Le(a.months),a.years=Le(a.years),this}function Pc(a,b,c,d){var e=db(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Qc(a,b){return Pc(this,a,b,1)}function Rc(a,b){return Pc(this,a,b,-1)}function Sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Sc(Vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Uc(g)),h+=e,g-=Sc(Vc(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Uc(a){return 4800*a/146097}function Vc(a){return 146097*a/4800}function Wc(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Yc(a){return function(){return this.as(a)}}function Zc(a){
return a=K(a),this[a+"s"]()}function $c(a){return function(){return this._data[a]}}function _c(){return q(this.days()/7)}function ad(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function bd(a,b,c){var d=db(a).abs(),e=_e(d.as("s")),f=_e(d.as("m")),g=_e(d.as("h")),h=_e(d.as("d")),i=_e(d.as("M")),j=_e(d.as("y")),k=e<af.s&&["s",e]||1>=f&&["m"]||f<af.m&&["mm",f]||1>=g&&["h"]||g<af.h&&["hh",g]||1>=h&&["d"]||h<af.d&&["dd",h]||1>=i&&["M"]||i<af.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,ad.apply(null,k)}function cd(a,b){return void 0===af[a]?!1:void 0===b?af[a]:(af[a]=b,!0)}function dd(a){var b=this.localeData(),c=bd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ed(){var a,b,c,d=bf(this._milliseconds)/1e3,e=bf(this._days),f=bf(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var fd,gd;gd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var hd=a.momentProperties=[],id=!1,jd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var kd;kd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)f(a,b)&&c.push(b);return c};var ld,md,nd={},od={},pd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,rd={},sd={},td=/\d/,ud=/\d\d/,vd=/\d{3}/,wd=/\d{4}/,xd=/[+-]?\d{6}/,yd=/\d\d?/,zd=/\d\d\d\d?/,Ad=/\d\d\d\d\d\d?/,Bd=/\d{1,3}/,Cd=/\d{1,4}/,Dd=/[+-]?\d{1,6}/,Ed=/\d+/,Fd=/[+-]?\d+/,Gd=/Z|[+-]\d\d:?\d\d/gi,Hd=/Z|[+-]\d\d(?::?\d\d)?/gi,Id=/[+-]?\d+(\.\d{1,3})?/,Jd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Kd={},Ld={},Md=0,Nd=1,Od=2,Pd=3,Qd=4,Rd=5,Sd=6,Td=7,Ud=8;md=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),R("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),W("M",yd),W("MM",yd,ud),W("MMM",function(a,b){return b.monthsShortRegex(a)}),W("MMMM",function(a,b){return b.monthsRegex(a)}),$(["M","MM"],function(a,b){b[Nd]=r(a)-1}),$(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Nd]=e:j(c).invalidMonth=a});var Vd=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Wd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Xd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Yd=Jd,Zd=Jd,$d=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,_d=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ae=/Z|[+-]\d\d(?::?\d\d)?/,be=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ce=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],de=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),R("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),J("year","y"),W("Y",Fd),W("YY",yd,ud),W("YYYY",Cd,wd),W("YYYYY",Dd,xd),W("YYYYYY",Dd,xd),$(["YYYYY","YYYYYY"],Md),$("YYYY",function(b,c){c[Md]=2===b.length?a.parseTwoDigitYear(b):r(b)}),$("YY",function(b,c){c[Md]=a.parseTwoDigitYear(b)}),$("Y",function(a,b){b[Md]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var ee=M("FullYear",!0);a.ISO_8601=function(){};var fe=u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),ge=u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),he=function(){return Date.now?Date.now():+new Date};Qa("Z",":"),Qa("ZZ",""),W("Z",Hd),W("ZZ",Hd),$(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ra(Hd,a)});var ie=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var je=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,ke=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;db.fn=Oa.prototype;var le=ib(1,"add"),me=ib(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ne=u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Pb("gggg","weekYear"),Pb("ggggg","weekYear"),Pb("GGGG","isoWeekYear"),Pb("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),W("G",Fd),W("g",Fd),W("GG",yd,ud),W("gg",yd,ud),W("GGGG",Cd,wd),W("gggg",Cd,wd),W("GGGGG",Dd,xd),W("ggggg",Dd,xd),_(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),_(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),R("Q",0,"Qo","quarter"),J("quarter","Q"),W("Q",td),$("Q",function(a,b){b[Nd]=3*(r(a)-1)}),R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),W("w",yd),W("ww",yd,ud),W("W",yd),W("WW",yd,ud),_(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var oe={dow:0,doy:6};R("D",["DD",2],"Do","date"),J("date","D"),W("D",yd),W("DD",yd,ud),W("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),$(["D","DD"],Od),$("Do",function(a,b){b[Od]=r(a.match(yd)[0],10)});var pe=M("Date",!0);R("d",0,"do","day"),R("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),R("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),R("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),W("d",yd),W("e",yd),W("E",yd),W("dd",function(a,b){return b.weekdaysMinRegex(a)}),W("ddd",function(a,b){return b.weekdaysShortRegex(a)}),W("dddd",function(a,b){return b.weekdaysRegex(a)}),_(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),_(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var qe="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),re="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),se="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),te=Jd,ue=Jd,ve=Jd;R("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),W("DDD",Bd),W("DDDD",vd),$(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),R("H",["HH",2],0,"hour"),R("h",["hh",2],0,oc),R("k",["kk",2],0,pc),R("hmm",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)}),R("hmmss",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)+Q(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+Q(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+Q(this.minutes(),2)+Q(this.seconds(),2)}),qc("a",!0),qc("A",!1),J("hour","h"),W("a",rc),W("A",rc),W("H",yd),W("h",yd),W("HH",yd,ud),W("hh",yd,ud),W("hmm",zd),W("hmmss",Ad),W("Hmm",zd),W("Hmmss",Ad),$(["H","HH"],Pd),$(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),$(["h","hh"],function(a,b,c){b[Pd]=r(a),j(c).bigHour=!0}),$("hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d)),j(c).bigHour=!0}),$("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e)),j(c).bigHour=!0}),$("Hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d))}),$("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e))});var we=/[ap]\.?m?\.?/i,xe=M("Hours",!0);R("m",["mm",2],0,"minute"),J("minute","m"),W("m",yd),W("mm",yd,ud),$(["m","mm"],Qd);var ye=M("Minutes",!1);R("s",["ss",2],0,"second"),J("second","s"),W("s",yd),W("ss",yd,ud),$(["s","ss"],Rd);var ze=M("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),W("S",Bd,td),W("SS",Bd,ud),W("SSS",Bd,vd);var Ae;for(Ae="SSSS";Ae.length<=9;Ae+="S")W(Ae,Ed);for(Ae="S";Ae.length<=9;Ae+="S")$(Ae,uc);var Be=M("Milliseconds",!1);R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var Ce=o.prototype;Ce.add=le,Ce.calendar=kb,Ce.clone=lb,Ce.diff=sb,Ce.endOf=Eb,Ce.format=wb,Ce.from=xb,Ce.fromNow=yb,Ce.to=zb,Ce.toNow=Ab,Ce.get=P,Ce.invalidAt=Nb,Ce.isAfter=mb,Ce.isBefore=nb,Ce.isBetween=ob,Ce.isSame=pb,Ce.isSameOrAfter=qb,Ce.isSameOrBefore=rb,Ce.isValid=Lb,Ce.lang=ne,Ce.locale=Bb,Ce.localeData=Cb,Ce.max=ge,Ce.min=fe,Ce.parsingFlags=Mb,Ce.set=P,Ce.startOf=Db,Ce.subtract=me,Ce.toArray=Ib,Ce.toObject=Jb,Ce.toDate=Hb,Ce.toISOString=vb,Ce.toJSON=Kb,Ce.toString=ub,Ce.unix=Gb,Ce.valueOf=Fb,Ce.creationData=Ob,Ce.year=ee,Ce.isLeapYear=ta,Ce.weekYear=Qb,Ce.isoWeekYear=Rb,Ce.quarter=Ce.quarters=Wb,Ce.month=ha,Ce.daysInMonth=ia,Ce.week=Ce.weeks=$b,Ce.isoWeek=Ce.isoWeeks=_b,Ce.weeksInYear=Tb,Ce.isoWeeksInYear=Sb,Ce.date=pe,Ce.day=Ce.days=gc,Ce.weekday=hc,Ce.isoWeekday=ic,Ce.dayOfYear=nc,Ce.hour=Ce.hours=xe,Ce.minute=Ce.minutes=ye,Ce.second=Ce.seconds=ze,Ce.millisecond=Ce.milliseconds=Be,Ce.utcOffset=Ua,Ce.utc=Wa,Ce.local=Xa,Ce.parseZone=Ya,Ce.hasAlignedHourOffset=Za,Ce.isDST=$a,Ce.isDSTShifted=_a,Ce.isLocal=ab,Ce.isUtcOffset=bb,Ce.isUtc=cb,Ce.isUTC=cb,Ce.zoneAbbr=vc,Ce.zoneName=wc,Ce.dates=u("dates accessor is deprecated. Use date instead.",pe),Ce.months=u("months accessor is deprecated. Use month instead",ha),Ce.years=u("years accessor is deprecated. Use year instead",ee),Ce.zone=u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Va);var De=Ce,Ee={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Fe={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ge="Invalid date",He="%d",Ie=/\d{1,2}/,Je={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ke=A.prototype;Ke._calendar=Ee,Ke.calendar=zc,Ke._longDateFormat=Fe,Ke.longDateFormat=Ac,Ke._invalidDate=Ge,Ke.invalidDate=Bc,Ke._ordinal=He,Ke.ordinal=Cc,Ke._ordinalParse=Ie,Ke.preparse=Dc,Ke.postformat=Dc,Ke._relativeTime=Je,Ke.relativeTime=Ec,Ke.pastFuture=Fc,Ke.set=y,Ke.months=ca,Ke._months=Wd,Ke.monthsShort=da,Ke._monthsShort=Xd,Ke.monthsParse=fa,Ke._monthsRegex=Zd,Ke.monthsRegex=ka,Ke._monthsShortRegex=Yd,Ke.monthsShortRegex=ja,Ke.week=Xb,Ke._week=oe,Ke.firstDayOfYear=Zb,Ke.firstDayOfWeek=Yb,Ke.weekdays=bc,Ke._weekdays=qe,Ke.weekdaysMin=dc,Ke._weekdaysMin=se,Ke.weekdaysShort=cc,Ke._weekdaysShort=re,Ke.weekdaysParse=fc,Ke._weekdaysRegex=te,Ke.weekdaysRegex=jc,Ke._weekdaysShortRegex=ue,Ke.weekdaysShortRegex=kc,Ke._weekdaysMinRegex=ve,Ke.weekdaysMinRegex=lc,Ke.isPM=sc,Ke._meridiemParse=we,Ke.meridiem=tc,E("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=u("moment.lang is deprecated. Use moment.locale instead.",E),a.langData=u("moment.langData is deprecated. Use moment.localeData instead.",H);var Le=Math.abs,Me=Yc("ms"),Ne=Yc("s"),Oe=Yc("m"),Pe=Yc("h"),Qe=Yc("d"),Re=Yc("w"),Se=Yc("M"),Te=Yc("y"),Ue=$c("milliseconds"),Ve=$c("seconds"),We=$c("minutes"),Xe=$c("hours"),Ye=$c("days"),Ze=$c("months"),$e=$c("years"),_e=Math.round,af={s:45,m:45,h:22,d:26,M:11},bf=Math.abs,cf=Oa.prototype;cf.abs=Oc,cf.add=Qc,cf.subtract=Rc,cf.as=Wc,cf.asMilliseconds=Me,cf.asSeconds=Ne,cf.asMinutes=Oe,cf.asHours=Pe,cf.asDays=Qe,cf.asWeeks=Re,cf.asMonths=Se,cf.asYears=Te,cf.valueOf=Xc,cf._bubble=Tc,cf.get=Zc,cf.milliseconds=Ue,cf.seconds=Ve,cf.minutes=We,cf.hours=Xe,cf.days=Ye,cf.weeks=_c,cf.months=Ze,cf.years=$e,cf.humanize=dd,cf.toISOString=ed,cf.toString=ed,cf.toJSON=ed,cf.locale=Bb,cf.localeData=Cb,cf.toIsoString=u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ed),cf.lang=ne,R("X",0,0,"unix"),R("x",0,0,"valueOf"),W("x",Fd),W("X",Id),$("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),$("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.13.0",b(Ka),a.fn=De,a.min=Ma,a.max=Na,a.now=he,a.utc=h,a.unix=xc,a.months=Jc,a.isDate=d,a.locale=E,a.invalid=l,a.duration=db,a.isMoment=p,a.weekdays=Lc,a.parseZone=yc,a.localeData=H,a.isDuration=Pa,a.monthsShort=Kc,a.weekdaysMin=Nc,a.defineLocale=F,a.updateLocale=G,a.locales=I,a.weekdaysShort=Mc,a.normalizeUnits=K,a.relativeTimeThreshold=cd,a.prototype=De;var df=a;return df});
}

if(!window.Pikaday)
{
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (typeof exports === 'object') {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require('moment'); } catch (e) {}
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req)
        {
            // Load moment.js as an optional dependency
            var id = 'moment';
            try { moment = req(id); } catch (e) {}
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(this, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');
            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL)
    {
        return '<tr>' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        opts.field.blur();
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);
        addEvent(document, 'keydown', self._onKeyChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            return !isDate(this._d) ? '' : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection with fallback for the current date
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : new Date();
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            if (hasMoment) {
                if (sign === 'add') {
                    newDay = moment(day).add(days, "days").toDate();
                } else if (sign === 'subtract') {
                    newDay = moment(day).subtract(days, "days").toDate();
                }
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }
          // let the screen reader user know to use arrow keys
          this._o.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
                    };

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL));
                    row = [];
                    r = 0;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                removeClass(this.el, 'is-hidden');
                this._v = true;
                this.draw();
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));
}

(function($,_,domain,profileID,options){
	"use strict";



	var $w = null,
		s = Math.floor((new Date).getTime()/864e5),
		domainManager = {
			getDomain : function(segmentID){
				var domainUrl = "";

				if(typeof domain === "string"){
					domainUrl = domain;
				}else if ($.isArray(domain)){
					if(!segmentID){
						segmentID = 1;
					}
					domainUrl = domain[segmentID-1];
				}else{
					// Do nothing
				}

				return domainUrl;
			}
		};



	window.frsWidgets = $w = window.$frs = {
		keyCodes : {
			Backspace : 8,
			Tab : 9,
			Enter : 13,
			Shift : 16,
			Ctrl : 17,
			Alt : 18,
			PauseBreak : 19,
			CapsLock : 20,
			Escape : 27,
			PageUp : 33,
			PageDown : 34,
			End : 35,
			Home : 36,
			LeftArrow : 37,
			UpArrow : 38,
			RightArrow : 39,
			DownArrow : 40,
			Insert : 45,
			Delete : 46,
			Zero : 48,
			One : 49,
			Two : 50,
			Three : 51,
			Four : 52,
			Five : 53,
			Size : 54,
			Seven : 55,
			Eight : 56,
			Nine : 57,
			A : 65,
			B : 66,
			C : 67,
			D : 68,
			E : 69,
			F : 70,
			G : 71,
			H : 72,
			I : 73,
			J : 74,
			K : 75,
			L : 76,
			M : 77,
			N : 78,
			O : 79,
			P : 80,
			Q : 81,
			R : 82,
			S : 83,
			T : 84,
			U : 85,
			V : 86,
			W : 87,
			X : 88,
			Y : 89,
			Z : 90,
			LeftWin : 91,
			RightWin : 92,
			Select : 93,
			Numpad0 : 96,
			Numpad1 : 97,
			Numpad2 : 98,
			Numpad3 : 99,
			Numpad4 : 100,
			Numpad5 : 101,
			Numpad6 : 102,
			Numpad7 : 103,
			Numpad8 : 104,
			Numpad9 : 105,
			Mulitply : 106,
			Add : 107,
			Subtract : 109,
			DecimalPoint : 110,
			Divide : 111,
			F1 : 112,
			F2 : 113,
			F3 : 114,
			F4 : 115,
			F5 : 116,
			F6 : 117,
			F7 : 118,
			F8 : 119,
			F9 : 120,
			F10 : 121,
			F11 : 122,
			F12 : 123,
			NumLock : 144,
			ScrollLock : 145,
			SemiColon : 186,
			EqualSign : 187,
			Comma : 188,
			Dash : 189,
			Period : 190,
			ForwardSlash : 191,
			GraveAccent : 192,
			OpenBracket : 219,
			BackSlash : 220,
			CloseBracket : 221,
			SingleQuote : 222
		},
		domain : domain,
		getDomain : function(segmentID){
			return domainManager.getDomain(segmentID);
		},
		propertiesUrl : ((options.propertiesUrl) ? options.propertiesUrl : null),
		getPropertiesUrl : function(segmentID){
			var url = null;

			if(typeof options.propertiesUrl === "string"){
				url = document.location.origin + options.propertiesUrl;
			}else if($.isArray(options.propertiesUrl)){
				if(!segmentID){
					segmentID = 1;
				}
				url = document.location.origin + options.propertiesUrl[segmentID-1];
			}else{
				// do nothing
			}

			return url;
		},
		rentedUrl : ((options.rentedUrl) ? options.rentedUrl : null),
		getRentedUrl : function(segmentID){
			var url = null;

			if(typeof options.rentedUrl === "string"){
				url = document.location.origin + options.rentedUrl;
			}else if($.isArray(options.rentedUrl)){
				if(!segmentID){
					segmentID = 1;
				}
				url = document.location.origin + options.rentedUrl[segmentID-1];
			}else{
				// do nothing
			}

			return url;

		},
		templates : {
			propertyListTemplate : false,
			propertyViewTemplate : false,
			propertyPagingTemplate : false,
			propertyInfoWindowTemplate : false,
			propertyFeaturedTemplate : false,
			propertyNewTemplate : false,
			propertyOpenHouseTemplate : false,
			propertySubscribeTemplate : false,
			propertyManageSubscriptionTemplate : false,
			pagingTemplate : false
		},
		defaultTemplates : {
			shared : {
				paging : { name : "shared/paging" }
			},
			properties : {
				list : { name : "properties/list" },
				view : { name : "properties/view" },
				map : { name : "properties/map" },
				subscribe : { name : "properties/subscribe" },
				manage : { name : "properties/manage" },
				infoWindow : { name : "properties/infoWindow" },
				miniInfoWindow : { name : "properties/miniInfoWindow" },
				newList : { name : "properties/new" },
				featured : { name : "properties/featured" },
				open : { name : "properties/open" },
				rented : { name : "properties/rented" },
				rentedView : { name : "properties/rentedView" },
				rentedMini : { name : "properties/rentedMini" }
			},
			profiles : {
				list: { name: "profiles/list" },
				view: { name: "profiles/view" }
			},
			forms : {
				view : { name : "forms/view" },
				success : { name : "forms/success" }
			}
		},
		cookies : {
			name : "frsWidgetName",
			email : "frsWidgetEmail",
			phone : "frsWidgetPhone"
		},
		jsonpEndpoints : {
			propertiesApi : "//" + domainManager.getDomain() + "/services/jsonp/properties/?profileID=" + profileID,
			mapApi : "//" + domainManager.getDomain() + "/services/jsonp/properties?profileID=" + profileID,
			geoApi : "//" + domainManager.getDomain() + "/services/jsonp/geo/",
			profilesApi: "//" + domainManager.getDomain() + "/services/jsonp/profiles/",
			formsApi : "//" + domainManager.getDomain() + "/services/jsonp/forms/",
			templateApi : "//" + domainManager.getDomain() + "/widgets/templates?profileID=" + profileID,
			marketingApi : "//" + domainManager.getDomain() + "/services/jsonp/marketing/"
		},
		settings : $.extend({
			mapsEnabled : false
		}, (options.settings || [])),
		queues : {
				googleMaps : [],
				mapBox : []
		},
		waitFor : {
			googleMaps : function(callback){
				if(window.google && window.google.maps){
					callback();
				}else{
					$w.queues.googleMaps.push(callback);
				}
			},
			mapBox : function(callback){
				if(window.mapboxgl && window.mapboxgl){
					callback();
				}else{
					$w.queues.mapBox.push(callback);
				}
			}
		},
		util : {
			hasValue : function(value){
				var hasValue = false;
				if(value){
					if(typeof(value) === "string"){
						if(value.length > 0){
							hasValue = true;
						}
					}
					else{
						hasValue = true;
					}
				}
				else if (value === 0 || value === false){
					hasValue = true;
				}
				return hasValue;
			},
			setCookie : function(name,value,days){
				var d = new Date(),
					expires = null;
				days = days || 3;
				d.setTime(d.getTime() + (days*24*60*60*1000));
				expires = "expires=" + d.toGMTString();
				document.cookie = name + "=" + value + "; " + expires;
			},
			getCookie : function(name){
				var i = 0,
					value = null,
					cookie = null,
					cookieFound = false,
					cname = name + "=",
					cookiesArray = document.cookie.split(";");

				while((i < cookiesArray.length) && (!value)){
					cookie = $.trim(cookiesArray[i]);
					if(cookie.indexOf(name) === 0){
						value = cookie.substring(cname.length,cookie.length);
					}
					i++;
				}

				return value;
			},
			addError : function(target,message){
				if(!$(target).hasClass("error")){
					$(target).addClass("error").after("<span class=\"frs-form-error\">" + message + "</span>");
				}
			},
			removeError : function(target){
				if($(target).hasClass("error")){
					$(target).removeClass("error").siblings(".frs-form-error").remove();
				}
			},
			pagination : function(data,pageLimit){
				var startPage = 0,
					endPage = 0,
					page = data.page,
					maxPage = data.maxPage;

				pageLimit = pageLimit || data.pageLimit || 10;

				if(page > maxPage){
					page = maxPage;
				}else if (page <= 0){
					page = 1;
				}

				startPage = page - Math.floor(pageLimit / 2);
				endPage = page + Math.floor(pageLimit / 2);

				if(startPage < 1){
					startPage = 1;
					endPage = pageLimit;
				}

				if(endPage > maxPage){
					startPage = maxPage - pageLimit;
					if(startPage < 1){
						startPage = 1;
					}
					endPage = maxPage;
				}

				if(((endPage - startPage) + 1) > pageLimit){
					startPage = startPage + 1;
				}

				return {
					page : page,
					startPage : startPage,
					endPage : endPage,
					maxPage : maxPage
				};
			},
			objectToQueryString : function(obj){
				var qs = "",
					property,
					value,
					isFirst = true;

				for(property in obj){
					if(property){
						value = obj[property];
						if($w.util.hasValue(value)){
							if(isFirst){
								isFirst = false;
							}else{
								qs += "&";
							}
							qs += property + "=" + encodeURIComponent(obj[property]);
						}
					}
				}
				return qs;
			},
			queryStringToObject : function(queryString){
				var data = {},
					i = 0,
					pair = null,
					pairs = [];

				queryString = (queryString.substring(0,1) === "?") ? queryString.slice(1) : queryString;

				pairs = queryString.split("&");

				for(i=0;i<pairs.length;i++){
					pair = pairs[i];
					pair = pair.split("=");
					data[pair[0]] = decodeURIComponent((pair[1] || ''));
				}

				return data;
			},
			formToObject : function(form){
				var i = 0,
					element,
					data = {};
				if(form){
					if(form.elements && form.elements.length > 0){
						for(i=0;i<form.elements.length;i++){
							element = form.elements[i];

							switch(element.tagName){
								case "INPUT" :
									switch (element.type.toLowerCase()){
										case "checkbox" :
										case "radio" :
											if($(element).is(":checked")){
												if(data[element.name]){
													data[element.name] += "," + $(element).val();
												}else{
													data[element.name] = $(element).val();
												}
											}
											break;
										default :
											data[element.name] = $(element).val();
											break;
									}
									break;
								case "SELECT" :
									data[element.name] = $(element).val();
									break;
								case "BUTTON" :
									break;
								default :
									break;
							}
						}
					}
				}

				return data;
			},
			scrollTop : function(target,options){
				var currentScrollTop = $("body").scrollTop(),
					targetScrollTop = (target) ? $(target).offset().top : false,
					duration = null,
					padding = null,
					doScrollTo = false;

				if(!currentScrollTop && document.documentElement.scrollTop){
					doScrollTo = true;
					currentScrollTop = document.documentElement.scrollTop;
				}

				if(targetScrollTop){
					options = options || {};
					duration = options.duration || 1000;
					padding = options.padding || 0;

					if(currentScrollTop > targetScrollTop){
						if(doScrollTo){
							window.scrollTo(0,targetScrollTop + padding);
						}else{
							$("body").animate({
								scrollTop : targetScrollTop + padding
							});
						}

					}
				}
			},
			setImageUrl : function(imageUrl,isThumb){
				var newUrl = "";

				isThumb = isThumb || false;

				if(imageUrl && !isThumb){
					newUrl = imageUrl.replace("thmb/","");
				}

				return newUrl;
			},
			createSelectOptions : function(options,value){
				var i = 0,
					html = "",
					isFirstGroup = true,
					group = null,
					option = null;

				for(i=0;i<options.length; i++){
					option = options[i];
					if(option){
						if(option.group){
							if(group !== option.group){
								if(!isFirstGroup){
									html += "</optgroup>";
								}
								group = option.group;
								html += "<optgroup label=\"" + group + "\">";

								isFirstGroup = false;
							}
						}

						html += "<option value=\"" + option.value + "\"" + ((option.value === value) ? " selected" : "") + ">" + ((option.text) ? option.text : option.value) + "</option>";
					}
				}

				if(group){
					html += "</optgroup>";
				}


				return html;
			},
			sizeImageToFit : function(divWidth,divHeight,imgWidth,imgHeight){
				var img = { width : parseInt(imgWidth), height : parseInt(imgHeight), left: 0, top : 0 }

				if ((img.width > divWidth) && (img.height > divHeight)){
					img.height = (Math.round(img.height / img.width) * divWidth);
					img.width = divWidth;
				}

				if (img.width < divWidth){
					img.height = ((img.height / img.width) * divWidth);
					img.width = divWidth;
				}

				if (img.height < divHeight){
					img.width = ((img.width / img.height) * divHeight);
					img.height = divHeight;
				}

				if (img.width > divWidth) {
					img.left = (Math.round((img.width - divWidth) / 2) * -1);
				}

				if (img.Height > divHeight) {
					img.top = (Math.round((img.height - divHeight) / 2) * -1);
				}

				return img;
			},
			createTemplate : function(templateName,templateSelector,defaultTemplate,callback){
				var $template;
				if($w.templates[templateName]){
					if(callback){
						callback($w.templates[templateName]);
					}
				}else{
					$template = $(templateSelector);

					if($template.length > 0){
						$w.templates[templateName] = _.template($template.html());
						if(callback){
							callback($w.templates[templateName]);
						}
					}else{
						if(defaultTemplate){
							$w.api.templates.get({
								template : defaultTemplate.name
							}, function(data){
								if(data.html){
									$w.templates[templateName] = _.template(data.html);
									if(callback){
										callback($w.templates[templateName]);
									}
								}
							});
						}
					}
				}
			},
			loadScript : function(src){
				var s = $("<script type=\"text/javascript\" src=\"" + src + "\"></script>");
				$("body").append(s);
			},
			setHeader : function(xhr){
				//xhr.setRequestHeader("Access-Control-Allow-Origin","*");
			}
		},
		maps : {
			createMap : function(target,options){
				var map = null;

				if(google && google.maps){
					var mapOptions = $.extend({
							center : new google.maps.LatLng(-34.397, 150.644),
							zoom : 8
						}, options),
						map = null;

					map = new google.maps.Map(target,mapOptions);
				}

				return map;
			},
			createPoint : function(x,y){
				return new google.maps.LatLng(x,y);
			},
			createInfoWindow : function(options){
				return  new google.maps.InfoWindow(options);
			},
			createMarker : function (options){
				return new google.maps.Marker(options);
			},
			addListener: function(obj,event,callback){
				google.maps.event.addListener(obj,event,callback);
			},
			resize : function(target,map){
				map.setCenter(map.getCenter());
			},
			setCenter : function(target,map,center){
				map.setCenter(center);
			},
			getMapInfo : function(target,map){
				var bounds = map.getBounds(),
					northEastBoundary = bounds.getNorthEast(),
					southWestBoundary = bounds.getSouthWest(),
					center = map.getCenter(),
					tilt = map.getTilt(),
					zoom = map.getZoom(),
					mapTypeID = map.getMapTypeId(),
					projection = map.getProjection();

				return {
					minLat : southWestBoundary.lat(),
					maxLat : northEastBoundary.lat(),
					minLon : southWestBoundary.lng(),
					maxLon : northEastBoundary.lng(),
					zoom   : zoom,
					mapType : mapTypeID,
					centerLat : center.lat(),
					centerLon : center.lng()
				};
			}
		},
		facebook : {
			loadWidgets : function(){
				if(window.FB){
					window.FB.XFBML.parse();
				}
			},
		},
		pintrest : {
			reset : function(){
				var f = "PIN_"+~~((new Date).getTime()/864e5);
				window[f] = false;
				$("script[src^='//assets.pinterest.com/js']").remove();
			}
		},
		init : function(){
			var me = this;

			// Dependencies
			if(window.google && window.google.maps){
				this.settings.mapsEnabled = true;
			}

			// include lightbox if not found
			if(!$.lightbox){
				//(function(){var b,d,c;b=jQuery;c=(function(){function b(){this.fadeDuration=500;this.fitImagesInViewport=true;this.resizeDuration=700;this.showImageNumberLabel=true;this.wrapAround=false}b.prototype.albumLabel=function(b,c){return"Image "+b+" of "+c};return b})();d=(function(){function c(b){this.options=b;this.album=[];this.currentImageIndex=void 0;this.init()}c.prototype.init=function(){this.enable();return this.build()};c.prototype.enable=function(){var c=this;return b('body').on('click','a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',function(d){c.start(b(d.currentTarget));return false})};c.prototype.build=function(){var c=this;b("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(b('body'));this.$lightbox=b('#lightbox');this.$overlay=b('#lightboxOverlay');this.$outerContainer=this.$lightbox.find('.lb-outerContainer');this.$container=this.$lightbox.find('.lb-container');this.containerTopPadding=parseInt(this.$container.css('padding-top'),10);this.containerRightPadding=parseInt(this.$container.css('padding-right'),10);this.containerBottomPadding=parseInt(this.$container.css('padding-bottom'),10);this.containerLeftPadding=parseInt(this.$container.css('padding-left'),10);this.$overlay.hide().on('click',function(){c.end();return false});this.$lightbox.hide().on('click',function(d){if(b(d.target).attr('id')==='lightbox'){c.end()}return false});this.$outerContainer.on('click',function(d){if(b(d.target).attr('id')==='lightbox'){c.end()}return false});this.$lightbox.find('.lb-prev').on('click',function(){if(c.currentImageIndex===0){c.changeImage(c.album.length-1)}else{c.changeImage(c.currentImageIndex-1)}return false});this.$lightbox.find('.lb-next').on('click',function(){if(c.currentImageIndex===c.album.length-1){c.changeImage(0)}else{c.changeImage(c.currentImageIndex+1)}return false});return this.$lightbox.find('.lb-loader, .lb-close').on('click',function(){c.end();return false})};c.prototype.start=function(c){var f,e,j,d,g,n,o,k,l,m,p,h,i;b(window).on("resize",this.sizeOverlay);b('select, object, embed').css({visibility:"hidden"});this.$overlay.width(b(document).width()).height(b(document).height()).fadeIn(this.options.fadeDuration);this.album=[];g=0;j=c.attr('data-lightbox');if(j){h=b(c.prop("tagName")+'[data-lightbox="'+j+'"]');for(d=k=0,m=h.length;k<m;d=++k){e=h[d];this.album.push({link:b(e).attr('href'),title:b(e).attr('title')});if(b(e).attr('href')===c.attr('href')){g=d}}}else{if(c.attr('rel')==='lightbox'){this.album.push({link:c.attr('href'),title:c.attr('title')})}else{i=b(c.prop("tagName")+'[rel="'+c.attr('rel')+'"]');for(d=l=0,p=i.length;l<p;d=++l){e=i[d];this.album.push({link:b(e).attr('href'),title:b(e).attr('title')});if(b(e).attr('href')===c.attr('href')){g=d}}}}f=b(window);o=f.scrollTop()+f.height()/10;n=f.scrollLeft();this.$lightbox.css({top:o+'px',left:n+'px'}).fadeIn(this.options.fadeDuration);this.changeImage(g)};c.prototype.changeImage=function(f){var d,c,e=this;this.disableKeyboardNav();d=this.$lightbox.find('.lb-image');this.sizeOverlay();this.$overlay.fadeIn(this.options.fadeDuration);b('.lb-loader').fadeIn('slow');this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();this.$outerContainer.addClass('animating');c=new Image();c.onload=function(){var m,g,h,i,j,k,l;d.attr('src',e.album[f].link);m=b(c);d.width(c.width);d.height(c.height);if(e.options.fitImagesInViewport){l=b(window).width();k=b(window).height();j=l-e.containerLeftPadding-e.containerRightPadding-20;i=k-e.containerTopPadding-e.containerBottomPadding-110;if((c.width>j)||(c.height>i)){if((c.width/j)>(c.height/i)){h=j;g=parseInt(c.height/(c.width/h),10);d.width(h);d.height(g)}else{g=i;h=parseInt(c.width/(c.height/g),10);d.width(h);d.height(g)}}}return e.sizeContainer(d.width(),d.height())};c.src=this.album[f].link;this.currentImageIndex=f};c.prototype.sizeOverlay=function(){return b('#lightboxOverlay').width(b(document).width()).height(b(document).height())};c.prototype.sizeContainer=function(f,g){var b,d,e,h,c=this;h=this.$outerContainer.outerWidth();e=this.$outerContainer.outerHeight();d=f+this.containerLeftPadding+this.containerRightPadding;b=g+this.containerTopPadding+this.containerBottomPadding;this.$outerContainer.animate({width:d,height:b},this.options.resizeDuration,'swing');setTimeout(function(){c.$lightbox.find('.lb-dataContainer').width(d);c.$lightbox.find('.lb-prevLink').height(b);c.$lightbox.find('.lb-nextLink').height(b);c.showImage()},this.options.resizeDuration)};c.prototype.showImage=function(){this.$lightbox.find('.lb-loader').hide();this.$lightbox.find('.lb-image').fadeIn('slow');this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav()};c.prototype.updateNav=function(){this.$lightbox.find('.lb-nav').show();if(this.album.length>1){if(this.options.wrapAround){this.$lightbox.find('.lb-prev, .lb-next').show()}else{if(this.currentImageIndex>0){this.$lightbox.find('.lb-prev').show()}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find('.lb-next').show()}}}};c.prototype.updateDetails=function(){var b=this;if(typeof this.album[this.currentImageIndex].title!=='undefined'&&this.album[this.currentImageIndex].title!==""){this.$lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast')}if(this.album.length>1&&this.options.showImageNumberLabel){this.$lightbox.find('.lb-number').text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn('fast')}else{this.$lightbox.find('.lb-number').hide()}this.$outerContainer.removeClass('animating');this.$lightbox.find('.lb-dataContainer').fadeIn(this.resizeDuration,function(){return b.sizeOverlay()})};c.prototype.preloadNeighboringImages=function(){var c,b;if(this.album.length>this.currentImageIndex+1){c=new Image();c.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){b=new Image();b.src=this.album[this.currentImageIndex-1].link}};c.prototype.enableKeyboardNav=function(){b(document).on('keyup.keyboard',b.proxy(this.keyboardAction,this))};c.prototype.disableKeyboardNav=function(){b(document).off('.keyboard')};c.prototype.keyboardAction=function(g){var d,e,f,c,b;d=27;e=37;f=39;b=g.keyCode;c=String.fromCharCode(b).toLowerCase();if(b===d||c.match(/x|o|c/)){this.end()}else if(c==='p'||b===e){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)}}else if(c==='n'||b===f){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)}}};c.prototype.end=function(){this.disableKeyboardNav();b(window).off("resize",this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);return b('select, object, embed').css({visibility:"visible"})};return c})();b(function(){var e,b;b=new c();return e=new d(b)})}).call(this);
				var script = document.createElement( 'script' );
				script.type = 'text/javascript';
				script.src = '//www.freerentalsite.com/widgets/lightbox.min.js';
				$("body").append( script );
			}

			// Global Templates
			me.util.createTemplate("pagingTemplate","#pagingTemplate",me.defaultTemplates.shared.paging,function(){});
			//.template($("#pagingTemplate").html());

			// events
			$("body").on("click",".frs-btn-back",function(e){
				e.preventDefault();
				window.history.back();
			});

			// router initialization
			me.router.init();

			if(window.FRS_WIDGET_LOADED_FUNC){
				window.FRS_WIDGET_LOADED_FUNC.apply();
			}
			$(window).on("frs-google-maps-loaded",function(){
				var i = 0;
				if(me.queues.googleMaps.length > 0){
					for(i=0;i<me.queues.googleMaps.length;i++){
						me.queues.googleMaps[i].apply();
					}
					me.queues.googleMaps = []; // Reset Queue
				}
			});
			
			$(window).on("frs-mapbox-loaded",function(){
				var i = 0;
				if(me.queues.mapBox.length > 0){
					for(i=0;i<me.queues.mapBox.length;i++){
						me.queues.mapBox[i].apply();
					}
					me.queues.mapBox = []; // Reset Queue
				}
			});
			
			$(window).trigger("frs-widget-init", [ me ]);
		},
		api : {
			properties : {
				adID : null,
				list : function(data,callback){

					if(!data){
						data = {};
					}

					$.ajax({
						url : $w.jsonpEndpoints.propertiesApi,
						type : "get",
						contentType : "application/json",
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				featured : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "featured";

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.propertiesApi,
						dataType : "jsonp",
						contentType : "application/json",
						beforeSend : $w.util.setHeader,
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				newList : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "new";
					if(data.count){
						data.propertyCount = data.count;
						data.count = null;
					}

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				openHouses : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "openHouses";

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				rented : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "rented";

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				view : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "view";

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				alerts : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "notifications";

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				viewAlert : function(data,callback){
					if(!data){
						data = {};
					}

					if(data.id){
						data.tenantNotificationID = data.id;
						data.id = null;
						data.trigger = "viewNotification";
						$.ajax({
							type : "get",
							url : $w.jsonpEndpoints.propertiesApi,
							beforeSend : $w.util.setHeader,
							dataType : "jsonp",
							contentType : "application/json",
							data : data,
							success : function(data){
								if(callback){
									callback(data);
								}
							},
							error : function(e){
							}
						});
					}else{
						callback({
							tenantNotificationID : null,
							email : null,
							dateStamp : null,
							search : null,
							latitude : null,
							longiutde : null,
							countryID : null,
							countryName : null,
							countryCode : null,
							cityID : null,
							cityName : null,
							uodID : null,
							uodName : null,
							distanceFrom : null,
							rentMin : null,
							rentMax : null,
							rentAmountDescription : null,
							beds : null,
							baths : null,
							propertyTypeID : null,
							propetyTypeName : null,
							adTypeID : null,
							adTypeName : null,
							batchCount: 0
						});
					}
				},
				sendLead : function(data,callback)
				{
					if(!data){
						data = {};
					}

					data.trigger = "lead";

					$.ajax({
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						type : "post",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				sendAlert : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "addNotification";
					if(data.tenantNotificationID){
						data.trigger = "editNotification";
					}


					$.ajax({
						url : $w.jsonpEndpoints.propertiesApi,
						beforeSend : $w.util.setHeader,
						type : "post",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				deleteAlert : function(data,callback){
					if(!data){
						data = {};
					}
					if(data.id){
						data.tenantNotificationID = data.id;
						data.id = null;
						data.trigger = "deleteNotification";

						$.ajax({
							url : $w.jsonpEndpoints.propertiesApi,
							beforeSend : $w.util.setHeader,
							type : "post",
							dataType : "jsonp",
							contentType : "application/json",
							data : data,
							success : function(data){
								if(callback){
									callback(data);
								}
							},
							error : function(e){
							}
						});
					}
				},
				searchMap : function(data,callback){
					if(!data){
						data = {};
					}

					$.ajax({
						url  : $w.jsonpEndpoints.mapApi,
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				}
			},
			marketing : {
				step1 : function(data,callback){
					if(!data){
						data = {};
					}
					
					$.ajax({
						url  : $w.jsonpEndpoints.marketingApi + "?trigger=step1",
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				step2 : function(data,callback){
					if(!data){
						data = {};
					}
					
					$.ajax({
						url  : $w.jsonpEndpoints.marketingApi + "?trigger=step2",
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				number : function(data,callback){
					if(!data){
						data = {};
					}
					
					$.ajax({
						url  : $w.jsonpEndpoints.marketingApi + "?trigger=number",
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				}
			},
			geo : {
				cities : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "cities";

					$.ajax({
						url  : $w.jsonpEndpoints.geoApi,
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				states : function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "states";

					$.ajax({
						url  : $w.jsonpEndpoints.geoApi,
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				}
			},
			forms : {
				view : function(data,callback){
					if(!data){
						data = {};
					}
					data.trigger = "view";
					
					if(!data.profileID){
						data.profileID = profileID;
					}

					$.ajax({
						type : "get",
						url : $w.jsonpEndpoints.formsApi,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				submit : function(formID, data, overrideProfileID, callback, hasFile){
					var processData = true,
						pID = null;

					hasFile = hasFile || false;

					if(!data){
						data = {};
					}

					if(hasFile)
					{
						processData = false;
					}
					
					if(overrideProfileID){
						pID = overrideProfileID;
					}else{
						pID = profileID;
					}

					$.ajax({
						type : "GET",
						url : $w.jsonpEndpoints.formsApi + "?profileID=" + pID + "&trigger=submit&commit=true&formID=" + formID,
						beforeSend : $w.util.setHeader,
						dataType : "jsonp",
						contentType : processData ? "application/x-www-form-urlencoded; charset=UTF-8" : false,
						data : data,
						processData: processData,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
							if(console && console.error){
								console.error("FRS Widget error: Form Submission Failed");
							}
						}
					});

				}
			},
			templates : {
				get : function(data,callback){
					if(!data){
						data = {};
					}

					$.ajax({
						url  : $w.jsonpEndpoints.templateApi,
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				}
			},
			profiles: {
				list : function(data,callback){
					if(!data){
						data = {};
					}

					$.ajax({
						url  : $w.jsonpEndpoints.profilesApi,
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				view: function(data,callback){
					if(!data){
						data = {};
					}

					$.ajax({
						url  : $w.jsonpEndpoints.profilesApi,
						beforeSend : $w.util.setHeader,
						type : "get",
						dataType : "jsonp",
						contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				},
				sendLead: function(data,callback){
					if(!data){
						data = {};
					}

					data.trigger = "lead";

					$.ajax({
						url  : $w.jsonpEndpoints.profilesApi,
						beforeSend : $w.util.setHeader,
						type : "post",
						dataType : "jsonp",
						//contentType : "application/json",
						data : data,
						success : function(data){
							if(callback){
								callback(data);
							}
						},
						error : function(e){
						}
					});
				}
			},
			data : {
				beds : function(data,callback){
					var beds = [
						{ value : "", text : "" },
						{ value : "0", text : "0+" },
						{ value : "1", text : "1+" },
						{ value : "2", text : "2+" },
						{ value : "3", text : "3+" },
						{ value : "4", text : "4+" },
						{ value : "5", text : "5+" },
						{ value : "6", text : "6+" },
						{ value : "7", text : "7+" },
						{ value : "8", text : "8+" },
						{ value : "9", text : "9+" },
						{ value : "10", text : "10+" }
					];
					callback(beds);
				},
				baths : function(data,callback){
					var baths = [
						{ value : "", text: "" },
						{ value : "0", text: "0+" },
						{ value : "0.5", text: "0.5+" },
						{ value : "1", text: "1+" },
						{ value : "1.5", text: "1.5+" },
						{ value : "2", text: "2+" },
						{ value : "2.5", text: "2.5+" },
						{ value : "3", text: "3+" },
						{ value : "3.5", text: "3.5+" },
						{ value : "4", text: "4+" },
						{ value : "4.5", text: "4.5+" },
						{ value : "5", text: "5+" },
						{ value : "5.5", text: "5.5+" },
						{ value : "6", text: "6+" },
						{ value : "6.5", text: "6.5+" },
						{ value : "7", text: "7+" },
						{ value : "7.5", text: "7.5+" },
						{ value : "8", text: "8+" },
						{ value : "8.5", text: "8.5+" },
						{ value : "9", text: "9+" },
						{ value : "9.5", text: "9.5+" },
						{ value : "10", text : "10+" }
					];
					callback(baths);
				},
				pets : function(data,callback){
					var pets = [
						{ value : "", text : "Select One......" },
						{ value : "", text : "--------------------" },
						{ value : "1", text : "Dogs Allowed"  },
						{ value : "2", text : "Cats Allowed" },
						{ value : "3", text : "Dogs &amp; Cats Allowed"},
						{ value : "4", text : "No Pets Allowed" }
					];
					callback(pets);
				},
				sorts : function(data,callback){
					var sorts = [
						{ value : "", text : "Closest to Search", group : "Proximity"},
						{ value : "date|desc", text : "Date Posted (new - old)", group : "Date Posted" },
						{ value : "date", text : "Date Posted (old - new)", group : "Date Posted"  },
						{ value : "amount", text : "Price (low - high)", group : "Price" },
						{ value : "amount|desc", text : "Price (high - low)", group : "Price"},
						{ value : "beds", text : "Beds (low - high)", group : "Beds" },
						{ value : "beds|desc", text : "Beds (high - low)", group : "Beds"},
						{ value : "baths", text : "Baths (low - high)", group : "Baths" },
						{ value : "baths|desc", text : "Baths (high - low)", group : "Baths"},
						{ value : "area", text : "SqFt (low - high)", group : "Area (Sq.Ft.)" },
						{ value : "area|desc", text : "SqFt (high - low)", group : "Area (Sq.Ft.)"},
						{ value : "availabilityDate", text: "Availability (sooner - later)", group : "Availability Date" },
						{ value : "availabilityDate|desc", text: "Availability (later - sooner)", group : "Availability Date" } 
					];
					callback(sorts);
				},
				propertyTypes : function(data,callback){
					var propertyTypes = [
						{ value : "", text : "Any", segmentID : null },
						{ value : "1", text : "Single Family House", segmentID : "1" },
						{ value : "2", text : "Townhouse", segmentID : "1" },
						{ value : "3", text : "Condo", segmentID : "1" },
						{ value : "4", text : "Apartment", segmentID : "1" },
						{ value : "5", text : "Loft", segmentID : "1" },
						{ value : "6", text : "Multiplex", segmentID : "1" },
						{ value : "7", text : "Industrial", segmentID : "2" },
						{ value : "8", text : "Office", segmentID : "2" },
						{ value : "9", text : "Retail", segmentID : "2" },
						{ value : "10", text : "Medical", segmentID : "2" },
						{ value : "11", text : "Warehouse", segmentID : "2" },
						{ value : "12", text : "Single Family House", segmentID : "3" },
						{ value : "13", text : "Townhouse", segmentID : "3" },
						{ value : "14", text : "Condo", segmentID : "3" },
						{ value : "15", text : "Apartment", segmentID : "3" },
						{ value : "16", text : "Loft", segmentID : "3" },
						{ value : "17", text : "Multiplex", segmentID : "3" },
						{ value : "18", text : "Land", segmentID : "3" },
						{ value : "19", text : "Mobile Home", segmentID : "3" },
						{ value : "20", text : "Single Family House", segmentID : "4" },
						{ value : "21", text : "Townhouse", segmentID : "4" },
						{ value : "22", text : "Condo", segmentID : "4" },
						{ value : "23", text : "Bungalow", segmentID : "4" },
						{ value : "24", text : "Loft", segmentID : "4" },
						{ value : "25", text : "Cottage", segmentID : "4" },
						{ value : "26", text : "Cabin", segmentID : "4" },
						{ value : "27", text : "Hotel", segmentID : "4" },
						{ value : "28", text : "Bed & Breakfast", segmentID : "4" },
						{ value : "29", text : "Land", segmentID : "2" },
						{ value : "30", text : "Mobile Home", segmentID : "1" },
						{ value : "31", text : "Other", segmentID : "1" },
						{ value : "32", text : "Duplex", segmentID : "1" },
						{ value : "33", text : "Duplex", segmentID : "3" },
						{ value : "34", text : "Duplex", segmentID : "4" },
						{ value : "35", text : "Villa", segmentID : "4" },
						{ value : "36", text : "RV Park", segmentID : "2" },
						{ value : "37", text : "Mini Storage", segmentID : "2" },
						{ value : "38", text : "Mobile Home", segmentID : "2" },
						{ value : "39", text : "Corporate Housing", segmentID : "1" }
					],
					result = [],
					i = 0,
					propertyType;

					if(data && data.segmentID)
					{
						if(parseInt(data.segmentID) > 0)
						{
							for(i=0;i<propertyTypes.length;i++)
							{
								propertyType = propertyTypes[i];
								if((propertyType.segmentID === data.segmentID) ||(!propertyType.segmentID)){
									result.push(propertyType);
								}
							}
						}
					}
					else
					{
						result = propertyTypes;
					}
					callback(result);
				}
			}
		},
		dropDownOptions : {
			data : {
				beds : null,
				baths : null,
				pets : null,
				sorts : null,
				propertyTypes : null
			},
			beds : function(){
				if(!this.data.beds){
					this.data.beds = this.getBeds();
				}
				return this.data.beds;
			},
			baths : function(){
				if(!this.data.baths){
					this.data.baths = this.getBaths();
				}
				return this.data.baths;
			},
			pets : function(){
				if(!this.data.pets){
					this.data.pets = this.getPets();
				}
				return this.data.pets;
			},
			sorts : function(){
				if(!this.data.sorts){
					this.data.sorts = this.getSorts();
				}
				return this.data.sorts;
			},
			propertyTypes : function(data){
				if(!this.data.propertyTypes){
					this.data.propertyTypes = this.getPropertyTypes(data);
				}
				return this.data.propertyTypes;
			},
			getBeds : function(){
				var beds = [];

				$w.api.data.beds({},function(data){
					beds = data;
				});
				return beds;
			},
			getBaths : function(){
				var baths = [];

				$w.api.data.baths({},function(data){
					baths = data;
				});
				return baths;
			},
			getPets : function(){
				var pets = [];
				$w.api.data.pets({},function(data){
					pets = data;
				});
				return pets;
			},
			getSorts : function(){
				var sorts = [];
				$w.api.data.sorts({},function(data){
					sorts = data;
				});
				return sorts;
			},
			getPropertyTypes : function(data){
				var propertyTypes = [];
				$w.api.data.propertyTypes(data,function(data){
					propertyTypes = data;
				});
				return propertyTypes;
			}
		},
		router : {
			ignoreHashChange : false,
			init : function(){
				var me = this;
				$(window).on('hashchange', function(e) {
					me.onHashChange(e);
				});
			},
			onHashChange : function(event){
				if(!this.ignoreHashChange){
					$(window).trigger("routeChange");
				}else{
					this.ignoreHashChange = false;
				}
			},
			getHash : function(){
				return window.location.hash;
			},
			getQueryString : function(){
				return window.location.search;
			},
			setHash : function(route){
				this.ignoreHashChange = true;
				window.location.hash = route;
			},
			checkRoute : function(pattern,options){
				var func = null;

				if(pattern.substring(0,3) === "^\\?"){
					func = this.isQueryString;
				}else{
					func = this.isHash;
				}

				return func(pattern,options);
			},
			isRoute : function(route,pattern,options){
				var regex = pattern;

				if(typeof pattern === "string"){
					regex = new RegExp(pattern,options);
				}

				return regex.test(route);
			},
			isHash: function(pattern,options){
				return $w.router.isRoute(window.location.hash,pattern,options);
			},
			isQueryString : function(pattern,options){
				return $w.router.isRoute(window.location.search,pattern,options);
			}
		}
	};

	// Base Widget
	function Widget(propName){
		var me = this;
		this.uuid = new Date().getTime();
		this.propName = propName || "frsWidget";
		this.settings = {};
		this._tryAttach = function(target,settings){
			var isAttached = false;
			if(!$.data(target,this.propName)){
				this._attach(target,settings);
				isAttached = true;
			}

			return isAttached;
		};
		this._attach = function(target,settings){
			var inst = null;

			if(!target.id){
				this.uuid += 1;
				target.id = "frsWidget" + me.uuid;
			}

			inst = this._newInst(target);

			inst.settings = $.extend(this.settings || {}, settings || {});


			this._connect(target,inst);
		};
		this._newInst = function(target){
			var id = target.id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
				inst = this._createInst(target,id);
			return inst;
		};
		this._createInst = function(target,id){
			return { id : id, element : target };
		};
		this._connect = function(target,inst){
			var element = $(target);
			$.data(target, me.propName, inst);

			this._init(target,inst);
		};
		this._getInst = function(target){
			var inst = null;
			try{
				inst = $.data(target,me.propName);
			}catch(err){
				throw "Missing instance data for dropdown";
			}
			return inst;
		};
		this._get = function(inst, name){
			return $(inst.element).data(name) || inst.settings[name] || false;
		};
		this._getOption = function(element, inst, option){
			var element = element.target || element || inst.element,
				inst = inst || me._getInst(element);

			return me._get(inst, option);
		};
		this._setOption = function(element, inst, option, value){
			var element = element.target || element || inst.element,
				inst = inst || $.dropFile._getInst(element);

			return inst.settings[option] = value;
		};
		this._init = function(target,inst){

		};
	};

	// Toggler Widget
	function Toggler(){
		var me = this;
		this._init = function(target,inst){
			var me = this;

			$(target).click(function(e){
				e.preventDefault();

				me._onClick(target,inst);
			});
		};
		this._onClick = function(target,inst){
			var $toggle = null,
				toggle = false,
				focus = false;
			inst = inst || this._getInst(target);
			toggle = this._get(inst,"toggle") || false;
			focus = this._get(inst,"focus") || false;

			if(toggle){
				$toggle = $(toggle);
				$toggle.toggle("slow",function(){
					if(focus && $toggle.is(":visible")){
						$(focus,$toggle).focus();
					}
				});


			}
		};
	};
	Toggler.prototype = new Widget("frsTabs");
	$w.togglerWidget = new Toggler();
	$w.togglerWidget.initialized = false;
	$w.togglerWidget.uuid = new Date().getTime();

	//Typeahead
	function Typeahead(){
		var me = this,
			typeaheadHtml = "<ul class=\"frs-typeahead\"></ul>",
			typeaheadItemHtml = "<li><a href=\"#\">{text}</a></li>";
		this._curInst = null;
		this.moveOptions = {
			PREV : 0,
			NEXT : 1
		};
		this.settings = {
			length : 2,
			items : 8,
			source : false,
			dataType : "jsonp",
			parseList : false,
			parseItem : false,
			tab : true,
			value : false,
			cache : true,
			parameter : "search",
			itemText : "text",
			itemValue : "value"
		};
		this._createInst = function(target,id){
			return {
				id : id,
				element : target,
				typeahead : $(typeaheadHtml),
				inBody : false,
				visible : false,
				updateTimeout : false,
				term : false,
			};
		};
		this._init = function(target,inst){
			$(target).
				attr("autocomplete","off").
				keydown(function(e){
					me._doKeyDown(target,inst,e);
				}).
				keyup(function(e){
					me._doKeyUp(target,inst,e);
				}).
				blur(function(e){
					me._doBlur(target,inst,e);
				}).
				on("itemSelected",function(e){
					me._doItemSelected(target,inst,e);
				});
		};
		this._doKeyDown = function(target,inst,e){
			var preventDefault = false;

			switch(e.keyCode){
				case $w.keyCodes.Tab :
					if(inst.visible){
						this._setSelected(target,inst);
					}
					break;
				case $w.keyCodes.Enter :
					preventDefault = true;
					break;
				case $w.keyCodes.Escape :
					break;
				case $w.keyCodes.UpArrow :
					if(inst.visible){
						me._moveOption(target,inst,me.moveOptions.PREV);
					}
					preventDefault = true;
					break;
				case $w.keyCodes.DownArrow :
					if(inst.visible){
						me._moveOption(target,inst,me.moveOptions.NEXT);
					}
					preventDefault = true;
					break;
				case $w.keyCodes.LeftArrow :
				case $w.keyCodes.RightArrow :
					break;
				default :
					me._clearValue(target,inst);
					break;
			}

			if(preventDefault){
				e.preventDefault();
			}
		};
		this._doKeyUp = function(target,inst,e){
			var preventDefault = false;

			switch(e.keyCode){
				case $w.keyCodes.Enter :
					if(inst.visible){
						me._setSelected(target,inst);
					}
					preventDefault = true;
					break;
				default :
					if(inst.updateTimeout){
						clearTimeout(inst.updateTimeout);
					}

					inst.updateTimeout = setTimeout(function(){
						var term = $(target).val() || false;
						if((term) && (inst.term !== term)){
							inst.term = term;
							me._updateTypeahead(target,inst);
						}
					}, 300);
					break;
			}

			if(preventDefault){
				e.preventDefault();
			}
		};
		this._doBlur = function(target,inst,e){
			setTimeout(function() {
				me._hide(target,inst);
			}, 200);
		};
		this._doItemSelected = function(target,inst,e){
			me._setSelected(target,inst);
		};
		this._doMouseEnter = function(target,inst,e){
			me._setActive(target,inst,e.target);
		};
		this._doClick = function(target,inst,e){
			e.preventDefault();
			me._setActive(target,inst,e.target);
			me._setSelected(target,inst);
		};
		this._setActive = function(target,inst,link){
			var $li = $(link).parent();

			if(!$li.hasClass("active")){
				$("li.active",inst.typeahead).removeClass("active");
				$li.addClass("active");
			}
		};
		this._setSelected = function(target,inst){
			var	$activeItem = $("li.active",inst.typeahead),
				text = $activeItem.text(),
				value = $activeItem.data("value"),
				data = $activeItem.data("typeaheadData"),
				selected = this._get(inst,"selected") || false,
				valueSelector = this._get(inst,"value") || false;

			$(target).val(text);

			if(valueSelector){
				$(valueSelector).val(value);
			}

			this._hide(target,inst);

			if(selected){
				selected(target,data);
			}
		};
		this._clearValue = function(target,inst){
			var valueSelector = this._get(inst,"value") || false;

			if(valueSelector){
				$(valueSelector).val("");
			}

		};
		this._moveOption = function(target,inst,direction){
			var $nextOption = null,
				nextSelector = null,
				$activeItem = $("li.active", inst.typeahead);

			switch(direction){
				case this.moveOptions.NEXT :
					$nextOption = $activeItem.next();
					nextSelector = "first";
					break;
				case this.moveOptions.PREV :
					$nextOption = $activeItem.prev();
					nextSelector = "last"
					break;
			}

			if($nextOption.length === 0){
				$nextOption = $activeItem.siblings(":" + nextSelector);
			}

			if($nextOption.length > 0){
				$activeItem.removeClass("active");
				$nextOption.addClass("active");
			}
		};
		this._show = function(target,inst){
			var offset;

			if(this._curInst && this._curInst !== inst){
				this._curInst.typeahead.stop(true, true);
				if(inst && this._curInst.visible){
					this._hide(this._curInst.element,this._curInst);
				}
			}

			offset = $(target).offset();
			offset.top  += target.offsetHeight;

			inst.typeahead.css({ left : offset.left, top : offset.top });
			inst.typeahead.show();
			inst.visible = true;
		};
		this._hide = function(target,inst){
			if(inst.visible){
				$(inst.typeahead).hide();
			}

			inst.visible = false;
		};
		this._updateTypeahead = function(target,inst){
			var source = this._get(inst,"source") || false,
				dataType = this._get(inst,"dataType") || false,
				data = this._get(inst,"data") || {},
				length = this._get(inst,"length"),
				filterFunction = this._get(inst,"filterFunction") || false,
				parameter = this._get(inst,"parameter") || "search",
				async = this._get(inst,"async") || true,
				cache = this._get(inst,"cache") || true;
			if(inst.term){
				if(inst.term.length >= length){
					if(source){
						if(source instanceof Array){
						}else if (typeof source === "function"){
						}else{
							data[parameter] = inst.term;

							$.ajax(source, {
								async : async,
								cache : cache,
								dataType : dataType,
								data : data,
								success : function(data,status,jqXHR){
									var parseList = me._get(inst,"parseList") || false,
										items = data;

									if(parseList){
										items = parseList(data);
									}

									if(!items){
										items = [];
									}

									me._fillItems(target,inst,items);
								}
							});
						}
					}
				}else{
					this._hide(target,inst);
				}
			} else {
				this._hide(target,inst);
			}
		};
		this._fillItems = function(target,inst,items){
			var i = 0,
				item = null,
				itemTextField = null,
				itemValueField = null,
				text = null,
				value = null,
				$item = null,
				parseItem = null,
				options = [];

			if(items.length > 0){
				parseItem = this._get(inst,"parseItem") || false;
				itemTextField = this._get(inst,"itemText") || "text";
				itemValueField = this._get(inst,"itemValue") || "value";

				for(i=0;i<items.length;i++){
					item = items[i];
					if(typeof(item) === "object"){

						if(parseItem){
							item = parseItem(item);
						}

						text = item[itemTextField];
						value = item[itemValueField];
					}else{
						text = value = items[i];
					}

					$item = $(typeaheadItemHtml.replace(/{text}/g,text));
					$item.data("value",value).data("typeaheadData",item);
					options.push($item);
				}

				if(!inst.inBody){
					$("body").append(inst.typeahead);
					inst.inBody = true;

					inst.typeahead.on("mouseenter","li a",function(e){
						me._doMouseEnter(target,inst,e);
					}).on("click","li a",function(e){
						me._doClick(target,inst,e);
					});
				}
				$(inst.typeahead).empty();
				for(i=0;i<options.length;i++){
					$(inst.typeahead).append(options[i]);
				}
				$(inst.typeahead).children("li").first().addClass("active");
				this._show(target,inst);
			}else{
				$(inst.typeahead).empty();
				this._hide(target,inst);
			}
		};
	};
	Typeahead.prototype = new Widget("frsTypeahead");
	$w.typeaheadWidget = new Typeahead();
	$w.typeaheadWidget.initialized = false;
	$w.typeaheadWidget.uuid = new Date().getTime();

	// Tabs Widget
	function Tabs(){
		var me = this;
		this._init = function(target,inst){
			var me = this;

			$(target).on("click",".frs-tab-link",function(e){
				e.preventDefault();
				me._onTabClick(target,inst,this);
			});
		};
		this._onTabClick = function(target,inst,tab){
			var tabPanelSelector = $(tab).data("tab"),
				$tabPanel = (tabPanelSelector) ? $(tabPanelSelector,target) : false;

			inst = inst || this._getInst(target);

			if($tabPanel){
				$(".frs-tab-link.active",target).removeClass("active");
				$(tab).addClass("active");

				$(".frs-tab-panel.active",target).removeClass("active");
				$tabPanel.addClass("active");
			}
		};
	};
	Tabs.prototype = new Widget("frsTabs");
	$w.tabsWidget = new Tabs();
	$w.tabsWidget.initialized = false;
	$w.tabsWidget.uuid = new Date().getTime();

	// Rotator Widget
	function Rotator(){
		this._init = function(target,inst){
			var state = this._get(inst,"state") || "start";

			if(state === "start"){
				this._start(target,inst);
			}
		};
		this._start = function(target,inst){
			var me = this,
				timeout = this._get(inst,"timeout") || 5000;

			inst.timeout = setTimeout(function(){
				me._rotate(target,inst);
			},timeout);
		};
		this._stop = function(target,inst){
			var me = this;

			inst = inst || this._getInst(target);

			if(inst.timeout){
				clearTimeout(inst.timeout);
			}
		};
		this._rotate = function(target,inst){
			var me = this,
				$target = $(target),
				$children = $target.children(),
				$currentItems = $children.filter(".active"),
				currentItem = null,
				$nextItems = null,
				nextItem = null;

			if($children.length > 0){
				if($currentItems.length > 0){
					currentItem = $currentItems[0];
				}else{
					$currentItems = $target.children();
					currentItem = $currentItems[0];
				}

				if(currentItem){
					$nextItems = $(currentItem).next();

					if($nextItems.length > 0){
						nextItem = $nextItems[0];
					}else{
						nextItem = $children[0];
					}

					if(nextItem && (currentItem != nextItem)){
						$(currentItem).removeClass("active").fadeOut(1000);

						$(nextItem).addClass("active").fadeIn(1000,function(){
							me._start(target,inst);
						});
					}
				}
			}
		};
	};
	Rotator.prototype = new Widget("frsRotator");
	$w.rotatorWidget = new Rotator();
	$w.rotatorWidget.initialized = false;
	$w.rotatorWidget.uuid = new Date().getTime();

	// Map Widget
	function Map() {
		var me = this;
		this._init = function(target,inst){
			$w.waitFor.googleMaps(function(){
				var $target = $(target),
					lat = me._get(inst,"lat") || false,
					lng = me._get(inst,"lng") || false,
					zoom = me._get(inst,"zoom") || false,
					markCenter = me._get(inst,"markCenter") || false,
					centerInfo = me._get(inst,"centerInfo") || false,
					doSearch = me._get(inst,"doSearch") || false,
					getMarkers = me._get(inst,"getMarkers") || false,
					options = {};

				inst.mapLoaded = false;

				if(zoom){
					options.zoom = zoom;
				}

				if(lat && lng){
					inst.center = options.center = $w.maps.createPoint(lat,lng);
				}

				inst.width = $(target).width();
				inst.height = $(target).height();

				inst.map = $w.maps.createMap(target, options);

				if(inst.map){
					inst.markers = [];
					inst.centerMarker = null;
					inst.infoWindow = null;
					inst.ignorePanZoom = false;

					if(markCenter){
						inst.centerMarker = $w.maps.createMarker({
							position : options.center,
							map : inst.map
						});

						if(centerInfo){
							inst.centerMarker.infoWindowContent = $(centerInfo).html();
							me._attachMarkerInfoWindow(target,inst,inst.centerMarker);
						}
					}

					if(getMarkers){
						$w.maps.addListener(inst.map,"idle",function(){
							if(!inst.mapLoaded){
								inst.mapLoaded = true;
								me._showMarkers(target,inst);
							}
							if(inst.ignorePanZoom){
								inst.ignorePanZoom = false;
							}else{
								me._showMarkers(target,inst);
							}
						});
					}
				}

				$(window).resize(function(e){
					me._doResize(target,inst,e);
				});
			});
		};
		this._doResize = function(target,inst,e){
			var width = $(target).width(),
				height = $(target).height();

			if((inst.width !== width) || (inst.height !== height)){
				$w.maps.setCenter(target,inst.map,inst.center);
			}
		};
		this._showMarkers = function(target,inst){
			var i = 0,
				getData = this._get(inst, "getData") || false,
				getMarkers = this._get(inst,"getMarkers") || false,
				infoWindowTemplate = null,
				markers = [],
				result = null,
				marker = null,
				data = {};

			if(getMarkers){
				if(getData){
					data = getData(target);
				}
				$.extend(data,$w.maps.getMapInfo(target,inst.map) || {});

				getMarkers(data,function(markers){
					var i = 0,
						results = data.results,
						markerOptions = null,
						marker =  null;

					for(i=0;i<markers.length;i++){
						marker = markers[i];
						marker.setMap(inst.map);
						inst.markers.push(marker);

						me._attachMarkerInfoWindow(target,inst,marker);
					}
				});
			}
		};
		this._attachMarkerInfoWindow = function(target,inst,marker){
			$w.maps.addListener(marker,"click",function(){
				me._showMarkerInfoWindow(target,inst,marker);
			});
		},
		this._showMarkerInfoWindow = function(target,inst,marker){
			inst = inst || this._getInst(target);

			if(marker.infoWindowContent){
				if(!inst.infoWindow){
					inst.infoWindow = $w.maps.createInfoWindow();
				}

				inst.infoWindow.setContent(marker.infoWindowContent);
				inst.infoWindow.open(inst.map,marker);
			}
		};
	};
	Map.prototype = new Widget("frsMap");
	$w.mapWidget = new Map();
	$w.mapWidget.initialized = false;
	$w.mapWidget.uuid = new Date().getTime();
	
	// MapBox Widget
	function MapBox() {
		var me = this;
		this._init = function(target,inst){
			$w.waitFor.mapBox(function(){
				mapboxgl.accessToken = 'pk.eyJ1Ijoia29odmEiLCJhIjoiY2prbDlsNXhuMXl6YzNxbnhtY2w0NzB3bSJ9.jpQllFfzX4I6lT3VF6ZByQ';
				var $target = $(target),
					lat = me._get(inst,"lat") || false,
					lng = me._get(inst,"lng") || false,
					zoom = me._get(inst,"zoom") || 10,
					markCenter = me._get(inst,"markCenter") || false,
					centerInfo = me._get(inst,"centerInfo") || false,
					doSearch = me._get(inst,"doSearch") || false,
					getMarkers = me._get(inst,"getMarkers") || false,
					options = {};

				inst.mapLoaded = false;

				if(zoom){
					options.zoom = zoom;
				}

				if(lat && lng){
					inst.center = options.center = [lng, lat];
				}

				inst.width = $(target).width();
				inst.height = $(target).height();

				inst.map = new mapboxgl.Map({
					container : target,
					style : 'mapbox://styles/mapbox/streets-v9',
					center : options.center,
					zoom : options.zoom
				});
				
				inst.map.addControl(new mapboxgl.NavigationControl());
				
				if(inst.map){
					inst.markers = [];
					inst.centerMarker = null;
					inst.infoWindow = null;
					inst.ignorePanZoom = false;
	
					if(markCenter){
						inst.centerMarker = new mapboxgl.Marker()
							.setLngLat(options.center)
							.addTo(inst.map);

						if(centerInfo){
							inst.centerPopup = new mapboxgl.Popup({ closeOnClick : false })
								.setHTML($(centerInfo).html());
							inst.centerMarker.setPopup(inst.centerPopup);
						}
					}

					if(getMarkers){
						inst.map.on('load', function(e){
							if(!inst.mapLoaded){
								inst.mapLoaded = true;
								me._showMarkers(target, inst);
							}
							if(inst.ignorePanZoom){
								inst.ignorePanZoom = false;
							}else{
								me._showMarkers(target, inst);
							}
						});
						inst.map.on('moveend', function(e){
							if(inst.ignorePanZoom){
								inst.ignorePanZoom = false;
							}else{
								me._showMarkers(target, inst);
							}
						});
					}
				}

				$(window).resize(function(e){
					me._doResize(target,inst,e);
				});
			});
		};
		this._doResize = function(target,inst,e){
			var width = $(target).width(),
				height = $(target).height();

			if((inst.width !== width) || (inst.height !== height)){
				inst.map.setCenter(inst.center);
				inst.map.resize();
			}
		};
		this._showMarkers = function(target,inst){
			var i = 0,
				getData = this._get(inst, "getData") || false,
				getMarkers = this._get(inst,"getMarkers") || false,
				infoWindowTemplate = null,
				markers = [],
				result = null,
				marker = null,
				data = {};

			if(getMarkers){
				if(getData){
					data = getData(target);
				}
				
				var bounds = inst.map.getBounds(),
					northEastBoundary = bounds.getNorthEast(),
					southWestBoundary = bounds.getSouthWest(),
					center = inst.map.getCenter(),
					zoom = inst.map.getZoom();


				var filterBounds = {
					minLat : southWestBoundary.lat,
					maxLat : northEastBoundary.lat,
					minLon : southWestBoundary.lng,
					maxLon : northEastBoundary.lng,
					zoom   : zoom,
					centerLat : center.lat,
					centerLon : center.lng
				};
				
				$.extend(data,filterBounds);
	
				getMarkers(data,function(markers){
					var i = 0,
						results = data.results,
						markerOptions = null,
						marker =  null;
						
					if(inst.markers && inst.markers.length){
						for(i=0;i<inst.markers.length;i++){
							marker = inst.markers[i];
							marker.remove();
						}
					}
					
					for(i=0;i<markers.length;i++){
						marker = markers[i];
						marker.addTo(inst.map);
						inst.markers.push(marker);
					}
				});
			}
		};
		this._attachMarkerInfoWindow = function(target,inst,marker){
			/*
			$w.maps.addListener(marker,"click",function(){
				me._showMarkerInfoWindow(target,inst,marker);
			});
			*/
		},
		this._showMarkerInfoWindow = function(target,inst,marker){
			/*
			inst = inst || this._getInst(target);

			if(marker.infoWindowContent){
				if(!inst.infoWindow){
					inst.infoWindow = $w.maps.createInfoWindow();
				}

				inst.infoWindow.setContent(marker.infoWindowContent);
				inst.infoWindow.open(inst.map,marker);
			}
			*/
		};
	};
	MapBox.prototype = new Widget("frs-map-box");
	$w.mapBoxWidget = new MapBox();
	$w.mapBoxWidget.initialized = false;
	$w.mapBoxWidget.uuid = new Date().getTime();

	function Routable(){
		var me = this;
		this.routes = [];
		this.modes = {};
		this._findRoute = function(target,inst){
			var routeFound = false,
				i = 0,
				mode = null,
				route = null,
				data = {};

			inst = inst || this._getInst(target);

			while((!routeFound) && (i < this.routes.length)){
				route = this.routes[i];

				if($w.router.checkRoute(route.pattern)){
					routeFound = true;
					mode = route.mode;
					data = route.parseData();
					inst.doHashUpdate = false;
				}

				i++;
			}

			return  (routeFound) ? { mode : mode, data : data } : null;
		};
		this._setRoute = function(target,inst,route){
			inst = inst || this._getInst(target);

			if(inst.doHashUpdate){
				$w.router.setHash(route);
			}else{
				inst.doHashUpdate = true;
			}
		};
	};
	Routable.prototype = new Widget("frsRoutable");
	$w.routableWidget = new Routable();
	$w.routableWidget.initialized = false;
	$w.routableWidget.uuid = new Date().getTime();

	function Templatable(){
		var me = this,
			$template = null;
		this._showTemplateOrFunction = function(target,inst,prefix,templateName,defaultTemplate,data,callback){
				var html = "",
					renderFunction = me._get(inst,prefix+"Function") || false,
					renderTemplate = me._get(inst,prefix+"Template") || false;

			if(renderFunction){
					renderFunction(data,callback);
			}else{
				$w.util.createTemplate(templateName,renderTemplate,defaultTemplate,function(templateFunc){
					html = templateFunc(data);

					$(target).empty();
					$(target).append(html);

					if(!inst.isFirst){
						$w.util.scrollTop(target);
					}else{
						inst.isFirst = false;
					}

					if(callback){
						callback();
					}
				});
			}
		};
	};
	Templatable.prototype = new Widget("frsRoutable");
	$w.templatableWidget = new Templatable();
	$w.templatableWidget.initialized = false;
	$w.templatableWidget.uuid = new Date().getTime();


	// Properties Widget
	function Properties() {
		var me = this;
		this.modes = {
			NONE : 0,
			LIST : 1,
			VIEW : 2,
			SUBSCRIBE : 3,
			MANAGE_SUBSCRIPTIONS : 4,
			MAP : 5,
			UNSUBSCRIBE : 6
		};
		this.modeMap = {
			map : this.modes.MAP,
			list : this.modes.LIST,
			view : this.modes.VIEW,
			subscribe : this.modes.SUBSCRIBE,
			manage : this.modes.MANAGE_SUBSCRIPTIONS,
			unsubscribe : this.modes.UNSUBSCRIBE
		};
		this.routes = [
			{ pattern : "^#\\?[.]*$", mode : this.modes.LIST, parseData : function(){
				var qs = $w.router.getHash().slice(1);
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^#properties/map($|\\?[.]*)", mode : this.modes.MAP, parseData : function(){
				var qs = $w.router.getHash().slice(1).replace("properties/map","");
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^#properties($|\\?[.]*)", mode : this.modes.LIST, parseData : function(){
				var qs = $w.router.getHash().slice(1).replace("properties","");
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^#ad/[0-9]+($|\\?[.]*)", mode : this.modes.VIEW, parseData : function(){
				var adID = $w.router.getHash().replace("#ad/",""),
					data = { adID : parseInt(adID) };
				return data;
			}},
			{ pattern : "^#subscribe($|\\?[.]*)", mode : this.modes.SUBSCRIBE, parseData : function(){
				var qs = $w.router.getHash().slice(1).replace("subscribe","");
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^#manageSubscriptions", mode : this.modes.MANAGE_SUBSCRIPTIONS, parseData : function(){
				var qs = $w.router.getHash().slice(1).replace("manageSubscriptions",""),
					data = $w.util.queryStringToObject(qs);
				if(data.email){
					$w.util.setCookie($w.cookies.email,data.email);
				} 
				return data;
			}},
			{ pattern : "^\\?propID=[0-9]+", mode : this.modes.VIEW, parseData : function(){
				var adID = $w.router.getQueryString().replace("?propID=",""),
					data = { adID : parseInt(adID) };
				return data;
			}},
			{ pattern : "^\\?trigger=notifications&email=[.]*", mode : this.modes.MANAGE_SUBSCRIPTIONS, parseData : function(){
				var qs = $w.router.getQueryString().replace("?trigger=notifications",""),
					data = $w.util.queryStringToObject(qs);
				if(data.email){
					$w.util.setCookie($w.cookies.email,data.email);
				}
				return data;
			}},
			{ pattern : "^\\?trigger=unsubscribeNotification&email=.+&tenantNotificationID=.+", mode : this.modes.UNSUBSCRIBE, parseData : function(){
				var qs = $w.router.getQueryString().replace("?trigger=unsubscribeNotification",""),
					data = $w.util.queryStringToObject(qs);
				if(data.email){
					$w.util.setCookie($w.cookies.email,data.email);
				}
				return data;
			}},
			{ pattern : "^\\?[.]*$", mode : this.modes.LIST, parseData : function(){
				var data = {};
				return data;
			}},
			{ pattern : "^.*$", mode : this.modes.LIST, parseData : function(){
				var data = {};
				return data;
			}}
		];
		this._init = function(target,inst){
			var route = null,
				mode = this._get(inst,"mode") || false,
				isElement = me._get(inst,"isElement"),
				data = {},
				filter = null,
				sort = null,
				prop = null;

			inst.mode = this.modes.NONE;
			inst.doHashUpdate = true;
			inst.listData = {};
			inst.isFirst = true;
			inst.form = null;

			mode = this.modeMap[mode];
			if(!isElement){
				route = this._findRoute(target,inst);
				if(route){
					mode = route.mode;
					data = route.data;

					sort = me._get(inst,"sort") || false;
					if(sort){
						data.sort = sort;
					}

					filter = me._get(inst,"filter") || false;
					if(filter){
						for(prop in filter){
							data[prop] = filter[prop];
						}
					}
				}
			}else{
				filter = me._get(inst,"filter") || false;
				if(filter){
					for(prop in filter){
						data[prop] = filter[prop];
					}
				}
			}

			this._setMode(target,inst,mode,data);

			if(!inst.initialized){
				$(target).on("click",".prop-link",function(e){
					var link = e.target,
						id = null;

					if(!$(link).hasClass("prop-link")){
						link = $(link).parents(".prop-link")[0];
					}

					e.preventDefault();

					id = $(link).data("id");


					me._showView(target,inst,{ adID : id });
				}).on("click","*[data-trigger='map']",function(e){
					var	selector = $(this).data("target"),
						$widget = $(this).parents("*[data-frs='properties']").first(),
						zoom = $widget.data("zoom"),
						$target = $(selector),
						options = {
							getMarkers : function(data,callback){
								return me._getMapMarkers(target,inst,data,callback);
							},
							zoom : zoom
						};

					e.preventDefault();

					if($target.length === 1){
						setTimeout(function(){
							$w.mapBoxWidget._tryAttach($target[0],options);
						},800);
					}
				}).on("click","a[data-lightbox='propertyImage']",function(e){
					e.preventDefault();

				}).on("submit",".prop-lead-form",function(e){
					var form = e.target,
						data = false;

					e.preventDefault();

					me._submitLead(target,inst,form);
				}).on("click",".prop-list-paging a",function(e){
					var page = $(this).data("page");

					e.preventDefault();

					me._showList(target,inst,$.extend(inst.listData,{
						pg : page
					}));
				}).on("submit",".prop-search-form",function(e){
					var data = {};

					e.preventDefault();

					data = $w.util.formToObject(this);
					me._showList(target,inst,data);
				}).on("click",".prop-link-subscribe",function(e){
					var data = {},
						link = e.target,
						id = $(link).data("id");

					data.email = $w.util.getCookie($w.cookies.email);
					if(id){
						data.id = id;
					}

					e.preventDefault();
					me._showSubscribe(target,inst,data);
				}).on("click",".prop-link-back-to-search",function(e){
					var mode = me._get(inst,"mode");
					e.preventDefault();

					mode = me.modeMap[mode] || me.modes.LIST;

					me._setMode(target,inst,mode,inst.listData);
					//me._showList(target,inst,inst.listData);
				}).on("submit",".prop-subscribe-form",function(e){
					var form = e.target;
					e.preventDefault();
					me._submitAlert(target,inst,form);
				}).on("keydown",".prop-subscribe-form-location input[name='search']",function(e){
					var data = { trigger : "cities" };
					data = me._attachSegment(inst,data);
					$w.typeaheadWidget._tryAttach(this,{
						source : $w.jsonpEndpoints.geoApi,
						data : data,
						parseList : function(data){
							var i = 0,
								item = null,
								items = [];

							if(data.items){
								for(i=0;i<data.items.length;i++){
									item = data.items[i];
									item.text = item.cityName + ", " + item.stateName + ", " + item.countryCode;
									item.value = item.cityID;
									items.push(item);
								}
							}

							return items;
						},
						selected : function(input,data){
							$("input[name='cityID']",target).val(data.cityID);
							$("input[name='stateID']",target).val(data.stateID);
							$("input[name='countryID']",target).val(data.countryID);
						}
					});
				}).on("click",".prop-link-manage",function(e){
					var data = {};
					e.preventDefault();
					me._showManageSubscriptions(target,inst,data);
				}).on("click",".prop-link-subscribe-delete",function(e){
					var data = {},
						link = e.target,
						id = $(link).data("id");

					data.email = data.email | $w.util.getCookie($w.cookies.email);
					if(id){
						data.id = id;
					}

					e.preventDefault();
					me._deleteAlert(target,inst,data);
				});

				$(window).on("routeChange",function(){
					var route;
					route = me._findRoute(target);
					me._setMode(target,inst,route.mode,route.data);
				}).on("resize",function(e){
					me._doResize(target,inst,e);
				});

				inst.initialized = true;
			}

		};
		this._attachSegment = function(inst,data){
			var segment = false;

			segment = me._get(inst,"segment") || null;
			data = data || {};

			if(segment){
				data["segmentID"] = segment;
			}

			return data;
		};
		this._doResize = function(target,inst,e){
			var $target = $(target),
				$map = null;

			if((inst.mode === this.modes.MAP) && (inst.map)){
				if(($target.width() !== inst.mapWidth) || ($target.height() !== inst.mapHeight)){
					me._sizeMapToContainer(target,inst,inst.map);
				}
			}
		};
		this._sizeMapToContainer = function(target,inst){
			var $target = $(target),
				$map = $(inst.map);
			if(inst.map){
				inst.mapWidth = $target.width();
				inst.mapHeight = $target.height();

				$map.width(inst.mapWidth);
				$map.height(inst.mapHeight);
			}
		};
		this._showList = function(target,inst,data){
			var formData = null;
			
			formData = data || {};

			formData = me._attachSegment(inst,formData);

			$w.api.properties.list(formData,function(data){
				inst.listData = formData;
				data["form"] = formData;
				me._showTemplateOrFunction(target,inst,"list","propertyListTemplate",$w.defaultTemplates.properties.list,data,function(){
					$(target).trigger("propertiesListed");
				});
			});
			inst.listData = data;
			inst.mode = this.modes.LIST;
			this._setRoute(target,inst,"properties?" + ((data) ? $w.util.objectToQueryString(data) : ""));
		};
		this._showMap = function(target,inst,data){
			var isElement = me._get(inst,"isElement"),
				zoom = me._get(inst,"zoom");
			data = me._attachSegment(inst,data);
			$w.api.properties.list(data,function(data){
				me._showTemplateOrFunction(target,inst,"map","propertyMapTemplate",$w.defaultTemplates.properties.map,data,function(){
					$("*[data-frs='map']",target).each(function(){
						var	container = this,
							options = {
								getMarkers : function(data,callback){
									return me._getMapMarkers(target,inst,data,callback);
								}
							},
							$target = $(target),
							$container = $(container);
						if(zoom) {
							options.zoom = zoom;
						}
						inst.map = container;
						me._sizeMapToContainer(target,inst);
						$w.mapBoxWidget._tryAttach(this,options);
					});
				});
			});
			inst.mode = this.modes.MAP;
			if(!isElement){
				this._setRoute(target,inst,"properties/map?" + ((data) ? $w.util.objectToQueryString(data) : ""));
			}
		};
		this._getMapMarkers = function(target,inst,data,callback){
			var filter = filter = me._get(inst,"filter") || false;
			data = me._attachSegment(inst,data);
			if(filter && filter.organizationID){
				data.organizationID = filter.organizationID;
			}
			return $w.api.properties.searchMap(data,function(data){
				var i = 0,
					result = null,
					markers = [],
					marker = null,
					markerOptions = null;
				if((callback) && ((inst.mode === me.modes.LIST) || (inst.mode === me.modes.MAP))){
					if(data.results){
						for(i=0;i<data.results.length;i++){
							result = data.results[i];
							
							marker = new mapboxgl.Marker()
								.setLngLat( [ result.longitude, result.latitude ] );

							markers.push(marker);
							marker.data = result;
							marker.data.widget = me;
							marker.data.widgetInstance = inst;
							marker.data.isElement = me._get(inst, "isElement");

							me._setMapMarkerInfoWindowContent(target, inst, marker);
							/*
							marker = $w.maps.createMarker({
								position : $w.maps.createPoint(result.latitude,result.longitude)
							});
							markers.push(marker);
							marker.data = result;
							marker.data.widget = me;
							marker.data.widgetInstance = inst;
							marker.data.isElement = me._get(inst,"isElement");

							me._setMapMarkerInfoWindowContent(target,inst,marker);
							*/
						}
					}
					callback(markers);
				}
			});
		};
		this._setMapMarkerInfoWindowContent = function(target,inst,marker){
			var template = me._get(inst,"infoWindowTemplate") || false,
				infoWindowType = me._get(inst,"infoWindow") || false,
				templateName = "propertyInfoWindowTemplate",
				defaultTemplate = $w.defaultTemplates.properties.infoWindow;

			if(infoWindowType === "mini"){
				templateName = "propertyMiniInfoWindowTemplate";
				defaultTemplate = $w.defaultTemplates.properties.miniInfoWindow;
			}
			$w.util.createTemplate(templateName,template,defaultTemplate,function(templateFunc){
				//marker.infoWindowContent = templateFunc(marker.data);
				var content = templateFunc(marker.data);
				var popup = new mapboxgl.Popup({closeOnClick: false})
			    	.setHTML(content);
				marker.setPopup(popup);
			});
		};
		this._showView = function(target,inst,data){
			data = me._attachSegment(inst, data);

			if(inst.listData && inst.listData.organizationID){
				data["organizationID"] = inst.listData.organizationID;
			}

			$w.api.properties.view(data,function(data){
				$w.pintrest.reset();
				me._showTemplateOrFunction(target,inst,"view","propertyViewTemplate",$w.defaultTemplates.properties.view,data,function(){
					$w.facebook.loadWidgets();
				});
			});

			inst.mode = this.modes.VIEW;
			this._setRoute(target,inst,"ad/" + data.adID);
		};
		this._showSubscribe = function(target,inst,data){
			var id;
			id = data.id || false;
			data.email = data.email || $w.util.getCookie($w.cookies.email);
			data = me._attachSegment(inst,data);
			$w.api.properties.viewAlert(data,function(data){

				me._showTemplateOrFunction(target,inst,"subscribe","propertySubscribeTemplate",$w.defaultTemplates.properties.subscribe,{ alert : data },function(){

				});
			});

			inst.mode = this.modes.SUBSCRIBE;
			this._setRoute(target,inst,"subscribe" + ((id) ? "?id=" + encodeURIComponent(id) : ""));
		};
		this._showManageSubscriptions = function(target,inst,data){
			var message = null;

			if(!data) {
				data = {};
			}
			message = data.message || null;
			data.email = data.email || $w.util.getCookie($w.cookies.email);
			data = me._attachSegment(inst,data);

			$w.api.properties.alerts(data,function(data){
				data.message = message;
				me._showTemplateOrFunction(target,inst,"manageSubscription","propertyManageSubscriptionTemplate",$w.defaultTemplates.properties.manage,data);
			});
			inst.mode = this.modes.MANAGE_SUBSCRIPTIONS;
			this._setRoute(target,inst,"manageSubscriptions");
		};
		this._unsubscribe = function(target,inst,data){
			var uData = {};
			uData.id = data.tenantNotificationID;
			uData.email = data.email;
			uData = me._attachSegment(inst,uData);

			$w.api.properties.deleteAlert(uData,function(rData){
				me._showManageSubscriptions(target,inst,{ message : 100 });
			});

		};
		this._validateLeadForm = function(form){
			var returnData = null,
				$nameTextBox = $("input[name='name']",form),
				$emailTextBox = $("input[name='email']",form),
				$phoneTextBox = $("input[name='phone']",form),
				$messageTextBox = $("textarea[name='message']",form),
				$moveInDropDown = $("select[name='moveIn']",form),
				id = $("input[name='id']",form).val(),
				name = $nameTextBox.val(),
				email = $emailTextBox.val(),
				phone = $phoneTextBox.val(),
				message = $messageTextBox.val(),
				moveIn = $moveInDropDown.val();

			returnData = {
				adID : id,
				contactName : name,
				contactEmail : email,
				contactPhone : phone,
				message : message,
				moveInDateID : moveIn
			};

			if(!$w.util.hasValue(name)){
				returnData = false;
				$w.util.addError($nameTextBox,"Name is Required");
			}else{
				$w.util.removeError($nameTextBox);
			}

			if(!$w.util.hasValue(email)){
				returnData = false;
				$w.util.addError($emailTextBox,"Email is Required");
			}else{
				$w.util.removeError($emailTextBox);
			}

			if(!$w.util.hasValue(phone)){
				returnData = false;
				$w.util.addError($phoneTextBox,"Phone is Required");
			}else{
				$w.util.removeError($phoneTextBox);
			}

			if(!$w.util.hasValue(message)){
				returnData = false;
				$w.util.addError($messageTextBox,"Message is Required");
			}else{
				$w.util.removeError($messageTextBox);
			}

			if(!$w.util.hasValue(moveIn)){
				returnData = false;
				$w.util.addError($moveInDropDown,"Monve In Date is Required");
			}else{
				$w.util.removeError($moveInDropDown);
			}

			return returnData;
		};
		this._submitLead = function(target,inst,form){
			var data = null;

			data = this._validateLeadForm(form);

			if(data){
				data = me._attachSegment(inst,data);
				$w.api.properties.sendLead(data,function(rData){
					if(rData.hasError){
						$(".prop-lead-form-success",form).hide("slow");
					}else{
						$(".prop-lead-form-success",form).show("slow");
						$w.util.setCookie($w.cookies.name,data.contactName);
						$w.util.setCookie($w.cookies.email,data.contactEmail);
						$w.util.setCookie($w.cookies.phone,data.contactPhone);
					}
				});
			}
		};
		this._validateAlertForm = function(form){
			var returnData =  null,
				formData = $w.util.formToObject(form),
				$locationTextBox = $("input[name='search']",form),
				$emailTextBox = $("input[name='email']",form);

			returnData = formData;

			if(!$w.util.hasValue(formData.search)){
				returnData = false;
				$w.util.addError($locationTextBox,"Location is Required");
			}else{
				if(!$w.util.hasValue(formData.cityID)){
					$w.util.addError($locationTextBox,"Select Location From Typeahead");
				}else{
					$w.util.removeError($locationTextBox);
				}

			}

			if(!$w.util.hasValue(formData.email)){
				returnData = false;
				$w.util.addError($emailTextBox,"Email is Required");
			}else{
				$w.util.removeError($emailTextBox);
			}
			return returnData;
		};
		this._submitAlert = function(target,inst,form){
			var data = null;

			data = this._validateAlertForm(form);

			if(data){
				data = me._attachSegment(inst,data);
				$w.api.properties.sendAlert(data,function(rData){
					if(rData.hasError){
						$(".prop-subscribe-form-success",target).hide("slow");
					}else{
						$(".prop-subscribe-form-success",target).show("slow");
						$w.util.setCookie($w.cookies.email,data.email);

						me._showManageSubscriptions(target,inst,{});
					}
				});
			}
		};
		this._deleteAlert = function(target,inst,data){
			var id = null;

			if(data){
				id = data.id;
				data.email = $w.util.getCookie($w.cookies.email);

				if(confirm("Are you sure you want to delete the subscription?")){
					data = me._attachSegment(inst,data);
					$w.api.properties.deleteAlert(data,function(rData){
						if(rData.hasError){
							// DO NOTHING
						}else{
							$(".prop-subscriptions .prop-subscription[data-id='" + id + "']").remove();
						}
					});
				}
			}
		};
		this._setMode = function(target,inst,mode,data){
			if(mode === this.modes.VIEW){
				this._showView(target,inst,data);
			}else if(mode === this.modes.MAP){
				this._showMap(target,inst,data);
			}else if(mode === this.modes.SUBSCRIBE){
				this._showSubscribe(target,inst,data);
			}else if(mode === this.modes.MANAGE_SUBSCRIPTIONS){
				this._showManageSubscriptions(target,inst,data);
			}else if(mode === this.modes.UNSUBSCRIBE){
				this._unsubscribe(target,inst,data);
			}else{
				this._showList(target,inst,data);
			}
		};
	};
	Properties.prototype = new Routable("frsProp");
	$.extend(Properties.prototype, new Templatable("frsProp"));
	$w.propertiesWidget = new Properties();
	$w.propertiesWidget.initialized = false;
	$w.propertiesWidget.uuid = new Date().getTime();

	// Rented Widget
	function Rented(){
		var me = this;
		this.modes = {
			NONE : 0,
			LIST : 1,
			VIEW : 2,
			MINI : 3
		};
		this.modeMap = {
			mini : this.modes.MINI,
			list : this.modes.LIST
		};
		this.settings = {
			count : 4,
			mode : null
		};
		this.routes = [
			{ pattern : "^#rented/ad/[0-9]+$", mode : this.modes.VIEW, parseData : function(){
				var adID = $w.router.getHash().replace("#rented/ad/",""),
					data = { adID : parseInt(adID) };
				return data;
			}},
			{ pattern : "^#rented", mode : this.modes.LIST, parseData : function(){
				var qs = $w.router.getHash().slice(1).replace("rented","");
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^\\?propID=[0-9]+$", mode : this.modes.VIEW, parseData : function(){
				var adID = $w.router.getQueryString().replace("?propID=",""),
					data = { adID : parseInt(adID) };
				return data;
			}},
		];
		this._init = function(target,inst){
			var route = null,
				mode = this._get(inst,"mode") || false,
				isElement = me._get(inst,"isElement"),
				count = me._get(inst, "count") || 15,
				data = {},
				filter = null,
				prop = null;

			inst.mode = this.modes.NONE;
			inst.doHashUpdate = true;
			inst.listData = {};
			inst.isFirst = true;
			inst.count = count;

			mode = this.modeMap[mode];
			if(!mode){
				route = this._findRoute(target,inst);
				if(route){
					mode = route.mode;
					data = route.data;
				}
			}

			filter = me._get(inst,"filter") || false;
			if(filter){
				for(prop in filter){
					data[prop] = filter[prop];
				}
			}

			this._setMode(target,inst,mode,data);

			$(target).on("click",".prop-link",function(e){
				me._onViewClick(target,inst,e);
			}).on("click",".prop-list-paging a",function(e){
				var page = $(this).data("page");

				e.preventDefault();

				me._showList(target,inst,{
					pg : page
				});
			});

			$(window).on("routeChange",function(){
				var route;
				route = me._findRoute(target);
				me._setMode(target,inst,route.mode,route.data);
			});
		};
		this._attachSegment = function(inst,data){
			var segment = false;

			segment = me._get(inst,"segment") || null;
			data = data || {};

			if(segment){
				data["segmentID"] = segment;
			}

			return data;
		};
		this._onViewClick = function(target,inst,e){
			var link = e.target,
				id = null,
				data = null;

			if(!$(link).hasClass("prop-link")){
				link = $(link).parents(".prop-link")[0];
			}

			e.preventDefault();

			id = $(link).data("id");
			data = { adID : id };
			me._showView(target,inst,data);
		};
		this._showList = function(target,inst,data){
			if(!data) {
				data = {};
			}
			
			if(inst.count){
				data.pageSize = inst.count;
			}

			data = me._attachSegment(inst,data);
			$w.api.properties.rented(data,function(data){
				me._showTemplateOrFunction(target,inst,"list","propertyRentedTemplate",$w.defaultTemplates.properties.rented,data,function(){
				});
			});
			inst.mode = this.modes.LIST;
			this._setRoute(target,inst,"rented");
		};
		this._showView = function(target,inst,data){
			data = me._attachSegment(inst,data);
			$w.api.properties.view(data,function(data){
				me._showTemplateOrFunction(target,inst,"view","propertyRentedViewTemplate",$w.defaultTemplates.properties.rentedView,data,function(){
				});
			});

			inst.mode = this.modes.VIEW;
			this._setRoute(target,inst,"rented/ad/" + data.adID);
		};
		this._showMini = function(target,inst,data){
			data = me._attachSegment(inst,data);
			$w.api.properties.rented(data,function(data){
				me._showTemplateOrFunction(target,inst,"mini","propertyRentedMiniTemplate",$w.defaultTemplates.properties.rentedMini,data,function(){
				});
			});
			inst.mode = this.modes.MINI;
		};
		this._showMap = function(target,inst,data){
			data = me._attachSegment(inst,data);
		};
		this._setMode = function(target,inst,mode,data){
			if(mode === this.modes.VIEW){
				this._showView(target,inst,data);
			}else if(mode === this.modes.MINI){
				this._showMini(target,inst,data);
			}else{
				this._showList(target,inst,data);
			}
		};
	};
	Rented.prototype = new Routable("frsRented");
	$.extend(Rented.prototype, new Templatable("frsRented"));
	$w.rentedWidget = new Rented();
	$w.rentedWidget.initialized = false;
	$w.rentedWidget.uuid = new Date().getTime();

	// Featured Properties Widget
	function FeaturedProperties (){
		var me = this;
		this._init = function(target,inst){
			var data = {},
				filter = null,
				prop = null;
			filter = me._get(inst,"filter") || false;
			if(filter){
				for(prop in filter){
					data[prop] = filter[prop];
				}
			}
			this._showFeatured(target,inst,data);
			inst.width = $(target).width();
			inst.height = $(target).height();

			$(window).resize(function(e){
				me._doResize(target,inst,e);
			});
		};
		this._attachSegment = function(inst,data){
			var segment = false;

			segment = me._get(inst,"segment") || null;
			data = data || {};

			if(segment){
				data["segmentID"] = segment;
			}

			return data;
		};
		this._doResize = function(target,inst,e){
			var dimensions = { width : $(target).width(), height : $(target).height() };

			if((dimensions.width !== inst.width) || (dimensions.height !== inst.height)){
				if(inst.data){
					me._render(target,inst,inst.data);
				}else{
					me._showFeatured(target,inst);
				}
			}
		};
		this._showFeatured = function(target,inst,data){
			var me = this;
			inst = inst || this._getInst(target);
			data = me._attachSegment(inst,data);

			$w.api.properties.featured(data,function(data){
				me._render(target,inst,data);
			});
		};
		this._render = function(target,inst,data){
			inst.width = $(target).width();
			inst.height = $(target).height();
			data.width = inst.width;
			data.height = inst.height;
			inst.data = data;

			me._showTemplateOrFunction(target,inst,"featured","propertyFeaturedTemplate",$w.defaultTemplates.properties.featured,data,function(){
				$(target).trigger("propertiesFeatured");

				$("*[data-frs='rotator']",target).each(function(){
					var target = this,
						options = {};
					$w.rotatorWidget._tryAttach(target,options);
				});
			});
		};


	};
	FeaturedProperties.prototype = new Templatable("frsFeatProp");
	$w.featuredPropertiesWidget = new FeaturedProperties();
	$w.featuredPropertiesWidget.initialized = false;
	$w.featuredPropertiesWidget.uuid = new Date().getTime();

	// New Properties Widget
	function NewProperties (){
		var me = this;
		this.settings = {
			count : 3
		};
		this._init = function(target,inst){
			var data = {},
				filter = null,
				prop = null;
			filter = me._get(inst,"filter") || false;
			if(filter){
				for(prop in filter){
					data[prop] = filter[prop];
				}
			}
			this._showNew(target,inst,data);
		};
		this._attachSegment = function(inst,data){
			var segment = false;

			segment = me._get(inst,"segment") || null;
			data = data || {};

			if(segment){
				data["segmentID"] = segment;
			}

			return data;
		};
		this._showNew = function(target,inst,data){
			var count = me._get(inst,"count");
			data = me._attachSegment(inst,data);
			data.propertyCount = count;
			$w.api.properties.newList(data,function(data){
				me._showTemplateOrFunction(target,inst,"new","propertyNewTemplate",$w.defaultTemplates.properties.newList,data,function(){
					$(target).trigger("propertiesNew");
				});
			});
		};
	};
	NewProperties.prototype = new Templatable("frsNewProp");
	$w.newPropertiesWidget = new NewProperties();
	$w.newPropertiesWidget.initialized = false;
	$w.newPropertiesWidget.uuid = new Date().getTime();

	// Open House Widget
	function OpenHouse (){
		var me = this;
		this._init = function(target,inst){
			this._show(target,inst);
		};
		this._attachSegment = function(inst,data){
			var segment = false;

			segment = me._get(inst,"segment") || null;
			data = data || {};

			if(segment){
				data["segmentID"] = segment;
			}else{
				data["segmentID"] = 1;
			}

			return data;
		};
		this._show = function(target,inst,data){
			inst = inst || this._getInst(target);

			$w.api.properties.openHouses(data,function(data){
				data = me._attachSegment(inst,data);
				me._showTemplateOrFunction(target,inst,"view","propertyOpenHouseTemplate",$w.defaultTemplates.properties.open,data,function(){
					$(target).trigger("openHousesShown");
				});
			});
		};
	};
	OpenHouse.prototype = new Templatable("frsOpenHouse");
	$w.openHouseWidget = new OpenHouse();
	$w.openHouseWidget.initialized = false;
	$w.openHouseWidget.uuid = new Date().getTime();


	// Open House Widget
	function Profiles (){
		var me = this;
		this.modes = {
			NONE : 0,
			LIST : 1,
			VIEW : 2
		};
		this.routes = [
			{ pattern : "^#\\?[.]*$", mode : this.modes.LIST, parseData : function(){
				var qs = $w.router.getHash().slice(1);
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^#profiles($|\\?[.]*)", mode : this.modes.LIST, parseData : function(){
				var qs = $w.router.getHash().slice(1).replace("profiles","");
				return $w.util.queryStringToObject(qs);
			}},
			{ pattern : "^#profiles/view($|\\?[.]*)", mode : this.modes.VIEW, parseData : function(){
				var qs = $w.router.getHash().replace("#profiles/view",""),
					data = $w.util.queryStringToObject(qs);
				return data;
			}},
			{ pattern : "^\\?[.]*$", mode : this.modes.LIST, parseData : function(){
				var data = {};
				return data;
			}},
			{ pattern : "^.*$", mode : this.modes.LIST, parseData : function(){
				var data = {};
				return data;
			}}
		];
		this._init = function(target,inst){
			var mode = this.modes.LIST,
				data = {},
				route = null;
			inst.listData = data;
			inst.organizationId = this._get(inst,"organizationId") || false;
			if(inst.organizationId){
				this._showList(target,inst);
			}
			$(target).on("click",".profile-link",function(e){
				me._onViewClick(target,inst,e);
			}).on("submit",".search-form",function(e){
				me._onProfileSearchSubmit(target,inst,e);
			}).on("click",".profile-link-back-to-search",function(e){
				me._onBackToSearchClick(target,inst,e);
			}).on("click",".profile-form-btn",function(e){
				me._onProfileFormBtnClick(target,inst,e);
			}).on("submit",".profile-request-form",function(e){
				var form = e.target,
					$form = $(form),
					data = false;

					e.preventDefault();
					$("button",$form).hide();
					$(".profile-lead-form-sending",$form).show();
					me._submitLead(target,inst,form);
			}).on("click",".list-paging a",function(e){
				var page = $(this).data("page");

				e.preventDefault();

				me._showList(target,inst,$.extend(inst.listData,{
					pg : page
				}));
			});

			$(window).on("routeChange",function(){
				var route;
				route = me._findRoute(target);
				me._setMode(target,inst,route.mode,route.data);
			});

			route = this._findRoute(target,inst);

			if(route){
				mode = route.mode;
				data = route.data;
			}


			this._setMode(target,inst,mode,data);

			inst.initialized = true;
		};
		this.getStates = function(target,inst,data,callback){
			if(!inst.states){
				$w.api.geo.states(data,function(data){
					inst.states = data;
					if(callback){
						callback();
					}
				});
			}else{
				if(callback){
					callback();
				}
			}
		};
		this._onViewClick = function(target,inst,e){
			var link = e.target,
				id = null,
				data = null,
				profile = null;

			if(!$(link).hasClass("profile-link")){
				link = $(link).parents(".profile-link")[0];
			}

			e.preventDefault();

			profile = $(link).parents(".profile").first();
			id = $(profile).data("id");
			data = { profileID : id };
			me._showView(target,inst,data);
		};
		this._onBackToSearchClick = function(target,inst,e){
			e.preventDefault();
			this._showList(target,inst);
		};
		this._onProfileSearchSubmit = function(target,inst,e){
			var $form = $(".search-form",inst.element),
				address = null,
				city = null,
				state = null,
				postalCode = null,
				data = {};

			e.preventDefault();

			address = $("input[name='address']",$form).val();
			city = $("input[name='city']",$form).val();
			state = $("select[name='state']",$form).val();
			postalCode = $("input[name='postalCode']",$form).val();

			if($w.util.hasValue(address)){
				data.address = address;
			}

			if($w.util.hasValue(city)){
				data.cityName = city;
			}

			if($w.util.hasValue(state)){
				data.stateID = state;
			}

			if($w.util.hasValue(postalCode)){
				data.postCode = postalCode;
			}
			me._showList(target,inst,data);

		};
		this._onProfileFormBtnClick = function(target,inst,e){
			inst = inst || this._getInst(target);
			e.preventDefault();

			$(".profile-form",$(inst.element)).toggle();

		};
		this._onProfileRequestFormSubmit = function(target,inst,e){
			inst = inst || this._getInst(target);
			e.preventDefault();
		};
		this._submitLead = function(target,inst,form){
			var $form = $(form),
				data = null;

			data = this._validateLeadForm(form);

			if(data){
				$(".profile-lead-form-error",$form).hide();

				data.organizationID = inst.organizationId;

				$w.api.profiles.sendLead(data, function(resp){

					if(!resp.hasError){
						$("button",$form).show();
						$(".profile-lead-form-success",$form).show();
						$(".profile-lead-form-sending",$form).hide();
						$form.get(0).reset();
					}else{
						$(".profile-lead-form-error",$form).hide();
					}
				});
			}else{
				$("button",$form).show();
				$(".profile-lead-form-error",$form).show();
				$(".profile-lead-form-sending",$form).hide();
			}


		};
		this._showList = function(target,inst,data){
			var form;
			data = data || {};
			inst = inst || me._getInst(target);
			data.organizationID = inst.organizationId;
			form = data;
			$w.api.profiles.list(data,function(data){
				me.getStates(target, inst, { countryID: data.countryID }, function(){
					data.states = inst.states;
					data.form = form;
					me._showTemplateOrFunction(target,inst,"list","profilesListTemplate",$w.defaultTemplates.profiles.list,data,function(){
						$(target).trigger("profilesListShown");
					});
				});
			});
			inst.listData = form;
			me._setRoute(target,inst,"profiles?" + ((form) ? $w.util.objectToQueryString(form) : ""));
		};
		this._showView = function(target,inst,data){
			var id = null;
			data = data || {};
			id = data.profileID;
			inst = inst || me._getInst(target);
			data.organizationID = inst.organizationId;
			$w.api.profiles.view(data,function(data){
				me.getStates(target,inst,{ countryID: data.countryID }, function(){
					data.states = inst.states;
					me._showTemplateOrFunction(target,inst,"view","profilesViewTemplate",$w.defaultTemplates.profiles.view,data,function(){
						$(target).trigger("profilesViewShown");
					});
				});
			});

			me._setRoute(target,inst,"profiles/view?id=" + encodeURIComponent(id) );
		};
		this._validateLeadForm = function(form){
			var returnData = null,
				$nameTextBox = $("input[name='name']",form),
				$emailTextBox = $("input[name='email']",form),
				$phoneTextBox = $("input[name='phone']",form),
				$addressTextBox = $("input[name='address']",form),
				$cityTextBox = $("input[name='city']",form),
				$stateDropDown = $("select[name='state']",form),
				$zipTextBox = $("input[name='postCode']",form),
				$propertyTypeRadios = $("input[name='propertyTypeID']",form),
				$statusRadios = $("input[name='propertyStatusID']",form),
				$propertyValueTextBox = $("input[name='propertyValue']",form),
				$descriptionTextBox = $("textarea[name='description']",form),
				id = $("input[name='id']",form).val(),
				name = $nameTextBox.val(),
				email = $emailTextBox.val(),
				phone = $phoneTextBox.val(),
				address = $addressTextBox.val(),
				city = $cityTextBox.val(),
				state = $stateDropDown.val(),
				zip = $zipTextBox.val(),
				propertyType = $propertyTypeRadios.filter(":checked").val(),
				propertyStatus = $statusRadios.filter(":checked").val(),
				propertyValue = $propertyValueTextBox.val(),
				description = $descriptionTextBox.val();

			returnData = {
				profileID : id,
				contactName : name,
				contactEmail : email,
				contactPhone : phone,
				address: address,
				cityName: city,
				stateID: state,
				postCode: zip,
				propertyTypeID : propertyType,
				propertyStatusID: propertyStatus,
				propertyValue : propertyValue,
				description : description
			};

			if(!$w.util.hasValue(name)){
				returnData = false;
				$w.util.addError($nameTextBox,"Name is Required");
			}else{
				$w.util.removeError($nameTextBox);
			}

			if(!$w.util.hasValue(email)){
				returnData = false;
				$w.util.addError($emailTextBox,"Email is Required");
			}else{
				$w.util.removeError($emailTextBox);
			}

			if(!$w.util.hasValue(description)){
				returnData = false;
				$w.util.addError($descriptionTextBox,"Message is Required");
			}else{
				$w.util.removeError($descriptionTextBox);
			}

			if(!$w.util.hasValue(city)){
				returnData = false;
				$w.util.addError($cityTextBox,"City is Required");
			}else{
				$w.util.removeError($cityTextBox);
			}

			if(!$w.util.hasValue(state)){
				returnData = false;
				$w.util.addError($stateDropDown,"State is Required");
			}else{
				$w.util.removeError($stateDropDown);
			}

			if(!$w.util.hasValue(propertyType)){
				returnData = false;
				$w.util.addError($propertyTypeRadios.parent(),"Property Type is Required");
			}else{
				$w.util.removeError($propertyTypeRadios.parent());
			}

			if(!$w.util.hasValue(propertyStatus)){
				returnData = false;
				$w.util.addError($statusRadios.parent(),"Property Status is Required");
			}else{
				$w.util.removeError($statusRadios.parent());
			}

			if(!$w.util.hasValue(propertyValue)){
				returnData = false;
				$w.util.addError($propertyValueTextBox,"Property Value is Required");
			}else{
				if(!$.isNumeric(propertyValue)){
					returnData = false;
					$w.util.addError($propertyValueTextBox,"Property Value must be Numeric");
				}else{
					$w.util.removeError($propertyValueTextBox);
				}
			}

			return returnData;
		};
		this._setMode = function(target,inst,mode,data){
			if(mode === this.modes.VIEW){
				this._showView(target,inst,data);
			}else{
				this._showList(target,inst,data);
			}
		};

	};
	Profiles.prototype = new Routable("frsProfiles");
	$.extend(Profiles.prototype, new Templatable("frsProfiles"));
	$w.profilesWidget = new Profiles();
	$w.profilesWidget.initialized = false;
	$w.profilesWidget.uuid = new Date().getTime();

	// Form Widget
	function Form (){
		var me = this;
		this._init = function(target,inst){
			if(target.tagName == "FORM"){
				inst.$form = $(target);
				inst.isInline = me._get(inst, "isInline");
				if(inst.isInline){
					inst.postTypeID = me._get(inst,"postType") || 1;
					inst.postUrl = (inst.postTypeID == 2) ? inst.$form.attr("action") : null;
				}
			} else {
					inst.isInline = false;
					inst.$form = $("<form></form>");
					$(target).append(inst.$form);
			}

			inst.profileID = me._get(inst,"profileId") || false;
			inst.formID = me._get(inst,"id") || false;

			if(!inst.formID){
				name = me._get(inst,"name") || false;

				if(name){
					if($w.settings && $w.settings.forms && $w.settings.forms[name]){
						inst.formID = $w.settings.forms[name];
					}
				}
			}

			if(!inst.formID){
				if(console && console.warn){
					console.warn("FRS Widget warning: No ID was specified for the form");
				}
				return; // NO ID Dep
			}
			
			this.checkForTracking(inst);
			
			inst.$form.submit(function(e){
				me.onSubmit(target, inst, e);
			});

			if(!inst.isInline){
				this._show(target,inst);
			}else{
				if(me._get(inst, "recaptcha")){
					this.renderReCaptcha(target, inst);
				}
			}
		};
		this.checkForTracking = function(inst){
			var queryStringObj = $w.util.queryStringToObject(document.location.href.substring(document.location.href.indexOf("?"))),
				tcidCookie = null;
			
			if(queryStringObj.tcid){
				inst.trackingCode = queryStringObj.tcid;
				// Set Tracking Cookie for 30 Days
				$w.util.setCookie("frs-form-tcid", inst.trackingCode, 30);
			}else{
				tcidCookie = $w.util.getCookie("frs-form-tcid");
				if(tcidCookie){
					inst.trackingCode = tcidCookie;
				}
			}
		};
		this.onSubmit = function(target, inst, e){
			var inst = inst || this._getInst(target),
				formArray = null,
				data = null,
				item = null,
				$input = null,
				i = 0;

			if(inst.recaptcha >= 0)
			{
				if(!grecaptcha.getResponse(inst.recaptcha)){
					//alert('Must complete the reCAPTCHA at the bottom of the form.');
					$w.dialogWidget.prompt("Form Error", "You must complete the reCAPTCHA to submit the form");
					e.preventDefault();
					return;
				}

				inst.recaptchaContainer.remove();
			}

			if((inst.postType != 2) || (!inst.postUrl))
			{
				e.preventDefault();

				/*if(FormData){
					formArray = inst.$form.serializeArray();
					data = new FormData();

					for(i = 0; i < formArray.length; i++){
						item = formArray[i];

						$input = $(":input[name='" + item.name + "']",inst.$form);

						if($input.attr("type") == "file"){
							data.append(item.name, $input[0].files[0]);
						}else{
							data.append(item.name, item.value);
						}
					}
				}else
				{*/
					data = inst.$form.serializeArray();
				//}

				if(!inst.formID){
					if(console && console.warn){ 
						console.warn("FRS Widget warning: No ID was specified for the form");
					}
					return; // NO ID Dep
				};
				
				if(inst.trackingCode){
					data.push({ name : "tcid", value : inst.trackingCode });
				}
				
				
				$(".frs-form-submit", inst.$form).hide();
				$(".frs-form-submitting", inst.$form).show();
				$w.api.forms.submit(inst.formID, data, inst.profileID || false, function(data){
					if(data.success == "False"){
						if(inst.isInline){
							$(window).trigger("frsFormInlineWidgetFailure", [ inst, data ]);
						}else{
							me.render(target,inst, data);
						}
					}else{
						if(data.postTypeID == 1) {

							if(data.successUrl.length > 0)
							{
								document.location.href = data.successUrl;
							}
							else
							{
								me.renderSuccess(target,inst,data);
							}
						}else{
							me.renderSuccess(target,inst,data);
						}
					}
				});

			}

		};
		this.render = function(target,inst,data){
			var inst = inst || this._getInst(target);

			inst.postTypeID = data.postTypeID;
			inst.postUrl = (inst.postTypeID == 2) ? data.successUrl : null;

			data.formID = me._get(inst,"id") || false;
			data.hideLabels = me._get(inst,"hideLabels") || false;
			data.showPlaceholders = me._get(inst, "showPlaceholders") || false;
			data.inline = me._get(inst,"inline") || false;
			data.inst = inst;
			data.recaptcha = me._get(inst, "recaptcha") || false;


			me._showTemplateOrFunction(inst.$form,inst,"view",inst.element.id,$w.defaultTemplates.forms.view,data,function(){
				me._bindEvents(target, inst);

				if(data.recaptcha){
					me.renderReCaptcha(target, inst);
				}

				if(inst.postUrl){
					inst.$form
						.attr("method", "post")
						.attr("action", inst.postUrl);
				}else{
					inst.$form
						.attr("method", "")
						.attr("action", "");
				}

				$(target).trigger("formShown");
			});
		};
		this.renderReCaptcha = function(target, inst){
			var inst = inst || this._getInst(target),
				 recaptchaKey = me._get(inst, "recaptchaKey") || "6LdgkyQTAAAAAHi6Pi8-1RojKElsic8JkqWYII7c",
				 recaptchaTheme = me._get(inst,"recaptchaTheme") || "light",
				 items = null,
				 container = null;

			if(!window['__google_recaptcha_client']){
				if(console && console.warn){
					console.warn("FRS Widget warning: reCAPTCHA script is not loaded");
				}
				return;
			}

			items = $(".frs-form-recaptcha", inst.element);
			if(items.length == 0){
				if(console && console.warn){
					console.warn("FRS Widget warning: reCAPTCHA container does not exist");
				}
				return;
			}

			inst.recaptchaContainer = container = items[0];

			inst.recaptcha = grecaptcha.render(container,{
				'sitekey' : recaptchaKey,
				'theme' : recaptchaTheme
			});

		};
		this.renderSuccess = function(target, inst, data){
			var inst = inst || this._getInst(target);

			me._showTemplateOrFunction(inst.$form,inst,"success",inst.element.id + "_successs",$w.defaultTemplates.forms.success,data,function(){
				$(target).trigger("formSuccessShown");
			});
		};
		this.onCalendarToggle = function(e){
			var $target = $(e.target);
			$(".frs-form-calendar-input", $target.parent()).datepicker("show");
		};
		this._bindEvents = function(target,inst){
			var inst = inst || this._getInst(target);

			$(".frs-form .frs-form-calendar .frs-form-calendar-input", target).each(function(index,item){
				var toggle = $(".frs-form-calendar-toggle", $(item).parent()).get(0),
					picker = null;
				picker = new Pikaday({ field: item, trigger : toggle, format : "MM/DD/YYYY", bound : true});
				$(item).data('picker', picker);
			});

			$(".frs-form .frs-form-calendar .frs-form-calendar-toggle", target)
		};
		this._show = function(target,inst,data){
			var inst = inst || this._getInst(target);

			if(!inst.formID){
				if(console && console.warn){
					console.warn("FRS Widget warning: No ID was specified for the form");
				}
				return; // NO ID Dep
			}

			if(!data){
				data = {};
			}

			if(inst.profileID){
				data.profileID = inst.profileID;
			}
			data.formID = inst.formID;

			$w.api.forms.view(data,function(data){
				me.render(target,inst,data);
			});
		};
	};
	Form.prototype = new Templatable("frsForm");
	$w.formWidget = new Form();
	$w.formWidget.initialized = false;
	$w.formWidget.uuid = new Date().getTime();

	function Dialog(){
		var me = this;
		this.dialog = null;
		this.overlay = null;
		this.isVisible = false;
		this.prompt = function(title, message, buttons){
			if(this.isVisible){
				me.dialog.close();
			}

			me._render(title, message, buttons);
			me.overlay.show();
			me.dialog.show();
			me.isVisible = true;
		};
		this.close = function(){
			me.overlay.hide();
			me.dialog.remove();
			me.dialog = null;
			me.isVisible = false;
		}
		this._render = function(title, message, buttons){
			var i = 0,
				 content = null,
				 btn = null,
				 dbtns = null,
				 hbtn = null;

			if(!me.overlay){
				me.overlay = $("<div class=\"frs-dialog-overlay\"></div>");
				$("body").append(me.overlay);
			}

			if(me.dialog){
				me.dialog.remove();
			}

			me.dialog = $("<div class=\"frs-dialog\"></div>");
			content = $("<div class=\"frs-dialog-content\"></div>");
			me.dialog.append(content);

			if(title){
				content.append("<div class=\"frs-dialog-title\">" + title + "</div>");
			}

			if(message){
				content.append("<div class=\"frs-dialog-message\">" + message + "</div>");
			}

			dbtns = $("<div class=\"frs-dialog-btns\"></div>");
			if(buttons && (buttons.length > 0)){
				for(i=0;i<buttons.length;i++){
					btn = buttons[i];
					hbtn = $("<button type=\"button\" class=\"frs-btn\">" + btn.text + "</button>");

					if(typeof btn.callback == "function"){
						hbtn.click(btn.callback);
					} else if(typeof btn.callback == "string"){
						switch(btn.callback){
							case "close" :
								hbtn.click(function(){
									$w.dialogWidget.close();
								});
								break;
						}
					}

					dbtns.append(hbtn);
				}
			} else {
				hbtn = $("<button type=\"button\" class=\"frs-btn\">Ok</button>");
				hbtn.click(function(){
					$w.dialogWidget.close();
				});
				dbtns.append(hbtn);
			}
			content.append(dbtns);

			$("body").append(me.dialog);
			me.dialog.css("margin-top", (-1 * (me.dialog.outerHeight()/2)) + "px");
		};
		this.init = function(){
			me.initialized = true;

			$("body").on("keydown", function(e){
				if(e.which == 27) // escape
				{
					me.close();
				}
			});
		};

		this.init();
	};
	$w.dialogWidget = new Dialog();
	$w.dialogWidget.initialized = false;
	$w.dialogWidget.uuid = new Date().getTime();

	function QuickLead()
	{
		var me = this;
		this.modes = {
			step1 : "step1",
			step2 : "step2",
			oneStep : "oneStep",
			success : "success"
		};
		this.cookies = { 
			property: "frs-quick-lead-property",
			leadID : "frs-quick-lead-lead-id"
		}
		this.fields = [
			/*
			{ label: "Property Type", name: "propertyType", type: "select", isRequired: true, options : [
				{ name : "Single Family Home", value : "1" },
				{ name : "Condo/Apartment/Townhouse", value : "2" }
			]},*/
			{ label: "Property Information", type: "label" },
			{ label: "Beds", name: "beds", type: "select", maxLength: 20, isRequired : true, options : [ 
				{ name : "1", value : "1" },
				{ name : "2", value : "2" },
				{ name : "3", value : "3" },
				{ name : "4", value : "4" },
				{ name : "5", value : "5" },
				{ name : "6", value : "6" },
				{ name : "7", value : "7" },
				{ name : "8", value : "8" },
				{ name : "9", value : "9" },
				{ name : "10", value : "10" }
			]},
			{ label: "Baths", name: "baths", type: "select", maxLength: 20, isRequired : true, options : [ 
				{ name : "1", value : "1" },
				{ name : "1.5", value : "1.5" },
				{ name : "2", value : "2" },
				{ name : "2.5", value : "2.5" },
				{ name : "3", value : "3" },
				{ name : "3.5", value : "3.5" },
				{ name : "4", value : "4" },
				{ name : "4.5", value : "4.5" },
				{ name : "5", value : "5" },
				{ name : "5.5", value : "5.5" },
				{ name : "6", value : "6" },
				{ name : "6.5", value : "6.5" },
				{ name : "7", value : "7" },
				{ name : "7.5", value : "7.5" },
				{ name : "8", value : "8" },
				{ name : "8.5", value : "8.5" },
				{ name : "9", value : "9" },
				{ name : "9.5", value : "9.5" },
				{ name : "10", value : "10" }
			]},
			{ label: "Square Feet", name: "area", type: "text", maxLength: 20, isRequired : true },
			{ label: "Contact Information", type: "label" },
			{ label: "Name", name : "contactName", type : "text", maxLength : 100, isRequired : true },
			{ label: "Email", name : "contactEmail", type : "email", maxLength : 100, isRequired : true },
			{ label: "Phone", name : "contactPhone", type: "text", maxLength: 25, isRequired: true },
			{ label: "Address", name : "contactAddress", type: "address", isRequired : true },
			{ label: "Unit/Suite/Apt #", name : "contactAddress2", type: "text", maxLength: 100, isRequired : false },
			/*{ label: "City", name : "contactCity", type: "text", maxLength: 100, isRequired : true },
			{ label: "State", name : "contactStateCode", type: "states", isRequired : true },
			{ label: "Postal Code", name : "contactPostalCode", type: "text", maxLength: 25, isRequired: true },
			{ label: "Comments", name : "comments", type: "textarea", isRequired : false }
			*/
		];
		this.states = [
			{ name : "Alaska", code : "AK" },
			{ name : "Alabama", code : "AL" },
			{ name : "Arkansas", code : "AR" },
			{ name : "Arizona", code : "AZ" },
			{ name : "California", code : "CA" },
			{ name : "Colorado", code : "CO" },
			{ name : "Connecticut", code : "CT" },
			{ name : "Washington, D.C.", code : "DC" },
			{ name : "Delaware", code : "DE" },
			{ name : "Florida", code : "FL" },
			{ name : "Georgia", code : "GA" },
			{ name : "Guam", code : "GU" },
			{ name : "Hawaii", code : "HI" },
			{ name : "Iowa", code : "IA" },
			{ name : "Idaho", code : "ID" },
			{ name : "Illinois", code : "IL" },
			{ name : "Indiana", code : "IN" },
			{ name : "Kansas", code : "KS" },
			{ name : "Kentucky", code : "KY" },
			{ name : "Louisiana", code : "LA" },
			{ name : "Massachusetts", code : "MA" },
			{ name : "Maryland", code : "MD" },
			{ name : "Maine", code : "ME" },
			{ name : "Michigan", code : "MI" },
			{ name : "Minnesota", code : "MN" },
			{ name : "Missouri", code : "MO" },
			{ name : "Mississippi", code : "MS" },
			{ name : "Montana", code : "MT" },
			{ name : "North Carolina", code : "NC" },
			{ name : "North Dakota", code : "ND" },
			{ name : "Nebraska", code : "NE" },
			{ name : "New Hampshire", code : "NH" },
			{ name : "New Jersey", code : "NJ" },
			{ name : "New Mexico", code : "NM" },
			{ name : "Nevada", code : "NV" },
			{ name : "New York", code : "NY" },
			{ name : "Ohio", code : "OH" },
			{ name : "Oklahoma", code : "OK" },
			{ name : "Oregon", code : "OR" },
			{ name : "Pennsylvania", code : "PA" },
			{ name : "Rhode Island", code : "RI" },
			{ name : "South Carolina", code : "SC" },
			{ name : "South Dakota", code : "SD" },
			{ name : "Tennessee", code : "TN" },
			{ name : "Texas", code : "TX" },
			{ name : "Utah", code : "UT" },
			{ name : "Virginia", code : "VA" },
			{ name : "Vermont", code : "VT" },
			{ name : "Washington", code : "WA" },
			{ name : "Wisconsin", code : "WI" },
			{ name : "West Virginia", code : "WV" },
			{ name : "Wyoming", code : "WY" }
		];
		this.componentMap = {
			street_number : 'short_name',
			route: 'long_name',
			locality : 'long_name',
			administrative_area_level_1 : 'short_name',
			country : 'long_name',
			postal_code : 'short_name'
		};
		this._init = function(target,inst){
			if(target.tagName == "FORM"){
				inst.$form = $(target);
				inst.isInline = me._get(inst, "isInline");
			} else {
				inst.isInline = false;
				inst.$form = $("<form></form>");
				$(target).append(inst.$form);
			}
			inst.$root = $("<div class=\"frs-widget quick-lead\"></div>");
			inst.$form.append(inst.$root);
			inst.profileID = me._get(inst,"profileId") || profileID;
			
			inst.$form.submit(function(e){
				me.onSubmit(target, inst, e);
			});
			
			this._show(target,inst);
		};
		this._show = function(target, inst, e){
			var data = null,
				mode = this._get(inst, "mode") || null;
				//property = $w.util.getCookie("frs-quick-lead-address");
			
			if(mode == this.modes.step2){
				this.renderStep2(target, inst, data);
			}else {
				this.renderStep1(target, inst, data);
			}
		};
		this.validateStep1 = function(target, inst){
			var inst = inst || this._getInst(target);
			
			return (inst.propertyAddress) ? true : false;
		};
		this.validateStep2 = function(target, inst, data){
			var inst = inst || this._getInst(target),
				errors = {},
				isValid = true;
			if(!$w.util.hasValue(data.beds)){
				isValid = false;
			}
			if(!$w.util.hasValue(data.baths)){
				isValid = false;
			}
			if(!$w.util.hasValue(data.area)){
				isValid = false;
			}else{
				if(!parseInt(data.area, 10)){
					isValid = false;
					$w.dialogWidget.prompt("Square Footage Invalid", "Square Footage must be an integer.");
				}
			}
			if(!$w.util.hasValue(data.contactName)){
				isValid = false;
			}
			if(!$w.util.hasValue(data.contactEmail)){
				isValid = false;
			}
			if(!$w.util.hasValue(data.contactPhone)){
				isValid = false;
			}
			
			if(!inst.contactAddress){
				isValid = false;
				$w.dialogWidget.prompt("Address Required", "Please make sure you selected an address.");
			}
			/*
			if(!$w.util.hasValue(data.contactAddress)){
				isValid = false;
			}
			if(!$w.util.hasValue(data.contactCity)){
				isValid = false;
			} 
			if(!$w.util.hasValue(data.contactStateCode)){
				isValid = false;
			}
			if(!$w.util.hasValue(data.contactPostalCode)){
				isValid = false;
			}
			*/
			return isValid;
		};
		this.getLeadID = function(target, inst){
			var queryIndex = null,
				url = null,
				qs = null,
				leadID = $w.util.getCookie(me.cookies.leadID);
			
			if(!leadID){
				url = document.location.href;
				queryIndex = url.indexOf('?');
				
				if(queryIndex >= 0){
					qs = url.substring(queryIndex + 1);
					qs = $w.util.queryStringToObject(qs);
					
					if(qs.frsLeadID){
						leadID = qs.frsLeadID;
					}
				}
			}
			return leadID;
		};
		this.getProperty = function(target,inst){
			var propertyAddress = null,
				url = null,
				queryIndex = null,
				qs = null;
			if(JSON){
				propertyAddress = JSON.parse($w.util.getCookie(me.cookies.property));
			
				if(!propertyAddress){
					url = document.location.href;
					queryIndex = url.indexOf('?');
					
					if(queryIndex >= 0){
						qs = url.substring(queryIndex + 1);
						qs = $w.util.queryStringToObject(qs);
						
						if(qs.frsAddress){
							propertyAddress = JSON.parse(qs.frsAddress);
						}
					}
				}
			}
			return propertyAddress;
		};
		this.onSubmit = function(target, inst, e){
			var inst = inst || this._getInst(target),
				array = null,
				arrayItem = null,
				i = 0,
				data = {};
			e.preventDefault();
			
			if(inst.mode == this.modes.step1){
				if(me.validateStep1(target,inst)){
					$w.api.marketing.step1({
						propertyAddress: inst.propertyAddress.address,
						propertyCity: inst.propertyAddress.city,
						propertyStateCode : inst.propertyAddress.state,
						propertyPostalCode : inst.propertyAddress.postalCode,
						profileID: inst.profileID
					}, function(data){
						var url = null,
							mode = null,
							cookie = null,
							qs = null;
						if(data.hasError){
							$w.dialogWidget.prompt("Error Occurred", "Please make sure you selected an address.");
							return;
						}
						
						inst.leadID = data.leadID;
						cookie = me._get(inst, "cookie") || true;
						if(cookie == "no"){
							cookie = false;
						}
						
						if(cookie){
							if(JSON){
								$w.util.setCookie(me.cookies.property, JSON.stringify(inst.propertyAddress));
							}
							$w.util.setCookie(me.cookies.leadID, inst.leadID);
						}else{
							qs = $w.util.objectToQueryString({ frsLeadID : inst.leadID, frsAddress : JSON.stringify(inst.propertyAddress) });
						}
						// Succces
						url = me._get(inst, "successUrl") || null;
						mode = me._get(inst, "mode") || null;
						
						if(url){
							if(cookie){
								window.location.href = url;
							}else{
								if(url.indexOf("?") >= 0){
									window.location.href = url + "&" + qs;
								}else{
									window.location.href = url + "?" + qs;
								}
							}
						}else{
							if(!mode){
								me.renderStep2(target, inst);
							}
						}
					});
				}
				else
				{
					$w.dialogWidget.prompt("Error Occurred", "Please make sure you selected an address.");
				}
			}else if(inst.mode == this.modes.step2){
				data = {};
				array = inst.$form.serializeArray();
				for(i=0;i<array.length;i++){
					arrayItem = array[i];
					data[arrayItem.name] = arrayItem.value;
				}
				data.profileID = inst.profileID;
				data.leadID = me.getLeadID();
				data.contactAddress = inst.contactAddress.address;
				data.contactCity = inst.contactAddress.city;
				data.contactStateCode = inst.contactAddress.state;
				data.contactPostalCode = inst.contactAddress.postalCode;
				
				if(me.validateStep2(target,inst,data)){					
					$w.api.marketing.step2(data, function(data){
						if(data.hasError){
							$w.dialogWidget.prompt("Error Occurred", "Please make sure all required fields are completed.");
							return;
						}
						$(inst.element).trigger('frs-quick-lead-step-2-success');
						me.renderSuccess(target, inst);
					});
				}
				else
				{
					$w.dialogWidget.prompt("Error Occurred", "Please make sure all required fields are completed.");
				}
			}
		};
		this.onPlaceChange = function(target,inst){
			var i = 0,
				place = inst.autocomplete.getPlace();
				
			inst.propertyAddress = me.parseAddress(place);
		}; 
		this.onPlaceChangeStep2 = function(target,inst,autocomplete){
			var place = autocomplete.getPlace();
			inst.contactAddress = me.parseAddress(place);
					
			/*
			$("input[name='contactAddress']",inst.$form).val(inst.contactAddress.address);
			$("input[name='contactCity']",inst.$form).val(inst.contactAddress.city);
			$("select[name='contactStateCode']",inst.$form).val(inst.contactAddress.state);
			$("input[name='contactPostalCode']",inst.$form).val(inst.contactAddress.postalCode);
			*/
			$("input[name='contactAddress2']",inst.$form).focus();
		};
		this.parseAddress = function(place){
			var addressType = null,
				property = {},
				i = 0,
				j = 0;
			if(place.address_components){
				for(i = 0; i < place.address_components.length; i++){
					var addressType = place.address_components[i].types[0];
					
					switch(place.address_components[i].types[0]){
						case "street_number":
							if(!property.address){
								property.address = place.address_components[i][me.componentMap[addressType]];
							}else{
								property.address = place.address_components[i][me.componentMap[addressType]] + ' ' + property.address;
							}
							break;
						case "route":
							if(!property.address){
								property.address = place.address_components[i][me.componentMap[addressType]];
							} else { 
								property.address +=  " " + place.address_components[i][me.componentMap[addressType]];
							}
							break;
						case "locality":
							property.city = place.address_components[i][me.componentMap[addressType]];
							break;
						case "administrative_area_level_1":
							property.state = place.address_components[i][me.componentMap[addressType]];
							break;	
						case "postal_code":
							property.postalCode = place.address_components[i][me.componentMap[addressType]];
							break;
					}
				}
				return property;
			}
			else
			{
				if(console && console.warn){
					console.warn("Invalid Location");
				}
			}
		};
		this.renderStep1 = function(target,inst,data){
			var inst = inst || this._getInst(target),
				placeholderText = this._get(inst, "placeholder") || "What is your address?",
				buttonText = this._get(inst, "button") || "Submit";
			
			inst.mode = me.modes.step1;
			inst.$root.empty().removeClass("step-2").addClass("step-1"); 
			inst.$addressLabel = $("<label for=\"" + inst.id +  "_addressTypeAhead\" class=\"frs-quick-lead-address-label\">Enter Rental Property Address</label>"); 
			inst.$address = $("<input type=\"text\" name=\"address\" class=\"frs-quick-lead-address\" placeholder=\"" + placeholderText + "\" id=\"" + inst.id +  "_addressTypeAhead\"/>");
			
			// Attach Google Auto Complete
			$w.waitFor.googleMaps(function(){
				inst.autocomplete = new google.maps.places.Autocomplete(
					inst.$address.get(0),
					{ types: ['address'] }
				);
				inst.autocomplete.addListener('place_changed', function(){
					me.onPlaceChange(target, inst);
				});
				inst.$root.append(inst.$addressLabel);
				inst.$root.append(inst.$address);
				inst.$root.append("<button type=\"submit\" class=\"frs-btn\">" + buttonText + "</button>");
			});
			
			inst.$address.on('keydown', function(e){
				if((e.which == 13) && $('.pac-container:visible').length){
					e.preventDefault();
					return false;
				}
			});
		};
		this.renderStep2 = function(target, inst, data){
			var inst = inst || this._getInst(target),
				i = 0,
				j = 0,
				items = [],
				$label = null,
				$item = null,
				$container = null,
				field = null,
				id = inst.id,
				buttonText = this._get(inst, "button") || "Submit",
				property = null;
			property = me.getProperty(target, inst);
			inst.mode = me.modes.step2;
			inst.$root.empty().removeClass("step-1").addClass("step-2");
			if(property){
				/*
				inst.$root.append(
					"<div class=\"frs-quick-lead-property\">" + 
						"<label>Property Address</label>" + 
						property.address + "<br>" + 
						property.city + " " + property.state + " " + property.postalCode + "<br>" + 
					"</div>"
				);
				*/
				
				$(".frs-quick-lead-address").text(property.address);
				$(".frs-quick-lead-address-full").text(property.address + " " + property.city + ", " + property.state + " " + property.postalCode);
			}
			
			
			if(!inst.$step2){
				for(i = 0; i < me.fields.length; i++){
					field = me.fields[i];
					$container = $("<div class=\"frs-quick-lead-field\"></div>");
					$container.addClass("frs-quick-lead-step-2-" + field.name + "-container");
					
					if(field.type == "label")
					{
						$item = $("<div class=\"frs-quick-lead-label\">" + field.label + "</div>");
					}
					else
					{
						$label = $("<label for=\"" + id + "_" + field.name + "\">" + field.label + "</label>"); 
						if(field.type == "address"){
							
							$item = $("<input type=\"text\"/>");
							$item.addClass("frs-quick-lead-step-2-" + field.name);
							$item.attr("name", field.name);
							$item.attr("id", id + "_" + field.name);
							if(field.isRequired){
								$item.attr("required", true);
							}
							if(field.maxLength){
								$item.attr("maxlength",  field.maxLength);
							}
							// Attach Google Auto Complete
							$w.waitFor.googleMaps(function(){
								inst.autocompleteStep2 = new google.maps.places.Autocomplete(
									$item.get(0),
									{ types: ['address'] }
								);
								inst.autocompleteStep2.addListener('place_changed', function(){
									me.onPlaceChangeStep2(target, inst, inst.autocompleteStep2);
								});
							});
							
							$item.on('keydown', function(e){
								if((e.which == 13) && $('.pac-container:visible').length){
									e.preventDefault();
									return false;
								}
							});
						}else if(field.type == "text"){
							$item = $("<input type=\"text\"/>");
							$item.addClass("frs-quick-lead-step-2-" + field.name);
							$item.attr("name", field.name);
							$item.attr("id", id + "_" + field.name);
							if(field.isRequired){
								$item.attr("required", true);
							}	
							if(field.maxLength){
								$item.attr("maxlength",  field.maxLength);
							}
						}else if(field.type == "email"){
							$item = $("<input type=\"email\"/>");
							$item.addClass("frs-quick-lead-step-2-" + field.name);
							$item.attr("name", field.name);
							$item.attr("id", id + "_" + field.name);
							if(field.isRequired){
								$item.attr("required", true);
							}
							if(field.maxLength){
								$item.attr("maxlength",  field.maxLength);
							}
						}else if(field.type == "states"){
							$item = $("<select></select>");
							$item.addClass("frs-quick-lead-step-2-" + field.name);
							$item.attr("name", field.name);
							$item.attr("id", id + "_" + field.name);
							if(field.isRequired){
								$item.attr("required", true);
							}
							$item.append("<option>Select One...</option>");
							
							for(j = 0; j < me.states.length; j++){
								$item.append("<option value=\"" + me.states[j].code + "\">" + me.states[j].name + "</option>");
							}
						}else if(field.type == "textarea"){
							$item = $("<textarea></textarea>");
							$item.addClass("frs-quick-lead-step-2-" + field.name);
							$item.attr("name", field.name);
							$item.attr("id", id + "_" + field.name);
							if(field.isRequired){
								$item.attr("required", true);
							}
						}else if (field.type == "select"){
							$item = $("<select></select>");
							$item.addClass("frs-quick-lead-step-2-" + field.name);
							$item.attr("name", field.name);
							$item.attr("id", id + "_" + field.name);
							$item.append("<option>Select One</option>");
							$(field.options).each(function(index, item){
								var $option = $("<option></option>");
								
								$option.attr("value", item.value);
								$option.text(item.name);
								
								$item.append($option);
							});
							if(field.isRequired){
								$item.attr("required", true);
							}
						}
						$container.append($label);
					}
					$container.append($item);
					items.push($container);
				}
				$(items).each(function(index, item){
					inst.$root.append(item);
				});
				
				inst.$root.append("<button type=\"submit\" class=\"frs-btn\">" + buttonText + "</button>");
			}
		};
		this.renderSuccess = function(target, inst){
			inst.mode = me.modes.success;
			inst.$root.empty().removeClass("step-1").removeClass("step-2").addClass("step-success"); 
		
			inst.$root.append("<h3>Thank you for your inquiry!</h3><p>Your information has been submitted and your FREE Rental Analysis will be emailed to you shortly.</p>");
		};
		this.renderOneStep = function(){
		
		};
		this.init = function(){
			me.initialized = true;
		
		};
	};
	QuickLead.prototype = new Widget("frsQuickLead");
	$w.quickLeadWidget = new QuickLead();
	$w.quickLeadWidget.initialized = false;
	$w.quickLeadWidget.uuid = new Date().getTime();
	
	function CallLead()
	{
		var me = this;
		// Check if a lead has been submitted if so continue to show the lead phone number
		function checkForCookie(){
			var leadID = $w.util.getCookie($w.quickLeadWidget.cookies.leadID),
				data = {};
			if(leadID){
				
				data.profileID = profileID;
				
				if($w.settings && $w.settings.callLead && $w.settings.callLead.profileID){
						data.profileID = $w.settings.callLead.profileID;
					}
				
				$w.api.marketing.number(data, function(data){
					var delimiter = ".",
						text = data.number.replace(/(\d{3})(\d{3})(\d{4})/, '$1' + delimiter + '$2' + delimiter + '$3');
					
					if($w.settings && $w.settings.callLead && $w.settings.callLead.delimiter){
						delimiter = $w.settings.callLead.delimiter;
					}
					
					$w.callLeadWidget.numberReplaced = true;
					$(".frs-phone-number").text(text);
				});
			}
		};
		this._init = function(target,inst){
				
			inst.profileID = me._get(inst,"profileId") || profileID;
			inst.delimiter = me._get(inst, "delimiter") || "-";
			this._show(target,inst);
		};
		this._show = function(target, inst, e){
			var inst = inst || this._getInst(target),
				data = {},
				text = null;
			
			data.profileID = inst.profileID;
			
			$w.api.marketing.number(data, function(data){
				text = data.number.replace(/(\d{3})(\d{3})(\d{4})/, '$1' + inst.delimiter + '$2' + inst.delimiter + '$3');
				$(inst.element).text(text);
				
				// Replace all Phone Numbers
				if(!$w.callLeadWidget.numberReplaced){
					$w.callLeadWidget.numberReplaced = true;
					console.dir("got here");
					$(".frs-phone-number").text(text);
				}
			});
			
		};
		
		checkForCookie();
	};
	CallLead.prototype = new Widget("frsCallLead");
	$w.callLeadWidget = new CallLead();
	$w.callLeadWidget.initialized = false;
	$w.callLeadWidget.numberReplaced = false;
	$w.callLeadWidget.uuid = new Date().getTime();
	
	$(document).ready(function(){
		frsWidgets.init();

		$("*[data-frs='properties']").each(function(){
			var target = this,
				options = {};
			$w.propertiesWidget._tryAttach(target,options);
		});

		$("*[data-frs='featured']").each(function(){
			var target = this,
				options = {};
			$w.featuredPropertiesWidget._tryAttach(target,options);
		});

		$("*[data-frs='new']").each(function(){
			var target = this,
				options = {};
			$w.newPropertiesWidget._tryAttach(target,options);
		});

		$("*[data-frs='openHouses']").each(function(){
			var target = this,
				options = {};
			$w.openHouseWidget._tryAttach(target,options);
		});

		$("*[data-frs='rented']").each(function(){
			var target = this;
				options = {};
			$w.rentedWidget._tryAttach(target,options);
		});

		$("*[data-frs='profiles']").each(function(){
			var target = this;
				options = {};
			$w.profilesWidget._tryAttach(target,options);
		});

		$("*[data-frs='form']").each(function(){
			var target = this,
				options = {};
			$w.formWidget._tryAttach(target,options);
		});
		
		$("*[data-frs='quick-lead']").each(function(){
			var target = this,
				options = {};
			$w.quickLeadWidget._tryAttach(target, options);
		});
		
		$("*[data-frs='call-lead']").each(function(){
			var target = this,
				options = {};
			$w.callLeadWidget._tryAttach(target, options);
		});

		$("body").on("click","*[data-frs='tabs'] .frs-tab-link",function(e){
			var $tabs = $(this).parents("*[data-frs='tabs']").first(),
				target = ($tabs.length > 0) ? $tabs[0] : false,
				options = {};

			e.preventDefault();

			if(target){
				if($w.tabsWidget._tryAttach(target,options)){
					$w.tabsWidget._onTabClick(target,false,this);
				}
			}
		}).on("click","*[data-frs='toggle']",function(e){
			var target = this,
				options = {};

			if($w.togglerWidget._tryAttach(target,options)){
				$w.togglerWidget._onClick(target);
			}
		});
	});
})(window.jQuery,window._,[ "www.freerentalsite.com", "www.freecommercialsite.com", "www.freerealestatesite.com", "www.freevacationrentalsite.com" ],"{5526C988-C0B1-401D-9AC0-91D4BCC7D0D5}",{ propertiesUrl : "/props", rentedUrl : "/rented" });
