import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// *****************  HOME  ***********************
import Home from "./home/Home";
import Login from "./auth/Login";
import Registration from "./auth/RegisterAccount";
// *****************  FOOD  ***********************
import FoodEditForm from "./Foods/FoodEditForm";
import FoodForm from "./Foods/FoodForm";
import FoodList from "./Foods/FoodList";
import FoodDetail from "./Foods/FoodDetail";
// *****************  SHOPPING LIST  ***********************


export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <>
        {/* Home and Authentication */}
        <Route exact path="/" render={(props) => {
          return <Home {...props} />
        }}
        />
        <Route
          exact path="/login" render={props => {
            return <Login
              {...props}
              {...this.props}
            />
          }}
        />
        <Route exact path="/register" render={props => {
          return <Registration {...this.props}{...props} />
        }}
        />

        {/* FOODS */}
        <Route
          exact path="/foods" render={props => {
            return <FoodList {...props} />

          }}
        />
        <Route path="/foods/new" render={props => {
          return <FoodForm {...props} />
        }}
        />
           <Route exact path="/foods/:foodId(\d+)" render={(props) => { 
             console.log("Props from react-router-dom", props)
          console.log("This component's props", this.props)
             return <FoodDetail foodId={parseInt(props.match.params.foodId)} {...props}/>
           }}
           />
        <Route
         exact path="/foods/:foodId(\d+)/edit" render={props => {
            return <FoodEditForm {...props} />
          }}
          />
      </>
    );
  }
}
