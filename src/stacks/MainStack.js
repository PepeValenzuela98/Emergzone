import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Location from '../screens/main/Location';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ubicacion"
        component={Location}
        tabBarOptions={{
          activeTintColor: '#42D6C6',
          inactiveTintColor: '#28464B',
          labelStyle: {fontSize: 14},
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon
              type="font-awesome-5"
              name="bus"
              size={26}
              color={color}
            />
          ),
          headerShowns: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
