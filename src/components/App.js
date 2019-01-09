import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { firebase } from '../firebase';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../constants/muiTheme';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState({authUser: authUser || null});
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router>
          <div>
            
            <Navigation authUser={this.state.authUser} />

            <Route
              exact 
              path={routes.LANDING}
              component={() => <LandingPage />} />
            
            <Route
              exact 
              path={routes.SIGN_UP}
              component={() => <SignUpPage />} />
            
            <Route
              exact 
              path={routes.SIGN_IN}
              component={() => <SignInPage />} />
            
            <Route
              exact 
              path={routes.PASSWORD_FORGET}
              component={() => <PasswordForgetPage />} />
            
            <Route
              exact 
              path={routes.HOME}
              component={() => this.state.authUser ? <HomePage /> : <Redirect to={routes.LANDING} />} />
            
            <Route
              exact 
              path={routes.ACCOUNT}
              component={() => this.state.authUser ? <AccountPage /> : <Redirect to={routes.LANDING} />} />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}


export default App;
