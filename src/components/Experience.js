import React from 'react';
import {ReactComponent as WorkSvg} from "../assets/img/layout/work.svg";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import '../timeline.scss'

import {Section, SectionTitle} from "./Shared";



export const Experience = () => (
	<Section id={'experience'}>
		<SectionTitle>
			Experience
		</SectionTitle>
		<VerticalTimeline animate={false} layout={'1-column'}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2011 - present"
				iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
				icon={<WorkSvg/>}
			>
				<h3 className="vertical-timeline-element-title">Creative Director</h3>
				<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
				<p>
					Creative Direction, User Experience, Visual Design, Project Management, Team Leading
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2010 - 2011"
				iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
				icon={<WorkSvg/>}
			>
				<h3 className="vertical-timeline-element-title">Art Director</h3>
				<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
				<p>
					Creative Direction, User Experience, Visual Design, SEO, Online Marketing
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2008 - 2010"
				iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
				icon={<WorkSvg/>}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2006 - 2008"
				iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
				icon={<WorkSvg/>}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
				<p>
					User Experience, Visual Design
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	</Section>
);
