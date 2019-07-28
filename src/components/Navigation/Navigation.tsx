import { Classes, Icon, Intent, ITreeNode, Position, Tooltip, Tree, InputGroup, Tag, Button, Collapse, Pre } from "@blueprintjs/core";
import React from "react";
import "./Navigation.scss";
import { IconNames } from "@blueprintjs/icons";

interface INavigationProps {
	collapsed: true | false;
	isOpen?: boolean;
	searchNavigation: string;
	isLastVisitedOpen: boolean;
	isFavoritesOpen: boolean;
	isNavOpen: boolean;
	toogleCollapse(): void;
	changeSearchNavigation(val: string): void;
	toogleLastVisitedOpen(): void;
	toogleFavoritesOpen(): void;
	toogleNavOpen(): void;
}

export interface ITreeExampleState {
		nodes: ITreeNode[];
}

export class Navigation extends React.Component<INavigationProps, ITreeExampleState> {
	 // eslint-disable-next-line no-use-before-define
	public state: ITreeExampleState = { nodes: INITIAL_STATE };

	render() {
		const {
			searchNavigation,
			changeSearchNavigation,
			isLastVisitedOpen,
			isFavoritesOpen,
			isNavOpen,
			toogleLastVisitedOpen,
			toogleFavoritesOpen,
			toogleNavOpen
		} = this.props;

		return (
			<nav>
				<div>
					<InputGroup
						disabled={false}
						leftIcon="search"
						onChange={(val) => changeSearchNavigation(val.value)}
						placeholder="Find Page"
						rightElement={
							<Tag minimal={true}>
								{Math.floor(10000 / Math.max(1, Math.pow(10, 2)))}
							</Tag>
						}
						value={searchNavigation}
					/>
				</div>
				<div>
					<Button 
						onClick={toogleLastVisitedOpen}
						className={isLastVisitedOpen ? 'nav-main-button' : 'nav-main-button collapsed'}
						rightIcon={isLastVisitedOpen ? IconNames.CHEVRON_UP : IconNames.CHEVRON_DOWN}
						minimal={true}
					>
						Last Visited
					</Button>
					<Collapse isOpen={isLastVisitedOpen}>
						<Pre>...</Pre>
					</Collapse>
				</div>
				<div>
					<Button 
						onClick={toogleFavoritesOpen}
						className={isFavoritesOpen ? 'nav-main-button' : 'nav-main-button collapsed'}
						rightIcon={isFavoritesOpen ? IconNames.CHEVRON_UP : IconNames.CHEVRON_DOWN}
						minimal={true}
					>
						Favorites
					</Button>
					<Collapse isOpen={isFavoritesOpen}>
						<Pre>...</Pre>
					</Collapse>
				</div>
				<div>
					<Button 
						onClick={toogleNavOpen}
						className={isNavOpen ? 'nav-main-button' : 'nav-main-button collapsed last'}
						rightIcon={isNavOpen ? IconNames.CHEVRON_UP : IconNames.CHEVRON_DOWN}
						minimal={true}
					>
						Navigation
					</Button>
					<Collapse isOpen={isNavOpen}>
						<Pre>
							<Tree
									contents={this.state.nodes}
									onNodeClick={this.handleNodeClick}
									onNodeCollapse={this.handleNodeCollapse}
									onNodeExpand={this.handleNodeExpand}
									className={Classes.ELEVATION_0}
							/>
						</Pre>
					</Collapse>
				</div>
			</nav>
		);
	}

	private handleNodeClick = (nodeData: ITreeNode, _nodePath: number[], e: React.MouseEvent<HTMLElement>) => {
		const originallySelected = nodeData.isSelected;
		if (!e.shiftKey) {
			this.forEachNode(this.state.nodes, n => (n.isSelected = false));
		}
		nodeData.isSelected = originallySelected == null ? true : !originallySelected;
		this.setState(this.state);
	};

	private handleNodeCollapse = (nodeData: ITreeNode) => {
		nodeData.isExpanded = false;
		this.setState(this.state);
	};

	private handleNodeExpand = (nodeData: ITreeNode) => {
		nodeData.isExpanded = true;
		this.setState(this.state);
	};

	private forEachNode(nodes: ITreeNode[] | undefined, callback: (node: ITreeNode) => void) {
		if (nodes == null) {
			return;
		}

		for (const node of nodes) {
			callback(node);
			this.forEachNode(node.childNodes, callback);
		}
	}
}

/* tslint:disable:object-literal-sort-keys so childNodes can come last */
const INITIAL_STATE: ITreeNode[] = [
	{
		id: 0,
		hasCaret: true,
		icon: "folder-close",
		label: "Folder 0",
	},
	{
		id: 1,
		icon: "folder-close",
		isExpanded: true,
		label: (
			<Tooltip content="I'm a folder <3" position={Position.RIGHT}>
				Folder 1
			</Tooltip>
		),
		childNodes: [
			{
				id: 2,
				icon: "document",
				label: "Item 0",
				secondaryLabel: (
					<Tooltip content="An eye!">
						<Icon icon="eye-open" />
					</Tooltip>
				),
			},
			{
				id: 3,
				icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
				label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
			},
			{
				id: 4,
				hasCaret: true,
				icon: "folder-close",
				label: (
					<Tooltip content="foo" position={Position.RIGHT}>
						Folder 2
					</Tooltip>
				),
				childNodes: [
					{ id: 5, label: "No-Icon Item" },
					{ id: 6, icon: "tag", label: "Item 1" },
					{
						id: 7,
						hasCaret: true,
						icon: "folder-close",
						label: "Folder 3",
						childNodes: [
							{ id: 8, icon: "document", label: "Item 0" },
							{ id: 9, icon: "tag", label: "Item 1" },
						],
					},
				],
			},
		],
	},
	{
		id: 2,
		hasCaret: true,
		icon: "folder-close",
		label: "Super secret files",
		disabled: true,
	},
];
/* tslint:enable:object-literal-sort-keys */

// interface INavButtonProps {
// 	name: string;
// 	iconId: any;
// 	position: Position | undefined;
// 	collapsed: true | false;
// }

// function NavButton (props: INavButtonProps) {
// 	const {name, iconId, position, collapsed } = props;

// 	return (
// 		<>
// 			<Tooltip
// 				content={name}
// 				inheritDarkTheme={true}
// 				position={position ? position :  Position.TOP_LEFT}
// 				disabled={collapsed}
// 			>
// 				<li className={collapsed ? 'navbar-list collapsed' : 'navbar-list'}>
// 					<div className="navbar-icon">
// 							<Icon 
// 									icon={iconId}
// 									iconSize={16}
// 							/>
// 					</div>
// 					<div className="navbar-title">
// 							<H4>{name}</H4>
// 					</div>
// 				</li>
// 			</Tooltip>
// 		</>
// 	)
// }