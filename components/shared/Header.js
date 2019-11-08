import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
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
        </div>
        <style jsx>{`
          a {
            font-size: 20px;
            text-decoration: none;
            padding: 20px;
            color: teal;
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
