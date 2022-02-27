/*
When the person clicks on the button the timer starts.
Start time 
A question is asked.
If the question is correct then move to the next question.
If the quesiton is incorrect then the player gets a penalty then moves on to the next question.
Once all question have been answered give options to save score.
User may choose to save score and show scorebord.
*/

var countDownTimer;
const maxTime = 5 * 60 * 1000; // time is in seconds
var arrayOfQuestions = [];

function setCountDownTimer() {
    countDownTimer = maxTime;
}

let timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    countDownTimer = countDownTimer - 1;
}

function setupQuestions() {
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class: ",
        answer1: "write a semicoloon {;} character, followed by the class name",
        answer2: "write a period {.} character, followed by the class name",
        answer3: "werite a period {.} character",
        answer4: "write a comma {,} character",
        correctAnswer: 2
    };

    let question2 = {
        id: "quest1",
        question: "In CSS, a color can be specified by using a predefined",
        answer1: "yes",
        answer2: "no",
        answer3: null,
        asswer4: null,
        correctAnswer: 1
    };

    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);

    console.log('setupQuestions arrayOfQuestions: ', arrayOfQuestions) ;
            
        }
    function nextQuestion () {
        for( let i = 0; i < arrayOfQuestions.length; i++) {

    }
}

function showQuestion(questionindex) {
    let questionSection = document.getElementById('question');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionindex].id;
    newQuestion.innerText = arrayOfQuestions[questionindex].question;
    questionSection.appendChild();
}

//if question is correct next question.