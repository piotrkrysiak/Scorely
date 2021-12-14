import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  centered?: boolean;
  disablePadding?: boolean;
}

const Wrapper: FC<Props> = ({ children, style, centered, disablePadding }) => (
  <View
    style={[
      style,
      !disablePadding && styles.wrapper,
      centered && styles.centered,
    ]}
  >
    {children}
  </View>
);

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
