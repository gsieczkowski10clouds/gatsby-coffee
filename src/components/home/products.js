import React from "react";

import { StaticQuery, graphql } from "gatsby";

import Product from './product';
import Title from '../globals/title';

const queryProducts = graphql`
query{
	products:allContentfulCoffeeProduct{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxHeight:426){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;

const ProductsSection = () => {

  return (
    <StaticQuery query={queryProducts} render={ (data) => {
      return (
        <>
          {data.products.edges.map( ({node}) => {
            return (
              <section className="py-5">
                <div className="container">
                  <Title title="our products"/>
                  <div className="row">
                    {data.products.edges.map( ({node}) => {
                      return (
                        <Product key={node.id} product={node} />
                      )
                    })}
                  </div>
                </div>
              </section>
            )
          })}
        </>
      )
    }}/>
  )
};

export default ProductsSection;