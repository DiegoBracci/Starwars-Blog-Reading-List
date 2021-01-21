import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Prueba } from "../views/prueba.js";

export const Navbar = () => {
	const [count, setCount] = useState(0);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 text-warning h1">Star Wars Universe</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-warning" onClick={() => setCount(count + 1)}>
						{count} Favorites
					</button>

					<button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
						<span className="caret" />
						<span className="sr-only">Desplegar menú</span>
					</button>
					<ul className="dropdown-menu" role="menu">
						<li>
							<a href="#">Acción #1</a>
						</li>
						<li>
							<a href="#">Acción #1</a>
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
