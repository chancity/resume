import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from "react-router-dom";
import {unregister}  from './registerServiceWorker';
//import registerServiceWorker from "./registerServiceWorker";
import history from './other/history'
//import ReactGA from 'react-ga';
import './index.scss'

//if(navigator.userAgent !== "ReactSnap") {
//	ReactGA.initialize('UA-148369349-1');
//	ReactGA.pageview(window.location.pathname);
//	history.listen(location => {
//		ReactGA.set({ page: location.pathname });
//		ReactGA.pageview(location.pathname);
//	});
//}

const AppWithRouter = (
	<Router history={history}>
		<App />
	</Router>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	ReactDOM.hydrate(AppWithRouter, rootElement);
} else {
	ReactDOM.render(AppWithRouter, rootElement);
}

//registerServiceWorker();
unregister();
