import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

interface navigatioprops {
  navigation: any;
}

const HomeScreen: React.FC<navigatioprops> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go To Main Screen"
        onPress={() => {
          navigation.navigate('ZellerScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
