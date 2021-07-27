import React from "react";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div>
      <div className="row h-100">
        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
