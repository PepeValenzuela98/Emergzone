import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import AuthStack from './stacks/AuthStack';
import MainStack from './stacks/MainStack';

const Stack = createStackNavigator();

const Navigation = () => {
  const {authenticated, token} = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      //TODO: Authenticate
    }
  }, []);

  return (
    <Stack.Navigator headerMode={'none'}>
      {!authenticated ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="Main" component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
