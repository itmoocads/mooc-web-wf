"use strict";(()=>{var n=()=>{let o=document.querySelectorAll(".icon_wrap"),s=document.querySelectorAll(".home_industry_content");o[0].classList.add("active"),s[0].classList.add("active"),o.forEach((e,t)=>{e.addEventListener("click",()=>{c(e),r(t)})});function c(e){o.forEach(t=>t.classList.remove("active")),e.classList.add("active")}function r(e){s.forEach(t=>t.classList.remove("active")),s[e].classList.add("active")}};var i=o=>{console.log(`Version: ${o}!`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{window.addEventListener("scroll",function(){let s=document.getElementById("navbar");window.scrollY>0?s==null||s.classList.add("nav_scroll_shadow"):s==null||s.classList.remove("nav_scroll_shadow")}),n(),i("v0.0.3")});})();
