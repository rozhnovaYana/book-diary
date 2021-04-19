import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButton} from 'react-navigation-header-buttons';
export const AppHeaderIcon = (props) => {
  return <HeaderButton IconComponent={Ionicons} iconSize={25} {...props}  />
}