import React, { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import lightPalette from 'src/assets/styles/palette';
import {
  BODY,
  HELP,
  MEDIUM,
  REGULAR,
  SEMI_BOLD,
  SMALLER_BODY,
  SMALLER_BODY_SEMI,
} from 'src/constants';
import Text from './Text';

type Body = 'Body' | 'SmallerBody' | 'SmallerBodySemi' | 'Help';

interface Props {
  type?: Body; // Body is set by default;
  color?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

const BodyText: FC<Props> = ({
  children,
  type = BODY,
  color = lightPalette.dark,
  style,
}) => {
  const getFont = () => {
    if (type === SMALLER_BODY || type === SMALLER_BODY_SEMI) {
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
    if (type === HELP) {
      return MEDIUM;
    }
    return REGULAR;
  };

  return (
    <Text
      fontSize={getFont()}
      fontWeight={getWeight()}
      color={color}
      style={style}
    >
      {children}
    </Text>
  );
};

export default BodyText;
