import React, {useEffect, useState, createRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CodeInput = ({numberFields, setValue}) => {
  const [refs, setRefs] = useState([]);
  const [code, setCode] = useState('');
  useEffect(() => {
    setRefs(ref =>
      Array(numberFields)
        .fill()
        .map((_, i) => ref[i] || createRef()),
    );
  }, [numberFields]);

  useEffect(() => {
    setValue(code);
  }, [code]);

  return (
    <View style={styles.container}>
      {[...Array(numberFields).keys()].map((number, i) => (
        <TextInput
          ref={refs[i]}
          key={i}
          maxLength={1}
          style={styles.input}
          keyboardType="numeric"
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              setCode(code.slice(0, -1));
            }
            if (nativeEvent.key === 'Backspace' && i > 0) {
              refs[i - 1].current.focus();
            }
          }}
          onChangeText={value => {
            setCode(code + value);
            if (value.length !== 0 && i < numberFields - 1) {
              refs[i + 1].current.focus();
            }
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    borderColor: '#ECEBEB',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    width: 40,
    height: 40,
    color: 'black',
  },
});
export default CodeInput;
