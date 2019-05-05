import React from 'react';
import { Text, Modal, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button'; // cannot fetch from index bcz it'll circluar dependecy then

const Confirm = ({ children, visible, onAccept, onDeny }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.container}>

      <CardSection style={styles.cardSection}>
        <Text style={styles.text}>
          {children}
        </Text>
      </CardSection>

      <CardSection>
        <Button opPress={onAccept}>
          Yes
        </Button>
        <Button onPress={onDeny}>
          No
        </Button>
      </CardSection>

    </View>
  </Modal>
);

const styles = {
  cardSection: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};
export { Confirm };
