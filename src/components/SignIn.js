import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Grid fluid>
        <Row style={{marginTop: "20px"}} center="xs">
          <Col xs={12} md={6} lg={4}>
            <Card style={{padding: "15px"}}>
              <CardTitle title="Sign In" />
              <CardActions>
                <form onSubmit={this.onSubmit}>
                  <TextField
                    fullWidth={true}
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    floatingLabelText="Email Address"
                  /><br />
                  <TextField
                    fullWidth={true}
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type="password"
                    floatingLabelText="Password"
                  /><br />
                  <RaisedButton
                    style={{marginTop: "15px"}}
                    fullWidth={true}
                    disabled={isInvalid} 
                    type="submit" 
                    label="Sign In" 
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

export default withRouter(SignInPage);

export {
  SignInForm,
};
