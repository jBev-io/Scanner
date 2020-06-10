import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './Start';
import Camera from './Camera';
import Crop from './Crop';
import Processing from './Processing';
import Form from './Form';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Crop" component={Crop} />
        <Stack.Screen name="Processing" component={Processing} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
