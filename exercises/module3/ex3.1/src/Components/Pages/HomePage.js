import { films } from './addMoviePage';

const main = document.querySelector('main');


const table = () => {
    const table1 = document.createElement('table');
    table1.className="table";
    main.appendChild(table1); // ici que j'attache ma table
    films.forEach((film) => {
      const trH = document.createElement("tr");
      table1.appendChild(trH);
      const thTitle = document.createElement("th");
      thTitle.innerText = "title";
      const thDuration = document.createElement("duration");
      thDuration.innerText = "duration"
      const thBudget = document.createElement("th");
      thBudget.innerText = "budget";
      trH.appendChild(thTitle);
      trH.appendChild(thDuration);
      trH.appendChild(thBudget);
      const tr = document.createElement("tr");
      table1.appendChild(tr);
      const tdT = document.createElement("td");
      tdT.innerText = film.title;
      const tdD = document.createElement("td");
      tdD.innerText = film.duration;
       const tdB = document.createElement("td");
      tdB.innerText = film.budget;
      tr.appendChild(tdT);
      tr.appendChild(tdD);
      tr.appendChild(tdB);
      main.appendChild(table1);

   })

}

const HomePage = () => {
  
  table();
 
};


// PROBLEME WITH LES EXPORTS IMPORTS

export default HomePage;
