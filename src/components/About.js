import React from 'react'
import styled from 'styled-components/macro'
import {Section, SectionBox, WrapperContainer} from "./Shared";
import MeUrl from '../assets/img/me.png'
import {ReactComponent as GithubSvg} from "../assets/img/social/github.svg";
import {ReactComponent as LinkedInSvg} from "../assets/img/social/linkedin.svg";

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
`;
const AboutListValue = styled.span`
    display: block;
    margin-left: 125px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;
const SAbout = styled.div`
	padding: 57px 50px 15px 50px;
	display: flex;
`;
const Image = styled.img`
    position: relative;
    float: left;
    margin-right: 10%;
    height: 285px;
    min-height: 285px;
    width: 160px;
    min-width: 160px;
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
    padding: 15px 0;
    border-bottom-right-radius: .25em;
    border-bottom-left-radius: .25em;
    
    ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	    text-align: center;
	    
	    li {
	    	display: inline-block;
            margin: 0 15px 0 0;
   			
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
    				background-color: rgba(0, 0, 0, 0.3);
				}


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
					<Image src={MeUrl}/>
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
									chanceyhawbaker@gmail.com
								</AboutListValue>
							</li>
							<li>
								<AboutListTitle>
									phone
								</AboutListTitle>
								<AboutListValue>
									+1 (406) 662 1520
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
					</ul>
				</SocialsWrapper>
			</SectionBox>
		</SectionAbout>
	)
};