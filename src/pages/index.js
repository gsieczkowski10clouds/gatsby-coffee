import React from "react"

import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from '../components/globals/backgroundSection';

export const query = graphql`
query{
  bg:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;


const IndexPage = ({data}) => {
  console.log( data );

  return (
    <Layout>

      <SEO title="Home" />

      <BackgroundSection image={data.bg.childImageSharp} title="Coffee shop" styleClass="default-background"/>

    </Layout>
  )
}

export default IndexPage
