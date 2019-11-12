import React, { Component } from "react";
import Link from "next/link";
import { Link as NextLink } from "../../routes";

class Header extends Component {
  render() {
    const title = this.props.title;

    return (
      <React.Fragment>
        <p>{title}</p>
        {this.props.children}
        <p className="custonClass">I am styled P element</p>
        <p className="customClassFromFile">I am styled P element</p>
        <div className="header">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/portfolios">
            <a>Portfolios</a>
          </Link>
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
          <Link href="/cv">
            <a>CV</a>
          </Link>
          <NextLink route="test" params={{ id: "1" }}>
            Test 1
          </NextLink>
          <NextLink route="/test/2">Test 2</NextLink>
        </div>
        <style jsx>{`
          a {
            font-size: 20px;
            text-decoration: none;
            padding: 20px;
            color: #fff;
          }
          .header {
            display: flex;
            justify-content: space-around;
            background: linear-gradient(to left, #1e130c, #9a8478);
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Header;
