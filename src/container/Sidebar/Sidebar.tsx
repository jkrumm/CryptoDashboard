import React from 'react';
import { SidebarNav } from './SidebarNav';
import "./Sidebar.scss";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content-wrapper"></div>
      <div className="sidebar-nav-wrapper"><SidebarNav/></div>
    </aside>
  );
}