document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav');
  var mainContent = document.querySelector('.main-content');
  var submenuLinks = document.querySelectorAll('nav ul.nav-menu li > a');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('show-menu');
    mainContent.classList.toggle('show-menu');
  });

  submenuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var submenu = this.nextElementSibling;
      if (submenu && submenu.tagName === 'UL') {
        e.preventDefault();
        this.parentElement.classList.toggle('show-submenu');
      }
    });
  });
});
