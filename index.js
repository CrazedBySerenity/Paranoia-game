const questionText = document.getElementById("questions-text");
const countdownContainer = document.getElementById("countdown-container");
const countdownText = document.getElementById("countdown-text");
const timerLength = 3;

let questionActive = false;
let curTimer = timerLength;

let questions = [
    "Who would you trust to give you a haircut blindfolded?",
    "Who would you want to be handcuffed to for 24 hours?",
    "Who would you want as your partner in a synchronized swimming competition?",
    "Who would you choose to have as your personal fashion stylist for a month?",
    "Who would you want to be your dance partner in a televised dance-off?",
    "Who would you trust to plan your ultimate surprise party?",
    "Who would you choose to perform a stand-up comedy routine at your wedding?",
    "Who would you want to share a toothbrush with for a week?",
    "Who would you pick to be your cooking partner on a reality cooking show?",
    "Who would you trust to do your makeup for a special occasion?",
    "Who would you choose to have as your travel buddy for a round-the-world trip?",
    "Who would you want to have as your partner in a synchronized eating contest?",
    "Who would you trust to choose your online dating profile picture?",
    "Who would you pick to join you in a tandem skydiving adventure?",
    "Who would you want to swap lives with for a day?",
    "Who would you choose to be your teammate in a game of extreme Twister?",
    "Who would you trust to plan a surprise date night for you and your significant other?",
    "Who would you want to be your personal assistant for a month?",
    "Who would you pick to give you a makeover with a blindfold on?",
    "Who would you choose to share a tent with on a camping trip?",
    "Who would you trust to write and perform a song about your life?",
    "Who would you want to be your partner in a synchronized karaoke duet?",
    "Who would you choose to be your personal trainer for a month?",
    "Who would you trust to create a viral internet challenge for you to participate in?",
    "Who would you want to have as your co-star in a romantic movie scene?",
    "Who would you pick to organize a flash mob surprise for you?",
    "Who would you want to swap bodies with for a day?",
    "Who would you trust to pick out a first-date outfit for you?",
    "Who would you choose to be your teammate in a competitive eating contest?",
    "Who would you want as your partner in a synchronized yoga routine?",
    "Question",
    "Who would you trust to plan your dream wedding?",
    "Who would you want to be your partner in a synchronized lip-sync battle?",
    "Who would you choose to be your co-star in a hilarious comedy skit?",
    "Who would you want as your personal chef for a month?",
    "Who would you pick to be your teammate in a bizarre obstacle course race?",
    "Who would you trust to write and recite a heartfelt poem about you?",
    "Who would you choose to create a viral TikTok dance for you to perform?",
    "Who would you want to have as your wingman or wingwoman at a singles bar?",
    "Who would you pick to create a unique fashion trend for you to rock?",
    "Who would you trust to design and decorate your dream home?",
    "Who would you choose to accompany you on a spontaneous cross-country road trip?",
    "Who would you want to be your partner in a synchronized pillow fight championship?",
    "Who would you trust to plan an epic surprise vacation for you?",
    "Who would you pick to be your teammate in a paintball war against another group?",
    "Who would you want as your personal masseuse for a week?",
    "Who would you choose to participate in a wacky game show with you?",
    "Who would you trust to write and perform a hilarious skit about your most embarrassing moment?",
    "Who would you want to have as your roommate for a year?",
    "Who would you pick to join you in a hot dog eating contest?",
    "Who would you trust to create a quirky and funny viral video featuring you?",
    "Who would you choose to give you a personalized tour of their favorite city?",
    "Who would you want as your partner in a synchronized bubble bath competition?",
    "Who would you pick to be your teammate in a high-stakes escape room challenge?",
    "Who would you trust to create a unique and memorable proposal idea for you?",
    "Who would you choose to accompany you on a thrilling amusement park adventure?",
    "Who would you want to have as your personal psychic for a day?",
    "Who would you pick to join you in a spontaneous flash mob performance?",
    "Who would you trust to plan a surprise celebrity encounter for you?",
    "Who would you choose to be your teammate in a competitive pie-eating contest?",
    "Who would you want as your partner in a synchronized hula hoop routine?",

];

function buttonClick () {
    console.log("click");

    switch (questionActive){
        case false:
            questionActive = true;
            randomQuestion();
            break;
        case true:
            questionActive = false;
            countdown();
            break;
    }
}

function randomQuestion() {
    if(questions.length <= 0){
        questionText.textContent = "Out of questions";
        return;
    }

    let rQuestion = questions[Math.floor((Math.random()*questions.length))];
    questions.splice(questions.indexOf(rQuestion), 1);
    questionText.textContent = rQuestion;
}

function countdown() {
    if(curTimer >= timerLength){
        countdownText.textContent = curTimer;
        countdownContainer.style.visibility = "visible";
        curTimer -= 1;
        setTimeout(countdown, 1000);
    }
    else if(curTimer <= -1){
        countdownText.textContent = curTimer;
        questionText.textContent = Math.random() > 0.50 ? "The question is kept secret" : "The previous question was: " + questionText.textContent;
        countdownContainer.style.visibility = "hidden";
        curTimer = timerLength;
    }
    else{
        countdownText.textContent = curTimer;
        curTimer -= 1;
        setTimeout(countdown, 1000);
    }

}