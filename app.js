const Questions =[
    {
        q: "1) What is capital of India?",
        a: [{ text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "Mumbai", isCorrect: false }
        ]
    },
    {
        q: "2) What is the capital of Thailand?",
        a: [{ text: "Lampang", isCorrect: false },
        { text: "Phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
        ]
     
    },
    {
        q: "3) Which is the largest planet in the solar system?",
        a: [{ text: "mars", isCorrect: false },
        { text: "uranus", isCorrect: false },
        { text: "jupiter", isCorrect: true },
        { text: "saturn", isCorrect: false }
        ]
     
    },
    {
        q: "4) How many Olympic rings are there? ",
        a: [{ text: "5", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "7", isCorrect: false },
        { text: "4", isCorrect: false }
        ]
     
    },
    {
        q: "5) Which is the world’s largest ocean?",
        a: [{ text: "southern oceaan", isCorrect: false },
        { text: "atlantic ocean", isCorrect: false },
        { text: "indian ocean", isCorrect: false },
        { text: "pacific ocean", isCorrect: true }
        ]
     
    },
    {
        q: "6) From which country did the Statue of Liberty come from?",
        a: [{ text: "austria", isCorrect: false },
        { text: "germany", isCorrect: false },
        { text: "france", isCorrect: true },
        { text: "britain", isCorrect: false }
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
        
        const ans = document.createElement('div');
        ans.className = 'answer-option';
        ans.textContent = element.text
        ans.addEventListener('click', function(){
            
            if(element.isCorrect === true){
                score = score + 5
                showScore.textContent = score;
                ans.classList.add('right')
            }else{
                ans.classList.add('wrong')
            }
        }, {once:true})

        ansewrs.appendChild(ans)
    });
}

loadQuestion()

nextBtn.addEventListener('click', function(){
    if(currQuestion < Questions.length - 1){
        currQuestion++;
        loadQuestion()
        
    }else{
        currQuestion = 0;
        score = 0;
        showScore.textContent = score;
        loadQuestion()
    }
})