import { Icon, Position, Tooltip } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';
import "./Sidebar.scss";
import { SidebarNav } from './SidebarNav';

interface ISidebarProps {
	collapsed: boolean;
	sidebarTab: string;
	toogleCollapse(): void;
	changeSidebarTab(tab: string): void;
}

export function Sidebar(props: ISidebarProps) {
	const {
		collapsed, 
		toogleCollapse, 
		sidebarTab,
		changeSidebarTab
	} = props;

	return (
		<aside className={collapsed ? "sidebar sidebar-collapsed" : "sidebar"}>
			<div className="sidebar-content-wrapper">
				{sidebarTab}
			</div>
			<div className="sidebar-nav-wrapper">
				<SidebarNav 
					sidebarTab={sidebarTab}
					collapsed={collapsed}
					changeSidebarTab={changeSidebarTab}
				/>
				<div 
					className="sidebar-collapse-button" 
					onClick={toogleCollapse}
				>
					<Tooltip 
							content={collapsed ? 'Close Sidebar' : 'Open Sidebar'}
							inheritDarkTheme={true}
							position={Position.TOP_LEFT}
						>
							<div className="sidebar-collapse-inner">
									<Icon 
										icon={
											collapsed ? 
											IconNames.DOUBLE_CHEVRON_RIGHT : 
											IconNames.DOUBLE_CHEVRON_LEFT
										} 
										iconSize={20}
									/>
							</div>
						</Tooltip>
					</div>
			</div>
		</aside>
	);
}