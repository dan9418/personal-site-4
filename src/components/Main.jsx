import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import './Main.css';
import Art from "./pages/Art/Art";
import Software from "./pages/Software/Software";
import Home from './pages/Home/Home';
import Music from "./pages/Music/Music";
import Resume from "./pages/Resume/Resume";
import PageHeader from './ui/Headers/PageHeader';

const APP_PAGES = [
	{
		id: 'home',
		name: 'Home',
		component: Home
	},
	{
		id: 'resume',
		name: 'Resume',
		component: Resume
	},
	{
		id: 'software',
		name: 'Software',
		component: Software
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

const getRoutes = () => {
	let routes = [];
	for (let i = 0; i < APP_PAGES.length; i++) {
		let route = APP_PAGES[i];
		let RouteComponent = route.component;
		routes.push(
			<Route key={route.id} path={`/${route.id}`}>
				<PageHeader text={route.name} />
				<div className={route.id}>
					<RouteComponent />
				</div>
			</Route>
		);
	}
	return routes;
}

const Main = () => {
	return (
		<main>
			<div />
			<Switch>
				{getRoutes()}
				<Redirect key='default' to="/home" />
			</Switch>
		</main>
	);
};

export default Main;
