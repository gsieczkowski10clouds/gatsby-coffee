import React from "react";

import { connect } from 'react-redux';
import Image from "gatsby-image";

import Title from '../globals/title';
import * as actions from "../../store/actions"

const Menu = ({items, categories, filterMenu}) => {

  const handleItemsFilter = (category) => {
    filterMenu(category);
  };

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
                  <h6 className="mb-0"><small>{node.title}</small></h6>
                  <h6 className="mb-0 text-yellow"><small>${node.price}</small></h6>
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

        <div className="row mb-5">

          <div className="col-10 mx-auto text-center">
            {categories.map( (item, index) => {
              return (
                <button key={index} type="button" className="btn btn-yellow text-capitalize m-3" onClick={() => handleItemsFilter(item)}>{item}</button>
              )
            })}
          </div>

        </div>

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
    categories: state.menu.categories,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterMenu: (category) => dispatch( actions.filterMenu(category) ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);