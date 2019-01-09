import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import logo from '../images/initials.png';

import * as routes from '../constants/routes';
import { auth } from '../firebase';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  signOut() {
    auth.doSignOut();
    this.setState({drawerOpen: false});
  }

  render() {
    return (
        <div>
          <AppBar 
            title=
              {
                <img 
                  style={{height: "50px", marginTop: "7px", width: "auto"}} 
                  src={logo} 
                  alt="1DP logo"/>
              }
            titleStyle={{cursor: 'pointer'}}
            showMenuIconButton={this.props.authUser ? true : false}
            iconElementRight={
              this.props.authUser ? 
              <AppBarAuth /> : 
              <AppBarNonAuth 
                signIn={() => this.props.history.push(routes.SIGN_IN)}
                signUp={() => this.props.history.push(routes.SIGN_UP)} />
            }
            onTitleClick={() => 
              this.props.authUser ? 
              this.props.history.push(routes.HOME) :
              this.props.history.push(routes.LANDING)
            }
            onLeftIconButtonClick={() => this.setState({drawerOpen: true})} />

          <Drawer
            docked={false}
            open={this.state.drawerOpen}
            onRequestChange={() => this.setState({drawerOpen: !this.state.drawerOpen})}>
            { 
              this.props.authUser ? 
              <NavigationAuth 
                onSignOut={this.signOut} 
                onClick={() => this.setState({drawerOpen: false})} /> : 
              <NavigationNonAuth onClick={() => this.setState({drawerOpen: false})} /> 
            }
          </Drawer>
        </div>
    );
  }
}

const NavigationAuth = (props) =>
  <div>
    <MenuItem
      onClick={props.onClick}
      primaryText="Home" 
      containerElement={<Link to={routes.HOME} />} />
    
    <MenuItem 
      onClick={props.onClick}
      primaryText="Account" 
      containerElement={<Link to={routes.ACCOUNT} />} />
    
    <MenuItem 
      onClick={props.onSignOut}
      primaryText="Sign Out"
      containerElement={<Link to={routes.LANDING} />} />
  </div>

const AppBarAuth = (props) => <div></div>

const NavigationNonAuth = (props) =>
  <div>
    <MenuItem
      onClick={props.onClick}
      primaryText="Landing" 
      containerElement={<Link to={routes.LANDING} />} />
  </div>

const AppBarNonAuth = (props) => 
  <div style={{paddingTop: '6px'}}>
    <FlatButton 
      style={{marginRight: '15px'}} 
      onClick={props.signIn} 
      label="Sign In" 
      secondary={true} />
    <RaisedButton onClick={props.signUp} label="Sign Up" secondary={true} />
  </div>

export default withRouter(Navigation);
