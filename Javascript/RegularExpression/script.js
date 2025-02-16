function sbmt() {
  let isValid = true;
  // Fetching the Elements
  const txt = document.getElementById("text").value.trim();
  const em = document.getElementById("email").value.trim();
  const nm = document.getElementById("phone").value.trim();

  //Making the default look , its better method
  document.querySelectorAll(".ip").forEach((element) => {
    element.classList.remove("error");
  });

  // Making to default Look
  // document.getElementById("text").classList.remove("error");
  // document.getElementById("email").classList.remove("error");
  // document.getElementById("phone").classList.remove("error");

  // Validating the Name
  if (!/^[A-Za-z\s]+$/.test(txt) || txt.length < 3) {
    document.getElementById("text").classList.add("error");
    isValid = false;
  }

  //Validating the Email
  if (
    !/^[a-zA-Z\d._]+@(gmail|yahoo|hotmail|ricr).(com|in|co.in)$/.test(em) ||
    em.length < 9
  ) {
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  //Validating the Number
  if (!/^[6-9]\d{9}$/.test(nm)) {
    document.getElementById("phone").classList.add("error");
    isValid = false;
  }

  if (isValid) {
    console.log(txt, em, nm);
    // Erase all the data from input field!
    // document.getElementById("text").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("phone").value = "";
    // Erase all the data from input field!  , its better method
    document.querySelectorAll(".ip").forEach((element) => {
      element.value = "";
    });
  }
}
