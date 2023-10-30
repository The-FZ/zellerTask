import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {goBackButtonProps} from 'types';

const Goback: React.FC<goBackButtonProps> = ({goBack}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={goBack}>
      <Text style={styles.buttonText}>Go Back</Text>
    </TouchableOpacity>
  );
};

export default Goback;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0084ff',
  },
  buttonText: {
    color: '#fff',
  },
});
