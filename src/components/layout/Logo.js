import React from 'react'
import styled from 'styled-components/macro'
import logo from '../../assets/img/logo.png'

const SLogo = styled.a`
	display: flex;
	flex-direction: row;
	width: 100%;
    align-items: center;
`;

const SImageContainer = styled.div`
	width: 50px;
	height: 50px;
	min-width: 50px;
	min-height: 50px;
	border: none;
	overflow: hidden;
`;

const SImage = styled.img`
	width: 50px;
	height: 50px;
	min-width: 50px;
	min-height: 50px;
	border: none;
`;

const SName = styled.span`
	font-weight: 700;
	letter-spacing: 1px;
	margin-left: 12px;
	font-size: 24px;
`;

export const Logo = () => (
	<SLogo>
		{/*<SImageContainer>
			<SImage src={logo} alt={'logo'}/>
		</SImageContainer>*/}
		<SName>
			Chancey Hawbaker
		</SName>
	</SLogo>
);
