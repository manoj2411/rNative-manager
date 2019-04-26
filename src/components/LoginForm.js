import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Header } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends React.Component {

  emailChangeHandler(text) {
    this.props.emailChanged(text);
  }

  passwordChangeHandler(text) {
    this.props.passwordChanged(text);
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
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="mypassword"
              onChangeText={this.passwordChangeHandler.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Button>Log in</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default connect(null, { emailChanged, passwordChanged })(LoginForm);
