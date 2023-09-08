// index.js
const quotes = [
  "The only way to deal with the future is to function in the present.",
  "Write hard and clear about what hurts.",
  "The first draft of anything is shit.",
  "Courage is grace under pressure.",
  "There is no friend as loyal as a book.",
  // Add more quotes here
];

const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});

document
  .getElementById("confettiButton")
  .addEventListener("click", function () {
    createConfetti();
  });

function createConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = Math.random() * 3 + 1 + "s";
    confetti.style.left = Math.random() * 100 + "vw";

    confettiContainer.appendChild(confetti);
  }

  document.body.appendChild(confettiContainer);

  setTimeout(function () {
    confettiContainer.remove();
  }, 5000);
}

function getRandomColor() {
  const colors = [
    "#ff5500",
    "#ff7733",
    "#ffd700",
    "#cc3399",
    "#66cc99",
    "#3399cc",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const promptText = document.getElementById("promptText");
  const generateButton = document.getElementById("generateButton");
  const responseText = document.getElementById("responseText");
  const submitResponseButton = document.getElementById("submitResponseButton");
  const submittedResponse = document.getElementById("submittedResponse");

  const prompts = [
    "Write a story about a detective solving a mysterious case.",
    "Describe a journey through a fantastical and surreal world.",
    "Write a dialogue between two characters meeting for the first time.",
    // Add more prompts here...
  ];

  generateButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
    promptText.textContent = randomPrompt;
    responseText.value = "";
    submittedResponse.textContent = "";
  });

  submitResponseButton.addEventListener("click", function () {
    const response = responseText.value.trim();
    if (response !== "") {
      submittedResponse.textContent = `Your Response: ${response}`;
    } else {
      submittedResponse.textContent =
        "Please write a response before submitting.";
    }
  });
});
