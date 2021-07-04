import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import GoogleSource from '../../img/google.png';
import FacebookSource from '../../img/facebook.png';

const SocialLogin = ({social}) => {
  return (
    <TouchableOpacity style={{padding: 15, backgroundColor: '#F3F3F3',marginHorizontal:40,borderRadius:10}}>
      <Image source={icon(social)} style={{width: 25, height: 25}} />
    </TouchableOpacity>
  );
};

const icon = social => {
  switch (social) {
    case 'google':
      return GoogleSource;
    case 'facebook':
      return FacebookSource;
    default:
      return null;
  }
};

export default SocialLogin;
