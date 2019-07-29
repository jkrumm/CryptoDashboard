/* tslint:disable */
import { Classes } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ILayoutStore } from "../../stores/LayoutStore";
import { IUserStore } from "../../stores/UserStore";
import { Scrollbars } from 'react-custom-scrollbars';
import { Route } from 'react-router-dom';
import "./App.scss";
import { withRouter, RouteComponentProps } from "react-router";
import { Home } from "../../container/Home/Home"


// const auth = new Auth();

// Single Routing

// const Home = () => (
//   <div>
//     <h2> Home </h2>
//   </div>
// );

// const Airport = () => (
//   <div>
//      <ul>
//       <li>Jomo Kenyatta</li>
//       <li>Tambo</li>
//       <li>Murtala Mohammed</li>
//     </ul>
//   </div>
// );

// const City = () => (
//   <div>
//     <ul>
//       <li>San Francisco</li>
//       <li>Istanbul</li>
//       <li>Tokyo</li>
//     </ul>
//   </div>
// );

{/* <div>
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/airports">Airports</Link></li>
		<li><Link to="/cities">Cities</Link></li>
	</ul>

	<Route path="/" component={Home}/>
	<Route path="/airports" component={Airport}/>
	<Route path="/cities" component={City}/>
</div> */}

// Nestes Routing

// const Courses = ({ match }) => (
// <div>
// 	<ul>
// 		{/* <li><Link to="/courses/technology">Technology</Link></li>
// 		<li><Link to="/courses/business">Business</Link></li>
// 		<li><Link to="/courses/economics">Economics</Link></li> */}
// 		<li><Link to={`${match.url}/technology`}>Technology</Link></li>
// 		<li><Link to={`${match.url}/business`}>Business</Link></li>
// 		<li><Link to={`${match.url}/economics`}>Economics</Link></li>
// 	</ul>
// 	{/* <Route exact path="/courses/technology" render={() => (<div> This is technology </div>)}/>
// 	<Route path="/courses/business" component={() => (<div> This is business </div>)}/>
// 	<Route path="/courses/economics" component={() => (<div> This is economics </div>)}/> */}
// 	{/* <Route exact path={`${match.path}/technology`} render={() => (<div> This is technology </div>)}/>
// 	<Route path={`${match.path}/business`} component={() => (<div> This is business </div>)}/>
// 	<Route path={`${match.path}/economics`} component={() => (<div> This is economics </div>)}/> */}
// 	<Route exact path={`${match.path}/:course`} render={({match}) => (<div> This is {match.params.course} </div>)}/>
//   </div>
// );

{/* <div>
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/courses">Courses</Link></li>
		<li><Link to="/cities">Cities</Link></li>
	</ul>

	<Route path="/" exact component={Home}/>
	<Route path="/courses" component={Courses}/>
	<Route path="/cities" component={City}/>
</div> */}

// Protected Routing

// const Public = () => (
//   <div> This is a public page </div>
// );

// const Private = () => (
//   <div> This is a private page <AuthStatus/></div>
// );

// const AuthService = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   logout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const SecretRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     AuthService.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/login',
//           state: { from: props.location }
//         }} />
//   )} />
// );

// class Login extends React.Component<{location: any}> {
//   state = {
//     redirectToPreviousRoute: false
//   };

//   login = () => {
//     AuthService.authenticate(() => {
//       this.setState({ redirectToPreviousRoute: true });
//     });
//   };

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     const { redirectToPreviousRoute } = this.state;

//     if (redirectToPreviousRoute) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

// const AuthStatus = withRouter(({ history }) => (
//   AuthService.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => {
//         AuthService.logout(() => history.push('/'))
//       }}>Sign out</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ));

// {/* <Router>
// 	<div style={{width: 1000, margin: '0 auto'}}>
// 		<ul>
// 			<li><Link to='/public'> Public </Link></li>
// 			<li><Link to='/private'> Private </Link></li>
// 		</ul>

// 		<hr/>

// 		{/* <Route path='/public' component={Public} />
// 		<SecretRoute path='/private' component={Private} /> */}
// 		<Switch>
// 			<Route path='/public' component={Public} />
// 			<Route path="/login" component={Login}/>
// 			<SecretRoute path='/private' component={Private} />
// 			<Route render={() => (<div> Sorry, this page does not exist. </div>)} />
// 		</Switch>
// 	</div>
// </Router> */}

// Auth0 Protected

function HomePage(props) {
	const {authenticated} = props;
	
  if (authenticated) {
    return (
      <Home />
    );
  }

  return (
		<Home />
    // <div>
    //   <h1>I don't know you. Please, log in.</h1>
    //   <button onClick={props.auth.login}>Log in</button>
    // </div>
  );
}

interface IContainerProps {
	layoutStore?: ILayoutStore | any;
	userStore?: IUserStore | any;
	auth: any;
}

@inject("layoutStore", "userStore")
@observer
class App extends React.Component<IContainerProps & RouteComponentProps<any>> {
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

		const authenticated = this.props.auth.isAuthenticated();
			
		return (
			<div className={`${Classes.DARK} app`}>
				<header className="header-wrapper">
					<Header
						auth={this.props.auth}
					/>
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
							<div className="App">
							<Route exact path='/' render={() => (
								<HomePage
									authenticated={authenticated}
									auth={this.props.auth}
									history={this.props.history}
								/>)
							}/>
						</div>
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

export default withRouter(App);