// @flow

import React from 'react';
import styled from 'styled-components';

import facebookSvg from '../img/logo_facebook.png';
import twitterSvg from '../img/logo_twitter.png';
import instagramSvg from '../img/logo_instagram.png';
import {lang} from '../utils/langConstants';
import MailchimpNewsletterSignup from './MailchimpNewsletterSignup';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
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
                <div css='display: flex; justify-content: space-between;'>
                    <a href='https://www.facebook.com/UBPSN/'>
                        <SocialImage alt='Facebook' src={facebookSvg} />
                    </a>
                    <a href='https://twitter.com/ubpsn'>
                        <SocialImage alt='Twitter' src={twitterSvg} />
                    </a>
                    <a href='https://www.instagram.com/ubpsn/'>
                        <SocialImage alt='Instagram' src={instagramSvg} />
                    </a>
                </div>
            </div>
            <MailchimpNewsletterSignup />
        </FooterContainer>
    );
}
