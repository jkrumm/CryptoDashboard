import { Classes } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import { MobxRouter } from "mobx-router";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ILayoutStore } from "../../stores/LayoutStore";
import { IUserStore } from "../../stores/UserStore";
import { Scrollbars } from 'react-custom-scrollbars';
import { router } from "../../stores/store";
import "./App.scss";

interface IContainerProps {
	layoutStore?: ILayoutStore | any;
	userStore?: IUserStore | any;
}

@inject("layoutStore", "userStore")
@observer
export class App extends React.Component<IContainerProps> {
	public render() {
		const {
			navCollapsed,
			sidebarCollapsed,
			mainGrid,
			toogleSidebarCollapse,
			toogleNavCollapse,
			sidebarTab,
			changeSidebarTab,
			searchNavigation,
			changeSearchNavigation,
			isLastVisitedOpen,
			isFavoritesOpen,
			isNavOpen,		
			toogleLastVisitedOpen,
			toogleFavoritesOpen,
			toogleNavOpen
		} = this.props.layoutStore;

		const { name } = this.props.userStore;

		return (
			<div className={`${Classes.DARK} app`}>
				<header className="header-wrapper">
					<Header x={name} />
				</header>
				<main className={"main-grid-container " + mainGrid}>
					<div className="navigation-wrapper">
						<Navigation 
							collapsed={navCollapsed} 
							toogleCollapse={toogleNavCollapse} 
							searchNavigation={searchNavigation}
							changeSearchNavigation={changeSearchNavigation}
							isLastVisitedOpen={isLastVisitedOpen}
							isFavoritesOpen={isFavoritesOpen}
							isNavOpen={isNavOpen}
							toogleLastVisitedOpen={toogleLastVisitedOpen}
							toogleFavoritesOpen={toogleFavoritesOpen}
							toogleNavOpen={toogleNavOpen}
						/>
					</div>
					<div className="content-wrapper">
						<Scrollbars>
							<MobxRouter store={router} />
						</Scrollbars>
					</div>
					<div className="sidebar-wrapper">
						<Sidebar
								collapsed={sidebarCollapsed}
								toogleCollapse={toogleSidebarCollapse}
								sidebarTab={sidebarTab}
								changeSidebarTab={changeSidebarTab}
						/>
					</div>
				</main>
			</div>
		);
	}
}
