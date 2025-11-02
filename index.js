const myHeader = document.getElementById("head-text");

const displayQuestion = document.getElementById("question");
const choices = document.getElementById("choices");

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let questions = [
  {
    question: "Hi?",
  },
  {
    question: "Why did the chicken cross the road?",
    answer: ["beqauuuuse", "nice try", "never"],
  },
  {
    question: "what are you doing bro?",
    answer: ["what", "idk", "import"],
  },
  {
    question: "why did you redeem it?",
    answer: ["nooooooo", "soooo", "nested stuff"],
  },
  {
    question: "what's 9 + 10?",
    answer: ["19", "910", "21"],
  },
  {
    question: "do you still have time?",
    answer: ["NaN", "null", "undefined"],
  },
];

let i = 0;

prevButton.style.display = "none";

nextButton.addEventListener("click", () => {
  switchQuestion(true);
});

prevButton.addEventListener("click", () => {
  switchQuestion(false);
});

function welcomeScreen() {
  document.getElementById("head-text").textContent = "Welcome";
  choices.style.display = "none";
  prevButton.style.display = "none";
  i = 0;
}
welcomeScreen();

function switchQuestion(isNext) {
  if (isNext && i <= 5) {
    myHeader.textContent = "Quiz";
    choices.style.display = "";

    prevButton.style.display = "";
    i++;
    displayQuestion.textContent = questions[i].question;
  } else if (!isNext) {
    --i;
    document.getElementById("question").textContent = questions[i].question;
    if (i <= 0) {
      welcomeScreen();
    }
  }
  switchAnswer();
}
function switchAnswer() {
  choices.innerHTML = "";
  for (let index = 0; index < 3; index++) {
    let template = `            
      <div>
        <input
          type="radio"
          class="btn-check"
          name="choice"
          id="${index}"
          value=""
          autocomplete="off"
        />
        <label class="btn btn-outline-success" for="${index}">
          ${questions[i].answer[index]}
        </label>
      </div>`;
    choices.innerHTML += template;
  }
}
