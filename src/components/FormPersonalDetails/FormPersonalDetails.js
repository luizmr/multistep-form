import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
	continue = (e) => {
		e.preventDefault();

		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();

		this.props.prevStep();
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
								Enter Personal Details
							</Typography>
							<span></span>
						</Toolbar>
					</AppBar>
					<div className="form">
						<TextField
							hintText="Enter your Occupation"
							label="Occupation"
							onChange={handleChange}
							name="occupation"
							defaultValue={values.occupation}
						/>
						<TextField
							hintText="Enter your City"
							label="City"
							onChange={handleChange}
							name="city"
							defaultValue={values.city}
						/>
						<TextField
							hintText="Enter your Bio"
							label="Bio"
							onChange={handleChange}
							name="bio"
							defaultValue={values.bio}
						/>
						<div className="form__buttons">
							<RaisedButton
								variant="contained"
								color="secondary"
								className="form__button"
								onClick={this.back}
							>
								Back
							</RaisedButton>

							<RaisedButton
								variant="contained"
								color="primary"
								className="form__button"
								onClick={this.continue}
							>
								Continue
							</RaisedButton>
						</div>
					</div>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormPersonalDetails;
