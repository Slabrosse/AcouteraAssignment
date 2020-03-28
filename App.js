import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <body className="app-body">
          <div className="projects">
            <h6>
              <strong>My Project - 4827 West 9th Avenue, Vancouver</strong>
            </h6>
            <h6>Timeline</h6>
            <Progress />
            <form>
              <section class="to-do">
                <input
                  type="checkbox"
                  id="task1"
                  name="task"
                  value="Plumbing (2 days)"
                  className="make-round"
                />
                <label for="task1" class="my-label">
                  <strong>Plumbing (2 days)</strong>
                </label>
                <br />
                <input
                  type="checkbox"
                  id="task2"
                  name="task"
                  value="Floor Removal (1 day)"
                  className="make-round"
                />
                <label for="task2" class="my-label">
                  Floor Removal (1 day)
                </label>
                <br />
                <input
                  type="checkbox"
                  id="task3"
                  name="task"
                  value="Floor Installation (2 days)"
                  className="make-round"
                />
                <label for="task3" class="my-label">
                  {" "}
                  Floor Installation (2 days)
                </label>
                <br />
                <input
                  type="checkbox"
                  id="task4"
                  name="task"
                  value="Painting (2 days)"
                  className="make-round"
                />
                <label for="task4" class="my-label">
                  Painting (2 days)
                </label>
              </section>
            </form>
          </div>
          <div className="side-bar">
            <img
              src="https://tinyurl.com/vk2vvhq"
              className="img1"
              alt="A woman smiling"
            />
            <h6 className="side-text-1">
              <strong>Nancy Jackson</strong>
              <br />
              <em>Homeowner</em> <br /> <br />
            </h6>
            <h6 className="side-text-2">
              Message <br />
              <br />
              Contractor <br />
              <br />
              Settings
            </h6>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
