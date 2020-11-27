

function roll () {
    
    const numbers = [1,2,3,4,5,6];
    const diceNumber = Math.floor(Math.random() * numbers.length);

    if (diceNumber==0) {

        document.getElementById("startdice").src ="https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg";
        
        document.getElementById("rollbutton").innerHTML = "1";
        play1();
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png";
        
        document.getElementById("rollbutton").innerHTML = "2";
        play2();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/768px-Dice-3-b.svg.png";
       
        document.getElementById("rollbutton").innerHTML = "3";
        play3();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1024px-Dice-4-b.svg.png";
        
        document.getElementById("rollbutton").innerHTML = "4";
        play4();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1200px-Dice-5-b.svg.png";
        
        document.getElementById("rollbutton").innerHTML = "5";
        play5();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png";
        
        document.getElementById("rollbutton").innerHTML = "6";
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