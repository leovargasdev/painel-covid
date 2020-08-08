import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  color: #24292e;
  text-transform: uppercase;
  margin: 0 auto 15px;
  padding-top: 6px;
  font-family: 'Ubuntu', sans-serif;

  p {
    margin: 0;
    font-size: 40px;
    font-weight: 300;
    line-height: 15px;
  }
  strong {
    font-size: 50px;
    font-weight: 700;
  }
`;

const Panels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  padding: 0 100px;
  ${media.lessThan('huge')`
    padding: 0 40px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
  `};
  ${media.lessThan('large')`
    grid-column-gap: 0;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  `}
`;

const Panel = styled(AniLink)`
  display: flex;
  margin: 0 0 30px;
  padding: 15px 10px;
  border-radius: 6px;
  background: rgba(10,25,47);
  transition-duration: 0.4s;
  text-decoration: none;
  color: #FFF;

  ${media.lessThan('large')`
    margin-bottom: 15px;
  `}

  &:hover{
    background: ${(props) => props.color};
    transform: translateY(5px);
    -webkit-box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.2);
    box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;

  .gatsby-image-wrapper {
    width: 100px;
  }

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 35px;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 15px;
  }

  ${media.lessThan('large')`
    margin: 0;
    .gatsby-image-wrapper {
      width: 80px;
    }
    h1 {
      font-size: 22px;
      margin-left: 10px;
    }
  `}
`;

const QUERY_FLAGS_IMGS = graphql`
{
  blumenau: file(relativePath: { eq: "flags/blumenau.png" }) {
    childImageSharp {
      fluid(maxWidth: 100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  chapeco: file(relativePath: { eq: "flags/chapeco.png" }) {
    childImageSharp {
      fluid(maxWidth: 100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  oeste: file(relativePath: { eq: "flags/oeste.png" }) {
    childImageSharp {
      fluid(maxWidth: 100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  xaxim: file(relativePath: { eq: "flags/xaxim.png" }) {
    childImageSharp {
      fluid(maxWidth: 100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  patoBranco: file(relativePath: { eq: "flags/pato-branco.png" }) {
    childImageSharp {
      fluid(maxWidth: 100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  xanxere: file(relativePath: { eq: "flags/xanxere.png" }) {
    childImageSharp {
      fluid(maxWidth: 100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`;

const CovidsPage = () => {
  const { blumenau, chapeco, xaxim, oeste, patoBranco, xanxere } = useStaticQuery(QUERY_FLAGS_IMGS);

  const panels = [
    {
      id: 0,
      link: 'chapeco',
      name: 'Chapecó - SC',
      color: '#49b15f',
      image: chapeco.childImageSharp.fluid
    },
    {
      id: 1,
      link: 'oeste',
      name: 'Oeste Catarinense',
      color: '#2f0a25',
      image: oeste.childImageSharp.fluid
    },
    {
      id: 2,
      link: 'xaxim',
      name: 'Xaxim - SC',
      color: '#15459b',
      image: xaxim.childImageSharp.fluid
    },
    {
      id: 3,
      link: 'blumenau',
      name: 'Blumenau - SC',
      color: '#f72f33',
      image: blumenau.childImageSharp.fluid
    },
    {
      id: 4,
      link: 'pato-branco',
      name: 'Pato Branco - PR',
      color: '#ffbc00',
      image: patoBranco.childImageSharp.fluid
    },
    {
      id: 5,
      link: 'xanxere',
      name: 'Xanxerê - SC',
      color: '#ac2218',
      image: xanxere.childImageSharp.fluid
    }
  ];

  return (
    <Container>
      <Header>
        <p>Painel do</p>
        <strong>Coronavírus</strong>
      </Header>
      <Panels>
        {panels.map((panelCovid) => (
          <Panel key={panelCovid.id} to={`/${panelCovid.link}`} color={panelCovid.color}>
            <Info>
              <Img fluid={panelCovid.image} />
              <h1>{panelCovid.name}</h1>
            </Info>
          </Panel>
        ))}
      </Panels>
    </Container>
  );
};

export default CovidsPage;
