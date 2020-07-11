// @flow

import React from 'react';
import styled from 'styled-components';

import facebookSvg from '../img/logo_facebook.png';
import twitterSvg from '../img/logo_twitter.png';
import instagramSvg from '../img/logo_instagram.png';
import {lang} from '../utils/langConstants';
import {colors} from '../utils/styleConstants';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const SocialImage = styled.img`
    height: 36px;
    width: 36px;
`;

const NewsletterEmail = styled.input`
    border: 2px solid ${colors.neutralBorder};
    border-right: none;
    padding: 7px 18px;
`;

const NewsletterButton = styled.button`
    background-color: ${colors.primary};
    border: 1px solid ${colors.neutralBorder};
    padding: 8px 18px;
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
            <div>
                <label>
                    <div css='margin-bottom: 22px'>{lang.global.subscribeToNewsletter}</div>
                    <NewsletterEmail type='email' name='email' placeholder={lang.global.email} />
                    <NewsletterButton>{lang.global.subscribe}</NewsletterButton>
                </label>
            </div>
        </FooterContainer>
    );
}
