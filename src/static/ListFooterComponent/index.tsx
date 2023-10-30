import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListFooterComponent: React.FC = () => {
  return <View style={styles.footer} />;
};
export default ListFooterComponent;

const styles = StyleSheet.create({
  footer: {height: 2, backgroundColor: '#b3b3b3', marginTop: 20},
});
