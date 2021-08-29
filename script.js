
const numbers = [1,2,3,4,5,6];
const diceNumber = Math.floor(Math.random() * numbers.length);


function roll1 () {
    
    

    if (diceNumber==0) {

        document.getElementById("startdice1").src ="Dice-1-b.png";
        
        document.getElementById("rollbutton1").innerHTML = "1";
        
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice1").src ="Dice-2-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "2";
        
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice1").src ="Dice-3-b.svg.png";
       
        document.getElementById("rollbutton1").innerHTML = "3";
       
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice1").src ="Dice-4-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "4";
        
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice1").src ="Dice-5-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "5";
        
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice1").src ="Dice-6-b.svg.png";
        
        document.getElementById("rollbutton1").innerHTML = "6";
       
        
        setTimeout(() => {  location.reload(); }, 7000);

    }


}


function roll2 () {
    
    

    if (diceNumber==0) {

        document.getElementById("startdice2").src ="Dice-1-b.png";
        
        document.getElementById("rollbutton2").innerHTML = "1";
       
        
        setTimeout(() => {  location.reload(); }, 7000);



    }

    else if (diceNumber==1) {

        document.getElementById("startdice2").src ="Dice-2-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "2";
        
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==2) {

        document.getElementById("startdice2").src ="Dice-3-b.svg.png";
       
        document.getElementById("rollbutton2").innerHTML = "3";
       
        
        setTimeout(() => {  location.reload(); }, 7000);


    }

    else if (diceNumber==3) {

        document.getElementById("startdice2").src ="Dice-4-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "4";
        
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==4) {

        document.getElementById("startdice2").src ="Dice-5-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "5";
       
        
        setTimeout(() => {  location.reload(); }, 7000);

    }

    else if (diceNumber==5) {

        document.getElementById("startdice2").src ="Dice-6-b.svg.png";
        
        document.getElementById("rollbutton2").innerHTML = "6";
        
        
        setTimeout(() => {  location.reload(); }, 7000);

    }


}
