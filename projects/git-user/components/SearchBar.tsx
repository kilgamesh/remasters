import { useGitUser } from "../context/GitUserContext"
import Styles from '../gitUser.module.scss';
import { useState } from "react";
import Image from "next/image";
import SearchIcon from '../icons/icon-search.svg';

const SearchBar = () => {
	const [ searchInput, setSearchInput ] = useState('');
	const { setUsername, isSearching, errorFound } = useGitUser();

	return (
		<div className={`${Styles.search} ${errorFound && Styles.error}`}>
			<Image src={SearchIcon} className={Styles.icon} width={25} height={24} alt='search icon'/>
	
			<input type="text" onChange={e => setSearchInput(e.target.value)} 
			  className={`${Styles.input}`} placeholder="Search GitHub username..." 
			/>
			
			<button onClick={() => setUsername(searchInput)} 
			  className={`${Styles.button} ${isSearching && Styles.loading}`} 
			  disabled={isSearching}
			>
				{isSearching 
				  ? <svg className={`${Styles.loader}`} viewBox="25 25 50 50" >
						<circle className={`${Styles.loader_path}`} cx="50" cy="50" r="20" fill="none" stroke="#f43f5e" stroke-width="2" />
					</svg>
				  : 'Search'
				}
			</button>
		</div>
	)
}

export default SearchBar;