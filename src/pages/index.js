import React, {Fragment} from 'react';

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
`;

export default function About() {
    return (
        <Fragment>
            <GlobalStyle />
            <div id='siteRoot'>
                <h1>UBPSN</h1>
            </div>
        </Fragment>
    );
}
