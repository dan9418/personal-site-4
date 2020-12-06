import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';
import Art from "./pages/Art/Art";
import Software from "./pages/Software/Software";
import Home from './pages/Home/Home';
import Music from "./pages/Music/Music";
import Resume from "./pages/Resume/Resume";
import ICON from "./ui/Icon";
import IconLabel from './ui/IconLabel/IconLabel';

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

const getPageLinks = () => {
	let pageLinks = [];
	for (let i = 0; i < APP_PAGES.length; i++) {
		let page = APP_PAGES[i];
		let path = `/${page.id}`;
		pageLinks.push(
			<li>
				<NavLink key={page.id} to={path} activeClassName="active">
					{ICON[page.id]}
					{page.name}
				</NavLink>
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
				<a href={link.href} target='_blank' rel='noopener noreferrer'>
					{ICON[link.id]}
					{link.name}
				</a>
			</li>
		);
	}
	return externalLinks;
}

const Nav = () => {
	return (
		<nav>
			<section>
				<img src='/assets/img/me.jpg' />
				<label>Dan Bednarczyk</label>
				<div className="caption">Engineer • Artist • Advocate</div>
				<IconLabel text="Sacramento, CA" id="location" />
			</section>
			<div className="list-header">PAGES</div>
			<section>
				<ul>
					{getPageLinks()}
				</ul>
			</section>
			<div className="list-header">LINKS{ICON.newtab}</div>
			<section>
				<ul>
					{getExternalLinks()}
				</ul>
			</section>
		</nav>
	);
};

export default Nav;
