// @flow

import React, {type Element}  from 'react';
import styled from 'styled-components';

import {colors, typography} from '../utils/styleConstants';
import LinkButton from '../components/LinkButton';

const InfoBoxContainer = styled.div`
    border: 1px solid ${colors.accent};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 18px 18px;
    margin: 0 auto 24px;
    display: flex;
    flex-direction: column;
    max-width: 380px;
`;

const InfoBoxTitle = styled.h2`
    ${typography.header_2}

    color: ${colors.accent};
    font-weight: bold;
    text-align: center;
`;

const CtaContainer = styled.div`
    margin: auto auto 12px;
`;

export default function InfoBox({title, text, cta}: {title: string, text: string, cta: Element<typeof LinkButton>}) {
    return (
        <InfoBoxContainer>
            <InfoBoxTitle>{title}</InfoBoxTitle>
            <p>{text}</p>
            <CtaContainer>{cta}</CtaContainer>
        </InfoBoxContainer>
    );
}
