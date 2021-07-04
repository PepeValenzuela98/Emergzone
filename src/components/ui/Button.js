import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({text, invert, onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: invert ? '#fff' : '#31AFB4',
        borderWidth: invert && 1,
        borderColor: invert && '#31AFB4',
        ...style,
      }}>
      <Text style={{...styles.text, color: !invert ? '#fff' : '#31AFB4'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,

    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
