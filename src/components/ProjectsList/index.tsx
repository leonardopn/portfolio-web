import { projects } from "@/database/db";
import { ProjectCard } from "../ProjectCard";

interface ProjectsListProps {}

export function ProjectsList({}: ProjectsListProps) {
	return (
		<div className="flex flex-col gap-5">
			{projects.map(repo => {
				return <ProjectCard key={repo.id} project={repo} />;
			})}
		</div>
	);
}
