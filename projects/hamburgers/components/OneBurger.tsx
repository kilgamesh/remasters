import { useState } from "react";
import Styles from "../hamburgers.module.scss";

interface IBurger {
	name: string; 
	color: string;
	title?: boolean;
}

const OneBurger = ({ name, color, title }: IBurger) => {
	const [ isOpen, setOpen ] = useState(false);

	const toggleOpen = () => {setOpen(!isOpen)}

  return (
  <div className={`${Styles.wrapper}`} style={{backgroundColor: color}}>
	{!title && <h2 className={`capitalize drop-shadow-md font-bold font-mono text-lg`}>{ name }</h2>}

	<button className={`${Styles.burger} ${Styles[name]} ${isOpen && Styles.open}`} 
	onClick={() => toggleOpen()}>
		<div className={`${Styles.line}`}></div>
		<div className={`${Styles.line}`}></div>
		<div className={`${Styles.line}`}></div>
	</button>

	{!title && <div></div>}
  </div>
  );
};
export default OneBurger;