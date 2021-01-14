import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import BackToTop from './components/back-top';
import Preloader from './components/preloader';
import Footer from './components/footer';



const App: React.FC = () => {
    return (
      <Container className="p-0">
        <Navbar />
        <Intro />
        <About />
        <Contact />
        <BackToTop />
        <Footer />
      </Container>
      
        

    );
  };
  
  export default App;
