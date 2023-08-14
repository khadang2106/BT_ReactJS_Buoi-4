import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="container navbar navbar-expand-md navbar-dark">
          {/* Brand  */}
          <a className="navbar-brand" href="#">
            Cyber Shoes
          </a>
          {/* Toggler/collapsibe Button  */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Store
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
