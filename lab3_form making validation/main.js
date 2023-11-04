// JavaScript using name attribute
function validateForm() {
    const form = document.forms["registrationForm"];
    const username = form.elements["username"];
    const email = form.elements["email"];
    const password = form.elements["password"];
    const confirmPassword = form.elements["confirmPassword"];
    const phoneNumber = form.elements["phoneNumber"];
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError =
    document.getElementById("confirmPasswordError");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[A-Zaz\d@#$]{8,}$/;
    let isValid = true;
    // Validate username
    if (!username.value.match(usernamePattern)) {
    usernameError.textContent = "Username should be between 3 and 20 
    alphanumeric characters.";
    isValid = false;
    } else {
    usernameError.textContent = "";
    }
    // Validate email
    if (!email.value.match(emailPattern)) {
    emailError.textContent = "Invalid email address format.";
    isValid = false;
    } else {
    emailError.textContent = "";
    }
    // Validate password
    if (!password.value.match(passwordPattern)) {
    passwordError.textContent = "Password should be at least 8 characters 
    long, containing one uppercase letter, one lowercase letter, one number, and 
    one special character.";
    isValid = false;
    } else {
    passwordError.textContent = "";
    }
    // Validate confirm password
    if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
    } else {
    confirmPasswordError.textContent = "";
    }
    // Validate phone number
    if (!phoneNumber.value.match(/^\+91\s\d{10}$/)) {
    phoneNumberError.textContent = "Invalid phone number format. Should be 
    in the format +91 1234567890.";
    isValid = false;
    } else {
    phoneNumberError.textContent = "";
    }
    return isValid;
    }