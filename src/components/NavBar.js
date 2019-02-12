import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="navBar">
          <Link
            to='/'
            className="navBarItem">
            Home
          </Link>
          <Link
            to='/create'
            className="navBarItem">
            Create Question
          </Link>
        </ul>
      </div>
    )
  }
}

export default NavBar
