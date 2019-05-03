import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeCreate, employeeFormReset } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.props.employeeFormReset();
  }

  handleSubmit() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.handleSubmit.bind(this)}>
            Create
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

export default connect(mapStateToProps, { employeeCreate, employeeFormReset })(EmployeeCreate);
