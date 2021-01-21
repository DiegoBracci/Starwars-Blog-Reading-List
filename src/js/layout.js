import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import ReactDOM from "react-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { GroupCard, Gallery } from "./views/prueba.js";
import { Card } from "./views/Card.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Navbar />
							<div className="container">
								<Gallery />
								<Link classNmae="col-12 justify-content-center" to="/">
									<button className="btn btn-primary">Back home</button>
								</Link>
							</div>
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
