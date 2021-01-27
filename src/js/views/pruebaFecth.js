import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Card } from "./card";
import { Context } from "../store/appContext";

export function MyFetch() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getData();
	}, []);

	console.log(store.planets);
	return (
		<div>
			<ul>
				{store.planets.map(item => (
					<Card key={item.uid} />
				))}
			</ul>
		</div>
	);
}
