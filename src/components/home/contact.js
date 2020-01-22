import React from "react";

import Title from '../../components/globals/title';

const ContactSection = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log( e );

    return false;
  };

  return (
    <section className="contact py-5">

      <div className="container">

        <Title title="contact us"/>

        <div className="row">

          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form action="" method="post" onSubmit={handleFormSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control" name="name" placeholder="john smith" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input id="email" type="text" className="form-control" name="email" placeholder="john@smith.com" />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" className="form-control" rows="5" placeholder="Your description"></textarea>
              </div>

              <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">submit</button>

            </form>
          </div>

        </div>

      </div>

    </section>
  )
};

export default ContactSection;