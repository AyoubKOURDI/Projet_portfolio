import React from 'react';
import './Projets.css';

function Projets() {
    return (
        <div className="container">

            <ul className="list">

                <li>
                    <h4>Projet 1 Kourdi Ayoub</h4>
                    <p>Calcule Monaitaire
                        Project pour le calcule different des convertions d'argent : 'Euro vers Mad' 'Mad vers Euro' | 'Mad vers Dollard' 'Dollard vers Mad' |
                        'Dollard vers Euro' 'Euro vers Dollard' .</p>
                    <a href='https://github.com/AyoubKOURDI/Projet_1.git'>Voir le Projet</a>
                </li>

                <li>
                    <h4>Projet 2 Kourdi Ayoub</h4>
                    <p>Projet de Pockemon
                        Ce projet utilise les differents API et les adaptes pour une application Mobile , avec le language 'JAVA' :
                        eng description : PokéAPI is free and open to use. It is also very popular. Because of this, we ask every
                        developer to abide by our fair use policy. People not complying with the fair use policy will have their
                        IP address permanently banned.
                        PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.
                    </p>
                    <a href='https://github.com/AyoubKOURDI/api_pokemon.git'>Voir le Projet</a>
                </li>

            </ul>

        </div>
    );
};

export default Projets;
