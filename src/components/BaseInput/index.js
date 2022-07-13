import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

const BaseInput = ({
  style,
  value,
  placeholder,
  onChangeText,
  touched,
  errors,
  name,
  keyboardType,
  label,
  secureTextEntry,
  rightIcon,
  multiline,
  numberOfLines,
  inputStyle,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <View style={[styles.inputContainer, style]} {...props}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={[{ width: '95%' }, inputStyle]}
        />
        {rightIcon}
      </View>
      {touched && errors && <Text style={styles.errorMessage}>{errors}</Text>}
    </View>
  );
};

export default BaseInput;
