function dark() {
  document.getElementById("con1").classList.add("dark");
}

function light() {
  document.getElementById("con1").classList.remove("dark");
}

function changetheme() {
  document.getElementById("con1").classList.toggle("dark");
  const mode = document.getElementById("theme");

  if (mode.innerText === "Dark theme") {
    mode.innerText = "Light theme";
  } else {
    mode.innerText = "Dark theme";
  }
}

function red() {
  document.getElementById("con1").style.backgroundColor = "red";
}

function green() {
  document.getElementById("con1").style.backgroundColor = "green";
}

function blue() {
  document.getElementById("con1").style.backgroundColor = "blue";
}

function pink() {
  document.getElementById("con1").style.backgroundColor = "pink";
}


function changeBoxColor(color) {
  document.getElementById("con1").style.backgroundColor = color;
}

function changeHeadingColor(color) {
  document.getElementById("heading").style.backgroundColor = color;
}

function changeContentColor(color) {
  document.getElementById("content").style.backgroundColor = color;
}


function changeBoxColor(event) {
  document.getElementById('con1').style.backgroundColor = event.target.value;
}

function changeHeadingColor(event) {
  document.getElementById('heading').style.color = event.target.value;
}

function changeContentColor(event) {
  document.getElementById('content').style.color = event.target.value;
}