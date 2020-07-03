// @flow

import React from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import {colors, breakpoints} from '../utils/styleConstants';
import {lang} from '../utils/langConstants';

const CoverBackground = styled.div`
    background-color: ${colors.accent};
    display: flex;
    align-items: center;
    padding: 12px 0 12px 102px;
    color: ${colors.white};
`;

const CoverTitle = styled.h1`
    max-width: 400px;
    margin-bottom: 32px;

    ${breakpoints[50]} {
        font-size: 20px;
        line-height: 24px;
    }
`;

const CoverDescription = styled.p`
    max-width: 406px;
    margin-bottom: 32px;
`;

const CoverCTA = styled.a`
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    background-color: ${colors.primary};
    color: ${colors.black};
    padding: 20px 72px;
    text-decoration: none;
    border-radius: 5px;

`;

const CoverImage = styled(Img)`
    margin-left: auto;
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
                    <div>
                        <CoverTitle>{title}</CoverTitle>
                        <CoverDescription>{description}</CoverDescription>
                        <div>
                            <CoverCTA href='google.com'>{getInvolved}</CoverCTA>
                        </div>
                    </div>
                    <CoverImage fluid={fluid} />
                </CoverBackground>
            )}
        />
    );
}
