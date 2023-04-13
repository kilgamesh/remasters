import { useQuery } from "@tanstack/react-query"
import { UserType } from "../data/Types"

export function useFetchUser(username: string) {
	return useQuery({
		queryKey: ['user'],
		queryFn: async(): Promise<UserType> => {
			return await fetch('https://api.github.com/users/' + username)
				.then(response => {
					if(!response.ok) throw new Error(`${response.status} Error`)

					return response.json()
				})
				.then(data => data)
		},
		enabled: !!username
	})

} 