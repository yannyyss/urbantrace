import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Sass</li>
            <li>Log</li>
            <li>Javascritp</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

