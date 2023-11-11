const Questions =[
    {
        q: "What is capital of India?",
        a: [{ text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "Mumbai", isCorrect: false }
        ]
    },
    {
        q: "What is the capital of Thailand?",
        a: [{ text: "Lampang", isCorrect: false },
        { text: "Phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
        ]
     
    },
]


const question = document.querySelector('.questions');
const ansewrs = document.querySelector('.answers');
const showScore = document.querySelector('.score');
const nextBtn = document.querySelector('.next-btn')


let currQuestion = 0

let score = 0


function loadQuestion(){
    question.innerText = Questions[currQuestion].q;
    // empty previous answers
    ansewrs.innerHTML = ''

    //load answer
    Questions[currQuestion].a.forEach(element => {
        console.log(element);
        const ans = document.createElement('div');
        ans.className = 'answer-option';
        ans.textContent = element.text
        ans.addEventListener('click', function(){
            console.log('ok')
            if(element.isCorrect === true){
                score = score + 5
                showScore.textContent = `score : ${score}`
            }
        }, {once:true})

        ansewrs.appendChild(ans)
    });
}

loadQuestion()

nextBtn.addEventListener('click', function(){
    if(currQuestion < Questions.length - 1){
        currQuestion++;
        console.log(currQuestion)
        loadQuestion()
        
    }else{
        currQuestion = 0;
        loadQuestion()
    }
})