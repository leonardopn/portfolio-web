import React from 'react';
import "./Presentation.css"
import PresentationSup from './presentationChildrens/presentationSup/PresentationSup.jsx'
import PresentationCenter from './presentationChildrens/presentationCenter/PresentationCenter';

export default props => {
    return (
        <div className="divPrincipal">
            <div id="scrollMenu">
                <PresentationSup />
                <hr></hr>
                <PresentationCenter operacaoPai={props.operacaoPai} estadoBotoesMenu={props.estadoBotoesMenu} idBotoes={props.idBotoes}/>
                <hr></hr>
            </div>
        </div>

    )
}