import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  centered?: boolean;
  disablePaging?: boolean;
}

const Wrapper: FC<Props> = ({ children, style, centered, disablePaging }) => (
  <View
    style={[
      style,
      !disablePaging && styles.wrapper,
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
