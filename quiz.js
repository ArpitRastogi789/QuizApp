const quizData = [{
    Question: "Earliest Programimg language?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C",
    correct: "d"
},
{
    Question: "CSS stands for?",
    a: "Cello gripper",
    b: "Cute system software",
    c: "city school",
    d: "Cascading style sheet",
    correct: "d"
},
{
    Question: "Father of Python?",
    a: "James parker",
    b: "George Thins",
    c: "Guido van Rossum",
    d: "Charles Merris",
    correct: "c"
}
]
let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input");
const loadQuestion = () => {
    if(index===total){
        return endQuiz();
    }
    const data = quizData[index]
    questionBox.innerHTML = data.Question;
    allInputs[0].nextElementSibling.innerHTML = data.a;
    allInputs[1].nextElementSibling.innerHTML = data.b;
    allInputs[2].nextElementSibling.innerHTML = data.c;
    allInputs[3].nextElementSibling.innerHTML = data.d;
}
const submitQuiz = () => {
const data=quizData[index]
const ans = getAnswer();
if (ans==data.correct){
    correct++;
}else{
    incorrect++;
}
index++;
loadQuestion()
}
const getAnswer = () => {
    let answer;
    allInputs.forEach(
        (input) => {
            if (input.checked) {
                answer=input.value;
            }
        }
    );return answer;
}
const endQuiz=()=>{
document.querySelector(".Container").innerHTML=`<h3> Thanks you for playing the Quiz</h3>
<h2>${correct}/${total} are correct</h2>`
}
loadQuestion();