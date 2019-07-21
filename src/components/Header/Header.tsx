import React from "react";
import "./Header.scss";
import logo from "../../static/img/palantir-logo.svg";
import { H1, InputGroup, Icon, ButtonGroup, Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

interface IContainerProps {
	x: string;
	auth: any;
}

export function Header(props: IContainerProps) {
	const {x, auth} = props;

	return (
		<div className="header">	
			<div className="head-logo">
				<img src={logo} alt="Logo"/>
				<H1>InSight</H1>
			</div>
			<div className="head-search">
				<InputGroup
					large
					leftIcon={IconNames.SEARCH}
					rightElement={
						<Icon className="head-search-right" icon={IconNames.CROSS} />
					}
				/>
			</div>
			<div className="head-bar">Bar</div>
			<div className="head-icon">
				{/* {x} */}
				{ auth.isAuthenticated()
				? 
					<div>SUCCESS</div>
				:
					<ButtonGroup>
						<Button 
							large
							onClick={auth.login}
						>
							Login
						</Button>
						<Button 
							large
							intent={"success"}
						>
							SignUp
						</Button>
					</ButtonGroup>
				}
			</div>
		</div>
	);
}
