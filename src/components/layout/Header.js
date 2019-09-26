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
`;

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
