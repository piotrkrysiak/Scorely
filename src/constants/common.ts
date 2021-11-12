import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

export const SCREEN_OPTIONS = {
  headerShown: false,
  gestureEnabled: true,
  gestureResponseDistance: 150,
};
export const BOTTOM_TABS_HEIGHT = 80;
