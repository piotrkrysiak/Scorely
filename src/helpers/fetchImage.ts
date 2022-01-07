import storage from '@react-native-firebase/storage';

// eslint-disable-next-line import/prefer-default-export
export const fetchImage = async (path: string, name: string) => {
  const url = await storage().ref(`/${path}/${name}.jpg`).getDownloadURL();
  return url;
};
