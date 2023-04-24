import React from 'react';
import './Certifications.css';

function Certifications() {
    return (
        <div className="container">

            <ul className="list">

                <li>
                    <img id='im1' src="./images/Capture1.PNG" alt='certificat1' />
                    <h3>Certificat 1</h3>
                    <h5>Certificat en Python</h5>
                    <p>Michigan Universities</p>
                    <p>Date de délivrance : déc. 2022</p>
                </li>

                <li>
                    <img id='im1' src="./images/Capture2.PNG" alt='certificat2' />
                    <h3>Certificat 2</h3>
                    <h5>Certificat en DevOps</h5>
                    <p>IBM</p>
                    <p>Date de délivrance : déc. 2023</p>
                </li>

                <li>
                    <img id='im1' src="./images/Capture3.PNG" alt='certificat3' />
                    <h3>Certificat 3</h3>
                    <h5>Certificat en React</h5>
                    <p>Meta</p>
                    <p>Date de délivrance : déc. 2023</p>
                </li>

            </ul>

        </div>
    );
};

export default Certifications;

