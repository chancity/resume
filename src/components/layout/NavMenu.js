import React from 'react'
import styled from 'styled-components/macro'
import {DESKTOP_WIDTH} from "../../other/constants";

export const SIconBar = styled.div`
	display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background: #000;
`;

export const SHamburger = styled.button`
    position: relative;
    float: right;
    padding: 9px 10px;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    :focus {
        outline: none;
    }
    :hover {
      background: rgba(0,0,0,.1);
    }
    ${SIconBar}+${SIconBar}{
    	margin-top: 4px;
    }
    
    @media (min-width: ${DESKTOP_WIDTH}px) {
    	display: none;
	}
`;


const SNavMenu = styled.nav`
    width: 100%;
    display:none;
    
    @media (max-width: ${DESKTOP_WIDTH}px) {
        z-index: 99999;
        ${props => props.navActive && `
           display:block;
        `};
        position: absolute;
        width: calc(100% - 30px);
        top: 70px;
    }
    
    @media (min-width: ${DESKTOP_WIDTH}px) {
        display: block;
        height: auto;
        padding-bottom: 0;
        overflow: visible;
    }

`;

export const NavUl = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    @media (max-width: ${DESKTOP_WIDTH}px) {
        :before{
	        content: "";
		    position: absolute;
		    top: -9px;
		    right: 13px;
		    width: 0;
		    height: 0;
		    border-color: transparent transparent #fff;
		    border-style: solid;
		    border-width: 0 8px 10px;
		    -webkit-filter: drop-shadow(0 -1px 0 #e4eaec);
		    filter: drop-shadow(0 -1px 0 #e4eaec);
        }
	}
	@media (max-width: ${DESKTOP_WIDTH}px) {
        animation-name: dropdown;
        animation-duration: .2s;
        width: 100%;
	    background: #fff;
	    border-radius: 3px;
	    margin: 0;
	   	box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.24);
	    flex-direction: column;
	    text-align: left;
	    transform-origin: top right;
	}
    @media (min-width: ${DESKTOP_WIDTH}px) {
        flex-direction: row;
	}
`;
export const NavLi = styled.li`
	padding: 0 10px;
    position: relative;
    display: flex;
    height: 25px;
    border-bottom: 1px solid #f7f7f7;
    
    a {
    	width:	100%;
        @media (min-width: ${DESKTOP_WIDTH}px) {
	        :after{
			    content: "";
				transition: all ease .25s;
			    height: 9px;
			    display: block;
		        border-bottom: 2px solid #8a00ff;
				width: 0;
			}	
		}

		
		:hover {
			:after{
			    width: 100%;
			}
		}	
	}
    @media (max-width: ${DESKTOP_WIDTH}px) {
	    width: 100%;
	    padding: 13px 25px;
	    height: auto;
	}
    @media (min-width: ${DESKTOP_WIDTH}px) {
       a {
       		color: #000;
            :hover, :focus {
              opacity: .75;
            }
       }
	}
`;

export const NavMenu = () => {
	const [navOpen, setNavOpen] = React.useState(false);
	const openNav = () =>{
		setNavOpen(!navOpen);
	};

	return (
		<>
			<SHamburger onClick={openNav} id={"NavigationButton"} aria-label="Navigation Button">
				<SIconBar/>
				<SIconBar/>
				<SIconBar/>
			</SHamburger>
			<SNavMenu navActive={navOpen}>
				<NavUl onClick={openNav}>
					<NavLi>
						<a href={'#about'}>
							About
						</a>
					</NavLi>
					<NavLi>
						<a href={'#skills'}>
							Skills
						</a>
					</NavLi>
					<NavLi>
						<a href={'#experience'}>
							Experience
						</a>
					</NavLi>
					<NavLi>
						<a href={'#education'}>
							Education
						</a>
					</NavLi>
					<NavLi>
						<a href={'#interests'}>
							Interests
						</a>
					</NavLi>
					<NavLi>
						<a href={'#calendar'}>
							Calendar
						</a>
					</NavLi>
					<NavLi>
						<a href={'#contact'}>
							Contact
						</a>
					</NavLi>
				</NavUl>
			</SNavMenu>
		</>
	)
};
