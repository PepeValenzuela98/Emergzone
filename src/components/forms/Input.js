import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Controller} from 'react-hook-form';

const Input = ({
  control,
  rules,
  name,
  defaultValue,
  error,
  textRight,
  onPressTextRight,
  ...props
}) => {
  return (
    <View style={{position: 'relative', marginVertical: 10}}>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#DEDEDE"
            {...props}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
      {textRight && (
        <TouchableOpacity
          onPress={onPressTextRight}
          style={{position: 'absolute', right: 10, top: 20}}>
          <Text style={{color: '#31AFB4'}}>{textRight}</Text>
        </TouchableOpacity>
      )}
      {error.name && <Text style={styles.error}>{error.msg}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ECEBEB',
    borderRadius: 20,
    borderWidth: 2,
    color: '#000',
    fontSize: 18,
    height: 60,
    paddingHorizontal: 10,
  },
  error: {color: '#E91515', fontWeight: '300'},
});
