import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeesList extends React.Component {

  constructor(props) {
    super(props);
    this.props.employeesFetch();
  }

  renderEmployees() {
    const { employees } = this.props;

    return Object.keys(employees).map((key) => {
      const employee = employees[key];
      return <Text key={key}>{`Name: ${employee.name} & Phone: ${employee.phone}`}</Text>;
    });
  }

  render() {
    return (
      <View>
        { this.renderEmployees() }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { employees: state.employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeesList);
