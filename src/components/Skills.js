import React from 'react'
import styled from 'styled-components/macro'
import {Section, SectionBox, SectionTitle} from "./Shared";

const SkillsSectionBox = styled(SectionBox)`
    padding: 20px;
`;

const SkillsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const ProgressBarWrapper = styled.div`
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    flex: auto;
`;
const SProgressBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;
const BarTitle = styled.span`
	display: block;
    margin-bottom: 5px;
`;

const BarData = styled.span`
	font-size: 16px;
    position: absolute;
    right: 0;
    top: 0;
    display: block;
`;

const BarInfo = styled.div`
    font-size: 14px;
    line-height: 1.1;
    padding-right: 40px;
`;

const BarFill = styled.span`
    width: 0;
    height: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 5px;
    transition: width 400ms ease-out 100ms;
      background-color: #8a00ff;
`;

const BarLine = styled.div`
    height: 5px;
    position: relative;
    :after {
        content: '';
	    opacity: 0.2;
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 0;
	    border-radius: 5px;
	    background-color: #8a00ff;
    }
`;

const ProgressBar = ({title, percentage}) => {
	const percentageString = `${percentage}%`;
	return (
		<ProgressBarWrapper>
			<SProgressBar>
				<BarInfo>
					<BarTitle>
						{title}
					</BarTitle>
					<BarData>
						{percentageString}
					</BarData>
				</BarInfo>
				<BarLine>
					<BarFill style={{width: percentageString}}/>
				</BarLine>
			</SProgressBar>
		</ProgressBarWrapper>
	)
};

export const Skills = () => {
	return (
		<Section id={'skills'}>
			<SectionTitle>
				Professional Skills
			</SectionTitle>
			<SkillsSectionBox>
				<SkillsWrapper>
					<ProgressBar title={'Mobile Design / User Experience / Usability'} percentage={85}/>
					<ProgressBar title={'Mobile Design / User Experience / Usability'} percentage={85}/>
					<ProgressBar title={'Mobile Design / User Experience / Usability'} percentage={85}/>
					<ProgressBar title={'Mobile Design / User Experience / Usability'} percentage={85}/>
					<ProgressBar title={'Mobile Design / User Experience / Usability'} percentage={85}/>
					<ProgressBar title={'Mobile Design / User Experience / Usability'} percentage={85}/>
				</SkillsWrapper>
			</SkillsSectionBox>
		</Section>
	)
};
