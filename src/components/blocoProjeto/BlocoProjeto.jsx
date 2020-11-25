import React from 'react';
import "./blocoProjeto.css";

export default props => {
    return (
        <div className="blocoProjeto">

            <img src={props.img} alt="imagem JEF" className="imgProjeto"></img>
            <p><b>Linguagem:</b> {props.linguagem}</p>
            <p><b>Projeto:</b> {props.projeto}</p>
            <p><b>Repositório:</b> <a href={props.repositorio} target="_blank" without rel="noopener noreferrer">GitHub</a></p>
            <p><b>Descrição:</b> {props.descricao}</p>
        </div>
    )
}