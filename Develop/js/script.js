var quizData = [
  {
    question: "Commonly used data types do not include?",
    a: "Strings",
    b: "Booleans",
    c: "Alerts",
    d: "Numbers",
    correct: "c",
  },
  {
    question: "The condition in an if/else statement is enclosed with ______ ?",
    a: "Quotes",
    b: "Curly Brackets",
    c: "Parenthesis",
    d: "Square Brackets",
    correct: "d",
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    a: "Numbers & Strings",
    b: "Other arrays",
    c: "Booleans",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables?",
    a: "Commas",
    b: "Curly Brackets",
    c: "Quotes",
    d: "Parenthesis",
    correct: "d",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is?",
    a: "JavaScript",
    b: "Terminal/Bash",
    c: "For loops",
    d: "console.log",
    correct: "d",
  },
];

// var quizContainer = document.getElementById("quiz-container");
// var page = document.getElementsByClass("page");
// var one = document.getElementsByClass("one");
// var two = document.getElementsByClass("two");
// var quizHeader = document.getElementsByClass("quiz-header");
// var btnStart = document.getElementsByClass("btn-start");
// var quizQuestions = document.getElementById("quizQuestions");
// var question = document.getElementsByClass("question");
// var a = document.getElementById("a");
// var b = document.getElementById("b");
// var c = document.getElementById("c");
// var d = document.getElementById("d");
// var time = document.getElementsByClass("time");
// var btnSubmit = document.getElementsByClass("btn-submit");

function loadQuestion(jimmy, questionNumber) {
  // This question takes a question dictionary and renders it on the page
  $(".quiz-header").text("Question " + questionNumber);
  $(".question").text(jimmy.question);
  // $("label[for='a']").text(jimmy.a);
  $("#label-a").text(jimmy.a);
  $("#label-b").text(jimmy.b);
  $("#label-c").text(jimmy.c);
  $("#label-d").text(jimmy.d);
}

function showPage(className) {
  $(".page").hide();
  $(className).show();
}

var questionNumber = 0;

showPage(".one");

$(".btn-start").click(function () {
  showPage(".two");
  setTime();
  questionNumber = 0;
  loadQuestion(quizData[questionNumber], questionNumber+1);
});

$(".btn-submit").click(function () {
  
  
  var selected = $("input[type='radio']:checked").val();
  console.log(selected);
  if(selected !== quizData[questionNumber].correct) {
    secondsLeft-=10;
  }
  // if(questionNumber > quizData.length) {
  //   return;
  // }
  if(questionNumber === 4) {
    endGame();
  }
  questionNumber++;
  loadQuestion(quizData[questionNumber], questionNumber + 1);
});

// For proper selection of radio buttons
function selected() {

}

var timerInterval = null;

function endGame() {
  showPage(".three");
  clearInterval(timerInterval);
}

var timeEl = document.querySelector(".time");

var secondsLeft = 90;
var timerInterval;

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    console.log("seconds left");
    timeEl.textContent = secondsLeft + " seconds left.";
    if (secondsLeft === 0) {
      endGame();
    }
  }, 1000);
}

// showPage(".first");

// find out which input was selected when the user hits next question

// every interval has an id and you can use clearinterval




// Deselect radio buttons when next button is clicked
// Initials and score page
// How to enter your initials to submit to local storage
// Display high scores
// Save answers to local storage
// CSS
// Comment page
// Read me

  // if timer reaches zero end game
  // show page with score
  // initials
  // return to start
