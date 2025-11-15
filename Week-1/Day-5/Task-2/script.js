function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Clear previous message
  errorMsg.textContent = "";

  if (name === "") {
    errorMsg.textContent = "Please enter your name.";
    return;
  }

  if (email === "") {
    errorMsg.textContent = "Please enter your email.";
    return;
  }

  if (message === "") {
    errorMsg.textContent = "Please enter your message.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";
}
