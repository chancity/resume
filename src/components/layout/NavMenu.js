import React from 'react'
import styled from 'styled-components/macro'

const SNavMenu = styled.nav`
	width: 100%;

`;

const NavUl = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	margin: 0;
`;
const NavLi = styled.li`
	display: flex;
	a {
		padding: 12px;
		:after{
		  	content: "";
			transition: all ease .25s;
		    height: 9px;
		    display: block;
	       	border-bottom: 2px solid #8a00ff;
			width: 0;
		}	
		
		:hover {
			:after{
			    width: 100%;
			}
		}	
	}
`;

export const NavMenu = () => (
	<SNavMenu>
		<NavUl>
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
);
