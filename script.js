

function playBeep () {

    var audio = document.getElementById("audio1");
    audio.play();
}

function roll1 () {

    var numbers = [1,2,3,4,5,6];
    var diceNumber = Math.floor(Math.random() * numbers.length);
    
    

    if (diceNumber==0) {

        document.getElementById("startdice1").src ="Dice-1-b.png";
        
        document.getElementById("rollbutton1").innerHTML = "1";
        
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice1").src ="Dice-2-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "2";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice1").src ="Dice-3-b.svg.png";
       
        document.getElementById("rollbutton1").innerHTML = "3";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice1").src ="Dice-4-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "4";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice1").src ="Dice-5-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "5";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice1").src ="Dice-6-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "6";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }


}


function roll2 () {

    var numbers = [1,2,3,4,5,6];
    var diceNumber = Math.floor(Math.random() * numbers.length);
    
    
    

    if (diceNumber==0) {

        document.getElementById("startdice2").src ="Dice-1-b.png";
        
        document.getElementById("rollbutton2").innerHTML = "1";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice2").src ="Dice-2-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "2";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice2").src ="Dice-3-b.svg.png";
       
        document.getElementById("rollbutton2").innerHTML = "3";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice2").src ="Dice-4-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "4";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice2").src ="Dice-5-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "5";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice2").src ="Dice-6-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "6";
        playBeep ();
        
        setTimeout(() => {  location.reload(); }, 7000);

    }


}
