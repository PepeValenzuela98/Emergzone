import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import LogoSource from '../img/Logo.png';

const Logo = ({invert}) => {
  return (
    <View style={styles.container}>
      <Image
        source={LogoSource}
        style={{
          width: 130,
          height: 130,
        }}
      />
      <Text style={{...styles.name, color: invert ? '#fff' : '#31AFB4'}}>
        EMERGZONE
      </Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  name: {fontFamily: 'MPLUSRounded1c-ExtraBold', fontSize: 32},
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
});
