
// @flow

import React, {Fragment} from 'react';
import {createGlobalStyle} from 'styled-components';

import {lang} from '../utils/langConstants';
import {colors} from '../utils/styleConstants';

const GlobalNewsletterStyle = createGlobalStyle`
    #mc_embed_signup {
        label {
            margin-bottom: 22px;
            display: block;
        }

        #mce-EMAIL {
            border: 2px solid ${colors.neutralBorder};
            border-right: none;
            padding: 7px 18px;
        }

        #mc-embedded-subscribe {
            background-color: ${colors.primary};
            border: 1px solid ${colors.neutralBorder};
            padding: 8px 18px;
            cursor: pointer;
            margin-left: -4px;
        }
    }
`;

export default function MailchimpNewsletterSignup() {

    return (
        <Fragment>
            <GlobalNewsletterStyle />
            <div dangerouslySetInnerHTML={{__html: `
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                <form action="https://gmail.us10.list-manage.com/subscribe/post?u=d02ae1d9b19791850ddff9eeb&amp;id=964afe8579" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                  <label for="mce-EMAIL">${lang.global.subscribeToNewsletter}</label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="${lang.global.email}">
                    <input type="submit" value="${lang.global.subscribe}" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d02ae1d9b19791850ddff9eeb_964afe8579" tabindex="-1" value=""></div>
                    </div>
                </form>
                </div>
                <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
                <!--End mc_embed_signup-->
            `}} />
        </Fragment>
    );
}
