// @flow

import React from 'react';
import styled from 'styled-components';

import {breakpoints, colors} from '../utils/styleConstants';
import handshakeSvg from '../img/handshake.svg';

const DividerContainer = styled.div`
    width: 30%;
    min-width: 190px;
    max-width: 300px;
    margin: 21px auto;
    border-top: 3px solid ${colors.primary};
    text-align: center;
    padding-top: 12px;

    ${breakpoints[50]} {
        padding-top: 8px;
    }
`;

const HandshakeImage = styled.img`
    min-width: 52px;
    max-width: 82px;
`;

export default function Divider() {
    return (
        <DividerContainer>
            <HandshakeImage src={handshakeSvg} />
        </DividerContainer>
    );
}
