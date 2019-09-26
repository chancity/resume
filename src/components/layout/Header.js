import React from 'react'
import styled from 'styled-components/macro'
import {EndWrapper, StartWrapper, WrapperContainer} from "../Shared";
import {Logo} from "./Logo";
import {NavMenu} from "./NavMenu";

const SHeader = styled.header`
	display: flex;
	position: relative;
	justify-content: center;
	width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;    
`;
const SHeaderInner = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 10px 15px;
    z-index: 1;
    color: white;
`;

//const SHeaderBg = styled.div`
//    top: 0;
//    left: 0;
//    right: 0;
//    z-index: 0;
//    position: absolute;
//    background-size: cover;
//    background-color: #242832;
//    background-repeat: no-repeat;
//    background-position: center;
//    height: 515px;
//    display: block;
//    background-image: url('https://wallpaperbro.com/img/29030.png');
//`;
//const SHeaderBg2 = styled.div`
//    top: 0;
//    left: 0;
//    right: 0;
//    z-index: 0;
//    position: absolute;
//    background-size: cover;
//    background-color: rgba(0,0,0,.9);
//    background-repeat: no-repeat;
//    background-position: center;
//    height: 515px;
//    display: block;
//`;

export const Header = () => (
	<SHeader>
		<SHeaderInner>
			<WrapperContainer>
				<StartWrapper>
					<Logo/>
				</StartWrapper>
				<EndWrapper>
					<NavMenu/>
				</EndWrapper>
			</WrapperContainer>
		</SHeaderInner>
	</SHeader>
);
