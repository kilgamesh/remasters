import Styles from "@/styles/modules/hamburgers.module.css";
import OneBurger from "./OneBurger";

const Title = () => {
  return (
	<div className={`${Styles.Title} flex items-center text-[#f7f7f7]`}>
		<OneBurger name='title' color="none" title={true} />
		<h1 className="text-2xl inline pr-1">amburgers</h1>
		<a className={`${Styles.link} text-[#f7f7f7]`} href="http://0hundred.dev" target="_blank" rel="noopener noreferrer">by KR</a>
	</div>
  )
};
export default Title;