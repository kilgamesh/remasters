import { QueryFunction } from "@tanstack/react-query";

export type UserType = {
	login: string;
	id: number;
	avatar_url: string | '';
	html_url: string;
	name: string;
	email?: string;
	hireable?: boolean;
	blog: string;
	bio: string;
	location: string;
	followers: number;
	following: number;
	public_repos: number;
	twitter?: string;
	company?: string;
	created_date: string;
}

export interface GitUserContextType {
	username: string;
	setUsername: Function; 
	userAccount: UserType;
	setUserAccount: Function;
	isDarkmode: boolean; 
	setDarkmode: Function;
}

export interface UsersStateValue {
	users: [UserType] | []
}