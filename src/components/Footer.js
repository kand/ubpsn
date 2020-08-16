// @flow

import React from 'react';
import styled from 'styled-components';

import facebookSvg from '../img/logo_facebook.png';
import twitterSvg from '../img/logo_twitter.png';
import instagramSvg from '../img/logo_instagram.png';
import {lang} from '../utils/langConstants';
import {breakpoints} from '../utils/styleConstants';
import MailchimpNewsletterSignup from './MailchimpNewsletterSignup';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    ${breakpoints[75]} {
        flex-direction: row;
    }
`;

const SocialContainer = styled.div`
    display: flex;

    > a:not(:last-child) {
        margin-right: 19px;
    }

    ${breakpoints[75]} {
        justify-content: space-between;
    }
`;

const SocialImage = styled.img`
    height: 36px;
    width: 36px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                <div css='margin-bottom: 22px'>{lang.footer.socialTitle}</div>
                <SocialContainer>
                    <a href='https://www.facebook.com/UBPSN/'>
                        <SocialImage alt='Facebook' src={facebookSvg} />
                    </a>
                    <a href='https://twitter.com/ubpsn'>
                        <SocialImage alt='Twitter' src={twitterSvg} />
                    </a>
                    <a href='https://www.instagram.com/ubpsn/'>
                        <SocialImage alt='Instagram' src={instagramSvg} />
                    </a>
                </SocialContainer>
            </div>
            <MailchimpNewsletterSignup />
        </FooterContainer>
    );
}
