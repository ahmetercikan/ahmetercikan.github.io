function j(o,a=842,c=595){const $=new TextEncoder,i=[],r=[];let g=0;const t=e=>{const n=typeof e=="string"?$.encode(e):e;i.push(n),g+=n.length},s=(e,n)=>{r[e]=g,t(`${e} 0 obj
`),n(),t(`
endobj
`)};t(`%PDF-1.4
%âãÏÓ
`);const d=o.length,f=e=>3+e*3;s(1,()=>t("<< /Type /Catalog /Pages 2 0 R >>")),s(2,()=>t(`<< /Type /Pages /Count ${d} /Kids [${o.map((e,n)=>`${f(n)} 0 R`).join(" ")}] >>`)),o.forEach((e,n)=>{const p=f(n),l=p+1,m=p+2;s(p,()=>t(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a} ${c}] /Resources << /XObject << /Im${n} ${l} 0 R >> >> /Contents ${m} 0 R >>`)),s(l,()=>{t(`<< /Type /XObject /Subtype /Image /Width ${e.width} /Height ${e.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${e.jpeg.length} >>
stream
`),t(e.jpeg),t(`
endstream`)});const b=`q ${a} 0 0 ${c} 0 0 cm /Im${n} Do Q`;s(m,()=>t(`<< /Length ${b.length} >>
stream
${b}
endstream`))});const u=g,h=3+d*3;t(`xref
0 ${h}
0000000000 65535 f 
`);for(let e=1;e<h;e++)t(`${String(r[e]).padStart(10,"0")} 00000 n 
`);return t(`trailer
<< /Size ${h} /Root 1 0 R >>
startxref
${u}
%%EOF
`),new Blob(i,{type:"application/pdf"})}async function w(o,a=.88){const c=await new Promise(($,i)=>o.toBlob(r=>r?$(r):i(new Error("toBlob")),"image/jpeg",a));return{jpeg:new Uint8Array(await c.arrayBuffer()),width:o.width,height:o.height}}export{w as c,j as m};
