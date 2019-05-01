import React from 'react';
import { Text } from 'react-native';

const Label = ({ text }) => (
  <Text style={styles.label}>{text}</Text>
);

const styles = {
  label: {
    fontSize: 18,
    paddingLeft: 20
  },
};
export { Label };
