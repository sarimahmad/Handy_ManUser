/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, TouchableOpacity,Text } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';
import { BLACK, WHITE } from '../../helper/Color';

function HeaderWithLogoandText({ leftPress, leftIcon, rightPress, centerText, centerIcon, boldtext, rightIcon, righText,backColor, borderBottom, borderLeftRadius, borderRightRadius}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: isIphoneXorAbove ? 100 : 80 ,
        justifyContent:'center',
        alignItems:"center",
        width: SCREEN.width,
        paddingHorizontal: 30,
        backgroundColor: backColor,
        borderBottomColor: BLACK.border,
        borderBottomWidth: borderBottom ? 1 : 0,
        // borderBottomLeftRadius: !borderLeftRadius ? 5 :0,
        // borderBottomRightRadius: !borderRightRadius ? 5:0,

      }}>
      <View style={{width:'100%',flexDirection:'row', marginTop:10}}>
      {leftPress &&
        <TouchableOpacity
          onPress={leftPress}
          activeOpacity={0.85} style={{justifyContent: 'center', alignItems: 'center', height: 35, width: 35}}>
          <Image source={leftIcon} style={{ height: 20, width: 20, justifyContent: 'center' }} />
        </TouchableOpacity>}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
        }}>

          {centerIcon && <Image source={centerIcon}/>}
          {centerText && <Text style={{fontSize:16, fontFamily: boldtext ? FONT.OpenSans.bold : FONT.OpenSans.regular, color:WHITE.btntxtColor}}>{centerText}</Text>}
        </View>
      </View>
      {(rightIcon || righText) && <TouchableOpacity
        underlayColor={backColor}
        onPress={rightPress}
        style={{
          width: 35,
          height: 35,
          borderRadius:22,
          elevation:3,
          justifyContent: 'center',
          alignItems: 'center',
 
        }}>
        {righText && <Text style={{fontSize:16, fontFamily:FONT.OpenSans.regular, color:WHITE.btntxtColor}}>{righText}</Text>}
        {rightIcon && <Image
          source={rightIcon}
          style={{ height: 21, width: 20, resizeMode: 'contain' }}
        />}
      </TouchableOpacity>}
      </View>
    </View>
  );
}

export default HeaderWithLogoandText;
