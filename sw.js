if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-eedcc1fe"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/apple-icon-180x180.png",revision:"89f1ad454bc378862c7768e3c66d3d73"},{url:"assets/images/avatar.jpg",revision:"3a1d7bd016b21d0be367eb0864649d92"},{url:"assets/images/favicon-96x96.png",revision:"e8607cbaa8aa139a36ce9eccdc621e1b"},{url:"assets/images/og-image.en_US.jpg",revision:"cf5b31f7495726e4b1e666cee0b28b08"},{url:"assets/images/og-image.ru_RU.jpg",revision:"547ecf58dfd1fe3f57173699b0725f38"},{url:"assets/images/unicorn.svg",revision:"b3aad53e7d8e2b72596bc32c5677994f"},{url:"assets/photos/1.jpg",revision:"f7b28a0c339ff55079545c3f70c2b1a7"},{url:"assets/photos/2.jpg",revision:"3ef331b54c8f42590d7128305c0ce263"},{url:"assets/photos/3.jpg",revision:"c183c03c4ccb58748a5297d9b0543c31"},{url:"assets/photos/4.jpg",revision:"ee986fc7ec1b8592d373e82838e49577"},{url:"assets/photos/5.jpg",revision:"4affb3d5fdaf513c6319794a810bc03f"},{url:"assets/photos/6.jpg",revision:"1dc4228ec9e0455e575890470a40ebe7"},{url:"assets/stylesheets/base.css",revision:"4d9854ac7057dddd17c7e31b73d5a96a"},{url:"favicon.ico",revision:"cf8633f9aab39e441a8a2eea76552832"},{url:"index.html",revision:"65f6543d46e7d2244ba199fefb4c4e7a"},{url:"ru-ru/index.html",revision:"dfdc5e2231d3ef5972773b931be5ef2c"}],{})}));
//# sourceMappingURL=sw.js.map
