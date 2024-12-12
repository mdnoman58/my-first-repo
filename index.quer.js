
//document.querySelector("a").innerHTML = "new video";

/*var myelement = document.querySelector("#myimageId");
function mypicture1(){

    myelement.src ="WhatsApp Image 2024-11-30 at 02.00.48_3c63e4f5.jpg"
   
}
function mypicture2(){

   myelement. src ="WhatsApp Image 2024-11-30 at 02.00.53_5b0752ba.jpg"
   
   
}

const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextbtn = document.querySelector('.nextbtn');
const scoreCard = document.querySelector('.scoreCard');

const quiz =[

    {
        question:" q1.which of the following is not a css box model property?",
        choices:["margin","padding","border-radius","border-collapase"],
        answer:"border-collapase"
    },
    {
        question:" q2.what is the purpose of this keyword in javascript?",
        choices:["it refers to the currebt function ", " it refers to the current object","it is used for comments ","it refers to the current object"],
        answer:"it refers to the current object."
    },
    {

        question:" q3.whice of the folowing is not a javascript data type?",
        choices:["String","boolean","object","float"],
        answer:"float"
    },
    {

        question:" q4.which of the following is not a valid way to declare a function in javascript?",
        choices:["function myfunction(){}","let myfunction = function(){}","myfunction:function (){}","const myfunction =()=> {}"],
        answer:"myfunction:function(){ }"
    }
    
];

// making variables
let currentQuestionIndex =0;
let dcore = 0;


// Arrow Funcation to show Questions

const showQuestions = () =>{

    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent =questionDetails.question;


    choicesBox.textContent = "";
    for (let i=0; i<questionDetails.choices.length; i++){

        const currentchoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentchoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click',()=>{

            if( choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');
            }
            else{
                choiceDiv.classList.add('selected');
            }
        });
    }

    //console.log(questionDetails);


}

const checkAnswer = () =>{
    
    const selectedchoice = document.querySelector('.choice.selected');
    if(selectedchoice.textContent ===quiz[currentQuestionIndex].answer){
        alert("correct answer");
        score++;
    }
    else{
        alert("worng answer!");

    }
    currentQuestionIndex++;
        if(currentQuestionIndex < quiz.length){
            currentQuestionIndex++;
            showQuestions();
           }
           else{
        
                showScore();
           }
   
    //console.log(selectedchoice);

}

const showScore = () =>{
    scoreCard.textContent = 'you scored ${score} out of ${quiz,length}';
}
showQuestions();
nextbtn.addEventListener('click',()=>{
        checkAnswer();
        
});*/
