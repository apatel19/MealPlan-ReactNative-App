import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
// import {Ionicons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Color.primaryColor}
    />
  );
};

export default CustomHeaderButton;
