import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'components/containers'
import { Text, Header, BackgroundImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: var(--text-size-m);
    color: var(--color-white);
    max-width: 99.6rem;
`

const JoinHeader = styled(Header)`
    margin-bottom: 4.8rem;
    margin-top: 3.2rem;
    color: var(--color-white);
`

const RedBanner = styled.span`
    color: var(--color-red);
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "careers/career-landing-bg.png" }) {
            ...backGroundBlur
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)

    return (
        <BackgroundImage
            data={data.image}
            alt={localize('Deriv careers')}
            style={{
                height: '80rem',
                width: '100%',
            }}
        >
            <StyledContainer>
                <StyledHeader as="h2">
                    <Localize
                        translate_text="Be a part of something <0>big</0>."
                        components={[<RedBanner key={0} />]}
                    />
                </StyledHeader>
                <Subheadline>
                    {localize(
                        'We’ve got a huge mission, an incredible team and amazing growth. But it’s not just about Deriv’s growth, it’s about yours. ',
                    )}
                </Subheadline>
                <JoinHeader as="h3">{localize('Join and grow with us.')}</JoinHeader>
                <LinkButton secondary to="/careers/jobs">
                    {localize('View open positions')}
                </LinkButton>
            </StyledContainer>
        </BackgroundImage>
    )
}
export default Hero