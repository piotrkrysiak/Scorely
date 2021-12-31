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

export const DATA_NOT_FOUND = 'Data not found';

export const DEFAULT_AVATAR =
  'https://firebasestorage.googleapis.com/v0/b/moviepicker-2405b.appspot.com/o/users%2Fdefault%2FdefaultAvatar.png?alt=media&token=e8f0dd01-d427-4734-b161-504d46c7893c';

export const headerTitleStyle = {
  fontFamily: 'Poppins-SemiBold',
  fontSize: 18,
};
