import storage from '@react-native-firebase/storage';

// eslint-disable-next-line import/prefer-default-export
export const putImage = async (newRes: string, path: string, name: string) => {
  await storage().ref(`${path}/${name}.jpg`).putFile(newRes);
};
