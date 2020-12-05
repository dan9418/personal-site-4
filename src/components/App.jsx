import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import { BrowserRouter } from "react-router-dom";


const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Main />
		</BrowserRouter>
	);
};

export default hot(App);
