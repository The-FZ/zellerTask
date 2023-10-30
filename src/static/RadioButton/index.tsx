import React from 'react';
import {View, StyleSheet} from 'react-native';
import {radioButtonPropTypes} from '../../../types';

const RadioButton: React.FC<radioButtonPropTypes> = ({
  selected = false,
  id,
}) => {
  return (
    <View testID={`${id}`} style={styles.radioButtonContainer}>
      <View style={styles.radioButton}>
        {selected && <View style={styles.innerCircle} />}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {justifyContent: 'center', alignItems: 'center'},
  radioButton: {
    height: 20,
    width: 20,
    borderColor: '#0084ff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    backgroundColor: '#0084ff',
    borderRadius: 6,
  },
});
