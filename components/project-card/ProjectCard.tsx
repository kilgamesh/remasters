import Styles from "./project-card.module.css";
import Link from "next/link";

interface IProject {
	projectName: string;
	projectLink: string;
}
const ProjectCard = ({ projectName, projectLink }: IProject) => {
  return (
  <div className="relative w-fit z-10 m-7">
	<Link href={projectLink}>
		<span className={Styles.card}>
			{projectName}
		</span>
	</Link>
  </div>
  );
};
export default ProjectCard;