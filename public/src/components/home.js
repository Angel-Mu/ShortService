'use strict'
import React, { Component } from "react";
import ReactDom from 'react-dom'
import Container from './container';
import Footer from  './Footer'



export default class Home extends Component {  
	constructor(){
			super();
			this.state = {}
	}
	getShortenURL() {
		console.log(this);
		console.log(ReactDom.findDOMNode(this.refs.original).value)
	}
	handleSubmit(e) {
		e.preventDefault();
		this.getShortenURL();
	}
  render() {
    return (
    	<div>
    		<Container>
	    		<h1 className="text-muted">Get tiny URL from service</h1>
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3">
							<form action="" onSubmit={this.handleSubmit.bind(this)} className="form">
								<div className="form-group">
									<input ref="original" className="form-control" type="text" placeholder="ej: http://ejemplo.com" />
								</div>
								<button className="btn btn-primary" onClick={this.getShortenURL.bind(this)} type="button" > GO! <i className="glyphicon glyphicon-chevron-right"></i></button>
							</form>
						</div>
					</div>
	    	</Container>
	    	<Footer />
    	</div>
    );
  }
}