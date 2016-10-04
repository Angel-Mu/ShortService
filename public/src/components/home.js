'use strict'
import React, { Component } from "react";
import ReactDom from 'react-dom';

import { postShorten } from '../actions/index.js';
import { connect } from 'react-redux';

import Container from './container';
import Footer from  './Footer'

function mapStateToProps(state) {  
	return {
		shorten_reducer: state.shorten_reducer
	};
}


class Home extends Component {  
	constructor(){
			super();
			this.state = {original:''};
	}
	getShortenURL() {
		console.log(this);
		this.props.postShorten(this.state.original)
			// .then((err, data) => {
			// 	console.log(err, data);
			// })
	}
	handleSubmit(e) {
		e.preventDefault();
		this.getShortenURL();
	}
	handleChange(e) {
		this.setState({original:e.target.value});
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
									<input ref="original" value={this.state.original} onChange={this.handleChange.bind(this)} className="form-control" type="text" placeholder="ej: http://ejemplo.com" />
								</div>
								<button disabled={!this.state.original || this.state.original === ''} className="btn btn-primary" onClick={this.getShortenURL.bind(this)} type="button" > GO! <i className="glyphicon glyphicon-chevron-right"></i></button>
							</form>
						</div>
					</div>
	    	</Container>
	    	<Footer />
    	</div>
    );
  }
}

export default connect(mapStateToProps, { postShorten })(Home);