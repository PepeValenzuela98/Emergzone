import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Logo from '../../components/Logo';
import {useForm} from 'react-hook-form';
import Input from '../../components/forms/Input';
import Button from '../../components/ui/Button';
import SocialLogin from '../../components/ui/SocialLogin';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {userLoginAction} from '../../actions/userActions';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(userLoginAction(data));
  };

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Logo />
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 70,
        }}>
        <Input
          control={control}
          defaultValue=""
          name="email"
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          }}
          error={{name: errors.email, msg: 'El email no es valido'}}
          placeholder="Correo electrónico"
        />
        <Input
          control={control}
          defaultValue=""
          name="password"
          rules={{required: true}}
          error={{name: errors.password, msg: 'La contraseña es requerido'}}
          placeholder="Contraseña"
          secureTextEntry
          textRight="¿La olvidó?"
        />

        <Button
          text="Iniciar sesión"
          onPress={handleSubmit(onLogin)}
          style={{marginTop: 35}}
        />

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{marginBottom: 20, color: '#000'}}>
            O iniciar sesión con...
          </Text>
          <View style={{flexDirection: 'row'}}>
            <SocialLogin social="google" />
            <SocialLogin social="facebook" />
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text>¿Eres nuevo?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{fontWeight: '700', color: '#31AFB4'}}>
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
