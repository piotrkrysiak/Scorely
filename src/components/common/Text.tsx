import React, { FC } from 'react';
import { StyleProp, Text as ReactText, TextStyle } from 'react-native';
import { REGULAR } from 'src/constants';

type FontWeight = 'Regular' | 'Medium' | 'SemiBold';

interface Props {
  fontWeight?: FontWeight;
  fontSize?: number;
  color?: string;
}

const Text: FC<Props> = ({
  children,
  fontWeight = REGULAR,
  fontSize = 14,
  color = 'black',
}) => {
  const textStyle: StyleProp<TextStyle> = {
    fontSize,
    color,
    fontFamily: `Poppins-${fontWeight}`,
  };

  return <ReactText style={textStyle}>{children}</ReactText>;
};

export default Text;
