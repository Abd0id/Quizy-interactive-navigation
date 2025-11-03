const myHeader = document.getElementById("head-text");
const displayQuestion = document.getElementById("question");
const choices = document.getElementById("choices");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let i = 0;
let score = 0;

let questions = [
  {
    question: "Why did the chicken cross the road?",
    answer: ["beqauuuuse", "nice try", "never"],
    correct: 0,
    answered: 0,
  },
  {
    question: "what are you doing bro?",
    answer: ["what", "idk", "import"],
    correct: 1,
    answered: 0,
  },
  {
    question: "why did you redeem it?",
    answer: ["nooooooo", "soooo", "nested stuff"],
    correct: 0,
    answered: 0,
  },
  {
    question: "what's 9 + 10?",
    answer: ["19", "910", "21"],
    correct: 2,
    answered: 0,
  },
  {
    question: "do you still have time?",
    answer: ["NaN", "null", "defined"],
    correct: 2,
    answered: 0,
  },
];

prevButton.style.display = "none";

nextButton.addEventListener("click", () => {
  handleNext();
});

prevButton.addEventListener("click", () => {
  switchQuestion(false);
});

function welcomeScreen() {
  myHeader.textContent = "Welcome";
  displayQuestion.textContent = "Press Next to Start the Quiz";
  choices.style.display = "none";
  prevButton.style.display = "none";
  i = 0;
  score = 0;
}
welcomeScreen();

function handleNext() {
  if (displayQuestion.textContent.includes("Press Next")) {
    myHeader.textContent = "Quiz";
    displayQuestion.textContent = questions[i].question;
    choices.style.display = "";
    switchAnswer();
    return;
  }

  checkAnswer();

  if (i === questions.length - 1) {
    showOutro();
    return;
  }

  switchQuestion(true);
}

function switchQuestion(isNext) {
  if (isNext && i < questions.length - 1) {
    i++;
    myHeader.textContent = "Quiz";
    choices.style.display = "";
    prevButton.style.display = i > 0 ? "" : "none";
    nextButton.innerHTML = i === questions.length - 1 ? "Finish" : "Next";
    displayQuestion.textContent = questions[i].question;
    switchAnswer();
  } else if (!isNext && i > 0) {
    i--;
    displayQuestion.textContent = questions[i].question;
    switchAnswer();
  } else if (i <= 0) {
    welcomeScreen();
  }
}

function switchAnswer() {
  choices.innerHTML = "";
  let answers = questions[i].answer;

  answers.forEach((ans, index) => {
    let template = `
      <div class="my-2">
        <input
          type="radio"
          class="btn-check"
          name="choice"
          id="choice-${index}"
          value="${index}"
        />
        <label class="btn btn-outline-success" for="choice-${index}">
          ${ans}
        </label>
      </div>`;
    choices.innerHTML += template;
  });
}

function checkAnswer() {
  let selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) return;
  let answerIndex = parseInt(selected.value);
  if (answerIndex === questions[i].correct && questions[i].answered === 0) {
    questions[i].answered = 1;
    score++;
  }
}

function showOutro() {
  myHeader.textContent = "Quiz Finished!";
  displayQuestion.textContent = `Your score: ${score}/${questions.length}`;
  choices.innerHTML = "";
  prevButton.style.display = "none";
  nextButton.style.display = "none";

  let restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.className = "btn btn-primary mt-3";
  restartBtn.addEventListener("click", () => {
    nextButton.style.display = "";
    welcomeScreen();
  });

  choices.appendChild(restartBtn);
}
