'use strict'
import React, { Component } from "react";

export default class ShortenForm extends Component {  
  render() {
    return (
				<div class="row">
					<div class="col-sm-6 col-sm-offset-3">
						<form class="form">
							<div class="form-group">
								<input class="form-control" ng-change="resetInput();" ng-model="original" type="text" placeholder="ej: http://ejemplo.com" />
							</div>
							<button class="btn btn-primary" type="submit" ng-disabled="!original || original == ''" ng-click="callService();"> GO! <i class="glyphicon glyphicon-chevron-right"></i></button>
						</form>
					</div>
				</div>
    );
  }
}