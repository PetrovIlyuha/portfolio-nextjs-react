import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";

import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      userData = response.data;
    } catch (err) {
      console.log(err);
    }

    return { initialData: [1], userData };
  }
  constructor(props) {
    super(props);

    this.state = {
      title: "I am plain Index page",
      changed: false
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  updateTitle = () => {
    if (this.state.changed) {
      this.setState({ title: "Updated Index Page", changed: false });
    } else {
      this.setState({ title: "Back to Normal", changed: true });
    }
  };

  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;
    return (
      <BaseLayout>
        <h1>Index page</h1>
        <h2>{title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;
