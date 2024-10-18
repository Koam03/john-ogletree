// navbar.js
class Navbar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        fetch('/Components/navbar.html') // Update the path if necessary
            .then(response => response.text())
            .then(data => {
                shadow.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
            });
    }
}

customElements.define('navbar-component', Navbar);
