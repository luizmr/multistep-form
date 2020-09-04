import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";

import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

export class Success extends Component {
	continue = (e) => {
		e.preventDefault();

		// process form //
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();

		this.props.prevStep();
	};
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment className="root">
					<AppBar position="static">
						<Toolbar variant="dense">
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" color="inherit">
								Success
							</Typography>
							<span></span>
						</Toolbar>
					</AppBar>
					<div className="form">
						<h1>Thank You For Your Submission</h1>

						<p>You will get an email with further instructions.</p>
					</div>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
