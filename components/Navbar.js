import React from "react";
import "/Users/sarahlabrosse/react-app/my-app/my-app/src/navigation.css";

function Navbar() {
  return (
    <body className="red-dot">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img
            src="https://tinyurl.com/tvdevdr"
            alt="Company logo"
            className="img2"
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="#" className="nav-link">
                My Dashboard
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Messages
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>

            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
      ></script>
    </body>
  );
}

export default Navbar;
