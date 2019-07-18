import React from "react";
import "./Header.scss";
import logo from "../../static/img/palantir-logo.svg";
import { H1 } from "@blueprintjs/core";

interface IContainerProps {
	x: string;
}

export function Header(props: IContainerProps) {
	const {x} = props;

	return (
		<div className="header">	
			<div className="head-logo">
				<img src={logo} alt="Logo"/>
				<H1>InSight</H1>
			</div>
			<div className="head-search">Search</div>
			<div className="head-bar">Bar</div>
			<div className="head-icon">{x}</div>
		</div>
	);
}