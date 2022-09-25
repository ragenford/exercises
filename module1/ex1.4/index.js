const red = document.querySelector(".red"); // le . c pour acceder a une classe d'une div
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");



// au bout d'un moment le programme s'accelere solo
var myIntervalId;

start();
function start(){
    myIntervalId = setTimeout(printColorRed,1000);
    

}

function printColorRed(){
    orange.style.backgroundColor = "";
    red.style.backgroundColor = "red"; // j'avais mis == alors que c uniquement pour de la comparaison. allocation c un simple =
    myIntervalId = setTimeout(printColorOrange,1000);
}

function printColorOrange(){

    red.style.backgroundColor = ""; 
    orange.style.backgroundColor = "orange";
    myIntervalId = setTimeout(printColorGreen,1000); // setTimeOut car il appelle qu'une fois la fonction alors qu'un setInterval lance toutes les x secondes
          
}

function printColorGreen() {

    orange.style.backgroundColor = "";
    green.style.backgroundColor ="green";
    myIntervalId = setTimeout(printColorOrangeBack, 1000);

}

function printColorOrangeBack() {

    green.style.backgroundColor = "";
    orange.style.backgroundColor = "orange";
    myIntervalId = setTimeout(printColorRed, 1000);

}



    /*
    if (red.style.backgroundColor == "red" ){
        red.style.backgroundColor = "";
        orange.style.backgroundColor = "orange";
    }
    else if(orange.style.backgroundColor == "orange"){
        orange.style.backgroundColor = "";
        green.style.backgroundColor = "green";
    }
    else if(green.style.backgroundColor == "grenn" ){
        green.style.backgroundColor = "";
        red.style.backgroundColor = "red";
    }
    */
    



