import { H4, Icon, Position, Tooltip } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";
import "./Navigation.scss";

const NavMenuItems = [
	{name: 'Favorites', iconId: IconNames.STAR, position: Position.BOTTOM_RIGHT},
	{name: 'Search', iconId: IconNames.SEARCH},
	{name: 'Notifications', iconId: IconNames.NOTIFICATIONS},
	{name: 'Watchlist', iconId: IconNames.LIST},
	{name: 'ToDo', iconId: IconNames.CONFIRM},
];

interface INavigationProps {
	collapsed: true | false;
	toogleCollapse(): void;
}

export function Navigation (props: INavigationProps) {
	const {collapsed, toogleCollapse} = props;
	return (
		<div className={collapsed ? 'navigation collapsed' : 'navigation'}>
			<nav><ul>
					{NavMenuItems.map(
							(item, index) => 
							<NavButton 
									key={index} 
									name={item.name} 
									iconId={item.iconId}
									position={item.position}
									collapsed={collapsed}
							/>
					)}
			</ul></nav>
			<div 
				className="navigation-collapse-button" 
				onClick={toogleCollapse}
			>
				<Tooltip 
						content={collapsed ? 'Close Navigation' : 'Open Navigation'}
						inheritDarkTheme={true}
						position={Position.TOP_RIGHT}
				>
					<div className="navigation-collapse-inner">
							<Icon 
									icon={
											collapsed ? 
											IconNames.DOUBLE_CHEVRON_LEFT : 
											IconNames.DOUBLE_CHEVRON_RIGHT
									} 
									iconSize={20}
							/>
						</div>
				</Tooltip>
			</div>
		</div>
	);
}

interface INavButtonProps {
	name: string;
	iconId: any;
	position: Position | undefined;
	collapsed: true | false;
}

function NavButton (props: INavButtonProps) {
	const {name, iconId, position, collapsed } = props;

	return (
		<>
			<Tooltip
				content={name}
				inheritDarkTheme={true}
				position={position ? position :  Position.TOP_LEFT}
				disabled={collapsed}
			>
				<li className={collapsed ? 'navbar-list collapsed' : 'navbar-list'}>
					<div className="navbar-icon">
							<Icon 
									icon={iconId}
									iconSize={16}
							/>
					</div>
					<div className="navbar-title">
							<H4>{name}</H4>
					</div>
				</li>
			</Tooltip>
		</>
	)
}