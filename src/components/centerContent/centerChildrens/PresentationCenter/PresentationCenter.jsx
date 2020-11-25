import React from 'react';
import "./presentationCenter.css"
import imgProfile from "../../../../img/profile2.jpg"
import Card from "../../../general/card/Card"

export default () => {
    return (
        <Card >
            <div className="presentationDiv">
                <div id="divInformation">
                    <h1>Leonardo Petta do Nascimento</h1>
                    <h2>Desenvolvedor</h2>
                    <p>Olá, seja bem vindo ao meu site portfólio! Sou estudante de ciência da computação da Universidade Paulista (UNIP) e desenvolvedor da <a href="https://integrance.com.br/" target="_blank" rel="noopener noreferrer">Integrance Finance {"&"} Accounting Services</a>.</p>
                    <p>Atualmente trabalho com projetos de automação para os colaborados da Integrance, utilizando as linguagens
                    de programação Google script e JavaScript.</p>
                    <p>Fiquei muito tempo focado no desenvolvimento em Java, mas hoje, por conta do trabalho, estou focado em aperfeiçoar minhas habilidades em outras linguagens, principalmente em todo o ecossistema web, incluindo JS, Node e React.</p>
                </div>
                <div id="divInformationProfile">
                    <img src={imgProfile} alt="Imagem de perfil" id="imgProfile" />
                </div>
            </div>
        </Card>
    );
}