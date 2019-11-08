import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "I am plain Index page"
    };
    console.log("constructor");
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

  updateTitle() {
    this.setState({ title: "Updated Index Page" });
  }

  render() {
    console.log("rendered ");
    return (
      <BaseLayout>
        <h1>Index page</h1>
        <h2>{this.state.title}</h2>
        <button onClick={() => this.updateTitle()}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;
