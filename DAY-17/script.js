function toggleForm() {
  const signup = document.getElementById("signupForm");
  const login = document.getElementById("loginForm");
  const title = document.getElementById("title");

  signup.classList.toggle("hidden");
  login.classList.toggle("hidden");

  title.textContent = title.textContent === "Sign Up" ? "Login" : "Sign Up";
}

function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    showAlert("All fields are required!", "warning");
    return;
  }

  if (password.length < 6) {
    showAlert("Password must be at least 6 characters!", "warning");
    return;
  }

  if (password !== confirmPassword) {
    showAlert("Passwords do not match!", "error");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(user => user.email === email)) {
    showAlert("User already exists!", "error");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  showAlert("Signup successful!", "success");
  toggleForm();
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    showAlert("Invalid email or password!", "error");
    return;
  }

  showAlert("Welcome " + user.name, "success");
}

function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alertBox");

  const alert = document.createElement("div");
  alert.classList.add("alert", type);

  let icon = "";
  if (type === "success");
  if (type === "error") ;
  if (type === "warning");

  alert.innerHTML = `<span>${icon}</span> ${message}`;

  alertBox.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3500);
}