import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => {
  return (
    <LinearGradient
      colors={['#42D9C8', '#326771']}
      style={styles.linearGradient}>
      <Text>Welcome</Text>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
