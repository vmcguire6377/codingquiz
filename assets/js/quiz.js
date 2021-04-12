
var timeLeft = 75
var timerEl = document.getElementById("myTimer");
var startQuiz = document.getElementById("start");
var sec = timeLeft;
var timeDisplay = document.getElementById("myTimer")


var question = document.getElementById("question");
var image = document.getElementById("qImage");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var choice = document.getElementsByName('choice');

let questions = [{
  question: "What is the name of the best selling rock band of all time?",
  image: "./assets/images/music-notes.PNG",
  choiceA: "Led Zeppelin",
  choiceB: "The Eagles",
  choiceC: "Aerosmith",
  choiceD: "AC/DC",
  correct: "C"
},
{
  question: "What is the best selling pop album of all time?",
  image: "./assets/images/grammy.JPG",
  choiceA: "AC/DC, Back in Black",
  choiceB: "Michael Jackson, Thriller",
  choiceC: "MeatLoaf, Bat Out of Hell",
  choiceD: "INXS, Kick",
  correct: "B"
},
{
  question: "Who is known as the 'Father of Rock'?",
  image: "./assets/images/rock.JPG",
  choiceA: "Elvis Presley",
  choiceB: "Kenny G.",
  choiceC: "Fats Domino",
  choiceD: "Chuck Berry",
  correct: "D"
},
{
  question: "Who was the top female pop artist of the 1980s? ",
  image: "./assets/images/pop.JPG",
  choiceA: "Cher",
  choiceB: "Madonna",
  choiceC: "Whitney Houston",
  choiceD: "Beyonce",
  correct: "B"
},
{
  question: "Would you like to try again?",
  choiceA: "yes",
  choiceB: "no",
  choiceC: "unknown",
  choiceD: "all of the above",
  correct: ""
}
];

function myTimer() {
  console.log(timeDisplay);
  timerEl.innerHTML = timeLeft + "sec left";
  sec--;
}

function endQuiz() {
  if (runningquestion.questions === 0 || timeLeft === 0)
    window.prompt("The game is over. Please enter your name.")
}

var lastquestion = questions.length - 1;
let runningquestion = 0;
let q;
let cor = 0, inc = 0;

startQuiz.addEventListener("click", function () {
  countdown();
}
)

function countdown() {
  var timeInterval = setInterval(function () {
    console.log("timeLeft", timeLeft);
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + "seconds left";
      timeLeft--;
    }
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + "second left";
      timeLeft--;
    }
    else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);

}

function askQuestion() {
  q = questions[runningquestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  image.innerHTML = "<img src = " + q.image + " width = '200px' height = '200px' >";
  choiceA.innerHTML = "<input type='radio' value = 'A' name ='choice'/>" + q.choiceA;
  choiceB.innerHTML = "<input type='radio' value = 'B' name ='choice'/>" + q.choiceB;
  choiceC.innerHTML = "<input type='radio' value = 'C' name ='choice'/>" + q.choiceC;
  choiceD.innerHTML = "<input type='radio' value = 'D' name ='choice'/>" + q.choiceD;
  score();
}

function score() {
  correct.innerHTML = "Correct : " + cor;
  incorrect.innerHTML = "Incorrect : " + inc;
}

function next() {
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked) {
      if (choice[i].value === q.correct) {
        alert("You Are Correct!");
        cor++;
      }
      else {
        alert("You are incorrect.");
        console.log("inc", inc);
        inc++;
        timeLeft = timeLeft - 10;
        console.log(timeLeft);
      }
    }

  }

  function endQuiz () {
    if(timerEl.textContent = "") {
      window.alert("The quiz is over")
    }
  }

  runningquestion++;
  askQuestion();
  endQuiz();
}

localStorage.setItem("score", JSON.stringify(score));











