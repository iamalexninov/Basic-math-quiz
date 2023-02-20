let scoreElement = document.querySelector(".score");
let inputElement = document.getElementById("answer-field");
let titleElement = document.querySelector(".heading");

let correctDivElement = document.querySelector(".correct");
let incorrectDivElement = document.querySelector(".incorrect");
let mainSection = document.querySelector("#main-section");
let buttonElement = document.querySelector(".btn");
let nextButtonElement = document.querySelector(".next");
let tryAgainButtonElement = document.querySelector(".try-again");

buttonElement.addEventListener("click", onSubmit);
nextButtonElement.addEventListener("click", next);
tryAgainButtonElement.addEventListener("click", tryAgain);

const questions = [
  {
    question: "How much is 3 + 3?",
    answer: "6",
  },
  {
    question: "How much is 10 * 2?",
    answer: "20",
  },
  {
    question: "How much is 20 / 2?",
    answer: "10",
  },
  {
    question: "How much is 10 / 2?",
    answer: "5",
  },
  {
    question: "How much is 0 * 2?",
    answer: "0",
  },
  {
    question: "How much is 2 * 2?",
    answer: "4",
  },
  {
    question: "How much is 10 / 7?",
    answer: "1.43",
  },
];

let shuffledQuestions, currentQuestionIndex;

window.addEventListener("load", startGame);

function startGame(e) {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setQuestion();
}

function onSubmit(e) {
  if (inputElement.value == "") {
    return 0;
  }
  //-shuffledQuestions[currentQuestionIndex] -> take current random question
  validResult(shuffledQuestions[currentQuestionIndex]);
}

function validResult(question) {
  if (inputElement.value == question.answer) {
    correctDivElement.classList.remove('hide');
    scoreElement.textContent = Number(scoreElement.textContent) + 1; 
  }else{
    incorrectDivElement.classList.remove('hide');
    scoreElement.textContent = Number(scoreElement.textContent) - 1; 
  }
}

function setQuestion(e) {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  titleElement.textContent = question.question;
}

function next(){
  startGame()
  correctDivElement.classList.add('hide');
  inputElement.value = ""
}

function tryAgain() {
  inputElement.value = ""

  correctDivElement.classList.add('hide');
}
