import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {colors} from '../utils/styleConstants';
import Cover from '../components/Cover';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.background};
    }
`;

const RootLayout = styled.div`
    max-width: 1027px;
    margin: auto;
`;

export default function About() {
    return (
        <Fragment>
            <GlobalStyle />
            <RootLayout id='siteRoot'>
                <Cover />
            </RootLayout>
        </Fragment>
    );
}
