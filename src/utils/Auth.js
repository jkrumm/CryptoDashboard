/* tslint:disable */
import auth0 from "auth0-js";

// const LOGIN_SUCCESS_PAGE = "/";
// const LOGIN_FAILURE_PAGE = "/";

export class Auth {
	constructor() {
   this.auth0 = new auth0.WebAuth({
      domain: "insightapp.eu.auth0.com",
      audience: 'https://insightapp.eu.auth0.com/userinfo',
      clientID: "tJNFjluhdu6VOqSkbckxhMAKl3mqu8HW",
      redirectUri: "http://localhost:3000/callback",
      // audience: "insightapp.eu.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "open"
    });
		this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setSession = this.setSession.bind(this);
  }
  
  getProfile() {
    return this.profile;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        console.log(authResult);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        console.log("worked");
        this.setSession(authResult);
        resolve();
      });
    })
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // clear id token and expiration
    this.idToken = null;
    this.expiresAt = null;
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  }
}