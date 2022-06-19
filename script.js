const quizData = [
    {
        question: 'When JS was launched',
        a: '1997',
        b: '1998',
        c: '1999',
        d: '1996',
        correct: 'd',
    },
    {
        question: 'Which Company released ReactJS',
        a: 'Microsoft',
        b: 'Facebook',
        c: 'Apple',
        d: 'Google',
        correct: 'b',
    },
    {
        question: 'The JavaScript created by:',
        a: 'Brendan Eich',
        b: 'Mitchel Baker',
        c: 'Chris Beard',
        d: 'Yan Zhu',
        correct: 'a'
    },
    {
        question: 'What is the most popular Programming Language in 2022',
        a: 'C',
        b: 'JavaScript',
        c: 'Python',
        d: 'Java',
        correct: 'c',
    },
    {
        question: 'Who created Python',
        a: 'Mitchel Baker',
        b: 'Brendan Eich',
        c: 'Guido van Rossum',
        d: 'Yan Zhu',
        correct: 'c',
    }
]


const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('h2');
const scoreEl = document.getElementById('score');
const disappearEl = document.getElementById('disappear')

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('btn');


let currentQuestion = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselected();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function disappear(){
    disappearEl.classList.add('hidden')
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }else if(answerEl.checked === false){
            disappearEl.classList.remove('hidden')
            disappearEl.innerText = 'Please Check any Answer'
            setTimeout(disappear, 2000)
        }else if(answerEl.checked === true){
            disappear();
        }
    });
    return answer;
}

function deselected(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
    disappear();

}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuestion].correct){
            score++;
        }


        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        }
        else {
            scoreEl.classList.remove('hidden')
            if(score === 5){
                scoreEl.innerText = 'You have scored 5, Well Done'
            }else if(score === 4){
                scoreEl.innerText = 'You have scored 4, Good'
            }else if(score === 3){
                scoreEl.innerText = 'You have scored 3, Average'
            }else if(score === 2){
                scoreEl.innerText = 'You have scored 2, Below Average'
            }else if(score === 1){
                scoreEl.innerText = 'You have scored 1, Bad'
            }else if(score === 0){
                scoreEl.innerText = 'You have scored 0, Too Bad'
            }
            disappear()
        }
    }    
});
