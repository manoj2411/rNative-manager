import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Header } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends React.Component {

  emailChangeHandler(text) {
    this.props.emailChanged(text);
  }

  passwordChangeHandler(text) {
    this.props.passwordChanged(text);
  }

  loginBtnPressHandler() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <View>
        <Header headerText="Login" />
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="abc@gmail.com"
              onChangeText={this.emailChangeHandler.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="mypassword"
              onChangeText={this.passwordChangeHandler.bind(this)}
              value={this.props.passwords}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.loginBtnPressHandler.bind(this)}>
              Log in
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps,
                       { emailChanged, passwordChanged, loginUser }
                      )(LoginForm);
