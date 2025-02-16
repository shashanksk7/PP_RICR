function sbt() {
  let isValid = true;

  const fstna = document.getElementById("firstName").value.trim();
  const lstna = document.getElementById("lastName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ps = document.getElementById("password").value.trim();
  const cps = document.getElementById("confirmPassword").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const chk = document.getElementById("terms").value.trim();

  document.getElementById("firstName").classList.remove("error");
  document.getElementById("lastName").classList.remove("error");
  document.getElementById("email").classList.remove("error");
  document.getElementById("password").classList.remove("error");
  document.getElementById("confirmPassword").classList.remove("error");
  document.getElementById("gender").classList.remove("error");
  document.getElementById("terms").classList.remove("error");

  if (!/^[A-Za-z\s]+$/.test(fstna) || fstna.length < 3) {
    document.getElementById("firstName").classList.add("error");
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(lstna) || lstna.length < 3) {
    document.getElementById("lastName").classList.add("error");
    isValid = false;
  }

  if (
    !/^[a-zA-Z\d._]+@(gmail|yahoo|hotmail|ricr).(com|in|co.in)$/.test(em) ||
    em.length < 9
  ) {
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  if (!/^[A-Za-z\d\s]+$/.test(ps) || ps.length < 8) {
    document.getElementById("password").classList.add("error");
    alert("Password must be atleast 8 letters !!");
    isValid = false;
  }

  if (!/^[A-Za-z\d\s]+$/.test(cps) || cps.length < 3) {
    document.getElementById("confirmPassword").classList.add("error");
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(gender) || gender.length < 3) {
    document.getElementById("gender").classList.add("error");
    isValid = false;
  }

  if (isValid) {
    console.log(fstna, lstna, em, ps, cps, gender);
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("gender").value = "";
  }
}
