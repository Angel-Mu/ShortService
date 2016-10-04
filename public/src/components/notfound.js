'use strict'
import React, { Component } from "react";
import Container from './container'
import Footer from './footer'

export default class NotFound extends Component {  
  render() {
    return (
    	<div>
    		<Container>
	       	404 - Resource Not Found at this server
	      </Container>
	      <Footer />
    	</div>
    );
  }
}