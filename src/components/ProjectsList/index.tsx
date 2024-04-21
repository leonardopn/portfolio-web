import { projects } from "@/database/db";
import { ProjectCard } from "../ProjectCard";

export function ProjectsList() {
	return (
		<div className="flex flex-col gap-5">
			{projects.map(repo => {
				return <ProjectCard key={repo.id} project={repo} />;
			})}
		</div>
	);
}
