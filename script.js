//background div that contains all emoji divs
const backgroundDiv = document.querySelector("#background");

//all possible emojis
const emoji = [
  "🤪",
  "😎",
  "😇",
  "😱",
  "😵",
  "🤫",
  "🥶",
  "🤩",
  "🥵",
  "🤯",
  "🥴",
  "🤑",
  "😇",
  "🥴",
  "😑",
  "🫣",
  "🤬",
];

// create all emoji divs and put them inside background div
for (let i = 1; i < 100; i++) {
  let div = document.createElement("div");
  div.setAttribute("id", `emoji-${i}`);
  div.classList.add("emoji");
  backgroundDiv.appendChild(div);
}

//all emoji divs
const emojiDivs = document.querySelectorAll(".emoji");

//spawn a random emoji inside a random emoji div
const emojiSpawn = () => {
  let randomDivNumber = Math.floor(Math.random() * emojiDivs.length);
  let divSpawner = emojiDivs[randomDivNumber];

  divSpawner.classList.add("show");
  divSpawner.classList.remove("hidden");

  let randomEmojiNumber = Math.floor(Math.random() * emoji.length);
  divSpawner.textContent = emoji[randomEmojiNumber];

  setTimeout(() => {
    divSpawner.classList.add("hidden");
    divSpawner.classList.remove("show");
  }, 3000);
};

//spawn emojis 3 by 3 with a little delay between them
let timer1 = setInterval("emojiSpawn()", 1000);
let timer2 = setInterval("emojiSpawn()", 1500);
let timer3 = setInterval("emojiSpawn()", 1750);
