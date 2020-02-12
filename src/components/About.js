import React from 'react'
import styled from 'styled-components/macro'
import {Section, SectionBlurbs, SectionBox, WrapperContainer} from "./Shared";
import MeUrl from '../assets/img/me.png'

import {DESKTOP_WIDTH} from "../other/constants";
import {SocialLinks} from "./layout/SocialLinks";

const Hellos = [
	'Bonjour',
	'Hola',
	'Hello',
	'Nǐn hǎo',
	'Konnichiwa',
	'Olá',
];

const SectionAbout = styled(Section)`
	padding-top: 10px;
    position: relative;
`;

const AboutInfo = styled.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #dedede;
    h1{
		font-size: 150%;
	    line-height: 1.1;
	    font-weight: 400;
	    margin-bottom: 5px;
	    margin-top: 0;
	    span {
	    	font-weight: 300;
	    }
	}
	
	h2{
	    font-size: 105%;
    	font-weight: 300;
	    line-height: 1.1;
	    margin-bottom: 0;
	}
`;
const AboutList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
    li {
        margin-bottom: 18px;
        white-space: nowrap;
        display: flex;
        align-content: center;
        @media (max-width: ${DESKTOP_WIDTH}px) {
			display: inherit;
			 margin-bottom: 15px;
		}
	
    	:before, :after {
            content: " ";
    		display: table;
    	}
    	
    	a {
    		:hover {
    			text-decoration: underline;
    		}
    	}
    }
`;
const AboutListTitle = styled.strong`
    display: inline-block;
    width: 140px;
    float: left;
    color: #333333;
    font-size: small;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    
	@media (max-width: ${DESKTOP_WIDTH}px) {
		display: block;
		width: 100%;
		float: none;
		line-height: 1.2;
	}
`;
const AboutListValue = styled.span`
    display: inline-block;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: ${DESKTOP_WIDTH}px) {
    	display: block;
		width: 100%;
		float: none;
		line-height: 1.2;
	    margin-left: 0;
    	margin-bottom: 15px;
	}
`;
const SAbout = styled.div`
	padding: 50px 50px 15px 50px;
	display: flex;
	justify-content: space-evenly;
	
	 @media (max-width: ${DESKTOP_WIDTH}px) {
	 	padding: 30px 20px 15px 20px;
	 	flex-direction: column;
	 }
`;

const ImageWrapper = styled.div`
    margin-bottom: 30px;
    overflow: hidden;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    align-self: center;
    box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.24);
`;

const Image = styled.img`
	transition: all .15s ease-in-out;
	width: 200px;
    height: 200px;
	:hover {
		transform: scale(1.05);
	}
`;
const AboutWrapper = styled(WrapperContainer)`
	flex-direction: column;
	align-items: unset;
	justify-content: unset;	
`;
const AboutPreWord = styled.div`
    margin-bottom: 28px;
    span {
    	background-color: #43126d;
	    color: #fff;
        font-size: 90%;
	    font-weight: 700;
	    line-height: 1.1;
	    display: inline-block;
	    padding: 7px 12px;
	    text-transform: uppercase;
	    position: relative;
	    border-radius: .25em;
      	box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.24);
	    :before {
	    	border-left-color: #43126d;
			content: '';
		    width: 0;
		    height: 0;
		    top: 100%;
		    left: 5px;
		    display: block;
		    position: absolute;
		    border-style: solid;
		    border-width: 0 0 8px 8px;
	    }
    }
`;



export const About = () => {
	const helloIndex = Math.floor(Math.random() * Hellos.length);
	return (
		<SectionAbout id={'about'}>
			<SectionBox>
				<SAbout>
					<ImageWrapper>
						<Image src={MeUrl} alt={'Me'}/>
					</ImageWrapper>

					<AboutWrapper>
						<AboutPreWord>
							<span>{Hellos[helloIndex]}</span>
						</AboutPreWord>
						<AboutInfo>
							<h1>
								<span>I'm</span> Chancey Hawbaker
							</h1>
							<h2>
								Full Stack Developer & Entrepreneur
							</h2>
						</AboutInfo>
						<AboutList>
							<li>
								<AboutListTitle>
									location
								</AboutListTitle>
								<AboutListValue>
									San Diego, California
								</AboutListValue>
							</li>
							<li>
								<AboutListTitle>
									email
								</AboutListTitle>
								<AboutListValue>
									<a href="mailto:chanceyhawbaker@gmail.com">
										chanceyhawbaker@gmail.com
									</a>
								</AboutListValue>
							</li>
							<li>
								<AboutListTitle>
									phone
								</AboutListTitle>
								<AboutListValue>
									<a href="tel:+14066621520">
										+1 (406) 662 1520
									</a>
								</AboutListValue>
							</li>
							<li>
								<AboutListTitle>
									languages
								</AboutListTitle>
								<AboutListValue>
									React.js, C#, JavaScript, Java
								</AboutListValue>
							</li>
						</AboutList>
					</AboutWrapper>
				</SAbout>
				<SocialLinks/>
			</SectionBox>
			<SectionBlurbs>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget lorem dolor. Morbi non arcu risus quis varius quam. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Libero enim sed faucibus turpis in eu mi bibendum neque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nam libero justo laoreet sit amet cursus sit amet. Nulla facilisi nullam vehicula ipsum. Tortor at risus viverra adipiscing. Dolor sit amet consectetur adipiscing elit. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Sagittis vitae et leo duis ut diam quam.</p>
			</SectionBlurbs>
		</SectionAbout>
	)
};
