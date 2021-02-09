import React from 'react';
import "./projetos.css";
import Card from "../general/card/Card"
import projetosIcon from "../../img/icons8-code-color-100.png";
import BlocoProjeto from "../blocoProjeto/BlocoProjeto";

export default props => {
    const descJEF = "Software escrito em Java para o gerenciamento de caixa, horários, clientes e funcionários de uma esmalteria local.";
    const imgJEF = "https://s5.gifyu.com/images/deepin-screen-recorder_Select-area_20200217212959.gif";
    const descJojoChat = "Cliente para conversação em chat feito em java utilizando sockets.";
    const imgJojoChat = "https://s7.gifyu.com/images/conversa.gif";
    const descBinarizador = "Software para binarização de imagens coloridas.";
    const descMQTT = "Programa para execução de comandos recebidos por protocolo MQTT. Utilizando backend Node + Express e frontend React + Electron";
    const imgBinarizador = "https://j.gifs.com/BN3YOo.gif";
    const imgMQTT = "https://drive.google.com/uc?id=17bJMOaBfoYJchKGEphUtQ3sqc9p8Jpxr";


    return (
        <div className="divProjetos">
            <Card id="cardDefault100">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={projetosIcon} alt="ícone projeto" id="iconeProjetos" />
                            </th>
                            <th>
                                <h1>Projetos</h1>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <Card>
                    <h1>Olá! Você está em: Projetos <span  role="img" aria-label="feliz">😁</span></h1>
                    <p>Aqui estão todos os projetos freelance que realizei. Vai lá, escolha um, é livre <span  role="img" aria-label="tux">🐧</span></p>
                </Card>
                <div id="divProjetosInternoFlex">
                    <BlocoProjeto img={imgJEF} linguagem="Java" projeto="JEF" repositorio="https://github.com/leonardopn/JEF" descricao={descJEF}></BlocoProjeto>
                    <BlocoProjeto img={imgMQTT} linguagem="Javascript (React + Electron)" projeto="MQTT.JS Auto Exec" repositorio="https://github.com/leonardopn/MQTT.JS-Auto-Exec" descricao={descMQTT}></BlocoProjeto>
                    <BlocoProjeto img={imgJojoChat} linguagem="Java" projeto="Jojo Chat" repositorio="https://github.com/CC-UNIP-CAMPINAS/jojochat_client" descricao={descJojoChat}></BlocoProjeto>
                    <BlocoProjeto img={imgBinarizador} linguagem="Java" projeto="BinarizadorFX" repositorio="https://github.com/leonardopn/projetoPI_javafx" descricao={descBinarizador}></BlocoProjeto>
                     </div>
            </Card>
        </div>
    );
}