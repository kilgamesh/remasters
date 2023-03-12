import {useQuery} from '@tanstack/react-query';
import Styles from "@/styles/modules/jokes.module.css";

interface IJoke {
	question: string;
	punchline: string;
}

const Joke = () => {
	const fetchJoke = async(): Promise<IJoke> => {
		return await 
			fetch('https://backend-omega-seven.vercel.app/api/getjoke')
				.then(response => {
					if(!response.ok) throw new Error(`${response.status} Error`)

					return response.json()
				})
				.then(data => data[0])		
	}
	const { data: joke, isLoading, refetch } = useQuery(['joke'], fetchJoke)

	if(isLoading) {
		return <h3 className={`text-2xl ${Styles.loading}`}>Loading...</h3>
	}
  return (
    <section className='text-center'>
	  {joke
	  ?	<>
	  		<div className={`${Styles.box}`}>
				<h3 className={`text-2xl font-extrabold ${Styles.question}`}>
					{joke.question}
				</h3>
				
				<h2 className={`text-xl txt-mono italic ${Styles.punchline}`}>
					{joke.punchline}
				</h2>
			</div>
			<div className={`${Styles.box_border}`}></div>

			<button className={`text-xl ${Styles.button_default}`}
			onClick={() => refetch()}>
					New Joke
			</button>
	  	</>
	  : <></>
	  }
	</section>
  );
};
export default Joke;