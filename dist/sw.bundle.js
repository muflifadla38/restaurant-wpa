if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const r=e=>n(e,o),f={module:{uri:o},exports:s,require:r};i[o]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(a(...e),s)))}}define(["./workbox-39f042ad"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"618.bundle.js",revision:"090f3ae7901fba35b6b8967cd7dec222"},{url:"app.webmanifest",revision:"6e22b03b20e05646ec52892c209b97f9"},{url:"app~4e5ec22b.bundle.js",revision:"b9ee31731de6ed5023ea664fd10e6ccb"},{url:"app~a51fa3f5.bundle.js",revision:"1f702d98f7e09979edc781d1776e6915"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/icon_x128.png",revision:"e6838270e424e71c4bb505810fe11fee"},{url:"icons/icon_x192.png",revision:"d2b3c40aaaf261623a581bee69ed4ebc"},{url:"icons/icon_x384.png",revision:"a1dfc47187ed2ec97c30dd52ec6ad375"},{url:"icons/icon_x48.png",revision:"fc98cebac9bcbc3783ea96b865c454a4"},{url:"icons/icon_x512.png",revision:"254a9d7bbcd7c235f8f6f83c3a629c54"},{url:"icons/icon_x72.png",revision:"fcd791f02acc17284c75569c16e2606d"},{url:"icons/icon_x96.png",revision:"c0dd9aaeabb62abd0f2805a6394a3f83"},{url:"images/favicon.png",revision:"7b39263eb42fed3baf61339699085a2f"},{url:"images/logo.png",revision:"f1cfa3357482e1b53ff9bb02aecbf416"},{url:"index.html",revision:"a0083d1469f8acbd93849a3d7c3a1c6a"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"restaurant-api-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
