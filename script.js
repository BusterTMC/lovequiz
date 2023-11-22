const questions = [
    {
        question: "Who painted the Mona Lisa??",
        answers: [
            { text: "Vincent van Gogh", correct: false},
            { text: "Papblo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Monaco", correct: false },
            { text: "Marseille", correct: false },
            { text: "Nice", correct: false },
        ]

    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Makalu", correct: false },
            { text: "Lhotse", correct: false },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false },
            { text: "Jupiter", correct: true },
        ] 
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Lev Tolstoj", correct: false },
            { text: "William Shakespeare", correct: true },
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Perth", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Sydney", correct: false },
        ] 
    },
    {
        question: "What is the primary language spoken in Brazil?",
        answers: [
            { text: "French", correct: false },
            { text: "Spanish", correct: false },
            { text: "Portuguese", correct: true },
            { text: "English", correct: false },
        ]   
    },
    {
        question: "Who is known as the inventor of the lightbulb?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Alexander Graham Bell", correct: false },
            { text: "Albert Einstein", correct: false },
        ] 
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Indian", correct: false },
            { text: "Atlantic", correct: false },
            { text: "Pacific", correct: true },
            { text: "Arctic", correct: false },
        ]    
    },
    {
        question: "What is the capital of the United States?",
        answers: [
            { text: "Washington, D.C.", correct: true },
            { text: "New York", correct: false },
            { text: "Los Angeles", correct: false },
            { text: "Seattle", correct: false },
        ]  
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

currentQuestion.answers.forEach(answer => { 
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct){ 
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    });
}


function resetState(){ 
nextButton.style.display = "none";
    while(answerButtons.firstChild){ 
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){ 
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
     }
    Array.from(answerButtons.children).forEach(button => { 
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
         }
         button.ariaDisabled = true;
    });
    nextButton.style.display = "block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){ 
        showQuestion();
    }else{
        showScore();
    }
}

 nextButton.addEventListener("click", ()=>{ 
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz(); 
    }
})

startQuiz();