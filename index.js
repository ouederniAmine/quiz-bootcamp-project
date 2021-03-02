let currentQuestion = 2;
let score = 0;
let isQuestion;
let startBtn = document.getElementById("startbtn");
let root = document.getElementById("root");
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

const newQuestion = () => {
  let question = questions[Math.floor(Math.random() * 10)];
  fillQuestion(question.question, currentQuestion, question.answers);
  document.getElementById("next").addEventListener("click", () => {
    console.log("clicked");
    const event = new CustomEvent("newQuestion");
    window.dispatchEvent(event);
  });
};
let quizPage =
  "<div id='quizPage'><div class='score'><h1>20</h1></div><div class='quizSelection'><div class='question'><h1 id='questionNum'>Question N° 1 :</h1><h2 id='question'>hellllo</h2></div><div class='answers'><button id='answer1'>hey</button><button id='answer2'>hey</button><button id='answer3'>hey</button><button id='answer4'>hey</button></div><button id='next'>Next</button></div></div>";

let questions = [
  {
    question: "Who's the current president of the united states?",
    answers: ["Barak Obama", "James charles", "Joe Biden", "Ibraham Lincon"],
    response: "Joe Biden",
  },
  {
    question: "Who have the world record of Fastest man alive?",
    answers: ["true", "fasle", "nfof", "Ronny coleman"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "rn"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "bd"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "dnd"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "jnd"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "njdm"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "ff"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "hd"],
    response: "true",
  },
  {
    question: "What",
    answers: ["true", "fasle", "nfof", "dhbsq"],
    response: "true",
  },
];

function divOnclick(e) {}
//e.target.parentElement.firstChild.innerHTML;

window.addEventListener("newQuestion", () => {
  newQuestion();
  console.log("new");
});
