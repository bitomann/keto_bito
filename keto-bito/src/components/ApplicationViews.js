import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// *****************  HOME  ***********************
import Home from "./home/Home";
import Login from "./auth/Login";
// import Registration from "./auth/RegisterAccount";
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
        {/* FRIENDS */}
        <Route
          path="/friends" render={props => {
            if (this.props.user) {
              return <FriendsList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        />
        {/* MESSAGES */}
        <Route
          exact path="/messages" render={props => {
            if (this.props.user) {
              return <MessagesList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        />
        <Route
          path="/messages/new" render={props => {
            return <MessageForm {...props} />
          }}
        />

        <Route
          exact path="/messages/:messageId(\d+)/edit" render={props => {
            return <MessageEditForm {...props} />
          }} />
        {/* TASKS */}
        <Route
          exact path="/tasks" render={props => {
            return <TasksList {...props} />

          }}
        />
        <Route path="/tasks/new" render={props => {
          return <TaskForm {...props} />
        }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
          }}
          />


        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
        {/* ARTICLES */}
        <Route 
          exact path="/articles" render={props => {
            return <ArticlesList 
            {...props} />
        }}
        />

        <Route path="/articles/new" render={props => {
          return <ArticlesForm 
          {...props} />
        }}
        />

        <Route
          path="/articles/:articleId(\d+)/edit" render={props => {
            return <ArticlesEditForm 
            {...props} />
        }}
        />
        {/* EVENTS */}
        <Route
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
        />
      </React.Fragment>
    );
  }
}
