"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var y=c(function(K,x){
var k=require('@stdlib/blas-base-scopy/dist').ndarray,s=5;function z(i,r,u,t,o,e,q,j){var n,a,f,v;if(i<=0)return e;if(r===1)return k(i,u,t,o,e,q,j);if(n=o,a=j,t===1&&q===1){if(f=i%s,f>0)for(v=0;v<f;v++)e[a]=r*u[n],n+=t,a+=q;if(i<s)return e;for(v=f;v<i;v+=s)e[a]=r*u[n],e[a+1]=r*u[n+1],e[a+2]=r*u[n+2],e[a+3]=r*u[n+3],e[a+4]=r*u[n+4],n+=s,a+=s;return e}for(v=0;v<i;v++)e[a]=r*u[n],n+=t,a+=q;return e}x.exports=z
});var E=c(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(i,r,u,t,o,e){return A(i,r,u,t,R(i,t),o,e,R(i,e))}_.exports=B
});var b=c(function(P,O){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),D=y();C(M,"ndarray",D);O.exports=M
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=b(),m,g=G(F(__dirname,"./native.js"));H(g)?m=I:m=g;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
