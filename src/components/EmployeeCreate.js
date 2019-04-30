import React from 'react';
import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends React.Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Tom"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="888 888 8888"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>

      </Card>
    );
  }
}

export default EmployeeCreate;
