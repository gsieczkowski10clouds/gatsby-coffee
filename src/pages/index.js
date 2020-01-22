import React, { useEffect } from "react"

import { connect } from 'react-redux';
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from '../components/globals/backgroundSection';
import Info from '../components/home/info';
import Menu from '../components/home/menu';
import Products from '../components/home/products';
import Contact from '../components/home/contact';

import * as actions from '../store/actions';

export const query = graphql`
query{
  bg:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image{
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;


const IndexPage = ({data, storeMenu}) => {

  const menuItems = data.menu.edges;

  useEffect(() => {
    storeMenu(menuItems)
  }, [storeMenu, menuItems]);

  return (
    <Layout>

      <SEO title="Home" />

      <BackgroundSection image={data.bg.childImageSharp} title="Coffee shop" styleClass="default-background"/>

      <Info/>

      <Menu/>

      <Products/>

      <Contact/>

    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeMenu: (items) => dispatch( actions.storeMenu(items) ),
  }
};

export default connect(null, mapDispatchToProps)(IndexPage);
