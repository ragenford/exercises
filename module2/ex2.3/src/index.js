import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const main = document.querySelector("main");


main.innerHTML = ` <form>
  <div class="mb-3">
    <label for="nbLignes" class="form-label"> Entrez le nombre de ligne que vous souhaitez </label>
    <input type="number" class="form-control" id="nbLignes" ">
  </div>
  <div class="mb-3">
    <label for="nbCol" class="form-label">Entrez le nombre de colonnes que vous souhaitez </label>
    <input type="number" class="form-control" id="nbCol">
  </div>
  <div class="mb-3">
    <label for="text" class="form-label"> Entrez le text que vous souhaitez </label>
    <input type ="text" class="form-control" id="text">
  </div>
  <button type="submit" class="btn btn-primary">Create table</button> </form> `
;

const table = (nbLignes, nbCol, text) => {
    const table1 = document.createElement('table');
    table1.className="table";
    main.appendChild(table1); // ici que j'attache ma table
   for (let index = 0; index < nbLignes; index+=1) {
        const ligne = document.createElement('tr');
        table1.appendChild(ligne);

        for (let index2 = 0; index2 < nbCol; index2+=1) {
            const col = document.createElement('td');
            col.innerText = text;
            table1.appendChild(col);
        
        }
    }
}
const form = document.querySelector('form'); // pour acceder au form
form.addEventListener('submit', (e) => { // j ecoute le submit
   e.preventDefault();
   const nbLignes = document.getElementById("nbLignes").value; // je vais chercher mes valeurs
   const nbCol = document.getElementById("nbCol").value;
   const text = document.getElementById("text").value;
   
   table(nbLignes, nbCol, text); // j appelle ma fonction

   


   

});



 
       









 




