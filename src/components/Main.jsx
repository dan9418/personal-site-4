import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import {
	BrowserRouter as Router, Link, Redirect, Route, Switch
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
		href: 'https://www.linkedin.com/in/danielbednarczyk/'
	},
	{
		id: 'github',
		name: 'GitHub',
		href: 'https://github.com/dan9418/'
	},
	{
		id: 'bandcamp',
		name: 'Bandcamp',
		href: 'https://atlaseuphoria.bandcamp.com/'
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

function getPageLinks() {
	let pageLinks = [];
	for (let i = 0; i < APP_PAGES.length; i++) {
		let page = APP_PAGES[i];
		let path = `/${page.id}`;
		pageLinks.push(
			<Link key={page.id} to={path}>
				{page.name}
			</Link>
		);
	}
	return pageLinks;
}

function getExternalLinks() {
	let externalLinks = [];
	for (let i = 0; i < APP_LINKS.length; i++) {
		let link = APP_LINKS[i];
		externalLinks.push(
			<a href={link.href}>
				{link.name}
			</a>
		);
	}
	return externalLinks;
}

const Main = () => {
	return (
		<Router>
			<nav>
				{getPageLinks()}
				{getExternalLinks()}
			</nav>
			<Switch>
				{getRoutes()}
				<Redirect key='default' to="/resume" />
			</Switch>
		</Router>
	);
};

export default hot(Main);
