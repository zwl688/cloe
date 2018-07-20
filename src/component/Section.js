import React, { Component } from 'react';
import{
	Route
}from 'react-router-dom'
import {Tab1} from '../component/tab1'
import {Tab2} from '../component/tab2'
import {pin} from '../component/pin'
class Section extends Component {
  render() {
    return (
      <div className="Section">
      		<Route exact path="/" component={Tab1}></Route>
       		<Route path="/tab1" component={Tab1}></Route>
       		<Route path="/tab2" component={Tab2}></Route>
       		<Route path='/pin/:id' component={pin}></Route>
      </div>
    );
  }
}

export default Section;
