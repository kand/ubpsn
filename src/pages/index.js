// @flow

import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {breakpoints, colors} from '../utils/styleConstants';
import Divider from '../components/Divider';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import Cover from '../components/Cover';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.background};
    }
`;

const RootLayout = styled.div`
    margin: 13px;

    ${breakpoints[50]} {
        max-width: 1027px;
        margin: auto;
    }
`;

const NavWrapped = styled(Nav)`
    margin-bottom: 24px;

    ${breakpoints[50]} {
        margin: 9px 0;
    }
`;

export default function Main() {
    return (
        <Fragment>
            <SEO />
            <GlobalStyle />
            <RootLayout id='siteRoot'>
                <NavWrapped id='siteNav'/>
                <Cover />
                <Divider />
            </RootLayout>
        </Fragment>
    );
}
