import React, { useState } from "react"

import { connect } from 'react-redux';
import { Link } from 'gatsby';

import * as actions from '../../store/actions';

import { FaCartArrowDown } from 'react-icons/fa';
import Logo from '../../images/logo.svg';

const links = [
  {
    id: 1,
    path: '/',
    text: 'home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
];

const Navbar = (props) => {

  const [css, setCss] = useState('collapse navbar-collapse');

  const navbarHandler = () => {
    if( props.navbarOpen ){
      setCss('collapse navbar-collapse');
    }else{
      setCss('collapse navbar-collapse show');
    }
    props.toggleMenu();
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">

      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="Coffee Shop" />
      </Link>

      <button className="navbar-toggler" type="button" onClick={navbarHandler}><span className="navbar-toggler-icon" /></button>

      <div className={css}>

        <ul className="navbar-nav mx-auto">

          {links.map( (item) => {
            return (
              <li key={item.id} className="nav-item">
                <Link to={item.path} className="nav-link text-capitalize">{item.text}</Link>
              </li>
            )
          })}

          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon"/>
          </li>

        </ul>

      </div>

    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    navbarOpen: state.navigation.navbarOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch( actions.toggleMenu() ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
