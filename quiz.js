var questions = ["What is the largest state in India by area?","Which river is known as the “Ganga of the South”?","Which is the highest mountain peak in India?",
"India is a federal union comprising twenty-eight states and how many union territories?","Which of the following is the capital of Arunachal Pradesh?",
"What is the state flower of Haryana?","In which of the following state, the main language is Khasi?","Which is the largest coffee-producing state of India?",
"Which state has the largest population?","Which city is known as the “summer capital” of Jammu and Kashmir?"];
var ansset1 = ["Rajasthan","Gujarat","Maharastra","Uttar Pradesh"];
var ansset2 = ["Ganga","yamuna","Godawari","niles"];
var ansset3 = ["Kamet","Nanda Devi","Rimo peak","Kangchenjunga"];
var ansset4 = ["6","7","8","9"];
var ansset5 = ["Itanagar","Dispur","Imphal","Panaji"];
var ansset6 = ["Lotus","Rhododendron","Golden Shower","Not Declared"];
var ansset7 = ["Mizoram","Nagaland","Meghalaya","Tripura"];
var ansset8 = ["Kerala","Tamil Nadu","Karnataka","Arunachal Pradesh"];
var ansset9 = ["Uttar Pradesh","Maharastra","Bihar","Andra Pradesh"];
var ansset10 = ["Jammu","Srinagar","Shimla","Anantnag"];
var started = false;
var questionNumber=0
var score = 0;
var music = new Audio("./assets/websiteMusic.mp3")

function start(){
    if(!started){
        playsound();
        document.getElementById("quizlogo").classList.add("hide");
        document.getElementById("startagainbtn").classList.add("hide");
        document.getElementById("startbtn").classList.add("hide");
        document.getElementById("score").classList.add("hide");
        document.getElementById("option1").classList.remove("hide");
        document.getElementById("option2").classList.remove("hide");
        document.getElementById("option3").classList.remove("hide");
        document.getElementById("option4").classList.remove("hide");
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("option4").disabled = false;
        question();
        started=true;
    }
}



function question(){
    document.getElementById("Question").innerHTML=questions[questionNumber];
    if(questionNumber==0){
        document.getElementById("option1").innerHTML=ansset1[0];
        document.getElementById("option2").innerHTML=ansset1[1];
        document.getElementById("option3").innerHTML=ansset1[2];
        document.getElementById("option4").innerHTML=ansset1[3];
    }
    else if(questionNumber==1){
        document.getElementById("option1").innerHTML=ansset2[0];
        document.getElementById("option2").innerHTML=ansset2[1];
        document.getElementById("option3").innerHTML=ansset2[2];
        document.getElementById("option4").innerHTML=ansset2[3];
    }
    else if(questionNumber==2){
        document.getElementById("option1").innerHTML=ansset3[0];
        document.getElementById("option2").innerHTML=ansset3[1];
        document.getElementById("option3").innerHTML=ansset3[2];
        document.getElementById("option4").innerHTML=ansset3[3];
    }
    else if(questionNumber==3){
        document.getElementById("option1").innerHTML=ansset4[0];
        document.getElementById("option2").innerHTML=ansset4[1];
        document.getElementById("option3").innerHTML=ansset4[2];
        document.getElementById("option4").innerHTML=ansset4[3];
    }
    else if(questionNumber==4){
        document.getElementById("option1").innerHTML=ansset5[0];
        document.getElementById("option2").innerHTML=ansset5[1];
        document.getElementById("option3").innerHTML=ansset5[2];
        document.getElementById("option4").innerHTML=ansset5[3];
    }
    else if(questionNumber==5){
        document.getElementById("option1").innerHTML=ansset6[0];
        document.getElementById("option2").innerHTML=ansset6[1];
        document.getElementById("option3").innerHTML=ansset6[2];
        document.getElementById("option4").innerHTML=ansset6[3];
    }
    else if(questionNumber==6){
        document.getElementById("option1").innerHTML=ansset7[0];
        document.getElementById("option2").innerHTML=ansset7[1];
        document.getElementById("option3").innerHTML=ansset7[2];
        document.getElementById("option4").innerHTML=ansset7[3];
    }
    else if(questionNumber==7){
        document.getElementById("option1").innerHTML=ansset8[0];
        document.getElementById("option2").innerHTML=ansset8[1];
        document.getElementById("option3").innerHTML=ansset8[2];
        document.getElementById("option4").innerHTML=ansset8[3];
    }
    else if(questionNumber==8){
        document.getElementById("option1").innerHTML=ansset9[0];
        document.getElementById("option2").innerHTML=ansset9[1];
        document.getElementById("option3").innerHTML=ansset9[2];
        document.getElementById("option4").innerHTML=ansset9[3];
    }
    else if(questionNumber==9){
        document.getElementById("option1").innerHTML=ansset10[0];
        document.getElementById("option2").innerHTML=ansset10[1];
        document.getElementById("option3").innerHTML=ansset10[2];
        document.getElementById("option4").innerHTML=ansset10[3];
    }
    else{
        document.getElementById("Question").innerHTML="Congratulations, you answered all the questions correctly!";
        document.getElementById("option1").classList.add("hide");
        document.getElementById("option2").classList.add("hide");
        document.getElementById("option3").classList.add("hide");
        document.getElementById("option4").classList.add("hide");
        startover();
    }

}

$(".answerbtn").on('click', function () {
    var t = (this.id);
    if(questionNumber==0){
        var buttonclicked = $(this).attr("id");
        if(t=="option1"){
            document.getElementById("score").classList.remove("hide");
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==1){
        var buttonclicked = $(this).attr("id");
        if(t=="option3"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==2){
        var buttonclicked = $(this).attr("id");
        if(t=="option4"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==3){
        var buttonclicked = $(this).attr("id");
        if(t=="option3"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==4){
        var buttonclicked = $(this).attr("id");
        if(t=="option1"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==5){
        var buttonclicked = $(this).attr("id");
        if(t=="option1"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==6){
        var buttonclicked = $(this).attr("id");
        if(t=="option3"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==7){
        var buttonclicked = $(this).attr("id");
        if(t=="option3"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==8){
        var buttonclicked = $(this).attr("id");
        if(t=="option1"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Oops, wrong answer!";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
    else if(questionNumber==9){
        var buttonclicked = $(this).attr("id");
        if(t=="option2"){
            score++;
            document.getElementById("score").innerHTML="Score = "+score+"/10"; 
            answerAnimation(buttonclicked);
            questionNumber++;
            setTimeout(question,1000);
        }
        else{
            document.getElementById("Question").innerHTML="Wrong answer";
            wrongAnswerAnimation(buttonclicked);
            startover();
        }
    }
});  

function answerAnimation(optionid){
    document.getElementById(optionid).classList.add("correctans");
    setTimeout(function(){
        document.getElementById(optionid).classList.remove("correctans");
    },800);
}

function wrongAnswerAnimation(optionid){
    document.getElementById(optionid).classList.add("wrongans");
    setTimeout(function(){
        document.getElementById(optionid).classList.remove("wrongans");
    },800);
}

function startover(){
    questionNumber=0;
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;
    document.getElementById("startagainbtn").classList.remove("hide");
    score=0;
    music.pause();
    started=false;

}

function playsound(){
    music.play();
}
