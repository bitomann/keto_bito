import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// *****************  HOME  ***********************
import Home from "./home/Home";
import Login from "./auth/Login";
import RegisterAccount from "./auth/RegisterAccount";
// *****************  FOOD  ***********************
import FoodEditForm from "./Foods/FoodEditForm";
import FoodForm from "./Foods/FoodForm";
import FoodList from "./Foods/FoodList";
import FoodDetail from "./Foods/FoodDetail";
// *****************  SHOPPING LIST  **************
import "./home/Home.css"
import ShoppingList from "../components/ShoppingList/ShoppingList";


export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <>
      <div id="homeBackground" >
            </div>
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
          return <RegisterAccount {...this.props}{...props} />
        }}
        />
        <Route path="/register" render={props => {
          return <ShoppingList {...props} />
          
          
        }}
        />
        

        {/* FOODS */}
        <Route
          exact path="/foods" render={props => {
            // return <FoodList {...props} />
            if (this.props.user) {
              return <FoodList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        <Route path="/foods/new" render={props => {
          if (this.props.user) {
            return <FoodForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
           <Route exact path="/foods/:foodId(\d+)" render={(props) => { 
             if (this.props.user) {
              return <FoodDetail foodId={parseInt(props.match.params.foodId)} {...props}/>
            } else {
              return <Redirect to="/login" />
            }
           }}
           />
        <Route
         exact path="/foods/:foodId(\d+)/edit" render={props => {
          if (this.props.user) {
            return <FoodEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
          }}
          />

          {/* SHOPPING LIST */}
          <Route path="/shoppinglist" render={props => {
            if (this.props.user) {
              return <ShoppingList {...props} />
            } else {
              return <Redirect to="/login" />
            }
        }}
        />
      </>
    );
  }
}
