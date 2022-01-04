import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import lightPalette from 'src/assets/styles/palette';
import { H3 } from 'src/constants';
import HeadlineText from './HeadlineText';
import Icon from './Icon';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  secondary?: boolean;
  icon?: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  width?: number | string;
  testID?: string;
}

const Button: FC<Props> = ({
  onPress,
  title,
  disabled,
  secondary,
  icon,
  loading,
  style,
  width,
  testID,
}) => {
  const { colors } = useTheme();

  const getTextColor = () => {
    if (disabled) {
      return lightPalette.dark30;
    }
    if (secondary) {
      return lightPalette.primary;
    }
    return lightPalette.white;
  };

  const getColor = () => {
    if (!disabled && !secondary) {
      return lightPalette.primary;
    }
    return colors.border;
  };

  const getActiveColor = () => {
    if (secondary) {
      return lightPalette.activeSecondary;
    }
    return lightPalette.active;
  };

  return (
    <Pressable
      testID={testID}
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        style,
        styles.wrapper,
        { backgroundColor: pressed || loading ? getActiveColor() : getColor() },
        { width: width || '91%' },
      ]}
    >
      <View style={styles.icon}>
        {loading ? (
          <ActivityIndicator color={getTextColor()} />
        ) : (
          <HeadlineText
            type={H3}
            color={getTextColor()}
            style={styles.margined}
          >
            {title}
          </HeadlineText>
        )}
        {!!icon && !loading && (
          <Icon name={icon} size={22} color={getTextColor()} />
        )}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: '91%',
    height: 56,
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  margined: {
    marginRight: 8,
  },
});
