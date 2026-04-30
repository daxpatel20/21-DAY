const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: 1
  },
  {
    question: "Which language runs in the browser?",
    answers: ["Python", "Java", "C++", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets"
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");
const timerBar = document.getElementById("timerBar");
const nextBtn = document.getElementById("nextBtn");

function startTimer() {
  timeLeft = 10;
  timerBar.style.width = "100%";

  timer = setInterval(() => {
    timeLeft--;
    timerBar.style.width = timeLeft * 10 + "%";

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function loadQuestion() {
  clearInterval(timer);
  startTimer();

  const q = questions[currentQuestion];

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  progressText.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
  progressBarFull.style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.textContent = ans;

    btn.onclick = () => selectAnswer(index, btn);

    answersEl.appendChild(btn);
  });
}

function selectAnswer(index, button) {
  clearInterval(timer);

  const correct = questions[currentQuestion].correct;

  if (index === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  scoreEl.textContent = "Score: " + score;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  questionEl.textContent = " Game Over!";
  answersEl.innerHTML =
   `<h2>Final Score: ${score}/${questions.length}</h2>`;
  nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", nextQuestion);


loadQuestion(); 