import React from 'react';
import "./defaultButton.css"

export default props => {
    return (
    <button className="buttonDefault" id={props.id} onClick={e => props.acao(props.parametroAcao, props.funcaoSet)}><img src={props.icon} alt="Icone botão"></img><span>{props.text}</span></button>
    )
}