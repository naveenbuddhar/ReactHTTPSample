import React, { Component } from "react";
//import axios from "axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";
import NewPost from "./NewPost/NewPost.js";
//import { Link } from "react-router-relative-link";
import FullPost from "./FullPost/FullPost.js";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
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
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" component={FullPost} />
      </div>
    );
  }
}

export default Blog;
