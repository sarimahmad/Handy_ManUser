/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, TouchableOpacity,Text } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';

function Header({ leftPress, leftIcon, headerTextColor, backColor, headerText}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: isIphoneXorAbove ? 120 : 100 ,
        justifyContent:'center',
        alignItems:'flex-end',
        width: SCREEN.width,
        paddingHorizontal: 16,
        paddingBottom: 22,
        backgroundColor: backColor,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}>
        {leftPress && <TouchableOpacity style={{position: 'absolute', left: 16,justifyContent: 'center'}} onPress={leftPress}>
          <Image source={leftIcon} style={{height: 12.24, width: 7.18, resizeMode: 'contain'}} />
          </TouchableOpacity>}
          {headerText && <Text style={{fontFamily: FONT.Popins.bold, fontSize: 21, color: headerTextColor}}>{headerText}</Text>}
    </View>
  );
}

export default Header;
