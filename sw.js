if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),r={module:{uri:n},exports:c,require:a};s[n]=Promise.all(o.map((e=>r[e]||a(e)))).then((e=>(t(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/portfolio//_next/app-build-manifest.json",revision:"ace336696289118188cad148b0cc06f1"},{url:"/portfolio//_next/static/2bp3MmujUlUMdw80SuU4E/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/portfolio//_next/static/2bp3MmujUlUMdw80SuU4E/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/portfolio//_next/static/chunks/139-04ee411506fd195b.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/2443530c-607c6266bca82d0f.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/749-73fdb57ad67b96a6.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/7ea90720-8cb4e2714b276786.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/app/layout-6bfdcf4a134b7e5e.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/app/page-2c35746affe273f3.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/c60e6be0-344af379b2bc8a26.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/main-05706663032a47bd.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/main-app-0fb5e4edeaeb9b45.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/portfolio//_next/static/chunks/webpack-e04d956c120723bc.js",revision:"2bp3MmujUlUMdw80SuU4E"},{url:"/portfolio//_next/static/css/011d829062655983.css",revision:"011d829062655983"},{url:"/portfolio//_next/static/css/79e6e6423df4d219.css",revision:"79e6e6423df4d219"},{url:"/portfolio//_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/portfolio//_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/portfolio//_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/portfolio//_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/portfolio//_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/portfolio//_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/portfolio//_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/portfolio/cupertino-catalog-icon.png",revision:"d08a8cfab45dfcb09708e54e4b192037"},{url:"/portfolio/icon-192x192.png",revision:"b99e37d55032339deb783116a8c115db"},{url:"/portfolio/icon-256x256.png",revision:"5d0175cecc2ed32105627c1808359363"},{url:"/portfolio/icon-384x384.png",revision:"360ddf7b6c9cd8908a65d2d4c98355d9"},{url:"/portfolio/icon-512x512.png",revision:"9de9b873ef765b0f4de1cfc53ef67a8f"},{url:"/portfolio/manifest.json",revision:"6ce102d7649517ed1e370baeec25be1e"},{url:"/portfolio/mokuren.png",revision:"5123f721d0a19bd7bfdfaa6ced16ff70"},{url:"/portfolio/score-box-icon.webp",revision:"03c6067d358d8bdb2e828c213a11f979"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/portfolio",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:o})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
