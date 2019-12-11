import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// *****************  HOME  ***********************
import Home from "./home/Home";
import Login from "./auth/Login";
import Registration from "./auth/RegisterAccount";
// *****************  FORM  ***********************
// import ArticlesForm from "./articles/ArticlesForm";
// *****************  LIST  ***********************
// import ArticlesList from "./articles/ArticlesList";
// *****************  EDIT  ***********************
// import ArticlesEditForm from "./articles/ArticlesEditForm";


export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
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

        {/* FOODS
        <Route
          exact path="/foods" render={props => {
            return <FoodsList {...props} />

          }}
        />
        <Route path="/foods/new" render={props => {
          return <FoodForm {...props} />
        }}
        />
        <Route
          path="/foods/:foodId(\d+)/edit" render={props => {
            return <FoodEditForm {...props} />
          }}
          />

        <Route
          path="/foods" render={props => {
            return null
            // Remove null and return the component which will show the user's foods
          }}
        />
        {/* SHOPPINGLISTS */}
        {/* <Route 
          exact path="/shoppingLists" render={props => {
            return <ShoppingListsList 
            {...props} />
        }}
        />

        <Route path="/shoppingLists/new" render={props => {
          return <ShoppingListsForm 
          {...props} />
        }}
        />

        <Route
          path="/shoppingLists/:shoppingListId(\d+)/edit" render={props => {
            return <ShoppingListsEditForm 
            {...props} />
        }}
        /> */}
        {/* SAVED FOODS??? */}
        {/* <Route
          exact path="/events" render={props => {
            if (this.props.user) {
              return <EventsList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        />
        <Route path="/events/new" render={props => {
          return <EventForm {...props} />
        }}
        />
        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }}
        /> */}
      </React.Fragment>
    );
  }
}
