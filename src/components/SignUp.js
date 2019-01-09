import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { db, auth } from '../firebase';

import * as routes from '../constants/routes';

const SignUpPage = ({history}) =>
  <div>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({[propertyName]: value});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Grid fluid>
        <Row style={{marginTop: "20px"}} center="xs">
          <Col xs={12} md={6} lg={4}>
            <Card style={{padding: "15px"}}>
              <CardTitle title="Sign Up" />
              <CardActions>
                <form onSubmit={this.onSubmit}>
                  <TextField
                    fullWidth={true}
                    value={username}
                    onChange={e => this.setState(byPropKey('username', e.target.value))}
                    floatingLabelText="User Name"
                  /><br />
                  <TextField
                    fullWidth={true}
                    value={email}
                    onChange={e => this.setState(byPropKey('email', e.target.value))}
                    floatingLabelText="Email Address"
                  /><br />
                  <TextField
                    fullWidth={true}
                    value={passwordOne}
                    onChange={e => this.setState(byPropKey('passwordOne', e.target.value))}
                    type="password"
                    floatingLabelText="Password"
                  /><br />
                  <TextField
                    fullWidth={true}
                    value={passwordTwo}
                    onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))}
                    type="password"
                    floatingLabelText="Confirm Password"
                  /><br />
                  <RaisedButton
                    style={{marginTop: "15px"}}
                    fullWidth={true}
                    disabled={isInvalid} 
                    type="submit" 
                    label="Sign Up" 
                    primary={true} />

                  { error && <p>{error.message}</p> }
                </form>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const SignUpLink = () =>
  <p style={{textAlign: "center"}}>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
