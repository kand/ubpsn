// @flow

import React, {type Node}  from 'react';
import styled from 'styled-components';

import {colors, breakpoints} from '../utils/styleConstants';

const LinkButtonStyled = styled.a`
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;

    display: inline-block;
    background-color: ${colors.primary};
    color: ${colors.black};
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 40px;

    ${breakpoints[100]} {
        padding: 20px 72px;
    }
`;

export default function LinkButton({children, ...props}: {children?: Node}) {
    return (
        <LinkButtonStyled {...props}>{children}</LinkButtonStyled>
    );
}
