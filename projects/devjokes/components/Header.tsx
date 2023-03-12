import Styles from "@/styles/modules/jokes.module.css";

const Header = () => {
  return (
    <header className={`${Styles.header} text-center`}>
		<h1 className="text-3xl mb-5">Dev-Jokes 🤓</h1>
		<h2 className="text-xl">Though some definitely warrant a google search...</h2>
	</header>
  );
};
export default Header;