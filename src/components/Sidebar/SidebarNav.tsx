import { Icon, Position, Tooltip } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';

interface ISidebarNavProps {
	sidebarTab: string;
	collapsed: boolean;
	changeSidebarTab(tab: string): void;
}

const SidebarMenuItems = [
	{name: 'Favorites', iconId: IconNames.STAR, position: Position.BOTTOM_RIGHT},
	{name: 'Search', iconId: IconNames.SEARCH},
	{name: 'Notifications', iconId: IconNames.NOTIFICATIONS},
	{name: 'Watchlist', iconId: IconNames.LIST},
	{name: 'ToDo', iconId: IconNames.CONFIRM},
];

export function SidebarNav(props: ISidebarNavProps) {
	return (
		<ul className="sidebar-nav">
				{SidebarMenuItems.map(
					(item, index) => 
						<SidebarButton 
							key={index} 
							name={item.name} 
							iconId={item.iconId}
							position={item.position}
							changeSidebarTab={props.changeSidebarTab}
							active={item.name === props.sidebarTab && props.collapsed === true ? true : false}
						/>
				)}
		</ul>
	);
}

interface ISidebarButtonProps {
	name: string;
	iconId: any;
	position: Position | undefined;
	active: true | false;
	changeSidebarTab(tab: string): void;
}

function SidebarButton (props: ISidebarButtonProps) {
	const {name, iconId, position, active, changeSidebarTab } = props;

	return (
		<>
			<Tooltip 
				content={name}
				inheritDarkTheme={true}
				position={position ? position :  Position.TOP_LEFT}
			>
				<li 
					className={active === true ? 'active' : ''}
					onClick={() => changeSidebarTab(name)}
				>
					<Icon 
						icon={iconId}
						iconSize={16}
					/>
				</li>
			</Tooltip>
		</>
	)
}