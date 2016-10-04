'use strict'
import React, { Component } from "react";
import ReactDom from 'react-dom';
import { postShorten } from '../actions/index.js';
import { connect } from 'react-redux';
import Container from './container';
import RowMessage from  './rowmessage';
import Footer from  './footer';

function mapStateToProps(state) {
	return state.shorten_reducer.data || {};
}

class Home extends Component {
	constructor(){
			super();
			this.state = {original:''};
	}
	componentWillReceiveProps (nextProps) {
		this.setState({showResult: !this.state.showResult, original:''});
	}
	getShortenURL() {
		this.props.postShorten(this.state.original)
	}
	handleSubmit(e) {
		e.preventDefault();
		this.getShortenURL();
	}
	handleChange(e) {
		// Returns showResult false everytime input changed hidding alert message
		this.setState({original:e.target.value, showResult:false});
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
									<input value={this.state.original} onChange={this.handleChange.bind(this)} className="form-control" type="text" placeholder="ej: http://ejemplo.com" />
								</div>
								<button disabled={!this.state.original || this.state.original === ''} className="btn btn-primary" onClick={this.getShortenURL.bind(this)} type="button" > GO! <i className="glyphicon glyphicon-chevron-right"></i></button>
							</form>
						</div>
					</div>
					{this.state.showResult ? <RowMessage val={this.props.shortened}/> : null}
	    	</Container>
	    	<Footer />
    	</div>
    );
  }
}

export default connect(mapStateToProps, { postShorten })(Home);

