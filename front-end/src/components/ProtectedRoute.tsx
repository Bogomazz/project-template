import React from "react";
import { Redirect, Route } from "react-router-dom";
import { StoreContext } from "../store/store.context";
import { Store } from "../store/store.interface";

export class ProtectedRoute extends React.Component<any, any, Store>{
  render() {
    const {component: Component, ...rest} = this.props;

    return (
      <Route {...rest} render={(props) => (
        this.context.user
            ? <Component {...props} />
            : <Redirect to='/auth' />
    )} />
    )
  }
}

ProtectedRoute.contextType= StoreContext;