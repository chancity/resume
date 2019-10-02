import styled from "styled-components/macro";
import {ReactComponent as GithubSvg} from "../../assets/img/social/github.svg";
import {ReactComponent as LinkedInSvg} from "../../assets/img/social/linkedin.svg";
import {ReactComponent as InstagramSvg} from "../../assets/img/social/instagram.svg";
import {ReactComponent as FacebookSvg} from "../../assets/img/social/facebook.svg";
import React from "react";

export const SocialsWrapper = styled.div`
	width: 100%;
	background-color: #8a00ff;
  	color: #fff;
    padding: .5em 0;
    border-bottom-right-radius: .25em;
    border-bottom-left-radius: .25em;
    
    svg {
	    width: 100%;
	    height: 35px;
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
		        width: 35px;
			    height: 35px;
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
	    li:last-of-type{
	    	margin: 0;
	    }
	}
    
`;


export const SocialLinks = () => (
	<SocialsWrapper>
		<ul>
			<li>
				<a target="_blank" href={'https://github.com/chancity'} rel="noopener noreferrer" >
					<GithubSvg/>
				</a>
			</li>
			<li>
				<a target="_blank" href={'https://www.linkedin.com/in/chancey-h-99534055/'} rel="noopener noreferrer" >
					<LinkedInSvg/>
				</a>
			</li>
			<li>
				<a target="_blank" href={'https://www.instagram.com/bdmakdad/'} rel="noopener noreferrer" >
					<InstagramSvg/>
				</a>
			</li>
			<li>
				<a target="_blank" href={'https://www.facebook.com/chancey.hawbaker'} rel="noopener noreferrer" >
					<FacebookSvg/>
				</a>
			</li>
		</ul>
	</SocialsWrapper>
);
