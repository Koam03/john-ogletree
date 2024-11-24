fetch('Assets/Code/JavaScript Object Notation/social-abouticons.json')
  .then(response => response.json())
  .then(data => {
    const socialIconsContainer = document.getElementById('social-icons-container');
    data.socialLinks.forEach(link => {
      const socialLink = document.createElement('a');
      socialLink.href = link.url;
      socialLink.classList.add('home-main-about-me-social-link');
      socialLink.style.background = link.backgroundColor;

      const iconImg = document.createElement('img');
      iconImg.src = link.icon;
      iconImg.alt = link.alt;

      const text = document.createTextNode(` | ${link.handle}`);

      socialLink.appendChild(iconImg);
      socialLink.appendChild(text);

      socialIconsContainer.appendChild(socialLink);
    });
  })
  .catch(error => console.error('Error loading social links:', error));
