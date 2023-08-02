import { homeIndustryGrid } from '$utils/homeIndustryGrid';
import { showVersion } from '$utils/showVersion';

window.Webflow ||= [];
window.Webflow.push(() => {
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar?.classList.add('nav_scroll_shadow');
    } else {
      navbar?.classList.remove('nav_scroll_shadow');
    }
  });

  homeIndustryGrid();

  const version = 'v0.0.4';
  showVersion(version);
});
