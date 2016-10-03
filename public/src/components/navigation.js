import React, { Component } from "react";  
import { Link } from 'react-router';

export default class Navigation extends Component {  
  render() {
    return (
    	 <nav class="navbar navbar-default">
		    <div class="container">
		      <div class="navbar-header">
		        <Link class="navbar-brand" to="/home">Get Shorten</Link>
		      </div>

		      <ul class="nav navbar-nav navbar-right">
		        <li><Link to="/home"><i class="fa fa-home"></i> Home</Link></li>
		        <li><Link to="/login"><i class="fa fa-shield"></i> Admin</Link></li>
		      </ul>
		    </div>
		  </nav>
    );
  }
}