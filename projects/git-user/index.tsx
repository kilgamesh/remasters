import { useEffect, useState } from "react";
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import GitUserContext from './context/GitUserContext';
import { Header, SearchBar, Card } from "./components";
import Styles from './gitUser.module.scss';

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
	created_at: ''
}

function GitUser() {
	const client = new QueryClient({defaultOptions: {
		queries: {refetchOnWindowFocus: false}
	}});
	const [ username, setUsername ] = useState('octocat');
	const [ userAccount, setUserAccount ] = useState(emptyUser);
	const [ isDarkmode, setDarkmode ] = useState<boolean | null>(null);
	const [ isSearching, setSearching ] = useState<boolean>(false);
	const [ errorFound, setErrorFound ] = useState(false);

	// Theming
	useEffect(() => {
		const localTheme = localStorage.getItem('isDarkTheme')?.toString();
		if(localTheme) {
			setDarkmode(localTheme === 'dark' ? true : false)
		} else {
			localStorage.setItem('isDarkTheme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
			setDarkmode(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false);
		}
	}, []);

	return (
		<QueryClientProvider client={client}>
		  <GitUserContext.Provider
		  	value={{
				username, setUsername, 
				userAccount, setUserAccount,
				isDarkmode, setDarkmode, 
				isSearching, setSearching,
				errorFound, setErrorFound
			}}
		  >
			<div className={`${Styles.App} ${isDarkmode && Styles.darkmode}`}>
				<div className={`${Styles.container}`}>
					<Header />
					<SearchBar />
					<Card />
				</div>
				<footer className={`${Styles.footer}`}>
					Coded with ♥️ by <a href="http://0hundred.dev" target="_blank" rel="noopener noreferrer">K.Richmond</a>
				</footer>
			</div>
		  </GitUserContext.Provider>
		</QueryClientProvider>
	)
}

export default GitUser;