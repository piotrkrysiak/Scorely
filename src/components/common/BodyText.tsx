import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  BODY,
  HELP,
  MEDIUM,
  REGULAR,
  SEMI_BOLD,
  SMALLER_BODY,
  SMALLER_BODY_MEDIUM,
  SMALLER_BODY_SEMI,
} from 'src/constants';
import Text from './Text';

type Body =
  | 'Body'
  | 'SmallerBody'
  | 'SmallerBodySemi'
  | 'Help'
  | 'SmallerBodyMedium';

interface Props {
  type?: Body; // Body is set by default;
  color?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

const BodyText: FC<Props> = ({ children, type = BODY, color, style }) => {
  const getFont = () => {
    if (
      type === SMALLER_BODY ||
      type === SMALLER_BODY_SEMI ||
      type === SMALLER_BODY_MEDIUM
    ) {
      return 14;
    }
    if (type === HELP) {
      return 10;
    }
    return 16;
  };
  const getWeight = () => {
    if (type === SMALLER_BODY_SEMI) {
      return SEMI_BOLD;
    }
    if (type === HELP || type === SMALLER_BODY_MEDIUM) {
      return MEDIUM;
    }
    return REGULAR;
  };

  const { colors } = useTheme();

  return (
    <Text
      fontSize={getFont()}
      fontWeight={getWeight()}
      color={color ?? colors.text}
      style={style}
    >
      {children}
    </Text>
  );
};

export default BodyText;
