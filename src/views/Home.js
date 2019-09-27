import React from 'react'
import Seo from "../components/Seo";
import {About} from "../components/About";
import {Body} from "../components/layout/Body";
import {Skills} from "../components/Skills";
import {Experience} from "../components/Experience";


export default () => (
	<Body>
		<Seo
			title="Home"
			titleDescription="Chancey Hawbaker's Resume"
			description="Some Super cool meta description"
			path="/"
			image="index"
		/>
		<About/>
		<Skills/>
		<Experience/>
	</Body>
);
