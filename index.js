const questionContainer = document.getElementById("questions-container");
const questionText = document.getElementById("questions-text");
const countdownContainer = document.getElementById("countdown-container");
const countdownText = document.getElementById("countdown-text");
const rulesText = document.getElementById("rules-text");
const timerLength = 3;

let questionActive = false;
let curTimer = timerLength;
// 0 = Start screen
// 1 = Question active
// 2 = Countdown
// 3 = Question revealed
// 5  = Out of questions
let visualState = 0;

let questions = [
    "Who would you trust to give you a haircut blindfolded?",
    "Who would you want to be handcuffed to for 24 hours?",
    "Who would you choose to perform a stand-up comedy routine at your wedding?",
    "Who would you want to share a toothbrush with for a week?",
    "Who would you not trust to do your makeup for a special occasion?",
    "Who would you 'forget' somewhere if they were your travel buddy for a round-the-world trip?",
    "Who would you want to eat a spaghetti like in lady and the tramp with?",
    "Who would you trust to handle your online dating profile?",
    "Who would you pick to join you in a tandem skydiving adventure?",
    "Who would you want to swap lives with for a day?",
    "Who would you choose to be your teammate in a game of extreme Twister?",
    "Who would you trust to plan a surprise date night for you and your significant other?",
    "Who would you trust to go on a date with your significant other?",
    "Who would you pick to work as a personal assistant for?",
    "Who would you pick to give you a makeover with a blindfold on?",
    "Who would you choose to share a sleeping bag with on a camping trip?",
    "Who would you trust to write and perform a song about your life?",
    "Who would you want to be your partner in a karaoke duet?",
    "Who would you want to have as your co-star in a romantic movie scene?",
    "Who would you want to swap bodies with for a day?",
    "Who would you trust to pick out a first-date outfit for you?",
    "Who would you choose to be your teammate in a competitive eating contest?",
    "Who would you want as your partner in an intimate yoga routine?",
    "Who would you trust to pick your partner in an arranged marriage?",
    "Who would you choose to be your co-star in an embarrassing comedy skit?",
    "Who would you want as your personal chef for a month?",
    "Who would you pick to be your teammate in a bizarre obstacle course race?",
    "Who would you trust to write and recite a heartfelt poem about you?",
    "Who would you want to have as your wingman or wingwoman at a singles bar?",
    "Who would you trust to design and decorate your dream home?",
    "Who would you choose to accompany you on a spontaneous cross-country road trip?",
    "Who would you want to be your partner in a pillow fight championship?",
    "Who would you trust to plan an epic surprise vacation for you?",
    "Who would you pick to be your teammate in a paintball war against another group?",
    "Who would you want as your personal masseuse for a week?",
    "Who would you choose to participate in a wacky game show with you?",
    "Who would you trust to write and perform a hilarious skit about your most embarrassing moment?",
    "Who would you want to have as your roommate for a year?",
    "Who would you pick to join you in a hot dog eating contest?",
    "Who would you choose to give you a personalized tour of their favorite city?",
    "Who would you want to join you in a bubble bath?",
    "Who would you pick to be your teammate in a high-stakes escape room challenge?",
    "Who would you trust to create a unique and memorable proposal idea for you?",
    "Who would you choose to accompany you on an amusement park adventure?",
    "Who would you want to have as your personal psychic for a day?",
    "Who would you pick to join you in a spontaneous flash mob performance?",
    "Who would you trust to plan a surprise celebrity encounter for you?",
    "Who would you choose to be your teammate in a competitive pie-eating contest?",
    "Who would you choose to be your co-pilot on a magical flying carpet ride?",
    "Who would you pick to be your teammate in an impossible obstacle course?",
    "Who would you trust to design and create a fashion line inspired by outer space for you?",
    "Who would you want as your personal unicorn groomer?",
    "Who would you choose to accompany you on a quest to find the lost city of Atlantis?",
    "Who could make the best chicken impersonation?",
    "Who would trust as your personal fortune teller?",
    "Who would you pick to join you in an extreme pie-eating contest?",
    "Who would you trust to design and construct a gravity-defying treehouse for you?",
    "Who would you choose to be your co-star in a movie about time-traveling hamsters?",
    "Who would you send on a mission to Mars?",
    "Who would make your parents proud?",
    "Who would make the best mafia boss?",
    "Who would be the least likely to stop you from doing something stupid",
    "Who would embarass you in front of your friends",
    "Who would be the best dragon?",
    "Who would you choose to be your co-star in a movie about mermaids falling in love?",
    "Who would you invite to your pillow fort?",
    "Who would you bring with you to a deserted island?",
    "Who would you invite to join you in a time-traveling adventure?",
    "Who would you invite to star in a cooking show with you?",
    "Who would you bring to explore an abandoned haunted house with you?",
    "Who would you invite to join you in a tandem skydiving experience?",
    "Who would you invite to a karaoke night?",
    "Who would you invite to a masquerade ball in a grand castle?",
    "Who would you invite to a weekend getaway at a luxurious spa?",
    "Who would you invite to a high-stakes poker game in a prestigious casino?",
    "Who would you invite to join you on a hot air balloon ride over picturesque landscapes?",
    "Who would you choose to dance with in the middle of a busy street?",
    "Who would you choose to have a loud argument with in a quiet library?",
    "Who would you choose to join you in a salsa dance-off in the middle of a supermarket?",
    "Who would you run through pouring rain to deliver an umbrella to?",
    "Who could make the best Arnold Schwarzenegger expression?"
];

