function e(e,t){const n=Math.random()>.3;return new Promise(((o,s)=>{n?setTimeout((()=>{o({position:e,delay:t})}),t):setTimeout((()=>{s({position:e,delay:t})}),t)}))}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".form");t.addEventListener("submit",(n=>{n.preventDefault();const o=parseInt(t.elements.delay.value),s=parseInt(t.elements.step.value),l=parseInt(t.elements.amount.value);let i=o;for(let t=1;t<=l;t++)e(t,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),i+=s}))}));
//# sourceMappingURL=03-promises.efc581cc.js.map
