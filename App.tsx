/* eslint-disable react/react-in-jsx-scope */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import ZellerScreen from './src/Screens/ZellerScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ZellerScreen" component={ZellerScreen} />
    </Stack.Navigator>
  );
}

export default App;
