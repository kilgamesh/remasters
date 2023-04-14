import Styles from '../gitUser.module.scss';
import Image from 'next/image';
import { useGitUser } from '../context/GitUserContext';
import moonIcon from '../icons/icon-moon.svg';
import sunIcon from '../icons/icon-sun.svg';

const Header = () => {
	const { isDarkmode, setDarkmode } = useGitUser();
	
	const handleClick = (bool: boolean) => {
		setDarkmode(bool);
		localStorage.setItem('isDarkTheme', bool ? 'dark' : 'light');
	}
	return (
	<header className={`${Styles.header}`}>
		<h1 className={Styles.title}>git user</h1>

		<div className={Styles.theme} onClick={() => handleClick(!isDarkmode)}>
			<p className={Styles.theme_name}>
				{isDarkmode ? 'Dark' : 'Light'}
			</p>
			
			{isDarkmode
				? <Image 
					alt={`moon icon`} 
					src={moonIcon}
					width={20} height={20}
					className={`${Styles.theme_icon} ${Styles.dark}`} 
				/>
				: <Image 
					alt={`sun icon`} 
					src={sunIcon}
					width={20} height={20}
					className={`${Styles.theme_icon} ${Styles.light}`} 
				/>
			}
		</div>

	</header>
	)
};
export default Header;