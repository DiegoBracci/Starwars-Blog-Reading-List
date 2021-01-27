import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar";
import { Link } from "react-router-dom";
import { Card } from "./card";

export function FullCard() {
	const { store, actions } = useContext(Context);

	// const groupCard = store.planets.map(item => (
	// 	<Card key={item.uid} description={item.url} title={item.name} buttonLabel={"See More"} />
	// ));
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
				<div className="row" />
				{store.planets.map(item => (
					<Card key={item.uid} description={item.url} title={item.name} buttonLabel={"See More"} />
				))}
				;
				<Link className="col-12 justify-content-center" to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
}
