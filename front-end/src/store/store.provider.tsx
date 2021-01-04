import React from "react";
import {StoreContext} from './store.context';
import { Store } from "./store.interface";

export class StoreProvider extends React.Component<any, Store> {

  constructor(props: any) {
    super(props);
    this.state = {
      categories: null,
      setCategories: (categories) => this.setState({categories}),
      user: null,
      setUser: (user) => this.setState({user}),
    }
  }

  render () {
    return <StoreContext.Provider {...this.props} value={this.state}/>;
  }
}