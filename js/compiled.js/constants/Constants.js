!function r(e,n,t){function o(u,f){if(!n[u]){if(!e[u]){var a="function"==typeof require&&require;if(!f&&a)return a(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[u]={exports:{}};e[u][0].call(s.exports,function(r){var n=e[u][1][r];return o(n?n:r)},s,s.exports,r,e,n,t)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(r,e){"use strict";var n=function(r){var e,n={};if(!(r instanceof Object)||Array.isArray(r))throw new Error("keyMirror(...): Argument must be an object.");for(e in r)r.hasOwnProperty(e)&&(n[e]=e);return n};e.exports=n},{}],2:[function(r,e){var n=r("keymirror");e.exports={ActionTypes:n({INIT_MAZE:null,UPDATE_CONFIG:null,UPDATE_POSITION:null})}},{keymirror:1}]},{},[2]);
//# sourceMappingURL=../static/constants/Constants.js.map