import React from "react";


function Header() {
    /*
        const style1 = {
            color: "blue",
            fontSize: "60px",
            backgroundColor: "lightgray"
        }
    
         const style2 = {
             color: "red",
             fontSize: "100px",
             backgroundColor: "black"
         }
        
    */

    //let titre = "";

    const client = "Designer";

    const titre = {
        designer: "Design",
        programmer: "Programming"

    }

    const info = {
        nom: "Kourdi",
        prenom: "Ayoub"
    }

    /*
              if (client === "Adam") {
                titre="Portfolio KOURDI Adam";
              }
              else{
                titre="Portfolio KOURDI AYOUB"
              }
    */

    return (
        //<h1 style={style1}>Portfolio KOURDI AYOUB</h1>
        <div className="navbar bg-dark rounded text-white">

            <h2>
                Bonjour {`${info.nom} ${info.prenom}`}
            </h2>

            <h2 id="hed">

                {client === "Designer" ? titre.designer : titre.programmer} is my life

            </h2>


        </div>
    );
}

export default Header;
