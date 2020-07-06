// @flow

import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {breakpoints, colors} from '../utils/styleConstants';
import {lang} from '../utils/langConstants';
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

const MainContentLayout = styled.div`
    margin: 0 7px;

    ${breakpoints[50]} {
        margin: 0 20px;
    }

    ${breakpoints[100]} {
        max-width: 880px;
        margin: 0 auto;
        padding: 0 20px;
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
                <MainContentLayout>
                    <p>{lang.home.main}</p>
                </MainContentLayout>
            </RootLayout>
        </Fragment>
    );
}
