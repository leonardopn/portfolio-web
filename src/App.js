import React, { useState } from 'react';
import "./app.css"
import Presentation from './components/leftHeader/Presentation';
import ContentPortfolio from './components/centerContent/ContentPortfolio'
import Footer from "./components/footer/Footer";
import EducationCard from './components/centerContent/centerChildrens/educationCard/EducationCard.jsx';
import TechnologiesCard from './components/centerContent/centerChildrens/tecnologiesCard/TechnologiesCard';
import PresentationCenter from "./components/centerContent/centerChildrens/PresentationCenter/PresentationCenter.jsx"

function App() {
	const [idBotaoAbout, setIdAbout] = useState("principal");
	const [idBotaoProjetos, setIdProjetos] = useState("default");
	const [idBotaoCurriculo, setIdCurriculo] = useState("default");
	const [idBotaoContato, setIdContato] = useState("default");

	const estadoBotoesMenu = {
		setIdAbout, setIdProjetos, setIdCurriculo, setIdContato
	}

	const idsBotoesMenu = {
		idBotaoAbout, idBotaoProjetos, idBotaoCurriculo, idBotaoContato
	}

	const about = (
		<div className="divSecundaria">
			<PresentationCenter />
			<EducationCard />
			<TechnologiesCard />
		</div>
	);

	let funcaoTrocaConteudo = function () { };

	function getJsxEscolhido(jsx) {
		funcaoTrocaConteudo(jsx)
	}

	function getFuncaoDeTroca(fun) {
		funcaoTrocaConteudo = fun;
	}

	return (
		<div>
			<div className="flexDiv">
				<Presentation operacaoPai={getJsxEscolhido} estadoBotoesMenu={estadoBotoesMenu} idBotoes={idsBotoesMenu}/>
				<ContentPortfolio operacaoPai={getFuncaoDeTroca} conteudoCentral={about} />
			</div>
			<br></br>
			<Footer operacaoPai={getJsxEscolhido} estadoBotoesMenu={estadoBotoesMenu} idBotoes={idsBotoesMenu} />
		</div>

	);
}

export default App;
