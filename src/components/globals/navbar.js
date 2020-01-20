import React, { useState } from "react"

import { Link } from 'gatsby';

import { FaCartArrowDown } from 'react-icons/fa';
import Logo from '../../images/logo.svg';

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [css, setCss] = useState('collapse navbar-collapse');
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const navbarHandler = () => {
    if( navbarOpen ){
      setNavbarOpen(false);
      setCss('collapse navbar-collapse');
    }else{
      setNavbarOpen(true);
      setCss('collapse navbar-collapse show');
    }
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

export default Navbar
