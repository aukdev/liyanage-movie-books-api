// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  getUserName() {
    return localStorage.getItem("logedin_username");
  }

  login(idToken, data) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("logedin_username", data.login.user.username);
    // console.log(data);
    // window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("logedin_username");
    // this will reload the page and reset the state of the application
    // window.location.assign("/");
  }
}

export default new AuthService();
