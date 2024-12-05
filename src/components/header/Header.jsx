import React from 'react';
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials.jsx'
import "./header.css"

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hey guys! I'm</h5>
        <h1>Randall H</h1>
        <h5 className="text-light">Senior Backend Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <h1> scroll down</h1>
        </div>
      </div>
    </header>
  )
}


export default Header
