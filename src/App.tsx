import React, { Component, Suspense } from 'react';
import { Routing, PrivateRouting } from "./utils/Routing";
import { Switch, Redirect } from 'react-router';
import "./styles/main.scss";
import './App.css';
import Registration from './components/product/product';

import { APP_ROUTES } from "./models/RoutingPaths";

class App extends Component {


	render() {
		return (
			<div className="App">
				<Registration />
			</div>

		);
	}
}


export default App;
