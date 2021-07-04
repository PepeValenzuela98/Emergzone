import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Logo from '../../components/Logo';
import {useForm} from 'react-hook-form';
import Input from '../../components/forms/Input';
import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const navigation = useNavigation();

  const onRegister = data => {
    navigation.navigate('VerifyCode');
  };
  return (
    <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
      <Logo />
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 50,
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
          name="name"
          rules={{required: true}}
          error={{name: errors.name, msg: 'El nombre es requerido'}}
          placeholder="Nombre"
        />
        <Input
          control={control}
          defaultValue=""
          name="password"
          rules={{required: true, min: 8}}
          error={{name: errors.password, msg: 'La contraseña es requerido'}}
          placeholder="Contraseña"
          secureTextEntry
        />

        <Input
          control={control}
          defaultValue=""
          name="passwordRepeat"
          rules={{required: true}}
          error={{
            msg: 'La contraseña no coincide',
            validate: value => value === watch('password'),
          }}
          placeholder="Confirmar  contraseña"
          secureTextEntry
        />

        <Button
          text="Siguiente"
          onPress={handleSubmit(onRegister)}
          style={{marginTop: 35}}
        />

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{fontWeight: '700', color: '#31AFB4'}}>
              Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
