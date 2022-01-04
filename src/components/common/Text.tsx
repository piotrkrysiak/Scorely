import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  StyleProp,
  Text as ReactText,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { REGULAR } from 'src/constants';

type FontWeight = 'Regular' | 'Medium' | 'SemiBold';

interface Props {
  fontWeight?: FontWeight;
  fontSize?: number;
  color?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

const Text: FC<Props> = ({
  children,
  fontWeight = REGULAR,
  fontSize = 14,
  color,
  style,
}) => {
  const { colors } = useTheme();
  const textStyle: StyleProp<TextStyle> = {
    fontSize,
    color: color ?? colors.text,
    fontFamily: `Poppins-${fontWeight}`,
  };

  return <ReactText style={[textStyle, style]}>{children}</ReactText>;
};

export default Text;
