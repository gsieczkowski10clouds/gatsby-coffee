import React from "react"

import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from '../components/globals/backgroundSection';
import Info from '../components/home/info';

export const query = graphql`
query{
  bg:file(relativePath:{eq:"about-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;


const AboutPage = ({data}) => {

  return (
    <Layout>

      <SEO title="Home" />

      <BackgroundSection image={data.bg.childImageSharp} title="About us" styleClass="about-background"/>

      <Info/>

    </Layout>
  )
}

export default AboutPage
