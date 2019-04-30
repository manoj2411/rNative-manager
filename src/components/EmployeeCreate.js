import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends React.Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Tom"
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="888 888 8888"
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log(this.props)}>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
