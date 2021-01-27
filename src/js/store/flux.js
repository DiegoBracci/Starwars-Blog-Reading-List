const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoaded: false,
			planets: [],
			people: [],
			favoritesList: [],
			heartColor: [
				{
					color: "black",
					paddingLeft: "60px",
					paddingTop: "5px"
				}
			]
		},
		actions: {
			getDataPlanets: () => {
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
			getDataPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(
						result => {
							setStore({
								people: result.results,
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
				console.log(favorite);
				const store = getStore();
				const newStore = store.favoritesList.filter(task => task !== favorite);
				setStore({ favoritesList: newStore });
				console.log(newStore);
			},

			setChangeHeartColor: color => {
				const store = getStore();
				if (store.heartColor.color === "black") {
					setStore((heartColor.color = "red"));
				} else if (store.heartColor.color === "red") {
					setStore((heartColor.color = "black"));
				}
			}
		}
	};
};
export default getState;
