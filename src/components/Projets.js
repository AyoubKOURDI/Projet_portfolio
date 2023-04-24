import React from 'react';
import './Projets.css';

function Projets() {
    return (
        <div className="container">

            <ul className="list">

                <li>
                    <h4>Projet 1 Kourdi Ayoub</h4>
                    <p>Calculator Application - C++
                        Project developed at College André Grasset, at Montreal, Canada.

                        Simple Calculator coded in C++ with Visual Studio Community.

                        The application allows simple calculations of integers and floating point numbers.</p>
                    <a href='https://github.com/cbhering/Calculatrice-en-Cpp.git'>Voir le Projet</a>
                </li>

                <li>
                    <h4>Projet 2 Kourdi Ayoub</h4>
                    <p>Projet d'école qui a pour objectif de créer un showroom disponible en ligne. Pour plus de détails, le cahier des charges est disponible dans le répertoire "documents".
                        La gestion de la base de données utilisé est MariaDB.
                        La partie front-end est réalisé sur mon temps personnel sans Frameworks ou Libraries.
                        Le sujet choisi est la photographie.</p>
                    <a href='https://github.com/Noe-p/Developpement-application-web.git'>Voir le Projet</a>
                </li>

            </ul>

        </div>
    );
};

export default Projets;
