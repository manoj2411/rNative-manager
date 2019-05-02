import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends React.Component {

  render() {
    const { name } = this.props.employee;

    return (
      <CardSection>
        <Text style={styles.ttile}>
          { name }
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default ListItem;
