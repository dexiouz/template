import React from 'react';
import {styles} from './styles';
import {TouchableOpacity, Text, Image, View} from 'react-native';
 
const Button  = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  icon,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {flexDirection: icon ? 'row' : 'column', justifyContent: 'center'},
      containerStyle,
    ]}>
      {
        icon ? (
          <View style={{alignSelf: 'center', marginRight: 12}}>
      <Image source={icon} />
    </View>
        ) : null
      }
    
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
