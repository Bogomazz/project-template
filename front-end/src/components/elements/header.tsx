import React from "react";
import { StoreContext } from "../../store/store.context";
import { HomeButton } from "./home-button";

export class HeaderView extends React.Component<{userName: string; displayBackButton: boolean}> {
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
          {
            this.props.displayBackButton && <HomeButton /> || ' '
          }
        </div>
        <div>
          {this.props.userName}
        </div>
      </div>
    )
  }
}
export class Header extends React.Component {
  render() {
    const userName = this.context.user?.name || '';
    const displayBackButton = window.location.pathname !== '/categories';
    return <HeaderView {...{userName, displayBackButton}}/>
  }
}
Header.contextType=StoreContext;