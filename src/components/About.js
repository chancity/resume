import React from 'react'
import styled from 'styled-components/macro'
import {Section, SectionBlurbs, SectionBox, WrapperContainer} from "./Shared";
import MeUrl from '../assets/img/me.png'
import {ReactComponent as GithubSvg} from "../assets/img/social/github.svg";
import {ReactComponent as LinkedInSvg} from "../assets/img/social/linkedin.svg";
import {ReactComponent as InstagramSvg} from "../assets/img/social/instagram.svg";
import {ReactComponent as FacebookSvg} from "../assets/img/social/facebook.svg";

import {DESKTOP_WIDTH} from "../other/constants";

const Hellos = [
	'Bonjour',
	'Hola',
	'Hello',
	'Nǐn hǎo',
	'Konnichiwa',
	'Olá',
];

const SectionAbout = styled(Section)`
	padding-top: 40px;
    position: relative;
`;

const AboutInfo = styled.div`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #dedede;
    h1{
		font-size: 36px;
	    line-height: 1.1;
	    font-weight: 700;
	    margin-bottom: 5px;
	    margin-top: 0;
	    span {
	    	font-weight: 300;
	    }
	}
	
	h2{
	    font-size: 18px;
	    font-weight: 400;
	    line-height: 1.1;
	    margin-bottom: 0;
	}
`;
const AboutList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
    li {
        margin-bottom: 13px;
        
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
    display: block;
    width: 140px;
    float: left;
    color: #333333;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    
	@media (max-width: ${DESKTOP_WIDTH}px) {
		width: 100%;
		float: none;
		line-height: 1.2;
	}
`;
const AboutListValue = styled.span`
    display: block;
    margin-left: 125px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: ${DESKTOP_WIDTH}px) {
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
    	background-color: #8a00ff;
	    color: #fff;
	    font-size: 14px;
	    font-weight: 700;
	    line-height: 1.1;
	    display: inline-block;
	    padding: 7px 12px;
	    text-transform: uppercase;
	    position: relative;
	    border-radius: .25em;
	      box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.24);
	    :before {
	    	border-left-color: #8a00ff;
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


const SocialsWrapper = styled.div`
	width: 100%;
	background-color: #8a00ff;
  	color: #fff;
    padding: 1em 0;
    border-bottom-right-radius: .25em;
    border-bottom-left-radius: .25em;
    
    svg {
        width: 100%;
    	height: auto;
    }
    
    ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
        display: flex;
        justify-content: center;
        
		li {
		    display: inline-flex;
		    margin: 0 25px 0 0;
		    
		    a {
		        width: 45px;
			    height: 45px;
			    position: relative;
			    color: white;
			    background-color: transparent;
			    transition: transition, background-color 0.25s linear 0s;
			    backface-visibility: hidden;
			    border-radius: 50%;
		        cursor: pointer;
			    text-decoration: none;
			    word-break: break-word;
			    word-wrap: break-word;
		        justify-content: center;
			    display: inline-flex;
			    align-items: center;
			    
			    :hover {
			        text-decoration: none;
		            background-color: #149e83;
				}
		    }
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
						<Image src={MeUrl}/>
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
									JavaScript, C#, Java
								</AboutListValue>
							</li>
						</AboutList>
					</AboutWrapper>
				</SAbout>
				<SocialsWrapper>
					<ul>
						<li>
							<a target="_blank" href={'https://github.com/chancity'}>
								<GithubSvg/>
							</a>
						</li>
						<li>
							<a target="_blank" href={'https://www.linkedin.com/in/chancey-h-99534055/'}>
								<LinkedInSvg/>
							</a>
						</li>
						<li>
							<a target="_blank" href={'https://www.instagram.com/bdmakdad/'}>
								<InstagramSvg/>
							</a>
						</li>
						<li>
							<a target="_blank" href={'https://www.facebook.com/chancey.hawbaker'}>
								<FacebookSvg/>
							</a>
						</li>
					</ul>
				</SocialsWrapper>
			</SectionBox>
			<SectionBlurbs>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget lorem dolor. Morbi non arcu risus quis varius quam. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Libero enim sed faucibus turpis in eu mi bibendum neque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nam libero justo laoreet sit amet cursus sit amet. Nulla facilisi nullam vehicula ipsum. Tortor at risus viverra adipiscing. Dolor sit amet consectetur adipiscing elit. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Sagittis vitae et leo duis ut diam quam.</p>
			</SectionBlurbs>
		</SectionAbout>
	)
};
