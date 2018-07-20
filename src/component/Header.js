import React, { Component } from 'react';
import{
	NavLink
}from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className="header">
       		<ul>
       			<li><NavLink to="/tab1" activeClassName="select">最热</NavLink></li>
       			<li><NavLink to="/tab2" activeClassName="select">最新</NavLink></li>
       		</ul>
      </div>
    );
  }
}

export default Header;
