function registerUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const qualification = document.getElementById("qualification").value;
  const password = document.getElementById("password").value;
  const createPassword = document.getElementById("create_password").value;
  const terms = document.getElementById("terms").checked;

  if (password !== createPassword) {
    alert("password do not match ! please try again !!");
  }

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Date of Birth:", dob);
  console.log("Gender:", gender);
  console.log("Qualification:", qualification);
  console.log("Password:", password);
  console.log("Create Password:", createPassword);
  console.log("Terms Accepted:", terms);
}

// function submit()
// {
//     const nm = document.getElementById('username').value;
//     const nm = document.getElementById('email').value;
//     const nm = document.getElementById('dob').value;
//     const nm = document.getElementById('gender').value;
//     const nm = document.getElementById('qualification').value;
//     const nm = document.getElementById('username').value;
//     const gn = document.querySelector("input[name:'gender']:checked").value;
//     const ql = document.getElementById('input[name]').value;

// document.querySelectorAll("input[name]");

// }
