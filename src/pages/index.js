// @flow

import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {breakpoints, colors} from '../utils/styleConstants';
import {lang} from '../utils/langConstants';
import Divider from '../components/Divider';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import Cover from '../components/Cover';
import InfoBox from '../components/InfoBox';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.background};
        margin-bottom: 50px;
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
    margin: 0 7px 100px;

    ${breakpoints[50]} {
        margin: 0 20px 100px;
    }

    ${breakpoints[100]} {
        max-width: 880px;
        margin: 0 auto 100px;
        padding: 0 20px;
    }
`;

const InfoBoxes = styled.div`
    display: flex;
    flex-direction: column;

    ${breakpoints[100]} {
        flex-direction: row;
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
                    <InfoBoxes>
                        <InfoBox
                            title={lang.home.infoBoxes.box2.title}
                            text={lang.home.infoBoxes.box2.text}
                            cta={<LinkButton href={lang.global.getInvolvedUrl}>{lang.global.getInvolved}</LinkButton>}
                        />
                        <InfoBox
                            title={lang.home.infoBoxes.box1.title}
                            text={lang.home.infoBoxes.box1.text}
                            cta={<LinkButton href={lang.global.requestSupportUrl}>{lang.global.requestSupport}</LinkButton>}
                        />
                    </InfoBoxes>
                </MainContentLayout>
                <Footer />
            </RootLayout>
        </Fragment>
    );
}
