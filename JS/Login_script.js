function validateForm(email, password) {
  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }
  return true;
}

function init() {
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (validateForm(email, password)) {
      document.getElementById("loginForm").submit();
    }
  });
}

window.onload = init;