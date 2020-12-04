import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import {
	BrowserRouter as Router,
	Redirect, Route, Switch
} from "react-router-dom";
import './Main.css';
import Art from "./pages/Art/Art";
import Code from "./pages/Code/Code";
import Music from "./pages/Music/Music";
import Resume from "./pages/Resume/Resume";

const APP_PAGES = [
	{
		id: 'resume',
		name: 'Resume',
		component: Resume
	},
	{
		id: 'code',
		name: 'Code',
		component: Code
	},
	{
		id: 'music',
		name: 'Music',
		component: Music
	},
	{
		id: 'art',
		name: 'Art',
		component: Art
	}
];

const APP_LINKS = [
	{
		id: 'linkedin',
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/danielbednarczyk/'
	},
	{
		id: 'github',
		name: 'GitHub',
		link: 'https://github.com/dan9418/'
	},
	{
		id: 'bandcamp',
		name: 'Bandcamp',
		link: 'https://atlaseuphoria.bandcamp.com/'
	}
];

const getRoutes = () => {
	let routes = [];
	for (let i = 0; i < APP_PAGES.length; i++) {
		let route = APP_PAGES[i];
		let RouteComponent = route.component;
		routes.push(
			<Route key={route.id} path={`/${route.id}`}>
				<h1>{route.name}</h1>
				<RouteComponent />
			</Route>
		);
	}
	return routes;
}

const Main = () => {
	return (
		<Router>
			<Switch>
				{getRoutes()}
				<Redirect key='default' to="/resume" />
			</Switch>
		</Router>
	);
};

export default hot(Main);
