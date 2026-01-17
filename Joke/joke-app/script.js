let btn = document.querySelector("button"); 
let jokeTextH1 = document.querySelector("#h1");

async function fetchJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    console.log(data); // 👈 ALWAYS do this when learning APIs

    jokeTextH1.innerText = data.setup + " 🤔";
    setTimeout(() => {
        jokeTextH1.innerText += "\n" + data.punchline + " 😂";
    }, 3000);
}

btn.addEventListener("click", fetchJoke);
