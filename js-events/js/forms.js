document.getElementById("submit").addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "") {
    let emailWarningRequired = document.getElementById(
      "email-form-warning-required"
    );
    emailWarningRequired.classList.add("display-block");
    return;
  } else {
    let emailWarningRequired = document.getElementById(
      "email-form-warning-required"
    );
    emailWarningRequired.classList.remove("display-block");
  }

  if (!username.includes("@")) {
    let emailWarningValid = document.getElementById(
      "email-form-warning-valid-email"
    );
    emailWarningValid.classList.add("display-block");
    return;
  } else {
    let emailWarningValid = document.getElementById(
      "email-form-warning-valid-email"
    );
    emailWarningValid.classList.remove("display-block");
  }

  if (password === "") {
    let passwordWarning = document.getElementById(
      "password-form-warning-required"
    );
    passwordWarning.classList.add("display-block");
    return;
  } else {
    let passwordWarning = document.getElementById(
      "password-form-warning-required"
    );
    passwordWarning.classList.remove("display-block");
  }

  if (username === "gershon@abc.com" && password === "password") {
    document.location.href = "login.html";
  } else {
    let loginError = document.getElementById("login-error");
    loginError.classList.add("display-block");

    setTimeout(() => {
      loginError.classList.remove("display-block");
    }, 5000);
  }
}
