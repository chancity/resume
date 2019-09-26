import React from 'react';
import {Route, Switch} from "react-router-dom";
import Helmet from "react-helmet";
import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import {Layout} from "./components/layout/Layout";

//import loadable from "@loadable/component";
//import {PrerenderedComponent} from "react-prerendered-component";
import Home from "./views/Home";


//const prerenderedLoadable = dynamicImport => {
//	const LoadableComponent = loadable(dynamicImport);
//	return React.memo(props => (
//		<PrerenderedComponent live={LoadableComponent.load()}>
//			<LoadableComponent {...props} />
//		</PrerenderedComponent>
//	));
//};
//
//const Home = prerenderedLoadable(() => import("./views/Home"));


const title = "Chancey Hawbaker Online Resume";

const routes = [
	{
		title: "Chancey Hawbaker Online Resume",
		path: "/",
		component: Home,
		exact: true
	}
];

export const App = () => (
	<Layout>
		<Helmet titleTemplate={`%s - ${title}`}/>
		<Header/>

			<Switch>
				{routes.map((route, i) => (
					<Route key={i} {...route} />
				))}
				<Route
					key={"/shell.html"}
					path="/shell.html"
					component={() => null}
				/>
			</Switch>
		<Footer/>
	</Layout>
);

export default App;

