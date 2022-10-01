
/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu')
// const navToggle = document.getElementById('nav-toggle');
const navClose = document.querySelector('#nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
function showMenu() {
    navMenu.classList.add('show-menu');
}

/*===== MENU HIDDEN =====*/

/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/

window.addEventListener('scroll', () => {
    const haeder = document.querySelector('#header');

    if (this.scrollY >= 100)
        haeder.classList.add('scroll-header');
    else
        haeder.classList.remove('scroll-header');
})
/*=====================Quizzes======================*/
//sherpeny
//The dynamic of three quizz:
document.getElementById("qq1").onclick= function(){
    document.getElementById("allqq").style="display:none;"
    document.getElementById("gqc").style="display:block;"   
}

document.getElementById("qq2").onclick= function(){
    document.getElementById("allqq").style="display:none;"
    document.getElementById("gqc").style="display:block;"
    document.getElementById("qq2").style="background-color:#; animation-play-state: running;"
    document.getElementById("qq2").innerHTML="<h1>Finished</h1>"
    
}
document.getElementById("qq3").onclick= function(){
    document.getElementById("allqq").style="display:none;"
    document.getElementById("gqc").style="display:block;"
    document.getElementById("qq3").style="background-color:green; animation-play-state: running;"
    document.getElementById("qq3").innerHTML="<h1>Finished</h1>"
}

/***************************/
//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "All of the following are potential risks astronauts may face during their spaceflight except ... :",
        optionA: "Microgravity",
        optionB: "Radiation",
        optionC: "Hair fall",
        optionD: "Isolation&confinements",
        correctOption: "optionC"
    },

    {
        question: "which of the following is the biggest cause for renal stones formation in space?",
        optionA: "Radiation",
        optionB: "Microgravity",
        optionC: "Temperature",
        optionD: "the astronaut mass",
        correctOption: "optionB"
    },

    {
        question: "An astronaut experienced multiple sores in their face suddenly during his spaceflight, he had a past infection with herpes-simplex virus. What is the most reasonable cause the virus is reactivated?",
        optionA: "Lower immunity due to micrograv.",
        optionB: "Lower immunity due to rad.",
        optionC: "Limited oxygen supply",
        optionD: "Distance from earth",
        correctOption: "optionA"
    },

    {
        question: "circadian rhythm refers to ... ?",
        optionA: "Heart beats",
        optionB: "Biological clock",
        optionC: "Respiration rate",
        optionD: "pulse",
        correctOption: "optionB"
    },

    {
        question: "what has the upper hand in causing circadian desynchronization?",
        optionA: "solar system",
        optionB: "Isolation&confinements",
        optionC: "Zero-gravity environment",
        optionD: "Radiation",
        correctOption: "optionB"
    },

    {
        question: "The most radiation-resistant organism on earth is ...?",
        optionA: "Deinococcus radiodurans",
        optionB: "Tardigrade",
        optionC: "B. subtilis",
        optionD: "C.elegance",
        correctOption: "optionA"
    },

    {
        question: "The best organism at heat resistance is ... ?",
        optionA: "epidermidis",
        optionB: "aureus",
        optionC: "Aquifex",
        optionD: "Deinococcus radiodurans",
        correctOption: "optionC"
    },

    {
        question: "'Extremophiles'?",
        optionA: "survive in extreme conditions",
        optionB: "found in extreme amount",
        optionC: "survive in extreme temperature only",
        optionD: "survive in extreme pressure only",
        correctOption: "optionA"
    },
    {
        question: "which of the following is considered a radiation extremophile?",
        optionA: "Aquifex",
        optionB: "Staphylococcus aureus",
        optionC: "Rats",
        optionD: "Deinococcus radiodurans",
        correctOption: "optionD"
    },

    {
        question: "which of the following is considered a temperature extremophile?",
        optionA: "Aquifex",
        optionB: "Staphylococcus aureus",
        optionC: "Rats",
        optionD: "Deinococcus radiodurans",
        correctOption: "optionA"
    },

    {
        question: "bone mineral density (BMD) ...  during long-duration spaceflight.",
        optionA: "Increases",
        optionB: "remains unchanged",
        optionC: "decreases",
        optionD: "none of the above",
        correctOption: "optionC"
    },

    {
        question: "The concept 'osteoporosis' is most relatable to which of the following?",
        optionA: "Radiation",
        optionB: "Isolation",
        optionC: "limited food supply",
        optionD: "microgravity",
        correctOption: "optionD"
    },


    {
        question: "Microgravity plays a role in all of the following except ...",
        optionA: "Bone fracture",
        optionB: "Renal stones",
        optionC: "Carcinogenesis",
        optionD: "Loss of muscle",
        correctOption: "optionC"
    },

    {
        question: "the SI unit of energy absorbed from ionizing radiation is ....",
        optionA: "Pascal",
        optionB: "Newton",
        optionC: "Kilogram",
        optionD: "Gray",
        correctOption: "optionD"
    },

    {
        question: "How much radiation dose could kill a human?",
        optionA: "4",
        optionB: "2",
        optionC: "3",
        optionD: "5",
        correctOption: "optionC"
    },


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}
//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal1() {
   
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    document.getElementById("gqc").style="disply:none;"
    document.getElementById("allqq").style="disply:block;"
    document.getElementById("qq1").style="background-color:green; animation-play-state: running;"
    document.getElementById("qq1").innerHTML="<h1>Finished</h1>"
}
document.getElementById("exbtn").onclick= function ( ) {
document.getElementById("gqc").style="display:none;"
document.getElementById("allqq").style="disply:block;"
document.getElementById("qq1").style="background-color:#eee;"
document.getElementById("qq2").style="background-color:#eee;"
document.getElementById("qq3").style="background-color:#eee;"
document.getElementById("qq1").innerHTML="<h1>Quiz 1</h1>"
document.getElementById("qq2").innerHTML="<h1>Quiz 2</h1>"
document.getElementById("qq3").innerHTML="<h1>Quiz 3</h1>"
    }
    
    //function to close warning modal <==================================================================
    function closeOptionModal() {
        document.getElementById('option-modal').style.display = "none"
    }
