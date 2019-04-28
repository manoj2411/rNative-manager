import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Header, Spinner } from './common';
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.loginBtnPressHandler.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <View>
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
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorText}>{this.props.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      </View>
    );
  }
}

const styles = {
  errorText: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps,
                       { emailChanged, passwordChanged, loginUser }
                      )(LoginForm);
