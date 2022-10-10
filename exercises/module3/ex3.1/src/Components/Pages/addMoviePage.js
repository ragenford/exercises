/* eslint-disable object-shorthand */
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';


const films = [];
const addMoviePage = () => {
  clearPage();
  renderForm();
  
};

function renderForm(){
  const main = document.querySelector("main");

  main.innerHTML = ` <form>
  <div class="mb-3">
    <label for="title" class="form-label"> Entrez le titre du film </label>
    <input type="text" class="form-control" id="title" ">
  </div>
  <div class="mb-3">
    <label for="duration" class="form-label"> Durée du film en minutes </label>
    <input type="number" class="form-control" id="duration">
  </div>
  <div class="mb-3">
    <label for="budget" class="form-label"> Budget du film en millions </label>
    <input type ="text" class="form-control" id="budget">
  </div>
  <div class="mb-3">
    <label for="link" class="form-label"> lien vers le film </label>
    <input type ="text" class="form-control" id="link">
  </div>
  <button type="submit" class="btn btn-primary"> Envoyez </button> </form> `;

  const title = document.getElementById("title").value;
  const duration = document.getElementById("duration").value;
  const budget = document.getElementById("budget").value;
  const link = document.getElementById("link").value;

 
  const form = document.querySelector("form");
  form.addEventListener('submit', () => {
    
    films.push({
    title: title,
    duration: duration,
    budget: budget,
    link: link
    });

    Navigate('/'); // j'appelle la route pour afficher la page home actualisé

  })
  
}


export {addMoviePage, films};
