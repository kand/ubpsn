// @flow

import React from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import {colors, breakpoints, typography} from '../utils/styleConstants';
import {lang} from '../utils/langConstants';

const CoverBackground = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${colors.accent};
    align-items: center;
    padding: 12px 0;
    color: ${colors.white};

    ${breakpoints[50]} {
        flex-direction: row;
    }
`;

const CoverTitle = styled.h1`
    ${typography.header_1}

    max-width: 400px;
    margin-bottom: 32px;
`;

const CoverDescription = styled.p`
    max-width: 406px;
    margin-bottom: 32px;
`;

const CoverLeft = styled.div`
    margin: 0 32px 32px;

    ${breakpoints[100]} {
        margin-left: 102px
    }
`;

const CoverCTA = styled.a`
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;

    display: inline-block;
    background-color: ${colors.primary};
    color: ${colors.black};
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 40px;

    ${breakpoints[100]} {
        padding: 20px 72px;
    }
`;

const CoverImage = styled(Img)`
    margin: auto 0 0 auto;
    width: 198px;

    ${breakpoints[50]} {
        width: 325px;
    }
`;

export default function Cover() {
    const {home: {cover: {title, description}}, global: {getInvolved}} = lang;

    return (
        <StaticQuery
            query={graphql`
                query CoverImageQuery {
                    coverImage: file(relativePath: { eq: "Hero_image.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 325, maxHeight: 361) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
            render={({coverImage: {childImageSharp: {fluid}}}) => (
                <CoverBackground>
                    <CoverLeft>
                        <CoverTitle>{title}</CoverTitle>
                        <CoverDescription>{description}</CoverDescription>
                        <div>
                            <CoverCTA href='google.com'>{getInvolved}</CoverCTA>
                        </div>
                    </CoverLeft>
                    <CoverImage fluid={fluid} />
                </CoverBackground>
            )}
        />
    );
}
