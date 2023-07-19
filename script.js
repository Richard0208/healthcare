function nextStep(step) {
  if (step === 2) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (firstName && lastName) {
      document.getElementById("step1").style.display = "none";
      document.getElementById("step2").style.display = "block";
    } else {
      alert("Please enter your first and last name.");
    }
  } else if (step === 3) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email && password) {
      document.getElementById("step2").style.display = "none";
      document.getElementById("step3").style.display = "block";
    } else {
      alert("Please enter your email and password.");
    }
  }
}

