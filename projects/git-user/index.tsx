import { useEffect, useState } from "react";
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import GitUserContext from './context/GitUserContext';
import { Header, SearchBar, Card } from "./components";
import Styles from './gitUser.module.scss';
import { UserType } from "./data/Types";

const emptyUser = {
	login: '',
	id: 0,
	avatar_url: '',
	html_url: '',
	name: '',
	email: '',
	hireable: false,
	blog: '',
	bio: '',
	location: '',
	followers: 0,
	following: 0,
	public_repos: 0,
	twitter: '',
	company: '',
	created_date: ''
}

function GitUser() {
	const client = new QueryClient({defaultOptions: {
		queries: {refetchOnWindowFocus: false}
	}});
	const [ username, setUsername ] = useState('octocat');
	const [ userAccount, setUserAccount ] = useState(emptyUser);
	const [ isDarkmode, setDarkmode ] = useState(true);

	return (
		<QueryClientProvider client={client}>
		  <GitUserContext.Provider
		  	value={{
				username, setUsername, 
				userAccount, setUserAccount,
				isDarkmode, setDarkmode
			}}
		  >
			<div className={`${Styles.appContainer}`}>
				<Header />
				<SearchBar />
				<Card />
			</div>
			<footer className={`${Styles.footer}`}>
				Coded with ♥️ by <a href="http://0hundred.dev" target="_blank" rel="noopener noreferrer">K.Richmond</a>
			</footer>
		  </GitUserContext.Provider>
		</QueryClientProvider>
	)
}

export default GitUser;