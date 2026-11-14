import{e as f}from"./index-BwHcbAZ-.js";import{l as d,a as o}from"./index-B85Q0XOD.js";/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};l.node;const h=f(l);function v(r,s){const n=e=>!s.lessons[e.id],a=d(r.favoritePath).find(n);if(a)return a;const i=[...o].sort((e,t)=>e.level-t.level).find(n);if(i)return i;const c=o.find(e=>{var t;return(((t=s.lessons[e.id])==null?void 0:t.bestStars)??0)<3});return c||o[Math.floor(Math.random()*o.length)]}function p(r){return Object.values(r.lessons).reduce((s,n)=>s+n.bestStars,0)}export{h as F,v as r,p as t};
