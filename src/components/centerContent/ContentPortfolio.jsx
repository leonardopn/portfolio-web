import { useState } from 'react';
import "./contentPortfolio.css"


export default props => {

    const [divCentral, setDiv] = useState(props.conteudoCentral);

    const mudaPage = (componente) => {
        setDiv(componente);
    }

    props.operacaoPai(mudaPage);

    return (

        divCentral

    )
}