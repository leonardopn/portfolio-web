import { Project } from "@/database/db";
import { ExternalLink, Scale } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { LanguageTag } from "../LanguageTag";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<a href={project.link} target="_blank" rel="noreferrer">
			<CardDefault className="flex flex-col gap-4 bg-ctp-base text-justify text-ctp-text transition-transform hover:scale-[101%]">
				<section>
					<div className="flex items-center justify-between">
						<h1 className="text-lg font-semibold text-ctp-peach sm:text-xl">
							{project.name}
						</h1>
						<ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
					</div>

					<h2 className="text-sm text-ctp-subtext1 sm:text-base">{project.resume}</h2>
				</section>

				<section className="rounded-lg border-ctp-surface0 text-sm sm:border sm:bg-ctp-crust sm:p-2 sm:text-base  sm:shadow-inner">
					<p>{project.description}</p>
				</section>
				<footer className="flex items-center justify-between gap-2">
					<section className="flex flex-wrap gap-2">
						{project.languages.map(language => (
							<LanguageTag key={language} language={language} />
						))}
					</section>
					<section className="flex h-fit w-fit items-center justify-center gap-2 text-sm font-semibold text-ctp-peach">
						<Scale className="h-5 w-5" />
						{project.license}
					</section>
				</footer>
			</CardDefault>
		</a>
	);
}
