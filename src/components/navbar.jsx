import React, {Component} from 'react';

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-secondary badge-pill">{props.totalCounters}</span>
      </a>
    </nav>
  );
}

export default NavBar;
