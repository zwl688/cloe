import React, { Component } from 'react';
import '../style/index.css';
import '../style/rem';
import '../style/reset.css';

import Header from '../component/Header'
import Section from '../component/Section'
import Footer from '../component/Footer'

import{
	BrowserRouter as Router
}from 'react-router-dom'

class Indexs extends Component {
	render(){
		return(
			<Router>
				<div className="router">
					<Header></Header>
					<Section></Section>
					<Footer></Footer>
				</div>
			</Router>
		)
	}
}
export default Indexs;