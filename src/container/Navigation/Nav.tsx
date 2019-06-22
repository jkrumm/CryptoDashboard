import React, {Component} from 'react';
import { Tooltip, Icon, Position } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const SidebarMenuItems = [
  {name: 'Favorites', iconId: IconNames.STAR},
  {name: 'Search', iconId: IconNames.SEARCH},
  {name: 'Notifications', iconId: IconNames.NOTIFICATIONS},
  {name: 'Watchlist', iconId: IconNames.LIST},
  {name: 'ToDo', iconId: IconNames.CONFIRM},
];

export function SidebarNav() {
  return (
    <ul className="sidebar-nav">
        {SidebarMenuItems.map(
          (item, index) => 
            <SidebarButton 
              key={index} 
              name={item.name} 
              iconId={item.iconId}
            />
        )}
    </ul>
  );
}

interface ISidebarButton {
  name: string;
  iconId: any;
}

 class SidebarButton extends Component<ISidebarButton> {
   render() {
     const {name, iconId } = this.props;
    return (
      <>
        <Tooltip 
        content={name}
        inheritDarkTheme
        position={Position.TOP_LEFT}>
          <li><Icon icon={iconId} iconSize={16}/></li>
        </Tooltip>
      </>
    )
  }
}