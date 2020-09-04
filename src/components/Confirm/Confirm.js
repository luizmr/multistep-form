import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import { List } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import RaisedButton from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";

export class Confirm extends Component {
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
		const {
			values: { firstName, lastName, email, occupation, city, bio },
		} = this.props;
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
								Confirm Info
							</Typography>
							<span></span>
						</Toolbar>
					</AppBar>
					<div className="form">
						<List className="form__list">
							<ListItemText
								primary="First Name"
								secondary={firstName}
							/>
							<ListItemText
								primary="Last Name"
								secondary={lastName}
							/>
							<ListItemText primary="Email" secondary={email} />
							<ListItemText
								primary="Occupation"
								secondary={occupation}
							/>
							<ListItemText primary="City" secondary={city} />
							<ListItemText primary="Bio" secondary={bio} />
						</List>
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
								Confirm
							</RaisedButton>
						</div>
					</div>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Confirm;
