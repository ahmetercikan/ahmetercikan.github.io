import{s as h}from"./pathSampler-BrvlWSTl.js";const o="#2f2f36";function p(e){const t=e.replace("#",""),a=parseInt(t.length===3?t.split("").map(r=>r+r).join(""):t,16);return[a>>16&255,a>>8&255,a&255]}function $(e){const[t,a,r]=p(e);return(.299*t+.587*a+.114*r)/255}const c=e=>e.replace(/"/g,"&quot;");function d(e,t=7){return`
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
    <line x1="0" y1="0" x2="0" y2="5" stroke="${o}" stroke-width="1.1"/>
  </pattern>
  <pattern id="${e}-cross" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-42)">
    <line x1="0" y1="0" x2="0" y2="5" stroke="${o}" stroke-width="1"/>
  </pattern>
  <filter id="${e}-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter>
  <filter id="${e}-paper" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="2" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.955  0 0 0 0 0.94  0 0 0 -0.25 0.28"/>
    <feComposite in2="SourceGraphic" operator="over"/>
  </filter>`}const f=e=>h(e.d).length<40;function y(e,t,a){let r="";for(const i of t){if(i.guide||!i.fill)continue;const n=c(i.d),l=$(i.fill);if(a==="color"){r+=`<path d="${n}" fill="${i.fill}" fill-opacity="0.9" filter="url(#${e}-shade)"/>`,l<.85&&(r+=`<path d="${n}" fill="url(#${e}-hatch)" opacity="${(.08+(1-l)*.12).toFixed(2)}"/>`);continue}const s=1-l;if(l>.97&&!f(i)){r+=`<path d="${n}" fill="#faf9f6"/>`;continue}if(l>.97){r+=`<path d="${n}" fill="#fbfaf7"/>`;continue}r+=`<path d="${n}" fill="#faf9f6"/>`,r+=`<path d="${n}" fill="${o}" fill-opacity="${(.03+s*.36).toFixed(2)}" filter="url(#${e}-shade)"/>`,s>.2&&(r+=`<path d="${n}" fill="url(#${e}-hatch)" opacity="${Math.min(.85,s*.75).toFixed(2)}" filter="url(#${e}-shade)"/>`),s>.62&&(r+=`<path d="${n}" fill="url(#${e}-cross)" opacity="${Math.min(.9,(s-.45)*1.3).toFixed(2)}" filter="url(#${e}-shade)"/>`),f(i)||(r+=m(e,i,`${g++}`,.16+s*.22))}return r}let g=0;function m(e,t,a,r){const i=`${e}-m${a}`,n=c(t.d);return`<mask id="${i}" maskUnits="userSpaceOnUse" x="-50" y="-50" width="500" height="500"><path d="${n}" fill="#fff"/><path d="${n}" fill="#000" transform="translate(-11 -13)" filter="url(#${e}-soft)"/></mask><g mask="url(#${i})" filter="url(#${e}-shade)"><rect x="-50" y="-50" width="500" height="500" fill="${o}" opacity="${r.toFixed(2)}"/><rect x="-50" y="-50" width="500" height="500" fill="url(#${e}-hatch)" opacity="${Math.min(1,r*2.2).toFixed(2)}"/></g>`}function k(e,t,a=o,r=2.8){let i="";for(const n of t){const l=c(n.d);if(n.guide){i+=`<path d="${l}" fill="none" stroke="${a}" stroke-opacity="0.22" stroke-width="1.4" stroke-dasharray="3 6" stroke-linecap="round"/>`;continue}n.fill&&f(n)||(i+=`<path d="${l}" fill="none" stroke="${a}" stroke-width="${r}" stroke-linecap="round" stroke-linejoin="round" filter="url(#${e}-pencil)"/>`,i+=`<path d="${l}" fill="none" stroke="${a}" stroke-opacity="0.35" stroke-width="${(r*.45).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round" transform="translate(0.9 0.7)" filter="url(#${e}-pencil)"/>`)}return i}function x(e,t){return e.steps.slice(0,t===void 0?void 0:t+1).flatMap(a=>a.shapes)}let w=0;function b(e,t={}){const a=`sk${(w++).toString(36)}`,r=t.mode??"graphite",i=t.pad??0,n=`${-i} ${-i} ${400+i*2} ${400+i*2}`,l=t.paper?`<rect x="${-i}" y="${-i}" width="${400+i*2}" height="${400+i*2}" fill="#f7f6f2" filter="url(#${a}-paper)"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${n}"><defs>${d(a,t.seed)}</defs>${l}${y(a,e,r)}${k(a,e)}</svg>`}const u=new Map;function M(e,t={}){const a=`${e.id}|${t.mode??"graphite"}|${t.paper?1:0}|${t.upto??"all"}|${t.pad??0}`;let r=u.get(a);return r||(r=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(b(x(e,t.upto),t))}`,u.set(a,r)),r}export{o as G,k as a,x as b,$ as c,M as l,d as s};
