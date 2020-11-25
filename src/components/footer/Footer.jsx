import React from 'react';
import "./footer.css"
import PresentationCenter from '../leftHeader/presentationChildrens/presentationCenter/PresentationCenter'

export default props => {
    return (
        <footer className="footer">
            <PresentationCenter operacaoPai={props.operacaoPai} estadoBotoesMenu={props.estadoBotoesMenu} idBotoes={props.idBotoes}/>
            <div id="copyright">Copyright © Leonardo Petta do Nascimento</div>
        </footer>
    );
}