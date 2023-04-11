import { burgerTypes } from "../burgerData";
import OneBurger from "./OneBurger";
import Styles from "../hamburgers.module.scss";
import React from "react";

const Burgers = () => {
  return (
	<main className={Styles.burgers}>
		{burgerTypes.map((burger, index) => 
			<div key={index}>
				<OneBurger name={burger.name} color={burger.color} />
			</div>
		)}
	</main>
  )
};
export default Burgers;