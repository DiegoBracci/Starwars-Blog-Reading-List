const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoaded: false,
			planets: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getData: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(
						result => {
							// setItems(result);
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
