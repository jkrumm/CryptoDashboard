import { Classes } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import { MobxRouter } from "mobx-router";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ILayoutStore } from "../../stores/LayoutStore";
import { router } from "../../stores/store";
import "./App.scss";

interface IContainerProps {
	layoutStore?: ILayoutStore | any;
}

@inject("layoutStore")
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
		} = this.props.layoutStore;

		return (
			<div className={`${Classes.DARK} app`}>
				<header className="header-wrapper">
					<Header x="test" />
					{/* <div className="head-logo">
							<H1>InSight</H1>
					</div>
					<div className="head-search">Search</div>
					<div className="head-bar">Bar</div>
					<div className="head-icon">Icons</div> */}
				</header>
				<main className={"main-grid-container " + mainGrid}>
					<div className="navigation-wrapper">
						<Navigation collapsed={navCollapsed} toogleCollapse={toogleNavCollapse} />
					</div>
					<div className="content-wrapper">
						<MobxRouter store={router} />
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
