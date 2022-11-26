(()=>{var e,t={613:()=>{class e extends HTMLElement{set dataItem(e){this._dataItem=e,this.render()}render(){this.innerHTML=`\n      <div class="text-yellow-600 mb-2 text-sm ${0==this._dataItem.id?"pt-4":""}">${this._dataItem.class}</div>\n      <div class="bg-gray-200 rounded-full mb-4 overflow-hidden">\n        <div class="bg-yellow-300 text-sm font-medium text-yellow-600 text-center p-1 leading-none rounded-full whitespace-nowrap" style="width: ${100*this._dataItem.confidence}%"> ${100*this._dataItem.confidence}%</div>\n      </div>\n    `}}customElements.define("item-predict",e)},64:(e,t,n)=>{"use strict";n(613);class r extends HTMLElement{set dataPredicts(e){this._dataPredicts=e,this.render()}render(){this.innerHTML="",this._dataPredicts.forEach((e=>{const t=document.createElement("item-predict");t.dataItem=e,this.appendChild(t)}))}renderError(e){this.innerHTML="",this.innerHTML+=`<h2 class="px-4 text-red-500">${e}</h2>`}}customElements.define("list-predict",r);var a=n(648);const d=e=>{document.querySelectorAll(".loader").forEach((t=>{t.style.display=e?"flex":"none"}))},i=document.getElementById("elemImage"),s=document.getElementById("elemInputImage"),o=document.querySelector("list-predict"),l=document.getElementById("detailPredict"),c=document.getElementById("scoreYou"),m=document.getElementById("emojiYou"),u=document.getElementById("scoreBot"),p=document.getElementById("emojiBot"),f=document.getElementById("btnOpenHelp"),h=document.getElementById("btnCloseHelp"),y=document.getElementById("wrapHelp"),g={you:0,bot:0},v=e=>{switch(e){case 0:return"✋";case 1:return"✊";case 2:return"✌️";default:return"NaN"}};s.addEventListener("change",(()=>{if(!s.files||!s.files[0])return;const e=new FileReader;e.addEventListener("load",(e=>{i.src=e.target.result,m.innerText="",p.innerText="",o.innerHTML="",(async(e,t)=>{d(!0);const n=new FormData;console.log(e),n.append("imgBase64",e.replace(/^data:image\/[a-z]+;base64,/,""));try{const e=(await(0,a.Z)({method:"post",url:"https://kbg-api.azurewebsites.net/classifier",data:n,headers:{"Content-Type":"multipart/form-data;"}})).data.map(((e,t)=>({...e,confidence:parseFloat(e.confidence),id:t})));return t.dataPredicts=e,d(!1),e}catch(e){return t.renderError(e),console.error(e),e}})(e.target.result,o).then((e=>(e=>{if(!Array.isArray(e))return void alert("Sistem gagal memproses! mohon coba kembali dengan gambar yang berbeda.");e.sort(((e,t)=>t.confidence-e.confidence));const t=Math.floor(e.length*Math.random());var n,r;m.innerText=v(e[0].id),p.innerText=v(t),(n=e[0].id)!=(r=t)&&(0==n&&1==r||1==n&&2==r||2==n&&0==r?g.you+=1:g.bot+=1),c.innerText=g.you,u.innerText=g.bot})(e)))})),e.readAsDataURL(s.files[0])})),l.addEventListener("click",(()=>{const e=o.style.display;o.style.display="none"==e?"block":"none"})),h.addEventListener("click",(()=>{y.style.display="none"})),f.addEventListener("click",(()=>{y.style.display="flex"}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var d=n[e]={exports:{}};return t[e](d,d.exports,r),d.exports}r.m=t,e=[],r.O=(t,n,a,d)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,d]=e[c],s=!0,o=0;o<n.length;o++)(!1&d||i>=d)&&Object.keys(r.O).every((e=>r.O[e](n[o])))?n.splice(o--,1):(s=!1,d<i&&(i=d));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[n,a,d]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,d,[i,s,o]=n,l=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(o)var c=o(r)}for(t&&t(n);l<i.length;l++)d=i[l],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(c)},n=self.webpackChunkkbg_fe=self.webpackChunkkbg_fe||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[648],(()=>r(64)));a=r.O(a)})();