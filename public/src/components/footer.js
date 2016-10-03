import React, { Component } from "react";  
import { Link } from 'react-router';

export default class Footer extends Component {  
  render() {
    return (
    	<footer class="text-center">
				<p>Short URLS <a href="/home">App</a></p>
			</footer>
    );
  }
}