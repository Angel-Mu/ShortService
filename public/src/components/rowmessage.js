'use strict'
import React, { Component } from "react";

export default class RowMessage extends Component {
  render() {
  	var style = {
  		marginTop:15,
  	}
  	let origin = location.origin;
		let val = this.props.val;
		let href = origin + "/" + val;
    return (
      <div className="row" style={style}>
				<div className="col-sm-6 col-sm-offset-3">
					<div className="alert alert-info">
						<strong>Congrats!</strong> <a target="_blank" href={href}>{origin}/{val}</a>
					</div>
				</div>
			</div>
    );
  }
}