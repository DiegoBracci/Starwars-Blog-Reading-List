import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import ReactDOM from "react-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer.js";
import { Gallery } from "./views/gallery.js";
import { createCard } from "./views/createCard.js";
import { MyFetch } from "./views/pruebaFecth";

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
							<MyFetch />
						</Route>
						<Route exact path="/gallery" component={Gallery} />
						<Route exact path="/createCard" component={createCard} />
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