let bonusQuestions = [
    "Who do you think had the most disastrous first date experience?",
    "Who do you think had the most cringe-worthy romantic story?",
    "Who do you think has the funniest breakup story?",
    "Who do you think is the worst at giving relationship advice?",
    "Who do you think is the best at giving relationship advice",
    "Who do you think had the most awkward encounter with an ex?",
    "Who do you think has the silliest online dating profile?",
    "Who do you think has the most embarrassing pet name for their significant other?",
    "Who do you think is the most likely to accidentally call their partner by an ex's name?",
    "Who do you think had the most embarrassing 'meet the parents' experience?",
    "Who do you think has done the most embarrassing public display of affection?",
    "Who do you think has the worst track record with relationships?",
    "Who do you think is the best at sexting?",
    "Who do you think is the worst at sexting?",
]

updateVisuals();

function updateVisuals() {
    switch (visualState){
        case 0:
            rulesText.textContent = "1. Pick up the phone, don't show the screen to anyone else \n 2. Press the button"
            break;
        
        case 1:
            rulesText.textContent = "1. Read the question silently to yourself \n 2. Press the button and immediately put the phone face-up on the table"
            break;
        
        case 2:
            rulesText.textContent = "50/50 chance that the question that was just answered is revealed"
            countdownContainer.style.visibility = "visible";
            countdownContainer.classList.add("animate-button"); 
            questionContainer.classList.add("animate-button-reverse");
            break;
        
        case 3:
            countdownContainer.style.visibility = "hidden";
            rulesText.textContent = "1. Give the phone to the next player \n 2. Press the button for a new question"
            countdownContainer.classList.remove("animate-button");
            questionContainer.classList.remove("animate-button-reverse");
            break;

        case 5:
            break;

    }
}

function buttonClick () {
    console.log("click");

    if(!(curTimer >= timerLength)){
        return;
    }
    switch (questionActive){
        case false:
            visualState = 1;
            questionActive = true;
            updateVisuals();
            randomQuestion();
            break;
        case true:
            updateVisuals();
            questionActive = false;
            visualState = 2;
            countdown();
            break;
    }
}

function randomQuestion() {
    if(questions.length <= 0){
        questionText.textContent = "Out of questions";
        visualState = 5;
        return;
    }

    let rQuestion = questions[Math.floor((Math.random()*questions.length))];
    questions.splice(questions.indexOf(rQuestion), 1);
    questionText.textContent = rQuestion;
}

function countdown() {
    if(curTimer >= timerLength){
        countdownText.textContent = curTimer;
        curTimer -= 1;
        updateVisuals();
        setTimeout(countdown, 1000);
    }
    else if(curTimer <= 0){
        countdownText.textContent = curTimer;
        questionText.textContent = Math.random() > 0.50 ? "The question is kept secret" : "The previous question was: " + questionText.textContent;
        curTimer = timerLength;
        visualState = 3;
        updateVisuals();
    }
    else{
        countdownText.textContent = curTimer;
        curTimer -= 1;
        setTimeout(countdown, 1000);
    }

}