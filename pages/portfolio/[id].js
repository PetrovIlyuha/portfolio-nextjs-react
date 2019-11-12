import React, { Component } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = response.data;
    } catch (err) {
      console.log(err);
    }

    return { post };
  }

  render() {
    const { post } = this.props;
    return (
      <BaseLayout>
        <h1>Portfolio Page</h1>
        <h2>{this.props.router.query.id}</h2>
        <h3>{post.title}</h3>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
