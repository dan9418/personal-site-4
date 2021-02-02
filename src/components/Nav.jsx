import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Art from "./pages/Art/Art";
import Software from "./pages/Software/Software";
import Home from './pages/Home/Home';
import Music from "./pages/Music/Music";
import Resume from "./pages/Resume/Resume";
import ICON from "./ui/Icon";
import IconLabel from './ui/IconLabel/IconLabel';
import { Desktop, useIsMobile } from '../hooks/useWindowSize';
import styled from 'styled-components';

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

const StyledDesktopNav = styled.nav`
    padding: 32px 24px;
	max-width: ${({ $isFullWidth }) => $isFullWidth ? '100%' : '256px'};
	height: 100%;
	overflow-y: auto;

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.intro img {
		width: 100%;
		max-height: 128px;
		max-width: 128px;
		border-radius: 50%;
		margin: 0 0 16px 0;
		box-shadow: 0 0 4px rgba(0, 0, 0, .2);
	}

	.intro label {
		font-weight: bold;
		font-size: 120%;
	}

	.intro .caption {
		font-style: italic;
		color: #555;
		margin: 8px 0;
	}

	.intro .icon-label {
		margin-bottom: 16px;
	}

	.menu-list ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.menu-list li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.menu-list a {
		box-sizing: border-box;
		padding: 8px;
		border-radius: 8px;
		margin: 8px 0;
		background-color: rgba(0, 0, 0, .05);
		width: 100%;
		display: block;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: #555;
	}

	.menu-list a:hover {
		color: #2292A4;
		background-color: rgba(0, 0, 0, .1);
	}

	.menu-list a:hover svg, nav .menu-list a:hover svg * {
		fill: #2292A4;
	}

	.menu-list a svg {
		height: 24px;
		width: 24px;
		margin-right: 8px;
	}

	.menu-list a svg, nav .menu-list a svg * {
		fill: #555;
		color: #555;
	}

	.menu-list a.active {
		color: white;
		background-color: #2292A4;
	}

	.menu-list a.active:not(:hover) {
		color: white;
	}

	.menu-list a.active svg, nav .menu-list a.active svg * {
		fill: white;
	}

	.menu-list a {
		font-weight: bold;
		text-decoration: none;
	}

	.menu-list .list-header {
		width: 100%;
		font-weight: bold;
		font-size: 80%;
		color: #555;
		margin-top: 32px;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.menu-list .list-header svg, nav .menu-list .list-header svg * {
		fill: #555;
	}
`;

const DesktopNav = ({ isFullWidth }) => {
	return (
		<StyledDesktopNav $isFullWidth={isFullWidth}>
			<Desktop>
				<section className="intro">
					<img src='/assets/img/me.jpg' />
					<label>Dan Bednarczyk</label>
					<div className="caption">Engineer • Artist • Advocate</div>
					<IconLabel text="Sacramento, CA" id="location" />
				</section>
			</Desktop>
			<MenuList
				header="PAGES"
				linkData={NAV_LINKS}
				isNavLink
			/>
			<MenuList
				header="LINKS"
				linkData={EXTERNAL_LINKS}
			/>
		</StyledDesktopNav>
	);
};

const StyledMobileNav = styled.nav`
	width: 100%;
	height: 64px;
	padding: 8px 16px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #555;
	color: white;

	svg {
		height: 32px;
		width: 32px;
	}

	svg, svg * {
		fill: white;
	}

	> button {
		appearance: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

const StyledModal = styled.div`
	position: fixed;
	top: 64px;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	background-color: #eee;
`;

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<StyledMobileNav>
				<h1>Dan Bednarczyk</h1>
				<button type="button" onClick={() => setIsOpen(!isOpen)}>{isOpen ? ICON.close : ICON.menu}</button>
			</StyledMobileNav>
			{isOpen && (
				<StyledModal>
					<DesktopNav isFullWidth />
				</StyledModal>
			)}
		</>
	);
};

const Nav = () => {
	const isMobile = useIsMobile();
	return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Nav;
