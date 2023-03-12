import Styles from "@/styles/modules/jokes.module.css"

const Footer = () => {
  return (
    <footer className={`${Styles.footer} mt-12`}>
        <p className={Styles.button_default}>
            <a href="https://documenter.getpostman.com/view/16443297/TzkyLee7" 
            target="_blank" rel="noopener noreferrer">
              DevJoke.app
            </a>
        </p>

        <p className={Styles.button_default}>
            <a href="http://github.com/0hundred0/remaster" 
            target="_blank" rel="noopener noreferrer">
              Repo
            </a>
        </p>

        <p className={Styles.button_default}>
            <a href="https://www.devjoke.app/submit-dev-joke" 
            target="_blank" rel="noopener noreferrer">
                Submit a Joke
            </a>
        </p>
	</footer>
  );
};
export default Footer;