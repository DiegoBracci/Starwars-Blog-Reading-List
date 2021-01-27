const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoaded: false,
			planets: [],
			planetsProperties: [],
			favoritesList: []
		},
		actions: {
			getData: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(
						result => {
							setStore({
								planets: result.results,
								isLoaded: true
							});
						},
						error => {
							setIsLoaded(false);
							setError(error);
						}
					);
			},

			// getPlanetsProperties: () => {
			// 	fetch("https://www.swapi.tech/api/planets/1/")
			// 		.then(res => res.json())
			// 		.then(
			// 			result => {
			// 				setStore({
			// 					planets: result.results,
			// 					isLoaded: true
			// 				});
			// 			},
			// 			error => {
			// 				setIsLoaded(false);
			// 				setError(error);
			// 			}
			// 		);
			// }

			setFavorite: favorite => {
				const store = getStore();

				let newStore = [...store.favoritesList, favorite];
				setStore({ favoritesList: newStore });
				console.log(newStore);
			},

			setRemoveFavorite: favorite => {
				const store = getStore();
				const newStore = store.favoritesList.filter(task => task !== favorite);
				setStore({ favoritesList: newStore });
				console.log(newStore);
			}
		}
	};
};
export default getState;
