import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./components/elements/header";
import { AuthPage } from "./components/pages/AuthPage";
import { CategoriesPage } from "./components/pages/CategoriesPage";
import { CategoryPage } from "./components/pages/CategoryPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute 
            exact
            path='/'
            component={() => <Redirect to="/categories" />} 
          />
          <Route path='/auth' component={(props: any) => <AuthPage {...props}/>} />
          <ProtectedRoute 
            exact 
            path='/categories'
            component={CategoriesPage}
          />
          <ProtectedRoute 
            exact 
            path='/categories/:id'
            component={(props: any) => <CategoryPage {...props}/>} 
          />
          <ProtectedRoute 
            exact
            path='/categories/:id/create-product' 
            component={(props: any) => <CategoryPage {...props}/>} 
          />

        </Switch>
      </Router>
    )
  }
}