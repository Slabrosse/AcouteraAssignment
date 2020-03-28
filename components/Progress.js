import React from "react";
import "/Users/sarahlabrosse/react-app/my-app/my-app/src/progress.css";

function Progress() {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="70"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "5%" }}
      >
        {" "}
        0%
        <span className="sr-only">70% Complete</span>
      </div>
    </div>
  );
}

export default Progress;
