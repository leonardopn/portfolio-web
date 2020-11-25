import React from 'react';
import "./curriculo.css"
import Card from "../general/card/Card"
import curriculoIcon from "../../img/icons8-curriculo-100.png"

export default props => {
    let iframe = '<iframe src="https://drive.google.com/file/d/1Y2W9KmXfnuKdQ5s1XjkpICp_BAXdJ857/preview" width="100%" height="100%" style="border: none;"></iframe>';

    return (
        <div className="divCurriculo">
            <Card id="cardDefault100">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={curriculoIcon} alt="ícone currículo" />
                            </th>
                            <th>
                                <h1>Currículo</h1>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <Card>
                    <h1>Olá! Você está em: Currículo <span  role="img" aria-label="feliz">😁</span></h1>
                    <p>Aqui você pode dar uma olhada no meu currículo.</p>
                </Card>
                <div id="divIframePDF" dangerouslySetInnerHTML={{ __html: iframe }} />
            </Card>
        </div>
    );
}