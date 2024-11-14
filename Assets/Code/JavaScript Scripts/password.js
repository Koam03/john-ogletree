// password.js

(function() {
    const correctPassword = "yourPassword"; // Change this to your desired password
    const passwordPrompt = "Please enter the password to access the website:";
    const redirectPage = "home.html"; // Change this to the page you want to redirect to
  
    // Function to prompt for the password
    function promptPassword() {
      let userPassword = prompt(passwordPrompt);
      if (userPassword !== correctPassword) {
        // If the password is incorrect, alert the user and redirect to another page
        alert("Incorrect password! Redirecting...");
        window.location = "https://www.google.com"; // Redirect to a different page
      } else {
        // If the password is correct, store a flag in localStorage and redirect to the protected page
        localStorage.setItem("passwordProtected", "true");
        window.location.href = redirectPage; // Redirect to the specified page
      }
    }
  
    // Check if the user has already entered the correct password
    if (!localStorage.getItem("passwordProtected")) {
      promptPassword(); // Prompt for the password if not authenticated
    } else {
      // If the password was already entered, do nothing and load the content
      document.body.style.visibility = "visible"; // Make the content visible
    }
  })();
  