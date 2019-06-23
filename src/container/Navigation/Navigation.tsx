import React from "react";
import { Tooltip, Position, Icon, H4 } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import "./Navigation.scss";

const NavMenuItems = [
    {name: 'Favorites', iconId: IconNames.STAR, position: Position.BOTTOM_RIGHT},
    {name: 'Search', iconId: IconNames.SEARCH},
    {name: 'Notifications', iconId: IconNames.NOTIFICATIONS},
    {name: 'Watchlist', iconId: IconNames.LIST},
    {name: 'ToDo', iconId: IconNames.CONFIRM},
  ];

interface IContainerProps {
    collapsed: true | false;
    toogleCollapse(): void;
}

export function Navigation (props: IContainerProps) {
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
            <div className="navigation-collapse" onClick={toogleCollapse}>
                <Tooltip 
                    content={collapsed ? 'Close Navigation' : 'Open Navigation'}
                    inheritDarkTheme
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

interface INavButton {
    name: string;
    iconId: any;
    position: Position | undefined;
    collapsed: true | false;
  }
  
  function NavButton (props: INavButton) {
    const {name, iconId, position, collapsed } = props;
  
    return (
      <>
        <Tooltip
          content={name}
          inheritDarkTheme
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