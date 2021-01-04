import React from "react";
import { AuthService } from "../../services/auth.service";
import { StoreContext } from "../../store/store.context";
import { HomeButton } from "./home-button";

export class HeaderView extends React.Component<{userName: string; logOutHandler: () => void}> {
  render() {
    return (
      <div style={{
        display: 'flex',
        height: '40px',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '0 20px'
      }}>
        <div>
          <HomeButton />
        </div>
        <div onClick={this.props.logOutHandler}>
          {this.props.userName}
        </div>
      </div>
    )
  }
}
export class Header extends React.Component {

  logOutHandler = () => {
    AuthService.logout();
    this.context.setUser(null);
  }

  render() {
    const userName = this.context.user?.name || '';
    return <HeaderView userName={userName} logOutHandler={this.logOutHandler}/>
  }
}
Header.contextType=StoreContext;