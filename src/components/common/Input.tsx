import React, { FC } from 'react';
import { Platform } from 'react-native';
import { InputOutline, InputOutlineProps } from 'react-native-input-outline';
import lightPalette from 'src/assets/styles/palette';

const Input: FC<InputOutlineProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  autoFocus,
  autoCapitalize,
  style,
  trailingIcon,
  autoCompleteType,
  testID,
}) => {
  let paddingVertical;
  if (Platform.OS === 'ios') {
    paddingVertical = 17;
  }
  return (
    <InputOutline
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      error={error}
      trailingIcon={trailingIcon}
      autoFocus={autoFocus}
      autoCompleteType={autoCompleteType}
      autoCapitalize={autoCapitalize}
      roundness={16}
      fontSize={16}
      errorFontSize={12}
      activeColor={lightPalette.primary}
      inactiveColor={lightPalette.dark60}
      fontFamily="Poppins-Medium"
      fontColor={lightPalette.dark60}
      paddingVertical={paddingVertical}
      testID={testID}
      style={[
        Platform.OS === 'ios' && { height: 60 },
        {
          width: '91%',
          alignSelf: 'center',
        },
        style,
      ]}
    />
  );
};
export default Input;
