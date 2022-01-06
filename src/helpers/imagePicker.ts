import ImagePicker from 'react-native-image-crop-picker';

// eslint-disable-next-line import/prefer-default-export
export const pickImage = async (
  camera: boolean = false,
  width: number = 300,
  height: number = 300,
  isAvatar: boolean = false,
) => {
  try {
    if (camera) {
      const res = await ImagePicker.openCamera({
        useFrontCamera: isAvatar,
        cropperCircleOverlay: true,
        multiple: false,
        width,
        height,
        cropping: true,
      });
      return res.path;
    }
    if (!camera) {
      const res = await ImagePicker.openPicker({
        cropperCircleOverlay: isAvatar,
        multiple: false,
        width,
        height,
        cropping: true,
      });
      return res.path;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
