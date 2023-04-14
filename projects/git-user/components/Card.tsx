import Image from "next/image";
import { useEffect } from "react";
import { useGitUser } from "../context/GitUserContext";
import { useFetchUser } from "../hooks/useFetchUser";
import LocationIcon from '../icons/icon-location.svg';
import WebsiteIcon from '../icons/icon-website.svg';
import CompanyIcon from '../icons/icon-company.svg';
import TwitterIcon from '../icons/icon-twitter.svg';
import Styles from '../gitUser.module.scss';

const Card = () => {
	const { 
		userAccount, setUserAccount, username,
		setSearching, setErrorFound
	} = useGitUser();
	const { data: user, refetch, isError, isFetching } = useFetchUser(username);

	// Set user account on fetch
	useEffect(() => {
		user && setUserAccount({
			login: user.login,
			id: user.id,
			avatar_url: user.avatar_url,
			html_url: user.html_url,
			name: user.name,
			email: user.email,
			hireable: user.hireable,
			blog: user.blog,
			bio: user.bio,
			location: user.location,
			followers: user.followers,
			following: user.following,
			public_repos: user.public_repos,
			twitter: user.twitter,
			company: user.company,
			created_at: user.created_at
		})
	}, [user, setUserAccount]);

	// Refetch when username changes
	useEffect(() => {
		refetch()
	}, [username, refetch,]);

	// Fetching States
	useEffect(() => {
		setSearching(isFetching);
	}, [ isFetching, setSearching ]);

	useEffect(() => {
		setErrorFound(isError);
	}, [isError, setErrorFound])

	var d = new Date( userAccount.created_at );
    var day = d.getDay();
    var year = d.getFullYear();
    var monthIndex = d.getMonth();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    var month = months[monthIndex];
    var date = day + " " + month + " " + year;

  return (
	<main className={`${Styles.card}`}>
		<section className={`${Styles.header}`}>
			<Image className={`${Styles.header_img}`} src={ userAccount.avatar_url } width={100} height={100} alt="profile icon github" />

			<div className={`${Styles.header_text}`}>
				<h2 className={`${Styles.header_text__name}`}>
					{userAccount.name ? userAccount.name : userAccount.login }
				</h2>

				<p className={`${Styles.header_text__tag}`}>
					<a href={ userAccount.html_url } rel="noreferrer" 
					target="_blank">@{ userAccount.login }</a>
				</p>

				<p className={`${Styles.header_text__joinDate}`}> 
					Joined { date }
				</p>
			</div>
		</section>

		<section className={`${Styles.bio}`}>
			{userAccount.bio
			  ?	<h3 className={`${Styles.bio_text}`}>
					{ userAccount.bio }
				</h3>
			  :	<p className={`${Styles.header} ${Styles.lowLight}`}>
					This profile has no bio
				</p>
			}
		</section>

		<section className={`${Styles.stats}`}>
			<h3 className={`${Styles.stats_sub}`}>
				<span className={`${Styles.stats_header}`}>Repos</span>

				<span className={`${Styles.stats_number}`}>{ userAccount.public_repos }</span>
			</h3>

			<h3 className={`${Styles.stats_sub}`}>
				<span className={`${Styles.stats_header}`}>Followers</span>

				<span className={`${Styles.stats_number}`}>{ userAccount.followers }</span>
			</h3>

			<h3 className={`${Styles.stats_sub}`}>
				<span className={`${Styles.stats_header}`}>Following</span>
				<span className={`${Styles.stats_number}`}>{ userAccount.following }</span>
			</h3>
		</section>

		<ul className={`${Styles.links}`}>
			<li className={`${Styles.links_item}`}>
				<Image src={LocationIcon} className={Styles.icon} width={14} height={20} alt='location icon'/>

				{userAccount.location
				  ?	<p className={`${Styles.links_text}`}>
						{ userAccount.location }
					</p>

				  :	<p className={`${Styles.links_text} ${Styles.lowLight}`}>
						Not Available
					</p>
				}
			</li>

			<li className={`${Styles.links_item}`}>
				<Image src={WebsiteIcon} className={Styles.icon} width={20} height={20} alt='location icon'/>
				
				{userAccount.blog
				  ?	<p className={`${Styles.links_text}`}>
						<a href={ userAccount.blog } rel="noreferrer" target="_blank">
							{ userAccount.blog }
						</a>
					</p>

				  :	<p className={`${Styles.links_text} ${Styles.lowLight}`}>
						Not Available
					</p>
				}
			</li>

			<li className={`${Styles.links_item}`}>
				<Image src={TwitterIcon} className={Styles.icon} width={20} height={18} alt='location icon'/>
				
				{userAccount.twitter
				  ?	<p className={`${Styles.links_text}`}>
						<a href={ `https://twitter.com/${userAccount.twitter}` } rel="noreferrer" target="_blank">{ userAccount.twitter }</a>
					</p>

				  :	<p className={`${Styles.links_text} ${Styles.lowLight}`}>
						Not Available
					</p>
				}
				
			</li>

			<li className={`${Styles.links_item}`}>
				<Image src={CompanyIcon} className={Styles.icon} width={20} height={20} alt='location icon'/>
				
				{userAccount.company
				  ?	<p className={`${Styles.links_text}`}>
						{ userAccount.company }
					</p>

				  :	<p className={`${Styles.links_text} ${Styles.lowLight}`}>
						Not Available
					</p>
				}
			</li>
		</ul>
	</main>
  );
};
export default Card;