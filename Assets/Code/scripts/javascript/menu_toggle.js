document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const dropdownLinks = document.querySelectorAll('.toggle-submenu');

  // Toggle main navigation menu
  menuToggle.addEventListener('click', function() {
      navigation.classList.toggle('visible');
  });

  // Toggle submenus
  dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default link behavior
          const parent = link.parentElement;
          parent.classList.toggle('open');
      });
  });
});
