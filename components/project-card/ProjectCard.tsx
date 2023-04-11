import Styles from "./project-card.module.scss";
import Link from "next/link";

interface IProject {
	projectName: string;
	projectLink: string;
}
const ProjectCard = ({ projectName, projectLink }: IProject) => {
  return (
  <div className="relative z-10 mx-5 my-7">
	<Link href={projectLink}>
		<span className={Styles.card}>
			{projectName}
		</span>
	</Link>
  </div>
  );
};
export default ProjectCard;