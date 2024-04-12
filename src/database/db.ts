import { ProgrammingLanguages } from "@/@types/ProgrammingLanguages";

export type Project = {
	id: number;
	name: string;
	resume: string;
	description: string;
	link: string;
	languages: ProgrammingLanguages[];
	license: string;
};

export const projects: Project[] = [
	{
		id: 1,
		name: "toolkit-extra",
		resume: "Vários módulos de funções rápidas que não estão disponíveis no javascript mas aposto que você adoraria que estivessem.",
		description:
			"Sabe aqueles arquivos cheios de funções utilitárias que você criou em um projeto e fica copiando e colando sempre para outro projeto? Então, eu me cansei disso e criei minha biblioteca para agrupar essas funções.",
		link: "https://github.com/leonardopn/toolkit-extra",
		languages: ["Typescript"],
		license: "MIT",
	},
	{
		id: 2,
		name: "eslint-config-leonardopn",
		resume: "Configurações padronizadas para o ESLint.",
		description:
			"Criei essa extensão do Eslint só com o intuito de adicionar alguns padrões de codificação em meus apps pessoais.",
		link: "https://github.com/leonardopn/eslint-config-leonardopn",
		languages: ["Javascript"],
		license: "MIT",
	},
	{
		id: 4,
		name: "SAPEP",
		resume: "Sistema Aberto de Prontuário Eletrônico do Paciente - TCC",
		description:
			"Projeto criado como trabalho de conclusão de curso para bacharelado em ciência da computação na Universidade Paulista. O projeto consiste em um sistema para gerenciamento de prontuários eletrônicos de pacientes.",
		link: "https://github.com/CC-UNIP-CAMPINAS/SAPEP-front",
		languages: ["Javascript"],
		license: "MIT",
	},
	{
		id: 3,
		name: "MQTT.JS-Auto-Exec",
		resume: "Programa para execução de comandos recebidos por protocolo MQTT.",
		description:
			"App feito em electron para executar comandos em seu computador a partir de um protocolo MQTT. Muito útil para executar comandos de terminal, desligar o computador, abrir um programa e etc.",
		link: "https://github.com/leonardopn/MQTT.JS-Auto-Exec",
		languages: ["Javascript"],
		license: "GPLv3",
	},
	{
		id: 6,
		name: "jojochat_client",
		resume: "Jojochat - chat usando sockets.",
		description:
			"Projeto feito durante a faculdade para aprender para criar um bate-papo através de Berkeley sockets.",
		link: "https://github.com/CC-UNIP-CAMPINAS/jojochat_client",
		languages: ["Java"],
		license: "Sem licença",
	},
	{
		id: 5,
		name: "JEF",
		resume: "Java Esmalteria Fiscal - gerencie seus horários marcados.",
		description:
			"Foi meu primeiro app desenvolvido durante a faculdade, ele basicamente é um app feito em JavaFX para marcar horários e gerenciar funcionários e clientes para um estabelecimento como salão de beleza.",
		link: "https://github.com/leonardopn/JEF",
		languages: ["Java"],
		license: "GPLv2.1",
	},
	{
		id: 7,
		name: "projetoPI_javafx",
		resume: "BinarizadorFX - Binariza uma imagem",
		description:
			"Projeto feito durante a faculdade para binarizar uma imagem passada para o programa.",
		link: "https://github.com/CC-UNIP-CAMPINAS/projetoPI_javafx",
		languages: ["Java"],
		license: "Sem licença",
	},
];
