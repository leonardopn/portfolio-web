import React from 'react';
import "./technologiesCard.css"
import Card from "../../../general/card/Card"
import Card2 from "../../../general/card/Card2"
import imgIA from "../../../../img/icons8-artificial-intelligence-100.png"
import imgJava from "../../../../img/icons8-java-100.png"
import imgJS from "../../../../img/icons8-javascript-100.png"
import imgNode from "../../../../img/icons8-nodejs-100.png"
import imgReact from "../../../../img/icons8-react-100.png"
import imgMysql from "../../../../img/icons8-mysql-logo-100.png"
import imgPostgre from "../../../../img/icons8-postgresql-100.png"
import imgLinux from "../../../../img/icons8-linux-100.png"

export default props => {
    return (
        <div className="divTecnologias">
            <Card >
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={imgIA} alt="Chapéu de formatura" />
                            </th>
                            <th>
                                <h1>Tecnologias conhecidas</h1>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <div id="cardTechnologies">
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgJS} alt="logo JS" />
                                    </th>
                                    <th>
                                        <h2>JavaScript</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Intermediário</p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgNode} alt="Logo Node.js" />
                                    </th>
                                    <th>
                                        <h2>Node.js</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Intermediário</p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgReact} alt="Logo React.js" />
                                    </th>
                                    <th>
                                        <h2>React.js</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Iniciante</p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgJava} alt="Logo Java" />
                                    </th>
                                    <th>
                                        <h2>Java</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Avançado</p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgMysql} alt="Logo Mysql" />
                                    </th>
                                    <th>
                                        <h2>Mysql</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Intermediário</p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgPostgre} alt="Logo PostgreSQL" />
                                    </th>
                                    <th>
                                        <h2>PostgreSQL</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Intermediário</p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={imgLinux} alt="Logo Linux" />
                                    </th>
                                    <th>
                                        <h2>Linux</h2>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Nível: Avançado</p>
                    </Card2>
                </div>
            </Card>
        </div>
    )
}