import React from 'react';
import "./Sidebar.scss";

interface ISidebarContentProps {
	sidebarTab: string;
}

export function SidebarContent(props: ISidebarContentProps) {
	const { sidebarTab } = props;

	return (
		<div className="sidebar-content">
			<div className="sidebar-content-header">{sidebarTab}</div>
		</div>);
}