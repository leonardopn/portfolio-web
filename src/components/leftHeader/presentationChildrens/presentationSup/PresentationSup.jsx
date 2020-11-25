import React from 'react';
import imgProfile from "../../../../img/profile.png"
import imgGithub from "../../../../img/icons8-github-100.png"
import imgFacebook from "../../../../img/icons8-facebook-100.png"
import imgLinkedin from "../../../../img/icons8-linkedin-circled-100.png"
import ButtomSocial from "../../../general/buttomSocial/ButtomSocial"
import "./PresentationSup.css"

export default props => {
    return (
        <div className="divSup">
            <h1>Leonardo Petta do Nascimento</h1>
            <img id="imgProfile" src={imgProfile} alt="Imagem de perfil" />
            <p>"Olá, eu sou Leonardo, estudante e desenvolvedor. Seja bem vindo ao meu site!"</p>
            <div>
                <ButtomSocial logo={imgGithub} empresa="GitHub" link="https://github.com/leonardopn" />
                <ButtomSocial logo={imgLinkedin} empresa="Linkedin" link="https://www.linkedin.com/in/leonardo-petta-do-nascimento-75674015b/" />
                <ButtomSocial logo={imgFacebook} empresa="Facebook" link="https://www.facebook.com/leonardo.petta.nascimento" />
            </div>
        </div>
    )
}