import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import Acceuil from "./components/Acceuil";
import Formations from "./components/Formations";
import Experiences from "./components/Experiences";
import Publications from "./components/Publications";
import Projets from "./components/Projets";
import Certifications from "./components/Certifications";


function App() {

  let component

  switch (window.location.pathname) {
    case "/Acceuil":
      component = <Acceuil />
      break;
    case "/Formations":
      component = <Formations />
      break;

    case "/Experiences":
      component = <Experiences />
      break;

    case "/Publications":
      component = <Publications />
      break;

    case "/Projets":
      component = <Projets />
      break;

      case "/Certifications":
      component = <Certifications />
      break;
    
      default:
          break;
  }

  return (

    <>
     <div>
        <Header />
      </div>

    <Navbar/>

    <div className="container" >{component}</div>


    <div>
        <Footer />
      </div>

    </>

  );
}

export default App;