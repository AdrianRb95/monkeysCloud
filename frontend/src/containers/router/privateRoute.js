import React, { memo } from "react";
import { Redirect, Route, useLocation } from "react-router";
import useAuthActions from "../../store/auth/actions";
function PrivateRoute({ component: Component, user, ...rest }) {
  const location = useLocation();
  const { state } = useAuthActions();
  console.log(state, "state");
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default memo(PrivateRoute);
