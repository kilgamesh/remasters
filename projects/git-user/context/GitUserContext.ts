import { createContext, useContext } from "react";
import { GitUserContextType } from "../data/Types";

const GitUserContext = createContext<GitUserContextType | null>(null);

export const useGitUser = () => {
	const gitUserContext = useContext(GitUserContext);

	if(!gitUserContext) {
		throw new Error(
			"useGitUser has to be used within <GitUserContext.Provider>"
		)
	}
	return gitUserContext;
}
export default GitUserContext;