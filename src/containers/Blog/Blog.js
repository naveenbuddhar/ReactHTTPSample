import React, { Component } from "react";
//import axios from "axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
//import NewPost from "./NewPost/NewPost.js";
//import { Link } from "react-router-relative-link";
import FullPost from "./FullPost/FullPost.js";
import AsyncComponent from "../../hoc/asyncComponent.js";

const AsyncNewPost = AsyncComponent(() => {
  return import("./NewPost/NewPost.js");
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  //assign the classname from css
                  activeClassName="my-active"
                  //Inline Styling
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    //Relative path using react-router-relative-link
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1> home </h1>} />*/}
        {/*Switch execute only first match URL*/}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}

          <Route path="/posts" component={Posts} />
          {/*<Redirect from="/" to="/posts" />*/}
          <Route render={() => <h1> Page Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
