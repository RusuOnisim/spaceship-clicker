(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const S of n.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&d(S)}).observe(document,{childList:!0,subtree:!0});function y(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=y(o);fetch(o.href,n)}})();(()=>{let N=document.getElementById("pointsh2"),c=document.getElementById("multi"),y=document.getElementById("bonus"),d=document.getElementById("auto"),o=document.getElementById("price"),n=document.getElementById("timer"),S=document.getElementById("pricebonus"),T=document.getElementById("priceauto"),R=document.getElementById("rocket");const J=document.getElementById("buttoninfo"),Q=document.getElementById("buttonreset"),x=document.getElementById("overlay"),M=document.getElementById("gameInfo"),U=document.getElementById("closeButton"),W=document.getElementById("purchasehistorydisplay");let w=document.getElementById("container");const C=document.getElementById("soundicon"),E=document.getElementById("music"),X=document.querySelectorAll(".costum i"),D=document.getElementById("rocket");var V=document.getElementById("menus"),O=document.getElementById("startgame");let t,u,L,i,m,r,g,f,b,h,p,a,B=[],k="";var G=100;let I;w.style.display="none";function Y(){localStorage.setItem("score",t),localStorage.setItem("clickValue",u),localStorage.setItem("bonusActive",L),localStorage.setItem("bonusPriceValue",i),localStorage.setItem("autoPriceValue",r),localStorage.setItem("timeLeft",m),localStorage.setItem("autoInterval",g),localStorage.setItem("autoClickSpeed",f),localStorage.setItem("autoActive",b),localStorage.setItem("purchageCost",h),localStorage.setItem("multiplier",p),localStorage.setItem("multiplierCost",a),localStorage.setItem("color",I)}function v(){N.textContent=t}function Z(){t+=u*p,v(),t>=h&&(t-=h,t=Math.max(0,t),v())}function F(){k="";for(let e=0;e<B.length&&(k+=`${B[e][0]} for ${B[e][1]} credit(s)`,e<B.length&&(k+=`
`),e!=9);e++);W.innerText=k}function $(e,l){let s=[e,l];B.unshift(s),F()}function q(){m==30&&(u=u*2),m--,document.getElementById("timer").innerText="Bonus Time:  "+m,m>0?setTimeout(q,1e3):(L=!1,n.style.display="none",y.disabled=!1,u>1&&(u/=2))}function _(){L||t>=i&&(t-=i,$("Bonus",i),i*=2,S.innerText=i+" credits",v(),m=30,q(),L=!0,n.style.display="block",y.disabled=!0,document.getElementById("bonusSound").play())}function ee(){setTimeout(q,1e3),n.style.display="block",u*=2}function H(){p>1?c.innerText=`Multiplier x${p}`:c.innerText="Multiplier"}function te(){t>=a&&t!=0&&(t-=a,$("Multiplier",a),a*=2,p+=1,o.innerText=a+" credits",v(),H())}function K(){t+=u*p,v()}function oe(){t>=r&&t!=0&&f>500&&(t-=r,$("Auto-click",r),r*=2,v(),b=!0,f-=500),d.innerText=`Auto-click / ${f/1e3} secs`,T.innerText=r+" credits",f==500&&(T.innerText="Max reached"),b==!0&&(clearInterval(g),g=setInterval(K,f))}function j(){const e=document.querySelector(".stars"),l=document.createElement("div");l.classList.add("star"),l.style.left=`${Math.random()*100}vw`,l.style.top="0vh";const s=`${Math.random()*3+2}s`;l.style.animation=`moveStar ${s} linear infinite`;function fe(){e.removeChild(l),j()}l.addEventListener("animationiteration",fe),e.appendChild(l)}function ne(e){for(let s=0;s<e;s++)setTimeout(j,s*200)}ne(100);function le(){x.style.display="block",M.style.display="block"}function se(){x.style.display="none",M.style.display="none"}function z(){M.style.display="none",x.style.display="none"}function ie(){t==0&&(R.style.color="whitesmoke",I="whitesmoke",localStorage.setItem("color",I)),t=0,u=1,L=!1,i=1,m=0,r=1,clearInterval(g),g=!1,f=5500,b=!1,h=0,p=1,a=1,B=[],k="",v(),H(),F(),o.innerText=a+" credits",S.innerText=i+" credits",T.innerText=r+" credits",d.innerText="Auto-click"}function re(){t=parseInt(localStorage.getItem("score"))||0,u=parseInt(localStorage.getItem("clickValue"))||1,L=localStorage.getItem("bonusActive")==="true",i=parseInt(localStorage.getItem("bonusPriceValue"))||1,m=parseInt(localStorage.getItem("timeLeft"))||0,r=parseInt(localStorage.getItem("autoPriceValue"))||1,g=localStorage.getItem("autoInterval")||!1,f=parseInt(localStorage.getItem("autoClickSpeed"))||5500,b=localStorage.getItem("autoActive")||!1,b=="true"&&(clearInterval(g),g=setInterval(K,f)),h=parseInt(localStorage.getItem("purchaseCost"))||0,p=parseInt(localStorage.getItem("multiplier"))||1,a=parseInt(localStorage.getItem("multiplierCost"))||1,v(),H(),m>0&&ee(),o.innerText=a+" credits",S.innerText=i+" credits",T.innerText=r+" credits",t>0&&(w.style.display="flex",document.querySelector(".startpage").style.display="none"),I=localStorage.getItem("color"),D.style.color=I,E.muted=localStorage.getItem("soundMuted")==="true"}function ae(e,l,s){t>=i?e.classList.remove("disabled"):e.classList.add("disabled"),t>=a?l.classList.remove("disabled"):l.classList.add("disabled"),t>=r?s.classList.remove("disabled"):s.classList.add("disabled")}function ce(e,l,s){setInterval(()=>{ae(e,l,s)},1e3)}ce(y,c,d);function ue(){document.querySelector(".startpage").style.display="none",w.style.display="flex"}function P(){setTimeout(function(){V.currentTime=0,V.play()},G)}function A(){setTimeout(function(){V.pause()},G)}E.volume=.1,E.muted&&C.classList.add("fa-volume-mute");function de(){E.muted?(E.muted=!1,C.classList.remove("fa-volume-mute")):(E.muted=!0,C.classList.add("fa-volume-mute")),localStorage.setItem("soundMuted",E.muted)}function me(e){I=getComputedStyle(e).color,localStorage.setItem("color",I),D.style.color=I,z()}window.addEventListener("load",re),window.addEventListener("beforeunload",Y),O.addEventListener("click",ue),R.addEventListener("click",Z),d.addEventListener("click",oe),c.addEventListener("click",te),y.addEventListener("click",_),Q.addEventListener("click",ie),J.addEventListener("click",le),x.addEventListener("click",se),U.addEventListener("click",z),C.addEventListener("click",de),X.forEach(e=>{e.addEventListener("click",()=>me(e))}),O.addEventListener("mouseenter",P),O.addEventListener("mouseleave",A),c.addEventListener("mouseenter",P),c.addEventListener("mouseleave",A),y.addEventListener("mouseenter",P),y.addEventListener("mouseleave",A),d.addEventListener("mouseenter",P),d.addEventListener("mouseleave",A)})();