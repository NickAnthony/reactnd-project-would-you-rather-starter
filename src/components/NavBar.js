import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="navBar">
          <li className="navBarItem"><a href="/">Home</a></li>
          <li className="navBarItem"><a href="/">Stuff</a></li>
          <li className="navBarItem"><a href="/">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
