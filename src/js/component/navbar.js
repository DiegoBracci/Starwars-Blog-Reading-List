import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Prueba } from "../views/gallery.js";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

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
	// const deleteFavorite = value => {
	// 	actions.setRemoveFavorite(value);
	// };
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
						}}
					/>
					<ul className="dropdown-menu" role="menu" style={{ display: displayMenu }}>
						{store.favoritesList.map((item, index) => (
							<li key={index}>
								<h5>
									&nbsp; {item} &nbsp;
									<i
										className="fas fa-trash"
										onClick={value => {
											deleteFavorite(item);
										}}
									/>
								</h5>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
