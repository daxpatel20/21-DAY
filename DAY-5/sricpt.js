
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const formTitle = document.getElementById("formTitle");
const confirmBox = document.getElementById("confirmBox");
const nameBox = document.getElementById("nameBox");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const nameInput = document.getElementById("name");


const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const nameError = document.getElementById("nameError");

let isSignup = false;


loginBtn.onclick = function() {
    if (isSignup) {
        isSignup = false;
        formTitle.innerText = "Login";
        confirmBox.classList.add("hidden");
        nameBox.classList.add("hidden");
        submitBtn.innerText = "Login";
        clearErrors();
    }
};

signupBtn.onclick = function() {
    if (!isSignup) {
        isSignup = true;
        formTitle.innerText = "Signup";
        confirmBox.classList.remove("hidden");
        nameBox.classList.remove("hidden");
        submitBtn.innerText = "Signup";
        clearErrors();
    }
};


function clearErrors() {
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmError.innerText = "";
    nameError.innerText = "";
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isValidPassword(password) {
    return password.length >= 6;
}

emailInput.oninput = function() {
    const email = emailInput.value.trim();
    if (email === "") {
        emailError.innerText = "";
    } else if (!isValidEmail(email)) {
        emailError.innerText = "Please enter a valid email address";
    } else {
        emailError.innerText = "";
    }
};

passwordInput.oninput = function() {
    const password = passwordInput.value;
    if (password === "") {
        passwordError.innerText = "";
    } else if (!isValidPassword(password)) {
        passwordError.innerText = "Password must be at least 6 characters";
    } else {
        passwordError.innerText = "";
    }
};

confirmInput.oninput = function() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    if (confirm === "") {
        confirmError.innerText = "";
    } else if (password !== confirm) {
        confirmError.innerText = "Passwords do not match";
    } else {
        confirmError.innerText = "";
    }
};

nameInput.oninput = function() {
    const name = nameInput.value.trim();
    if (name === "") {
        nameError.innerText = "";
    } else if (name.length < 2) {
        nameError.innerText = "Name must be at least 2 characters";
    } else {
        nameError.innerText = "";
    }
};


form.onsubmit = function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    const name = nameInput.value.trim();
    
    if (isSignup) {
        if (name === "") {
            nameError.innerText = "Name is required";
            isValid = false;
        } else if (name.length < 2) {
            nameError.innerText = "Name must be at least 2 characters";
            isValid = false;
        } else {
            nameError.innerText = "";
        }
    }
    
   
    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerText = "Please enter a valid email address";
        isValid = false;
    } else {
        emailError.innerText = "";
    }
    

    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else if (!isValidPassword(password)) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }
    
   
    if (isSignup) {
        if (confirm === "") {
            confirmError.innerText = "Please confirm your password";
            isValid = false;
        } else if (password !== confirm) {
            confirmError.innerText = "Passwords do not match";
            isValid = false;
        } else {
            confirmError.innerText = "";
        }
    }
    
  
    if (isValid) {
        if (isSignup) {
            alert("Signup successful! Welcome, " + name + "!");
        } else {
            alert("Login successful! Welcome back!");
        }
        form.reset();
        clearErrors();
    }
};