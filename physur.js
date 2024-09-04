const questions = [
    {
        question: "What is your gender?",
        optionA: " Male",
        optionB: "Female",
        optionC: "Non-binary",
        optionD: "others",
        optionE: "prefer not to say",
        
    },

    {
        question: "What is your age group?",
        optionA: "<18",
        optionB: "18-24",
        optionC: "35-44",
        optionD: "45-54",
        optionE: "55 and above",
    },

    
    

    {
        question: "How often do you excercise to deal with stress?",
        optionA: "Daily",
        optionB: "3-5 times a week",
        optionC: "1-2 times a week",
        optionD: "Rarely or never",
        correctOption: "optionD"
    },

    {
        question: "What is your preferred type of exercise?",
        optionA: "Cardiovascular(e.g., running, cycling)",
        optionB: "Strength traingng(e.g., weightlifting)",
        optionC: "Yoga/pilates",
        optionD: "Team sports",
        optionE: "Other",
        correctOption: "optionC"
    },

    {
        question: "How would you rate your current mental-being?",
        optionA: "Excellent",
        optionB: "Good",
        optionC: "Fair",
        optionD: "Poor",
        correctOption: "optionD"
    },

    {
        question: "Do you have any specific mental health concerns or conditions?",
        optionA: "Anxiety",
        optionB: "Depression",
        optionC: "Stress",
        optionD: "Autism",
        optionE: "other",
        correctOption: "optionA"
    },

    {
        question: "How do you typically manage stress?",
        optionA: "Exercise",
        optionB: "Meditation/Relaxation techniques",
        optionC: "Spending time with loved ones",
        optionD: "pursuing hobbies/intrests",
        optionE: "Seeking professional help",

        correctOption: "optionC"
    },

    {
        question: "How many hours of sleep do you typically get per night?",
        optionA: "Less than 5 hours",
        optionB: "5-7 hours",
        optionC: "7-9 hours",
        optionD: "More than 9 hours",
        correctOption: "optionA"
    },

    {
        question: "How would you rate the quality of your sleep?",
        optionA: "Excellent",
        optionB: "Good",
        optionC: "Fair",
        optionD: "Poor",
        correctOption: "optionD"
    },

    {
        question: "Do you follow any specific dietary restrction or preferences?",
        optionA: "Vegetarian",
        optionB: "Vegan",
        optionC: "Gluten-free",
        optionD: "Dairy-free",
        optionE: "None",
        correctOption: "optionD"
    },

    {
        question: "How often do you engage in activities that promote relaxation and stress reduction, such as meditation or deep breathing exercise?",
        optionA: "Daily",
        optionB: "Weekly",
        optionC: "Occasionally",
        optionD: "Rarely or never",
        correctOption: "optionC"
    },

    {
        question: "How would you describe your current level of social support?",
        optionA: "Strong support system",
        optionB: "Moderate support system",
        optionC: "Limited support system",
        optionD: "No support system",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Are you currently receiving any professional help or therapy for your mental health?",
        optionA: "Yes",
        optionB: "No",
        
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How would you rate your overall satisfaction with your life?",
        optionA: "Very satisfied",
        optionB: "Moderately satisfied",
        optionC: "Neutral",
        optionD: "Moderately dissatisfied",
        optionD: "Very dissatisfied",
        correctOption: "optionC"
    },

    {
        question: "Are you interested in learning more about mental health and fitness resources?",
        optionA: "Yes",
        optionB: "No",
        correctOption: "optionA"
    },

    {
        question: "How did you hear about our website?",
        optionA: "Search engine",
        optionB: "Social media",
        optionC: " Word of mouth",
        optionD: "Other",
        correctOption: "optionC"
    },

    

    
];

let indexNumber = 0; // will be used in displaying the next question

// ... Rest of the code remains the same ...

function NextQuestion(index) {
    const currentQuestion = questions[index];
    document.getElementById("question-number").innerHTML = index + 1;
    document.getElementById("display-question").innerHTML = currentQuestion.question;

    const optionOneLabel = document.getElementById("option-one-label");
    const optionTwoLabel = document.getElementById("option-two-label");
    const optionThreeSpan = document.querySelector("#option-three-span");
    const optionFourSpan = document.querySelector("#option-four-span");
    const optionFiveSpan = document.querySelector("#option-five-span");


    optionOneLabel.textContent = currentQuestion.optionA;
    optionTwoLabel.textContent = currentQuestion.optionB;

    // Hide options 3 and 4 if they are not defined in the current question
    if (currentQuestion.optionC === undefined) {
        optionThreeSpan.style.display = "none";
    } else {
        optionThreeSpan.style.display = "block";
        document.getElementById("option-three-label").textContent = currentQuestion.optionC;
    }

    if (currentQuestion.optionD === undefined) {
        optionFourSpan.style.display = "none";
    } else {
        optionFourSpan.style.display = "block";
        document.getElementById("option-four-label").textContent = currentQuestion.optionD;
    }
    if (currentQuestion.optionE === undefined) {
        optionFiveSpan.style.display = "none";
    } else {
        optionFiveSpan.style.display = "block";
        document.getElementById("option-five-label").textContent = currentQuestion.optionE;
    }
}




function handleNextQuestion() {
    unCheckRadioButtons();
    indexNumber++;
    if (indexNumber < questions.length) {
        NextQuestion(indexNumber);
    } else {
        handleEndSurvey();
    }
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndSurvey() {
    const surveyContainer = document.querySelector(".survey-container");
    while (surveyContainer.firstChild) {
        surveyContainer.removeChild(surveyContainer.firstChild);
    }

    const thankYouMessage = document.createElement("h1");
    thankYouMessage.textContent = "Thank you for taking this survey!";
    thankYouMessage.style.fontSize = "1.5rem";
    thankYouMessage.style.marginTop = "1rem";
    surveyContainer.appendChild(thankYouMessage);

    const nextButtonContainer = document.querySelector(".next-button-container");
    nextButtonContainer.style.display = "none";
}

// Display the first question when the page loads
NextQuestion(indexNumber);