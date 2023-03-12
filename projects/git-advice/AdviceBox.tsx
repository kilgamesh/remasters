import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';
import Styles from "@/styles/modules/advice.module.css";
// SVG Icons
import SearchIcon from "./assets/icon-search.svg";
import Divider from "./assets/pattern-divider-desktop.svg";
import Dice from "./assets/icon-dice.svg";

const AdviceBox = () => {
	const [advice, setAdvice] = useState('');
	const [adviceID, setAdviceID] = useState<number | null>(null);
	const [idSearch, setIdSearch] = useState('');

	const getAdvice = (event?: React.FormEvent<HTMLFormElement>, useID?: boolean) => {
		event?.preventDefault();
		// Checks for empty input before making api call
		if(idSearch === '') {useID = false}
		
		// If a searchNum is included then the specific advice is found otherwise random advice
		axios.get(`https://api.adviceslip.com/advice${ useID ? `/${idSearch}` : '' }`)
			.then(response => {
				setAdvice(response.data.slip.advice);
				setAdviceID(response.data.slip.id);
			})
			.catch(error => {
				console.error(error);
				setAdvice('An Error as occurred please try again.');
				setAdviceID(999);
			})
	}

	useEffect(() => {
		getAdvice();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
	<main className={`${Styles.box}`}>
		<form className={`${Styles.form}`} onSubmit={e => getAdvice(e, true)}>
			<input 
			  className={`${Styles.input}`} placeholder="1-224"
			  type="number" min='1' max='224' onChange={e => setIdSearch(e.target.value)}
			  name='advice-search' id="advice-search"
			/>
			<button className={`${Styles.search}`} type="submit">
				<Image src={SearchIcon} alt="Search Icon" />
			</button>
		</form>

		<div className={`${Styles.advice}`}>
			<p>ADVICE #{ adviceID }</p>
			<h1>{ advice }</h1>
		</div>

		<Image className={`${Styles.divider}`} src={Divider} alt="Divider Line" />

		<button className={`${Styles.refresh}`} onClick={() => getAdvice()}>
			<Image src={Dice} alt="Dice Icon" />
		</button>
	</main>
  );
};
export default AdviceBox;