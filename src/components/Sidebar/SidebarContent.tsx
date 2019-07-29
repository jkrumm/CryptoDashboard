import React from 'react';
import "./Sidebar.scss";
import { Todo } from '../../container/Todo/Todo';

interface ISidebarContentProps {
	sidebarTab: string;
}

export function SidebarContent(props: ISidebarContentProps) {
	const { sidebarTab } = props;

	return (
		<div className="sidebar-content-wrapper">
			<div className="sidebar-content-header">
				{sidebarTab}
			</div>
			<div className="sidebar-content">
				{getSidebarContent(sidebarTab)}
			</div>
		</div>);
}

function getSidebarContent(sidebarTab: string) {
	switch(sidebarTab) {
		case('ToDo'):
			return <Todo/>
		default:
			return <div>not found</div>
	}
}