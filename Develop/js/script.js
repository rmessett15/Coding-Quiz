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

var gamePoints = 0;

function loadQuestion(jimmy, questionNumber) {
  // This question takes a question dictionary and renders it on the page
  $(".quiz-header").text("Question " + questionNumber);
  $(".question").text(jimmy.question);
  // The line commented out below is just another way to render the questions and possible answers to the page
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

// Deselect radio buttons when next button is clicked
$(".btn-submit").click(function () {
  var selected = $("input[type='radio']:checked").val();
  console.log(selected);
  // Find out which input was selected when the user hits next question
  if (selected !== quizData[questionNumber].correct) {
    secondsLeft -= 10;
  } else {
    gamePoints += 10;
    $(".points").text("Points: " + gamePoints);
  }

  if (questionNumber === 4) {
    endGame();
    return;
  }
  questionNumber++;
  loadQuestion(quizData[questionNumber], questionNumber + 1);
});

var secondsLeft = 90;
var timerInterval = null;

function endGame() {
  showPage(".three");
  // Every interval has an id and you can use clearinterval
  clearInterval(timerInterval);
  secondsLeft = 90;
  $("#points").text(gamePoints);
}

var timeEl = document.querySelector(".time");

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    console.log("seconds left");
    timeEl.textContent = secondsLeft + " seconds left.";
    // If timer reaches zero end game
    if (secondsLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Local storage
 
var initials = "";

$(".btn-score").click(function() {
  var initials = $("input[type='text']").val();
  console.log(typeof localStorage.getItem("points"), "type");
  
  $(".points").text("Points: " + 0);
    if (localStorage.getItem("points") == null || gamePoints > localStorage.getItem("points")) {
      console.log("got to the if block");
      // Save answers to local storage
      localStorage.setItem("initials", initials);
      localStorage.setItem("points", gamePoints);
    } 
});

// Initials and score page
// Show page with score
$(".btn-score").click(function () {
  showPage(".four");
  $(".winner").text(localStorage.getItem("initials") + " " + localStorage.getItem("points"));
});

// Return to start
$(".btn-restart").click(function () {
  showPage(".one");
  $(".quiz-header").text("Coding Quiz");
  gamePoints = 0;
  $("input[type='text']").val("");
});