import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar.js";
import { Card } from "./card.js";

export function Gallery() {
	const { store, actions } = useContext(Context);

	const groupCardPlanets = store.planets.map(item => (
		<Card key={item.uid} description={item.url} title={item.name} buttonLabel={"See More"} />
	));
	const groupCardPeople = store.people.map(item => (
		<Card key={item.uid} description={item.url} title={item.name} buttonLabel={"See More"} />
	));

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
				<h3
					style={{
						color: "white",
						border: "solid 1px black",
						background: "black",
						textAlign: "center",
						padding: "10px"
					}}>
					PLANETS
				</h3>
				<div className="row">{groupCardPlanets}</div>
				<br />
				<h3
					style={{
						color: "white",
						border: "solid 1px black",
						background: "black",
						textAlign: "center",
						padding: "10px"
					}}>
					PEOPLE
				</h3>
				<div className="row">{groupCardPeople}</div>
				<Link className="col-12 justify-content-center" to="/home">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
}
