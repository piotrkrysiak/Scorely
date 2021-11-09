import React, { FC } from 'react';
import {
  FlexStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle | FlexStyle>;
  centered?: boolean;
  padding?: boolean;
}

const RowWrapper: FC<Props> = ({ children, style, centered, padding }) => (
  <View
    style={[
      style,
      styles.wrapper,
      padding && styles.padded,
      centered && styles.centered,
    ]}
  >
    {children}
  </View>
);

export default RowWrapper;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  padded: {
    paddingHorizontal: 20,
  },
});
