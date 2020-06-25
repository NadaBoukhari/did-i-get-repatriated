import React from "react";
import { Route, Redirect } from "react-router-dom";
import authenticate from "../authentification/authenticate";

const ProtectedRoute = ({ Component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticate.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
