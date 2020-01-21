import React from "react";

import { Link } from "gatsby";

import Title from '../globals/title';

const BackgroundSection = () => {

  return (
    <section className="py-5">

      <div className="container">

        <Title title="our story" />

        <div className="row">

          <div className="col-10 col-sm-8 mx-auto text-center">

            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit varius fringilla. Mauris mattis eleifend nunc, quis dapibus libero tempus vel. Quisque ultrices enim sit amet justo consequat, quis lobortis ex porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor porta placerat. Curabitur consectetur mauris elit. Vestibulum malesuada, turpis sed luctus ullamcorper, turpis nulla dictum ante, sit amet viverra metus odio vitae libero. Etiam convallis ipsum in ipsum porttitor, et tristique ligula rutrum. Donec quam augue, aliquam sit amet tempus sit amet, pulvinar a justo. Curabitur viverra, dui in posuere finibus, tellus justo gravida tellus, dictum vulputate magna felis a nunc. Morbi quis lacus nulla. Curabitur at semper orci. Morbi volutpat, leo nec porttitor vulputate, lectus nisl tristique nisi, a suscipit risus magna ac enim.
            </p>

            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
};

export default BackgroundSection;