import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';
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
  const { colors } = useTheme();
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
      backgroundColor={colors.border}
      style={[Platform.OS === 'ios' && styles.ios, styles.input, style]}
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  ios: {
    height: 60,
  },
  input: {
    width: '91%',
    alignSelf: 'center',
  },
});
