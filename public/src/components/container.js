import React, { Component } from "react";  
import { Link } from 'react-router';

export default class Container extends Component {  
  render() {
    return (
    	<div className="jumbotron text-center">
    		{this.props.children}
			</div>
    );
  }
}



