"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface PostSectionObserverContextProps {
	currentPostSectionId: string;
}

interface PostSectionObserverProviderProps {
	children: ReactNode;
}

const PostSectionObserverContext = createContext<PostSectionObserverContextProps>(
	{} as PostSectionObserverContextProps
);

/**
 * @description Contexto para observar em qual seção de uma postagem o usuário está.
 */
export function PostSectionObserverProvider({ children }: PostSectionObserverProviderProps) {
	const [currentPostSectionId, setCurrentPostSectionId] = useState("");

	useEffect(() => {
		//NOTE: Pega todas as seções que devem ser observadas
		const elements = Array.from(document.getElementsByClassName(`heading-post`));

		//NOTE: Pega o elemento root pra aplicação pra determinar o scroll da página
		const scrollRoot = document.getElementsByTagName("html")[0];

		//NOTE: Para garantir, já setamos o primeiro elemento como o inicial para o índice
		if (elements[0]) {
			setCurrentPostSectionId(elements[0].id);
		}

		//NOTE: Definimos algumas variáveis auxiliares para monitorar o scroll
		let direction = "up";
		let prevYPosition = 0;

		//NOTE: Essa função vai determinar a direção do scroll
		function setScrollDirection() {
			if (scrollRoot.scrollTop > prevYPosition) {
				direction = "down";
			} else {
				direction = "up";
			}

			prevYPosition = scrollRoot.scrollTop;
		}

		//NOTE: Essa função vai retornar o elemento que deve ser usado como target quando atingirmos o elemento da seção
		function getTargetSection(target: Element) {
			if (direction === "up") return target;

			if (target.nextElementSibling) {
				return target.nextElementSibling;
			} else {
				return target;
			}
		}

		//NOTE: Essa função vai verificar determinar se devemos atualizar qual é o heading atual
		function shouldUpdate(entry: IntersectionObserverEntry) {
			if (direction === "down" && !entry.isIntersecting) {
				return true;
			}

			if (direction === "up" && entry.isIntersecting) {
				return true;
			}

			return false;
		}

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				//NOTE: Definimos a direção do scroll
				setScrollDirection();

				//NOTE: Verificamos se devemos atualizar
				if (!shouldUpdate(entry)) return;

				//NOTE: Definimos o target
				const target = getTargetSection(entry.target);

				//NOTE: Atualizamos o elemento
				setCurrentPostSectionId(target.id);
			});
		});

		elements.forEach(element => {
			observer.observe(element);
		});

		return () => {
			elements.forEach(element => {
				observer.unobserve(element);
			});
		};
	}, []);

	return (
		<PostSectionObserverContext.Provider value={{ currentPostSectionId }}>
			{children}
		</PostSectionObserverContext.Provider>
	);
}

export function usePostSectionObserverContext() {
	const contextState = useContext(PostSectionObserverContext);

	if (!contextState) {
		throw new Error(
			"O hook não tem acesso ao contexto. Envolva os componentes necessários em um PostSectionObserverProvider"
		);
	}

	return contextState;
}
