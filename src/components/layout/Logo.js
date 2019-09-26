import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components/macro'

const SLogo = styled.a`
	display: flex;
	flex-direction: row;
	width: 100%;
    align-items: center;
`;

const SImageContainer = styled.div`
	width: 50px;
	height: auto;
	min-width: 50px;
	min-height: 50px;
	border: none;
	overflow: hidden;
`;

const SImage = styled(LazyLoadImage)`
	width: 50px;
	height: auto;
	min-width: 30px;
	min-height: 50px;
	border: none;
`;

const SName = styled.span`
	font-weight: 800;
	margin-left: 12px;
`;

export const Logo = () => (
	<SLogo>
		<SImageContainer>
			<SImage/>
		</SImageContainer>
		<SName>
			Chancey Hawbaker
		</SName>
	</SLogo>
);
