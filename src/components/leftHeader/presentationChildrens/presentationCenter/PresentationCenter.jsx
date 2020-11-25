import React from 'react';
import iconProfile from "../../../../img/icons8-male-user-100.png"
import iconProjects from "../../../../img/icons8-console-100.png"
import iconCurriculo from "../../../../img/icons8-regular-document-100.png"
import iconContact from "../../../../img/icons8-phone-100.png"
import DefaultButton from '../../../general/defaultButton/DefaultButton.jsx'
import PresentationCenter from '../../../centerContent/centerChildrens/PresentationCenter/PresentationCenter'
import EducationCard from '../../../centerContent/centerChildrens/educationCard/EducationCard'
import TechnologiesCard from '../../../centerContent/centerChildrens/tecnologiesCard/TechnologiesCard'
import Contato from '../../../contato/Contato';
import Projetos from '../../../projetos/Projetos';
import Curriculo from "../../../curriculo/Curriculo"
import "./PresentationCenter.css"

export default props => {

    const about = (
        <div className="divSecundaria">
            <PresentationCenter />
            <EducationCard />
            <TechnologiesCard />
        </div>
    );

    const projetos = (
        <Projetos></Projetos>
    )

    const contato = (
        <Contato></Contato>
    )

    const curriculo = (
        <Curriculo></Curriculo>
    )

    var scrollTop = function() {
        window.scrollTo(0, 0);
    };
    

    function limpaIds(){
        let valorLimpo = "default";

        props.estadoBotoesMenu.setIdAbout(valorLimpo);
        props.estadoBotoesMenu.setIdProjetos(valorLimpo);
        props.estadoBotoesMenu.setIdCurriculo(valorLimpo);
        props.estadoBotoesMenu.setIdContato(valorLimpo);
    }

    function setPrincipal(jsx, setId){
        let valorPrincipal = "principal";
        limpaIds();
        props.operacaoPai(jsx);
        setId(valorPrincipal);
        scrollTop();
    }

    return (
        <div className="divCenter">
            <DefaultButton id={props.idBotoes.idBotaoAbout} icon={iconProfile} text="Sobre mim" acao={setPrincipal} parametroAcao={about} funcaoSet={props.estadoBotoesMenu.setIdAbout} />
            <DefaultButton id={props.idBotoes.idBotaoProjetos} icon={iconProjects} text="Projetos" acao={setPrincipal} parametroAcao={projetos} funcaoSet={props.estadoBotoesMenu.setIdProjetos}/>
            <DefaultButton id={props.idBotoes.idBotaoCurriculo} icon={iconCurriculo} text="Currículo" acao={setPrincipal} parametroAcao={curriculo} funcaoSet={props.estadoBotoesMenu.setIdCurriculo}/>
            <DefaultButton id={props.idBotoes.idBotaoContato} icon={iconContact} text="Contato" acao={setPrincipal} parametroAcao={contato} funcaoSet={props.estadoBotoesMenu.setIdContato}/>
        </div>
    )
}