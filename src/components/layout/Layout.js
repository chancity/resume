import React from 'react'
import styled from 'styled-components/macro'

const SLayout = styled.div`
	width: 100%;
`;

export const Layout = ({children}) => (
	<SLayout>
		{children}
	</SLayout>
);
