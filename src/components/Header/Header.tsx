import React, { Component} from "react";
import "./Header.scss";
import logo from "../../static/img/palantir-logo.svg";
import { H1, InputGroup, Icon, ButtonGroup, Button, Overlay, Intent, Classes, Card, Elevation, Tabs, Tab, H2 } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import LoginForm from '../../forms/loginForm';
import SignUpForm from '../../forms/signupForm';

interface IContainerProps {
	auth: any;
}

export class Header extends Component<IContainerProps> {
	state = {
		isOpen: false,
		loginTab: 'login'
	}

	public render () {
		const {auth} = this.props;

		return (
			<div className="header">	
				<div className="head-logo">
					<img src={logo} alt="Logo"/>
					<H1>InSight</H1>
				</div>
				<div className="head-search">
					<InputGroup
						large={true}
						leftIcon={IconNames.SEARCH}
						rightElement={
							<Icon className="head-search-right" icon={IconNames.CROSS} />
						}
					/>
				</div>
				<div className="head-bar">Bar</div>
				<div className="head-icon">
					{ auth.isAuthenticated()
					? 
						<div>
							<Button 
								large={true}
								onClick={() => auth.logout()}
							>
								Logout
							</Button>
						</div>
					:
						<ButtonGroup>
							<Button 
								large={true}
								onClick={()  => this.setState({isOpen: true})}
								// onClick={() => auth.login()}
							>
								Login
							</Button>
							<Button
								large={true}
								intent={Intent.SUCCESS}
							>
								SignUp
							</Button>
						</ButtonGroup>
					}
				</div>
				{/* TODO: Make this better with loading after req and a animation after success */}
				{ auth.isAuthenticated()
					? null :
					<Overlay
						onClose={()  => this.setState({isOpen: false})}
						isOpen={this.state.isOpen}
						className={Classes.OVERLAY_SCROLL_CONTAINER + " login-popup-wrapper"}
						usePortal={true}
						canOutsideClickClose={false}
						canEscapeKeyClose={false}
						hasBackdrop={true}
					>
						<Card elevation={Elevation.THREE} className={Classes.DARK}>
							<Tabs
								id='LoginSignUp'
								onChange={loginTab => this.setState({loginTab})}
								selectedTabId={this.state.loginTab}
								large={true}
							>
								<Tab
										id='login'
										// disabled={loginTab}
										title={<H2>Login</H2>}
										panel={<Login closeOverlay={()  => this.setState({isOpen: false})}/>}
								/>
								<Tab
										id='SignUp'
										// disabled={loginTab}
										title={<H2>SignUp</H2>}
										panel={<SignUp/>}
								/>
							</Tabs>
							<Button 
								large={true}
								fill={true}
								onClick={()  => this.setState({isOpen: false})}
							>
								Close
							</Button>
						</Card>
					</Overlay>
				}
			</div>
		);
	}
}

function Login(closeOverlay: any) {
	return (
		<div>
			<LoginForm />
		</div>
	)
}

function SignUp() {
	return (
		<SignUpForm />
	)
}
