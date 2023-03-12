import Footer from "./components/Footer";
import Header from "./components/Header";
import Joke from "./components/Joke";
import Styles from "@/styles/modules/jokes.module.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigation from "components/navigation/Navigation";

const DevJokes = () => {
  const client = new QueryClient({defaultOptions: {
	queries: {refetchOnWindowFocus: false}
  }});

  return (
  <QueryClientProvider client={client}>
	<div className={`${Styles.App} text-robo`}>
		<Header />
		<Joke />
		<Footer />
		<Navigation />
	</div>
  </QueryClientProvider>
  );
};
export default DevJokes;