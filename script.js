
const numbers = [1,2,3,4,5,6];
const diceNumber = Math.floor(Math.random() * numbers.length);


function roll1 () {
    
    

    if (diceNumber==0) {

        document.getElementById("startdice1").src ="Dice-1-b.png";
        
        document.getElementById("rollbutton1").innerHTML = "1";
        play1();
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice1").src ="Dice-2-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "2";
        play2();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice1").src ="Dice-3-b.svg.png";
       
        document.getElementById("rollbutton1").innerHTML = "3";
        play3();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice1").src ="Dice-4-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "4";
        play4();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice1").src ="Dice-5-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "5";
        play5();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice1").src ="Dice-6-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "6";
        play6();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }


}


function roll2 () {
    
    

    if (diceNumber==0) {

        document.getElementById("startdice2").src ="Dice-1-b.png";
        
        document.getElementById("rollbutton2").innerHTML = "1";
        play1();
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice2").src ="Dice-2-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "2";
        play2();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice2").src ="Dice-3-b.svg.png";
       
        document.getElementById("rollbutton2").innerHTML = "3";
        play3();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice2").src ="Dice-4-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "4";
        play4();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice2").src ="Dice-5-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "5";
        play5();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice2").src ="Dice-6-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "6";
        play6();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }


}


  
function play1() {
      var audio = document.getElementById("audio1");
      audio.play();
    }
  
function play2() {
      var audio = document.getElementById("audio2");
      audio.play();
    }
  
function play3() {
      var audio = document.getElementById("audio3");
      audio.play();
    }

function play4() {
      var audio = document.getElementById("audio4");
      audio.play();
    }
    
function play5() {
      var audio = document.getElementById("audio5");
      audio.play();
    }
    
function play6() {
      var audio = document.getElementById("audio6");
      audio.play();
    }