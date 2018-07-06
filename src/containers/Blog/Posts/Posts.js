import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link } from "react-router-dom";

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
    this.setState({ selectedPostId: id });
    console.log("[SelectedPostID]" + id + this.selectedPostId);
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center" }}> Something Went Wrong!!! </p>
    );
    if (!this.state.errorOccured) {
      posts = this.state.posts.map(post => {
        return (
          <Link key={post.id} to={"/" + post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.selectedPostHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
