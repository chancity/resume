import React from 'react'
import Seo from "../components/Seo";
import {About} from "../components/About";
import {Body} from "../components/layout/Body";


export default () => (
	<Body>
		<Seo
			title="Home"
			titleDescription="Chancey Hawbaker Online Resume"
			description="Some Super cool meta description"
			path="/"
			image="index"
		/>
		<About/>
	</Body>
);
