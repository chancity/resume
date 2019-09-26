import React from 'react'
import styled from 'styled-components/macro'

const SBody = styled.div`
	width: 100%;
`;

export const Body = ({children})  => (
	<SBody>
		{children}
	</SBody>
);
