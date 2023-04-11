import Styles from "./hamburgers.module.scss";
import Navigation from "components/navigation/Navigation";
import Burgers from "./components/Burgers";
import Title from "./components/Title";

const Hamburgers = () => {
  return (
	<div className={`${Styles.App}`}>
		<main className={`mt-2 mb-12`}>
			<Title />
			<header className={`text-center text-[#f7f7f7]` }>
				<h2 className="text-xl">
					Simple CSS-animated hamburgers
				</h2>
				<p className="text-lg">
					Click (or tap) each one to see the magic!
				</p>      
			</header>
			<Burgers />
		</main>
		<footer className={Styles.footer}>
			<p className={`${Styles.footer_download} text-sm text-[#f7f7f7]`}>
				Downloadable burgers components coming soon! 
			</p>
    	</footer>
		<Navigation />
	</div>
  );
};
export default Hamburgers;