import{s as p}from"./pathSampler-BrvlWSTl.js";const s="#2f2f36";function h(e){const t=e.replace("#",""),i=parseInt(t.length===3?t.split("").map(r=>r+r).join(""):t,16);return[i>>16&255,i>>8&255,i&255]}function $(e){const[t,i,r]=h(e);return(.299*t+.587*i+.114*r)/255}const c=e=>e.replace(/"/g,"&quot;");function d(e,t=7){return`
  <filter id="${e}-pencil" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="${t}" result="warp"/>
    <feDisplacementMap in="SourceGraphic" in2="warp" scale="3.2" xChannelSelector="R" yChannelSelector="G" result="wobble"/>
    <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="${t+3}" result="grain"/>
    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 2.1" result="grainMask"/>
    <feComposite in="wobble" in2="grainMask" operator="in"/>
  </filter>
  <filter id="${e}-shade" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="${t}" result="warp"/>
    <feDisplacementMap in="SourceGraphic" in2="warp" scale="3.2" xChannelSelector="R" yChannelSelector="G" result="wobble"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="${t+11}" result="grain"/>
    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.6 2.2" result="grainMask"/>
    <feComposite in="wobble" in2="grainMask" operator="in"/>
  </filter>
  <pattern id="${e}-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
    <line x1="0" y1="0" x2="0" y2="5" stroke="${s}" stroke-width="1.1"/>
  </pattern>
  <pattern id="${e}-cross" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-42)">
    <line x1="0" y1="0" x2="0" y2="5" stroke="${s}" stroke-width="1"/>
  </pattern>
  <filter id="${e}-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter>
  <filter id="${e}-paper" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="2" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.955  0 0 0 0 0.94  0 0 0 -0.25 0.28"/>
    <feComposite in2="SourceGraphic" operator="over"/>
  </filter>`}const f=e=>p(e.d).length<40;function y(e,t,i){let r="";for(const n of t){if(n.guide||!n.fill)continue;const a=c(n.d),l=$(n.fill);if(i==="color"){r+=`<path d="${a}" fill="${n.fill}" fill-opacity="0.9" filter="url(#${e}-shade)"/>`,l<.85&&(r+=`<path d="${a}" fill="url(#${e}-hatch)" opacity="${(.08+(1-l)*.12).toFixed(2)}"/>`);continue}const o=1-l;if(l>.97&&!f(n)){r+=`<path d="${a}" fill="#faf9f6"/>`;continue}if(l>.97){r+=`<path d="${a}" fill="#fbfaf7"/>`;continue}r+=`<path d="${a}" fill="#faf9f6"/>`,r+=`<path d="${a}" fill="${s}" fill-opacity="${(.03+o*.36).toFixed(2)}" filter="url(#${e}-shade)"/>`,o>.2&&(r+=`<path d="${a}" fill="url(#${e}-hatch)" opacity="${Math.min(.85,o*.75).toFixed(2)}" filter="url(#${e}-shade)"/>`),o>.62&&(r+=`<path d="${a}" fill="url(#${e}-cross)" opacity="${Math.min(.9,(o-.45)*1.3).toFixed(2)}" filter="url(#${e}-shade)"/>`),f(n)||(r+=k(e,n,`${g++}`,.16+o*.22))}return r}let g=0;function k(e,t,i,r){const n=`${e}-m${i}`,a=c(t.d);return`<mask id="${n}" maskUnits="userSpaceOnUse" x="-50" y="-50" width="500" height="500"><path d="${a}" fill="#fff"/><path d="${a}" fill="#000" transform="translate(-11 -13)" filter="url(#${e}-soft)"/></mask><g mask="url(#${n})" filter="url(#${e}-shade)"><rect x="-50" y="-50" width="500" height="500" fill="${s}" opacity="${r.toFixed(2)}"/><rect x="-50" y="-50" width="500" height="500" fill="url(#${e}-hatch)" opacity="${Math.min(1,r*2.2).toFixed(2)}"/></g>`}function m(e,t,i=s,r=2.8,n=!1){let a="";for(const l of t){const o=c(l.d);if(l.guide){a+=`<path d="${o}" fill="none" stroke="${i}" stroke-opacity="0.22" stroke-width="1.4" stroke-dasharray="3 6" stroke-linecap="round"/>`;continue}if(l.fill&&f(l)){n&&(a+=`<path d="${o}" fill="none" stroke="${i}" stroke-width="${(r*.55).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round"/>`);continue}a+=`<path d="${o}" fill="none" stroke="${i}" stroke-width="${r}" stroke-linecap="round" stroke-linejoin="round" filter="url(#${e}-pencil)"/>`,a+=`<path d="${o}" fill="none" stroke="${i}" stroke-opacity="0.35" stroke-width="${(r*.45).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round" transform="translate(0.9 0.7)" filter="url(#${e}-pencil)"/>`}return a}function x(e,t){return e.steps.slice(0,t===void 0?void 0:t+1).flatMap(i=>i.shapes)}let w=0;function b(e,t={}){const i=`sk${(w++).toString(36)}`,r=t.mode??"graphite",n=t.pad??0,a=`${-n} ${-n} ${400+n*2} ${400+n*2}`,l=t.paper?`<rect x="${-n}" y="${-n}" width="${400+n*2}" height="${400+n*2}" fill="#f7f6f2" filter="url(#${i}-paper)"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${a}"><defs>${d(i,t.seed)}</defs>${l}${y(i,e,r)}${m(i,e)}</svg>`}const u=new Map;function M(e,t={}){const i=`${e.id}|${t.mode??"graphite"}|${t.paper?1:0}|${t.upto??"all"}|${t.pad??0}`;let r=u.get(i);return r||(r=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(b(x(e,t.upto),t))}`,u.set(i,r)),r}export{s as G,m as a,x as b,$ as c,M as l,d as s};
