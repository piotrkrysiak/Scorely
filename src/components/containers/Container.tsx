import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  keyboard?: boolean;
  scroll?: boolean;
}

const Container: FC<Props> = ({ children, style, keyboard, scroll }) => {
  if (keyboard) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.keyboard, style]}
      >
        {scroll ? (
          <SafeAreaView style={style}>
            <ScrollView contentContainerStyle={style}>{children}</ScrollView>
          </SafeAreaView>
        ) : (
          children
        )}
      </KeyboardAvoidingView>
    );
  }
  if (scroll) {
    return (
      <SafeAreaView style={style}>
        <ScrollView contentContainerStyle={style}>{children}</ScrollView>
      </SafeAreaView>
    );
  }
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
});
