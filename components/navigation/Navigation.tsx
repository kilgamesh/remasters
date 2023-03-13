import { useState } from 'react';
import Styles from './navigation.module.css';
import NavItem from './NavItem';

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen(!open);
	}
  return (
	<nav className={`${Styles.nav}  ${open && Styles.open}`}>
		<div onClick={() => toggleOpen()} className={`${Styles.hamburger}`}>
			<div className={Styles.line}></div>
			<div className={Styles.line}></div>
			<div className={Styles.line}></div>
		</div>

		<NavItem emoji='🏠' link='/' name='home' />
		<NavItem emoji='😂' link='/devjokes' name='jokes' />
		<NavItem emoji='🧠' link='/gitadvice' name='advice' />
		<NavItem emoji='🍔' link='/hamburgers' name='hamburgers' />
	</nav>
  );
};
export default Navigation;