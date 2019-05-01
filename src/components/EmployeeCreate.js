import React from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { Card, CardSection, Button, Input, Label } from './common';
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Label text="Shift" />
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
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
