import storage from '@react-native-firebase/storage';

// eslint-disable-next-line import/prefer-default-export
export const fetchImage = async (path: string, name: string) => {
  try {
    const url = await storage().ref(`/${path}/${name}.jpg`).getDownloadURL();
    return url;
  } catch (err) {
    console.log(err);
  }
  return null;
};
