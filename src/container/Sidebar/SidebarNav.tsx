import React, {Component} from 'react';
import { Tooltip, Icon, Position } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

interface ISidebarNav {
  sidebarTab: string;
  collapsed: boolean;
  changeSidebarTab(tab: string): void;
}

const SidebarMenuItems = [
  {name: 'Favorites', iconId: IconNames.STAR},
  {name: 'Search', iconId: IconNames.SEARCH},
  {name: 'Notifications', iconId: IconNames.NOTIFICATIONS},
  {name: 'Watchlist', iconId: IconNames.LIST},
  {name: 'ToDo', iconId: IconNames.CONFIRM},
];

export function SidebarNav(props: ISidebarNav) {
  return (
    <ul className="sidebar-nav">
        {SidebarMenuItems.map(
          (item, index) => 
            <SidebarButton 
              key={index} 
              name={item.name} 
              iconId={item.iconId}
              changeSidebarTab={props.changeSidebarTab}
              active={item.name === props.sidebarTab && props.collapsed === true ? true : false}
            />
        )}
    </ul>
  );
}

interface ISidebarButton {
  name: string;
  iconId: any;
  active: true | false;
  changeSidebarTab(tab: string): void;
}

class SidebarButton extends Component<ISidebarButton> {
  render() {
    const {name, iconId, active, changeSidebarTab } = this.props;
    return (
      <>
        <Tooltip 
          content={name}
          inheritDarkTheme
          position={Position.TOP_LEFT}
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
}