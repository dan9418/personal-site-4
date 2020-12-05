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
		id: 'home',
		name: 'Home',
		component: Resume
	},
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

const getPageLinks = () => {
	let pageLinks = [];
	for (let i = 0; i < APP_PAGES.length; i++) {
		let page = APP_PAGES[i];
		let path = `/${page.id}`;
		pageLinks.push(
			<li>
				<Link key={page.id} to={path}>
					{page.name}
				</Link>
			</li>
		);
	}
	return pageLinks;
}

const getExternalLinks = () => {
	let externalLinks = [];
	for (let i = 0; i < APP_LINKS.length; i++) {
		let link = APP_LINKS[i];
		externalLinks.push(
			<li>
				<a href={link.href}>
					{link.name}
				</a>
			</li>
		);
	}
	return externalLinks;
}

const Main = () => {
	return (
		<Router>
			<nav>
				<section>
					<img src='/assets/me.jpg' />
					<label>Dan Bednarczyk</label>
					<div className="caption">Engineer ‧ Artist ‧ Activist</div>
					<div className="location-wrapper">Sacramento, CA</div>
				</section>
				<section>
					<ul>
						{getPageLinks()}
					</ul>
				</section>
				<div className="list-header">LINKS</div>
				<section>
					<ul>
						{getExternalLinks()}
					</ul>
				</section>
			</nav>
			<main>
				<Switch>
					{getRoutes()}
					<Redirect key='default' to="/resume" />
				</Switch>
			</main>
		</Router>
	);
};

export default hot(Main);
