import { throws } from "assert";
import React from "react";
import { AuthService } from "../../services/auth.service";
import { StoreContext } from "../../store/store.context";
import { Store } from "../../store/store.interface";

export class AuthPage extends React.Component<any, {nameValue: string; passwordValue: string}, Store> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameValue: '',
      passwordValue: '',
    }
  }

  handleAuth = async () => {
    try {
      const {user} = await AuthService.login(this.state.nameValue, this.state.passwordValue);
      this.context.setUser(user);
      this.props.history.push('/');
    } catch (e) {
      alert(e.message);
    }
  }
  
  handleRegister = async () => {
    try {
      const {user} = await AuthService.register({
        name: this.state.nameValue, 
        password: this.state.passwordValue
      });
      this.context.setUser(user);
      this.props.history.push('/');
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div>
        <div>
          <input 
            type='text' 
            placeholder='Name'
            value={this.state.nameValue} 
            onChange={(event) => this.setState({nameValue: event.target.value})} 
            />
          <br />
          <input 
            type='text' 
            placeholder='Password'
            value={this.state.passwordValue} 
            onChange={(event) => this.setState({passwordValue: event.target.value})} 
          />
        </div>
        <div>
          <button onClick={this.handleAuth}>Auth</button>
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    )
  }
}
AuthPage.contextType=StoreContext;