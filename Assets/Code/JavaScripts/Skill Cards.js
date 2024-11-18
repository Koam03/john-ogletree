// Fetch and display random skill cards on page load
document.addEventListener('DOMContentLoaded', async () => {
  try {
      // Fetch skill data from JSON file
      const response = await fetch('Assets/Code/JavaScript Object Notation/Skills.json');
      const skills = await response.json();

      // Shuffle the skills array
      const shuffledSkills = skills.sort(() => 0.5 - Math.random());

      // Select the first 4 skills from the shuffled array
      const selectedSkills = shuffledSkills.slice(0, 4);

      // Get the skills grid container
      const skillsGrid = document.querySelector('.neon-about__skills-grid');

      // Generate HTML for each skill card
      skillsGrid.innerHTML = selectedSkills.map(skill => `
          <div class="neon-about__skill-card">
              <h2>${skill.name}</h2>
              <p>${skill.emoji} ${skill.description}</p>
          </div>
      `).join('');
  } catch (error) {
      console.error('Error loading skill data:', error);
  }
});
