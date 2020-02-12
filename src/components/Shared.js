import styled from 'styled-components/macro'

export const WrapperContainer = styled.div`
	display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const StartWrapper = styled.div`
	display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const EndWrapper = styled.div`
	display: flex;
    align-items: center;
    justify-content: flex-end;
`;


export const Container = styled.div`

`;


export const Section = styled.section`
	padding-top: 70px;
	width: 100%;
`;

export const SectionBox = styled.div`
	background-color: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
	width: 100%;
	border-radius: .25em;
	background-color: #ffffff;
    box-shadow: inset rgba(0, 0, 0, 0.12) 0px 1px 6px, inset rgba(0, 0, 0, 0.24) 0px 1px 4px;
}`;

export const SectionBlurbs = styled.div`
    font-weight: 300;
    line-height: 1.8;
    text-align: left;
    margin-top: 30px;
	padding-left: 5%;
	padding-right: 5%;
    
    p {
    	margin: 0 0 25px 0;
	}
	
	*:last-child {
    	margin-bottom: 0;
	}
`;

export const SectionTitle = styled.h2`
    font-size: 150%;
    font-weight: 400;
    margin-bottom: 25px;
    line-height: 1.2;
    text-align: center;
`;
