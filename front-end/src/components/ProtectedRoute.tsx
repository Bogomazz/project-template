import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { StoreContext } from "../store/store.context";
import { Store } from "../store/store.interface";

export class ProtectedRoute extends React.Component<any, any, Store>{

  async componentDidMount() {
    if (this.context.user) {
      this.setState({pass: true});
      return;
    }

    try {
      const {user} = await AuthService.getCurrentSession();
      this.context.setUser(user);
    } catch (e) {
      console.error(e);
      this.setState({unauthorized: true});
    }
  }

  componentDidUpdate() {
    if (this.context.user && !this.state.pass) {
      this.setState({pass: true, unauthorized: false});
      return;
    } 
    
    if (!this.context.user && this.state.pass) {
      this.setState({pass: false, unauthorized: true});
    }
  }

  constructor(props: any) {
    super(props);

    this.state = {
      pass: false,
      unauthorized: false
    }
  }

  render() {
    const {component: Component, ...rest} = this.props;

    return (
      <Route {...rest} render={(props) => {
          if (this.state.pass) {
            return <Component {...props} />;
          }

          if (this.state.unauthorized) {
            return <Redirect to='/auth' />;
          }

          return <div>Loading...</div>
        }} 
      />
    )
  }
}

ProtectedRoute.contextType= StoreContext;