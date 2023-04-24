import React from "react";
import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar">
           
            <ul className="nav-menu">
                
                <li><a href="/Acceuil">Acceuil</a></li>
                <li><a href="/Formations" onClick={document.getElementById("target")}>Formations</a></li>
                <li><a href="/Experiences">Experiences</a></li>
                <li><a href="/Publications">Publications</a></li>
                <li><a href="/Projets">Projets</a></li>
                <li><a href="/Certifications">Certifications</a></li>
            
            </ul>
        
        </div>
    );
}

export default Navbar