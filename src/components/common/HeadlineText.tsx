import React, { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import lightPalette from 'src/assets/styles/palette';
import { H1, H2, H3, MEDIUM, SEMI_BOLD } from 'src/constants';
import Text from './Text';

type HeadLine = 'H1' | 'H2' | 'H3';

interface Props {
  type?: HeadLine; // H2 is set by default;
  color?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

const HeadlineText: FC<Props> = ({
  children,
  type = H2,
  color = lightPalette.dark,
  style,
}) => {
  const getFont = () => {
    if (type === H1) {
      return 24;
    }
    if (type === H3) {
      return 16;
    }
    return 18;
  };
  const getWeight = () => {
    if (type === H3) {
      return MEDIUM;
    }
    return SEMI_BOLD;
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

export default HeadlineText;
