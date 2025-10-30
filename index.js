const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const myChoices = document.getElementById("choices");

let questions = [
  {
    question: "Hi?",
  },
  {
    question: "Why did the chicken cross the road?",
    answer: "beqauuuuse",
  },
  {
    question: "what are you doing bro?",
    answer: "idk",
  },
  {
    question: "why did you redeem it?",
    answer: "nooooooo",
  },
  {
    question: "what's 9 + 10?",
    answer: "21?",
  },
  {
    question: "do you still have time?",
    answer: "NaN",
  },
];

let myQuestion = questions[0].question;
let myAnswer = questions[0].answer;

console.log(myQuestion);
console.log(myAnswer);
welcomeScreen();
nextButton.addEventListener("click", () => {
  switchQuestion(true);
});

prevButton.addEventListener("click", () => {
  switchQuestion(false);
});

prevButton.style.display = "none";

function welcomeScreen() {
  document.getElementById("head-text").textContent = "Welcome";
  myChoices.style.display = "none";
  prevButton.style.display = "none";
  i = 0;
}

function switchQuestion(isNext) {
  if (isNext && i <= 5) {
    i++;
    document.getElementById("question").textContent = questions[i].question;
    document.getElementById("head-text").textContent = "Quiz";
    myChoices.style.display = "";

    prevButton.style.display = "";
  } else if (!isNext) {
    --i;
    document.getElementById("question").textContent = questions[i].question;
    if (i <= 0) {
      welcomeScreen();
    }
  }
  console.log(i);
}
