/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';
import baguetteBox from 'baguettebox.js';

/**
 * Write any other JavaScript below
 */

if (document.title) {
  switch (document.title) {
    case "Chefs de pueblo: Portada":
      // Header
      document.querySelector('#nav-header').classList.add("navbar--poster-bg");
      document.querySelector('#navbar-header-toggler').classList.add("navbar--poster");
      document.querySelector('#navbar-header-toggler-icon').classList.add("navbar--poster","navbar--poster-toggler");
      document.querySelector('#nav-link-header-2').classList.add("navbar--poster");
      document.querySelector('#nav-link-header-3').classList.add("navbar--poster");
      document.querySelector('#nav-link-header-4').classList.add("navbar--poster");
      // Footer
      document.querySelector('#nav-link-footer-1').classList.add("active");
      break;
    case "Chefs de pueblo: Los chefs":
      // Header
      document.querySelector('#nav-link-header-2').classList.add("active");
      // Footer
      document.querySelector('#nav-link-footer-2').classList.add("active");
      break;
    case "Chefs de pueblo: El pueblo":
      // Header
      document.querySelector('#nav-link-header-3').classList.add("active");
      // Footer
      document.querySelector('#nav-link-footer-3').classList.add("active");
      break;
    case "Chefs de pueblo: Galería":
      // Header
      document.querySelector('#nav-link-header-4').classList.add("active");
      // Footer
      document.querySelector('#nav-link-footer-4').classList.add("active");
      break;
    default:
      break;
  }
}

if (document.querySelector('.gallery') !== null) {
  baguetteBox.run('.gallery', {overlayBackgroundColor: 'oklch(40.1% 0.123 21.57 / 70%)'});
}
