import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();

		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
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
								Enter User Details
							</Typography>
							<span></span>
						</Toolbar>
					</AppBar>
					<div className="form">
						<TextField
							hintText="Enter your first name"
							label="First Name"
							onChange={handleChange}
							name="firstName"
							defaultValue={values.firstName}
						/>
						<TextField
							hintText="Enter your last name"
							label="Last Name"
							onChange={handleChange}
							name="lastName"
							defaultValue={values.lastName}
						/>
						<TextField
							hintText="Enter your email"
							label="Email"
							onChange={handleChange}
							name="email"
							defaultValue={values.email}
						/>
						<RaisedButton
							variant="contained"
							color="primary"
							className="form__button"
							onClick={this.continue}
						>
							Continue
						</RaisedButton>
					</div>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormUserDetails;
