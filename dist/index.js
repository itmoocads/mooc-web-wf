"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/homeIndustryGrid.ts
  var homeIndustryGrid = () => {
    const industries = document.querySelectorAll(".icon_wrap");
    const industriesContent = document.querySelectorAll(".home_industry_content");
    industries[0].classList.add("active");
    industriesContent[0].classList.add("active");
    industries.forEach((card, index) => {
      card.addEventListener("click", () => {
        setActiveCard(card);
        setActiveContent(index);
      });
    });
    function setActiveCard(activeCard) {
      industries.forEach((card) => card.classList.remove("active"));
      activeCard.classList.add("active");
    }
    function setActiveContent(index) {
      industriesContent.forEach((content) => content.classList.remove("active"));
      industriesContent[index].classList.add("active");
    }
  };

  // src/utils/showVersion.ts
  var showVersion = (version) => {
    console.log(`Version: ${version}!`);
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    window.addEventListener("scroll", function() {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar?.classList.add("nav_scroll_shadow");
      } else {
        navbar?.classList.remove("nav_scroll_shadow");
      }
    });
    homeIndustryGrid();
    const version = "v0.0.1";
    showVersion(version);
  });
})();
//# sourceMappingURL=index.js.map
