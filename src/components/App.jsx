import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import Main from './Main';
import Nav from './Nav';

const StyledApp = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 100%;
	
	@media(min-width: 720px) {
		grid-template-columns: 25% auto;
		grid-template-rows: unset;
	}

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
	right: 0;
`;

const App = () => {
	return (
		<BrowserRouter>
			<StyledApp>
				<Nav />
				<Main />
			</StyledApp>
		</BrowserRouter>
	);
};

export default hot(App);
