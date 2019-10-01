import styled from 'styled-components/macro'
import {Section} from "../Shared";

export const Body = styled.div`
	display: flex;
	flex-direction: column;
    width: 100%;
    max-width: 1024px;
    padding-left: 10px;
    padding-right: 10px;
    padding: 0;
    margin: 0 auto;
    
    ${Section}:last-child{
    	padding-bottom: 70px;
    }
`;


