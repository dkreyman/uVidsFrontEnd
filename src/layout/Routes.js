import React from "react";

import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import VideosMain from "./videos/VideosMain";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <VideosMain />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
