// Menu Toggle Functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    // Dropdown Toggle Functionality for Mobile
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const link = dropdown.querySelector('a');

        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('open');
            }
        });
    });

    const submenus = document.querySelectorAll('.dropdown-submenu');

    submenus.forEach(function(submenu) {
        const link = submenu.querySelector('a');

        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                submenu.classList.toggle('open');
            }
        });
    });