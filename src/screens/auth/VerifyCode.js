import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Logo from '../../components/Logo';
import CodeInput from '../../components/forms/CodeInput';
import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

const VerifyCode = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  const onVerify = () => {};

  return (
    <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
      <Logo />
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 50,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '200',
            fontSize: 14,
            marginVertical: 10,
          }}>
          Emergzone envio un codigo de verificacion al correo que registro
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '200',
            fontSize: 14,
            marginVertical: 20,
          }}>
          Ingresa el codigo recibido
        </Text>
        <View style={{marginHorizontal: 20}}>
          <CodeInput numberFields={5} setValue={setCode} />
        </View>

        <Button
          text="Enviar codigo"
          onPress={onVerify}
          style={{marginTop: 35}}
        />

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text>¿No recibiste el codigo?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{fontWeight: '700', color: '#31AFB4'}}>
              Reenviar codigo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({});
