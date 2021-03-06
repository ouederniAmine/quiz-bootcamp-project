let currentQuestion;
let score = 0;
let questionNumber = 1;

let isQuestion;
let startBtn = document.getElementById("startbtn");
let root = document.getElementById("root");
let UserResponded = true;
const restart = () => {
  const restartPage = `
    <h1 class='restarth1'>You achived in this quiz:</h1><p class='restartp'>${score}/10</p><button class='restartbu' id='restart'>Restart?</button>`;
  document.getElementById("root").innerHTML = restartPage;
  document.getElementById("restart").onclick = () => {
    root.innerHTML = quizPage;
    score = 0;
    questionNumber = 1;
    newQuestion();
  };
};
window.addEventListener("UserAnswer", (e) => {
  let answers = document.getElementsByClassName("answer");
  for (let i = 0; i < answers.length; i++) {
    answers[i].style.background = "red";
    answers[i].style.opacity = "1";
  }
  if (
    e.detail.answer === questions[currentQuestion].response &&
    UserResponded
  ) {
    let correctAnswer = document.getElementById(e.detail.element);
    correctAnswer.style.backgroundColor = "#19ff00";
    UserResponded = true;
    const event = new CustomEvent("CorrectAnswer");
    window.dispatchEvent(event);
    console.log("hey");
  }
});
window.addEventListener("CorrectAnswer", () => {
  score++;
  console.log(score);
  UserResponded = false;
});
window.addEventListener("load", () => {
  isQuestion = false;
});
startBtn.addEventListener("click", (e) => {
  root.innerHTML = quizPage;
  newQuestion();
});
let fillQuestion = (question, questionNum, answers) => {
  let questionDOM = document.getElementById("question");
  let questionNumDOM = document.getElementById("questionNum");

  questionDOM.innerText = question;
  questionNumDOM.innerText = `Question Num° ${questionNum}`;
  for (let i = 0; i < answers.length; i++) {
    document.getElementById(`answer${i + 1}`).innerText = answers[i];
  }
};

document.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Next") {
    questionNumber++;
    const event = new CustomEvent("newQuestion");
    window.dispatchEvent(event);
  }
});
const newQuestion = () => {
  window.addEventListener("UserAnswer", () => {
    document.getElementById("next").style.display = "block";
  });
  currentQuestion = Math.floor(Math.random() * 10);
  let question = questions[currentQuestion];
  fillQuestion(question.question, questionNumber, question.answers);
  isQuestion = true;
  console.log(isQuestion);
  document.getElementById("score").innerHTML = "Your score is  : " + score;
  document.getElementById("next").style.display = "none";
  document.getElementById("answer1").style.backgroundColor = "#3498db";
  document.getElementById("answer2").style.backgroundColor = "#3498db";
  document.getElementById("answer3").style.backgroundColor = "#3498db";
  document.getElementById("answer4").style.backgroundColor = "#3498db";
  document.getElementById("answer1").onclick = (e) => {
    const event = new CustomEvent("UserAnswer", {
      detail: {
        element: "answer1",
        answer: e.target.innerHTML,
      },
    });
    window.dispatchEvent(event);
  };
  document.getElementById("answer2").onclick = (e) => {
    const event = new CustomEvent("UserAnswer", {
      detail: {
        element: "answer2",
        answer: e.target.innerHTML,
      },
    });
    window.dispatchEvent(event);
  };
  document.getElementById("answer3").onclick = (e) => {
    const event = new CustomEvent("UserAnswer", {
      detail: {
        element: "answer3",
        answer: e.target.innerHTML,
      },
    });
    window.dispatchEvent(event);
  };
  document.getElementById("answer4").onclick = (e) => {
    const event = new CustomEvent("UserAnswer", {
      detail: {
        element: "answer4",
        answer: e.target.innerHTML,
      },
    });
    window.dispatchEvent(event);
  };
};
let quizPage = `
  <div id='quizPage'><div class='score'><h1 id='score'>Your current Score is :0</h1></div><div class='quizSelection'><div class='question'><h1 id='questionNum'>Question N° 1 :</h1><h2 id='question'>hellllo</h2></div><div class='answers'><button class='answer' id='answer1'>hey</button><button class='answer' id='answer2'>hey</button><button class='answer' id='answer3'>hey</button><button class='answer' id='answer4'>hey</button></div><button  id='next'>Next</button></div></div>`;

let questions = [
  {
    question: "Who's the current president of the united states?",
    answers: ["Barak Obama", "John Kinendy", "Joe Biden", "Ibraham Lincon"],
    response: "Joe Biden",
  },
  {
    question: "Which country is Prague in?",
    answers: ["France", "Germany", "Czech Republic", "Italy"],
    response: "true",
  },
  {
    question: "What is the world's largest ocean?",
    answers: ["Indian", "Pacific", "Arctic", "Atlantic"],
    response: "Pacific",
  },
  {
    question: "What is the capital city of Spain?",
    answers: ["Catalonia", "Barcelona", "Madrid", "Seville"],
    response: "Madrid",
  },
  {
    question: "Who played Neo in The Matrix? ",
    answers: ["John wick", "keanu Reeves", "Leonardo Di Caprio", "Brad pit"],
    response: "keanu Reeves",
  },
  {
    question: "Which chess piece can only move diagonally? ",
    answers: ["Rook", "Pawn", "Bishop", "King"],
    response: "Bishop",
  },
  {
    question: "When was William Shakespeare born?",
    answers: [
      "24 April 1664",
      "22 April 1664",
      "23 April 1564",
      "13 April 1554",
    ],
    response: "23 April 1564",
  },
  {
    question: "When was the ebook invented? ",
    answers: ["1971", "1999", "2003", "2020"],
    response: "1971",
  },
  {
    question: "On what date did the Battle of Culloden take place?",
    answers: [
      "16 April 1746",
      "06 April 1744",
      "10 April 1646",
      "14 April 1646",
    ],
    response: "16 April 1746",
  },
  {
    question:
      "Which country hosted a Formula 1 race for the first time in 2011?",
    answers: ["India", "Tunisia", "USA", "England"],
    response: "India",
  },
];

window.addEventListener("newQuestion", () => {
  if (questionNumber < 11) {
    UserResponded = true;
    newQuestion();
    console.log("new");
  } else {
    restart();
  }
});
