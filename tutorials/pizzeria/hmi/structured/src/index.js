import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import 'animate.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Router from './Components/Router/Router';

Header(); // faire appel au header avant la navbar sinon car le header initialise id navwrapper

Navbar();

Router();

Footer();


