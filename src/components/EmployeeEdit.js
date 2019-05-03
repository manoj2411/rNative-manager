import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeePropChange, employeeUpdate } from '../actions';

class EmployeeEdit extends React.Component {

  constructor(props) {
    super(props);
    _.forOwn(this.props.employee, (value, prop) => {
      this.props.employeePropChange({ prop, value });
    });
  }

  handleSubmit() {
    const { name, phone, shift, employee } = this.props;

    this.props.employeeUpdate({ name, phone, shift, uid: employee.uid });
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

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeePropChange, employeeUpdate })(EmployeeEdit);
