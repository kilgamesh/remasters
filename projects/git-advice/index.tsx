import Image from "next/image";
import AdviceBox from "./AdviceBox";
import Logo from "@/public/assets/icons/main.jpg";
import Styles from "@/styles/modules/advice.module.css"
import Navigation from "components/navigation/Navigation";
const GitAdvice = () => {
  return (
  <div className={`${Styles.App} flex flex-col justify-between items-center font-bold text-sm md:text-base`}>
	<div className="grow inline-flex">
		<AdviceBox />
	</div>

	<footer className="pt-1 pb-3"> 
		<a href="http://0hundred.dev" target="_blank" rel="noopener noreferrer">
			<Image className="h-11 w-11 rounded-full ease-in duration-100 hover:scale-110" src={Logo} alt='0hundred' />
		</a>
	</footer>
	<Navigation />
  </div>
  );
};
export default GitAdvice;