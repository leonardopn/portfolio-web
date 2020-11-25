import React from 'react';
import "./buttomSocial.css"

export default props => {
    return (
        <a href={props.link} target={"_blank"} rel="noopener noreferrer"><img className="botaoSocial" src={props.logo} alt={"Logo " + props.empresa}></img></a>
    )
}