import React from 'react';
import Card from '../../../general/card/Card'
import Card2 from '../../../general/card/Card2'
import imgHat from "../../../../img/icons8-mortarboard-100.png"
import imgDiploma from "../../../../img/icons8-diploma-100.png"
import imgJava from "../../../../img/icons8-java-100.png"
import imgGoogleScript from "../../../../img/icon-googleScript.png"
import imgUnip from "../../../../img/icon-unip.png"
import "./educationCard.css"

export default props => {
    return (
        <div className="divFormacao">
            <Card id="cardFormacao">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={imgHat} alt="Chapéu de formatura" />
                            </th>
                            <th>
                                <h1>Formação</h1>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={imgUnip} alt="Logo Unip" />
                            </th>
                            <th>
                            <h2>Universidade Paulista - (UNIP)</h2>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <p>Ciência da computação</p>
                <p>6º Semestre</p>
                <p>2017-Atualmente</p>
            </Card>
            <Card id="cardCurso">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={imgDiploma} alt="Imagem diploma" />
                            </th>
                            <th>
                                <h1>Cursos</h1>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <Card2>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <img src={imgJava} alt="Imagem java" />
                                </th>
                                <th>
                                    <h2>Java - POO</h2>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Udemy</h3>
                    <p>Ago/2020</p>
                    <p>Credencial:&nbsp;
                        <a href="https://www.udemy.com/certificate/UC-55821d6d-d720-4702-83d5-bc76113f464b/" target="_blank" rel="noopener noreferrer">
                            UC-55821d6d-d720-4702-83d5-bc76113f464b
                        </a>
                    </p>
                </Card2>
                <Card2>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <img src={imgGoogleScript} alt="Imagem GoogleScript" />
                                </th>
                                <th>
                                    <h2>Google Apps Script Complete Course - Beginner to Advanced</h2>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Udemy</h3>
                    <p>Fev/2020</p>
                    <p>Credencial:&nbsp;
                        <a href="https://www.udemy.com/certificate/UC-5c35e172-68f2-424d-b518-32314272b3bb/" target="_blank" rel="noopener noreferrer">
                            UC-5c35e172-68f2-424d-b518-32314272b3bb
                        </a>
                    </p>
                </Card2>
            </Card>
        </div>
    )
}