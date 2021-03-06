import React from 'react';
import {ReactComponent as SchoolSvg} from "../assets/img/layout/school.svg";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
//import '../timeline.scss'

import {Section, SectionTitle} from "./Shared";



export const Education = () => (
	<Section id={'education'}>
		<SectionTitle>
			Education
		</SectionTitle>
		<VerticalTimeline animate={false} layout={'1-column'}>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="April 2013"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<SchoolSvg />}
			>
				<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
				<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
				<p>
					Strategy, Social Media
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="November 2012"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<SchoolSvg />}
			>
				<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
				<h4 className="vertical-timeline-element-subtitle">Certification</h4>
				<p>
					Creative Direction, User Experience, Visual Design
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="2002 - 2006"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<SchoolSvg />}
			>
				<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
				<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
				<p>
					Creative Direction, Visual Design
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	</Section>
);
