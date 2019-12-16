import React, { Component } from "react";
import './Ketobito.css'
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar";
// import ApiManager from "./modules/ApiManager";

class Ketobito extends Component {
  // user doesn't exist by default
  state = {
    user: false
  }

  // isAuthenticated checks if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (results) => {
    localStorage.setItem("credentials", results[0].id)
    this.setState({
      user: this.isAuthenticated()
    });
  }
  // logs user out//
  clearUser = () =>  {
    localStorage.removeItem("credentials")
    this.setState({user: this.isAuthenticated()});
  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} 
                          handleLogin={this.handleLogin}/>
      </>
    );
  }
}

export default Ketobito;