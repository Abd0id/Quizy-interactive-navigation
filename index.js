const questions = [
  "Why did the chicken cross the road?",
  "what are you doing bruh?",
  "why did you redeem it?",
  "who did it?",
  "do you still have time?",
];



const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");

var i = 0;
nextButton.addEventListener("click", () => {
  switchQuestion(true);
});
prevButton.addEventListener("click", () => {
  switchQuestion(false);
});

function switchQuestion(isNext) {
  console.log("hi");
  if (isNext && i < 5) {
    document.getElementById("question").textContent = questions[i];
    document.getElementById("head-text").textContent = "Quiz";
    i++;
  } else {
    --i;
    document.getElementById("question").textContent = questions[i];
    if (i < 0) {
      document.getElementById("head-text").textContent = "Welcome";
      i = 0;
    }
  }
}
