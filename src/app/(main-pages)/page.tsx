import { TextFocus } from "@/components/TextFocus";

export default function About() {
	return (
		<div className="fap-2 flex flex-col gap-2 text-justify text-ctp-text">
			<p>
				Olá, sou Leonardo e seja bem-vindo ao meu site! Aqui você encontrará detalhes sobre
				minha jornada profissional, projetos e artigos.
			</p>
			<p>
				Minha trajetória começou na faculdade de{" "}
				<TextFocus>Ciência da Computação</TextFocus>, que ingressei em 2018 e concluí em
				2021. Ainda na universidade, iniciei minha carreira como estagiário, ganhando
				experiência prática com <TextFocus>Node, Google Script e React</TextFocus>, o que
				pavimentou meu caminho para desafios maiores.
			</p>
			<p>
				Após me formar, transicionei para o papel de desenvolvedor pleno na{" "}
				<a
					href="https://tradepro.com.br/"
					className="font-bold text-ctp-peach hover:underline"
					target="_blank"
					rel="noreferrer">
					Trade Pro
				</a>
				, onde atualmente atuo como Fullstack em sistemas SaaS. Meu dia a dia envolve{" "}
				<TextFocus>Firebase, React, Next, MongoDB, Node, Typescript</TextFocus> e
				ocasionalmente <TextFocus>React Native</TextFocus>.
			</p>
			<p>
				Além da graduação, investi em minha formação contínua através de duas pós-graduações
				focadas em <TextFocus>Cloud Computing</TextFocus> e{" "}
				<TextFocus>Desenvolvimento de Aplicativos Móveis Multiplataforma</TextFocus>,
				ampliando minhas habilidades em mobile e DevOps.
			</p>
			<p>
				Estou sempre buscando crescer profissionalmente. Meus objetivos incluem participar
				de projetos inovadores e explorar novas tecnologias, especialmente na área fullstack
				onde acredito que o saber de cada parte de uma aplicação, seja a essência para um
				bom processo de desenvolvimento e evolução pessoal.
			</p>
			<p>
				Com isso, convido você a explorar meus projetos e blog. Espero também que algo que
				fiz inspire ou ajude você em sua trajetória.
			</p>
		</div>
	);
}
