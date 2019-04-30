import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeesList from './components/EmployeesList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" initial />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeesList"
          component={EmployeesList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" title="New Employee" component={EmployeeCreate} />
      </Scene>
    </Scene>

  </Router>
);

export default RouterComponent;
