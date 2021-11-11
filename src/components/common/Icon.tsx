import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IONICONS, MATERIAL, MATERIAL_COMMUNITY } from 'src/constants/icons';

export type IconTypes = 'MATERIAL' | 'MATERIAL_COMMUNITY' | 'IONICONS';

const getIconFont = (type: IconTypes) => {
  switch (type) {
    case MATERIAL:
      return MaterialIcons;
    case MATERIAL_COMMUNITY:
      return MaterialCommunityIcon;
    default:
      return Ionicon;
  }
};

interface Props {
  name: string;
  type?: IconTypes;
  size?: number;
  color?: string;
  testID?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

const Icon: React.FC<Props> = ({ type = IONICONS, ...props }) => {
  const FontIcon = getIconFont(type);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FontIcon {...props} />;
};

export default Icon;
