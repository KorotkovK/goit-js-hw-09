const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null,a="";t.addEventListener("click",(function(){d=setInterval((()=>{a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`,document.body.style.backgroundColor=a,e.disabled=!1}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(d),document.body.style.backgroundColor=a,t.disabled=!1,e.disabled=!0})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.edaf2dc3.js.map
