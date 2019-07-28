/* tslin:disbale no-restricted-globals */
import axios from 'axios';
// const LOGIN_SUCCESS_PAGE = "/";
// const LOGIN_FAILURE_PAGE = "/";

export class Auth {
  login(history) {
    axios.post('http://localhost:7001/auth/login',{
        email: 'jokrumm@gmail.com',
        password: 'test123456'
    })
      .then(function (response) {
        // handle success
        if (response.data.token) {
          const authResult = response.data.token;
          let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
          localStorage.setItem('access_token', authResult.accessToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', expiresAt);
          // navigate to the home route
          history.push('/');
        } else {
          console.log("test")
        }
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  // removes user details from localStorage
  logout(history) {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.push('/');
  }

  // Sets user details in localStorage
  setSession(authResult) {
    
  }

   // checks if the user is authenticated
  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getProfile() {
    return {name: "test"};
  }

	// constructor() {
  //  this.auth0 = new auth0.WebAuth({
  //     domain: "insightapp.eu.auth0.com",
  //     audience: 'https://insightapp.eu.auth0.com/userinfo',
  //     clientID: "tJNFjluhdu6VOqSkbckxhMAKl3mqu8HW",
  //     redirectUri: "http://localhost:3000/callback",
  //     // audience: "insightapp.eu.auth0.com/userinfo",
  //     responseType: "token id_token",
  //     scope: "open"
  //   });
	// 	this.getProfile = this.getProfile.bind(this);
  //   this.handleAuthentication = this.handleAuthentication.bind(this);
  //   this.isAuthenticated = this.isAuthenticated.bind(this);
  //   this.login = this.login.bind(this);
  //   this.logout = this.logout.bind(this);
  //   this.setSession = this.setSession.bind(this);
  // }
  
  // getProfile() {
  //   return this.profile;
  // }

  // handleAuthentication() {
  //   return new Promise((resolve, reject) => {
  //     this.auth0.parseHash((err, authResult) => {
  //       if (err) return reject(err);
  //       console.log(authResult);
  //       if (!authResult || !authResult.idToken) {
  //         return reject(err);
  //       }
  //       console.log("worked");
  //       this.setSession(authResult);
  //       resolve();
  //     });
  //   })
  // }

  // isAuthenticated() {
  //   return new Date().getTime() < this.expiresAt;
  // }

  // login() {
  //   this.auth0.authorize();
  // }

  // logout() {
  //   // clear id token and expiration
  //   this.idToken = null;
  //   this.expiresAt = null;
  // }

  // setSession(authResult) {
  //   this.idToken = authResult.idToken;
  //   this.profile = authResult.idTokenPayload;
  //   // set the time that the id token will expire at
  //   this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  // }
}