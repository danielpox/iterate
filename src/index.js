import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ItemReducer from './reducers/Item';
import Application from './containers/Application';
import './css/global.css';

let items = JSON.parse(localStorage.getItem("Synse.Iterate.ItemList")) || [];

const store = createStore(
	ItemReducer,
	{
		items: items,
		appMeta: {
			name: "Iterate",
			version: "0.2.6",
			author: "Daniel Hallgren",
			company: "Synse",
			releaseDate: "2017-04-24"
		}
	},
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById("root")
);