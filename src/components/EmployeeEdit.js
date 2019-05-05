import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeePropChange, employeeUpdate, employeeDelete } from '../actions';

class EmployeeEdit extends React.Component {

  constructor(props) {
    super(props);
    _.forOwn(this.props.employee, (value, prop) => {
      this.props.employeePropChange({ prop, value });
    });
    this.state = { modalVisibility: false };
  }

  handleSubmit() {
    const { name, phone, shift, employee } = this.props;

    this.props.employeeUpdate({ name, phone, shift, uid: employee.uid });
  }

  handleTextSend() {
    const { name, phone, shift } = this.props;
    const message = `Hi ${name}, your upcoming shift is on ${shift}.`;
    Communications.text(phone, message);
  }
  handleDeny() {
    console.log('Cancelling');
    this.setState({ modalVisibility: false });
  }

  handleAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.handleSubmit.bind(this)}>
            Update
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.handleTextSend.bind(this)}>
            Send text
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ modalVisibility: true })}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.modalVisibility}
          onAccept={this.handleAccept.bind(this)}
          onDeny={this.handleDeny.bind(this)}
        >
          Are you sure you want to fire her?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps,
                       { employeePropChange, employeeUpdate, employeeDelete }
                      )(EmployeeEdit);
