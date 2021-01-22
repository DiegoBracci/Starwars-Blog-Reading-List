import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Card } from "./createCard";
import { Context } from "../store/appContext";

export function MyFetch() {
	const { store, actions } = useContext(Context);
	const [items, setItems] = useState([]);

	// useEffect(() => {
	// 	fetch("https://www.swapi.tech/api/planets/")
	// 		.then(res => res.json())
	// 		.then(
	// 			result => {
	// 				// setItems(result);
	// 				setStore({
	// 					planets: result
	// 				});
	// 				setIsLoaded(true);
	// 			},
	// 			error => {
	// 				setIsLoaded(false);
	// 				setError(error);
	// 			}
	// 		);
	// }, []);

	useEffect(() => {
		actions.getData();
	}, []);

	console.log(store.planets);
	return (
		<div>
			<ul>
				{/* {store.pl.map(item => (
					<Card key={item.uid} />
					// <li key={item.uid}>
					// 	{item.url} : {item.name}
					// </li>
				))} */}
			</ul>
		</div>
	);
}
