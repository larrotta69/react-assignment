import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/vars';
import { boxShadow } from '../../styles/mixins';


const Button = props => (
    <StyledButton {...props}>
        <button className="pokeButton" type="button">
            {props.copy}
        </button>
    </StyledButton>
);

/*
    Button Styles
*/
const StyledButton = styled.div`
    .pokeButton {
        width: 50px;
        height: 50px;
        left: 0;
        top: 0;
        border-radius: 50px;
        position: relative;
        cursor: pointer;
        transition: all 250ms ease;
        ${props => (!props.isPlain && boxShadow(8))};
        border: ${props => (props.isPlain ? '4px solid' : 'none')};
        background: ${props => props.backColor || colors.gray};

        &:hover {
            left: ${props => (props.isPlain && '0' : '8px')};
            top: ${props => (props.isPlain && '0' : '8px')};
            ${props => (props.isPlain && boxShadow(0))};

        }

        &:before {
            content: '';
            position: absolute;
            background: white;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            left: 20%;
            top: 20%;
        }

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 5px 5px 0 0 black;
            opacity: 0.2;
            bottom: 10%;
            right: 10%;
        }
    }

`;

/*
    Button propTypes
*/
Button.propTypes = {
    copy: PropTypes.string,
    className: PropTypes.string,
    backColor: PropTypes.string,
    isPlain: PropTypes.bool,

};
Button.defaultProps = {
    copy: '',
    className: '',
    backColor: '',
    isPlain: true,
};

export default Button;
