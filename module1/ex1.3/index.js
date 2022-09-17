



    const body = document.querySelector("body");
    const message5 = "Bravo, bel échauffement";
    const message10 = "Vous êtes passé maître en l'art du clic !";
    var compteur = 0;
    window.addEventListener("click", () => {

        compteur++;
        body.innerText = compteur;
        if(compteur == 5){
            body.innerText += message5;
        }

        if(compteur == 10){
           
           
            body.innerText += message10;
        }
    } );


