import Link from 'next/link';
import Styles from './navigation.module.scss';

interface INavItem {
	emoji: string;
	name: string;
	link: string;
}

const NavItem = ({ emoji, name, link }: INavItem) => {
  return (
	<div className={`${Styles.item} ${Styles[name]}`}>
		<Link href={link} className={Styles.emoji}>{ emoji }</Link>
	</div>
  )
};

export default NavItem;