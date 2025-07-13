function validateForm(name, email, password, confirmPassword) {
  if (!name || !email || !password || !confirmPassword) {
    alert("Please enter all required fields.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}

function init() {
  document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (validateForm(name, email, password, confirmPassword)) {
      document.getElementById("registerForm").submit();
    }
  });
}

window.onload = init;