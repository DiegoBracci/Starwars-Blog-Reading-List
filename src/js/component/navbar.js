import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Prueba } from "../views/gallery.js";
import { Context } from "../store/appContext";

export const NavBar = () => {
	const { store, actions } = useContext(Context);
	const [count, setCount] = useState(0);
	const [displayMenu, setDisplayMenu] = useState("none");

	function dropBar() {
		if (displayMenu === "none") {
			setDisplayMenu("block");
		} else {
			setDisplayMenu("none");
		}
	}
	// const menuList = store.favoritesList.map(item => <li key={item.uid} title={item.name} />);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 text-warning h1">Star Wars Universe</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-warning">
						{store.favoritesList.length} Favorites
					</button>

					<button
						type="button"
						className="btn btn-danger dropdown-toggle"
						data-toggle="dropdown"
						onClick={() => {
							dropBar();
						}}>
						<span className="caret" />
						<span className="sr-only">Desplegar menú</span>
					</button>
					<ul
						className="dropdown-menu"
						role="menu"
						style={{ display: displayMenu }}
						onChange={() => {
							store.favoritesList.map(<li key={item.uid}>{item}</li>);
						}}>
						<li>
							<label href="#">{store.favoritesList}</label>
						</li>
						<li>
							<a href="#">Acción #1</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
