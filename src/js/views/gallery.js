import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar.js";
import { Card } from "../views/createCard.js";

export function Gallery() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getData();
	}, []);

	const groupCard = store.planets.map(item => <Card key={item.uid} description={item.url} title={item.name} />);

	return (
		<div>
			<NavBar />
			<div className="container">
				<p>
					<img
						className="imgCazaRebelion"
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					/>
				</p>
				<div className="row">{groupCard}</div>
				<Link className="col-12 justify-content-center" to="/home">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
}
