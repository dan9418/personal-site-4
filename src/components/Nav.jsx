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

const NAV_LINKS = [
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

const EXTERNAL_LINKS = [
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

const getLinks = (linkDefs, isNavLink = false) => {
	let links = [];
	for (let i = 0; i < linkDefs.length; i++) {
		let link = linkDefs[i];
		let linkComponent = null;
		if (isNavLink) {
			let path = `/${link.id}`;
			linkComponent = (
				<NavLink to={path} activeClassName="active">
					{ICON[link.id]}
					{link.name}
				</NavLink>
			);
		}
		else {
			linkComponent = (
				<a href={link.href} target='_blank' rel='noopener noreferrer'>
					{ICON[link.id]}
					{link.name}
				</a>
			);
		}
		links.push(
			<li key={link.id}>
				{linkComponent}
			</li>
		);
	}
	return links;
}

const MenuList = ({ header, linkData, isNavLink }) => {
	return (
		<section className="menu-list">
			<div className="list-header">{header}{isNavLink ? null : ICON.newTab}</div>
			<ul>
				{getLinks(linkData, isNavLink)}
			</ul>
		</section>
	);
};

const Nav = () => {
	return (
		<nav>
			<section className="intro">
				<img src='/assets/img/me.jpg' />
				<label>Dan Bednarczyk</label>
				<div className="caption">Engineer • Artist • Advocate</div>
				<IconLabel text="Sacramento, CA" id="location" />
			</section>
			<MenuList
				header="PAGES"
				linkData={NAV_LINKS}
				isNavLink
			/>
			<MenuList
				header="LINKS"
				linkData={EXTERNAL_LINKS}
			/>
		</nav>
	);
};

export default Nav;
