import React from 'react';
import styled from 'styled-components';

import Button from './Button.component';

import { boxShadow } from '../../styles/mixins';
import { colors } from '../../styles/vars';

const Flash = () => (
    <StyledFlash>
        <Button isPlain backColor={colors.blue} />
    </StyledFlash>
);

/*
    Flash Styles
*/
const StyledFlash = styled.div`
    border-radius: 50%;
    padding: 30px;
    display: inline-block;
    ${boxShadow(5)}
    position: relative;

    &:after {
        content: '';
        left: 0px;
        right: 0;
        bottom: 0;
        top: 0;
        background: transparent;
        display: block;
        position: absolute;
        border-radius: 50%;
        border: 10px solid;
        border-color: transparent ${colors.blue} ${colors.blue} transparent;
        transform: rotateZ(45deg);
    }
`;

export default Flash;
