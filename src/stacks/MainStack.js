import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Location from '../screens/main/Location';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

export default MainStack;
