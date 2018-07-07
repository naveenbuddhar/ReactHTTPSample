import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost.js";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    errorOccured: false
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Naveen"
          };
        });

        this.setState({ posts: updatedPosts });
        //console.log(response);
      })
      .catch(err => {
        console.log(err);
        //this.setState({ errorOccured: true });
      });
  }
  selectedPostHandler = id => {
    /*this.setState({ selectedPostId: id });
    console.log("[SelectedPostID]" + id + this.selectedPostId);*/
    //programmatically navigating to the link
    this.props.history.push({ pathname: "/posts/" + id });
    //this.props.history.replace("/posts"+id);
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center" }}> Something Went Wrong!!! </p>
    );
    if (!this.state.errorOccured) {
      posts = this.state.posts.map(post => {
        return (
          //<Link key={post.id} to={"/posts/" + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
          //</Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>;
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
