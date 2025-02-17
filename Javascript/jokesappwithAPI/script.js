// const URL = "https://api.chucknorris.io/jokes/random";


// async function getJokes(){

//     const response = await fetch(URL);
//     const data = await response.json();

//     console.log(response);
//     console.log(data);

//     document.getElementById("icon").src= data.icon_url;
//     document.getElementById("joke").innerHTML = data.value;
// }





const Joke = document.getElementById("joke");
const GetJokes = document.getElementById("getjokes");
const URL = "https://official-joke-api.appspot.com/jokes/random";

async function getJokes() {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data.setup);
  console.log(data.punchline);

  Joke.innerHTML = `
        <span id="setup">${data.setup}</span>
        <span id="punchline">${data.punchline}</span>
    `;
}

GetJokes.addEventListener("click", getJokes);