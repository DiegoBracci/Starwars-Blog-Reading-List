import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const NavBar = props => {
	const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);
	const [displayMenu, setDisplayMenu] = useState("none");
	let { title, description, buttonLabel } = props;

	//Button desplegable

	function dropBar() {
		if (displayMenu === "none") {
			setDisplayMenu("block");
		} else {
			setDisplayMenu("none");
		}
	}

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
								<h6>
									&nbsp; {item} &nbsp;
									<i
										onClick={() => {
											actions.setRemoveFavorite(item);
										}}
										className="fas fa-trash"
									/>
								</h6>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imgUrl: PropTypes.string
};
