import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/Logo';
import Button from '../../components/ui/Button';
import SocialLogin from '../../components/ui/SocialLogin';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#42D9C8', '#326771']}
      style={styles.linearGradient}>
      <Logo invert />

      <View style={styles.contentContainer}>
        <Text
          style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 20}}>
          BIENVENIDO
        </Text>
        <Button
          text="Iniciar sesión"
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{marginBottom: 35}}
        />
        <Button
          text="Registrarse"
          onPress={() => {
            navigation.navigate('Register');
          }}
          invert
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 70}}>
        <Text style={{color: '#fff', marginBottom: 20}}>Entrar con</Text>
        <View style={{flexDirection: 'row'}}>
          <SocialLogin social="google" />
          <SocialLogin social="facebook" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 20,

    margin: 10,
    borderRadius: 10,
    marginTop: 50,
    marginHorizontal: 20,
  },
});
