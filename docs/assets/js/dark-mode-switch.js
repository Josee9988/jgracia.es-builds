let darkSwitch;let currentPage;function initTheme(){const recaptcha=document.querySelector(".g-recaptcha");let darkThemeSelected=localStorage.getItem("darkSwitch")!==null&&localStorage.getItem("darkSwitch")==="dark";darkSwitch.checked=darkThemeSelected;if(darkThemeSelected){document.body.setAttribute("data-theme","dark");if(recaptcha){recaptcha.setAttribute("data-theme","dark")}}else{document.body.removeAttribute("data-theme");if(recaptcha){recaptcha.setAttribute("data-theme","light")}}}function resetTheme(){const recaptcha=document.querySelector(".g-recaptcha");if(darkSwitch.checked){document.body.setAttribute("data-theme","dark");if(recaptcha){recaptcha.setAttribute("data-theme","dark")}localStorage.setItem("darkSwitch","dark")}else{document.body.removeAttribute("data-theme");if(recaptcha){recaptcha.setAttribute("data-theme","light")}localStorage.setItem("darkSwitch","light")}}function load(){darkSwitch=document.getElementById("darkSwitch");darkSwitch&&(initTheme(),darkSwitch.addEventListener("change",()=>{resetTheme()}))}window.addEventListener("load",async()=>{currentPage=location.href;darkSwitch=document.getElementById("darkSwitch");load();if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){if(localStorage.getItem("darkSwitch")!=="light"){darkSwitch.checked=true;localStorage.setItem("darkSwitch","dark");initTheme()}}else{localStorage.setItem("darkSwitch","light")}setInterval(async function(){if(currentPage!==location.href){currentPage=location.href;load()}},1e3)},{passive:true});