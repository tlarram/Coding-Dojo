import React from 'react';
import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
`;
 
export default StyledBox;