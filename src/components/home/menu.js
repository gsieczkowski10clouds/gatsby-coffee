import React from "react";

import { connect } from 'react-redux';
import Image from "gatsby-image";

import Title from '../globals/title';
import * as actions from "../../store/actions"

const Menu = ({items}) => {

  const renderedItems = items.length === 0 ?
    (
      <div className="col-10 col-sm-6 mx-auto text-center text-capitalize"><h1>There are no items to display</h1></div>
    )
    :
    (
      <>
        {items.map( ({node}) => {
          return (
            <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">

              <div><Image fixed={node.image.fixed} alt="image" /></div>

              <div className="flex-grow-1 px-3">


                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">{node.title}</h6>
                  <h6 className="mb-0">${node.price}</h6>
                </div>

                <p className="text-muted"><small>{node.description.description}</small></p>

              </div>

            </div>
          )
        })}
      </>
    );

  return (
    <section className="menu py-5">

      <div className="container">

        <Title title="best of our menu" />

        <div className="row">

          {renderedItems}

        </div>

      </div>

    </section>
  )
};

const mapStateToProps = (state) => {
  return {
    items: state.menu.filtered,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);