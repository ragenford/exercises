import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import imageLotr from './img/LOTR.png';
import imageForrest from './img/forrestGump.png';

const main = document.querySelector('main');

const h1 = document.createElement('h1');
h1.style.textAlign="center";
h1.innerText ="My favs movies all time"
main.appendChild(h1);
const image1 = document.createElement('img');
image1.src = imageLotr;
const image2 = document.createElement('img');
image2.src = imageForrest;
image1.width = 500;
image1.height = 500;


image2.width = 500;
image2.height = 500;
main.appendChild(image1);
main.appendChild(image2);


