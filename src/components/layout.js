import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLink,
  heading,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLink}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
