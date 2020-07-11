// @flow

import React from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import {breakpoints} from '../utils/styleConstants';

const NavImage = styled(Img)`
    ${breakpoints[50]} {
        margin-left: 20px;
    }

    ${breakpoints[100]} {
        margin-left: 103px;
    }
`;

export default function Nav(props: Object) {
    return (
        <StaticQuery
            query={graphql`
                query NavLogoQuery {
                    navLogo: file(relativePath: { eq: "logo.png" }) {
                        childImageSharp {
                            fixed(width: 66, height: 66) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            `}
            render={({navLogo: {childImageSharp: {fixed}}}) => (
                <div {...props}>
                    <NavImage fixed={fixed} />
                </div>
            )}
        />
    );
}
