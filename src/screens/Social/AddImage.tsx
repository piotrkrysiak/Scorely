import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, Icon } from 'src/components/common';
import { SMALLER_BODY_MEDIUM } from 'src/constants';
import noImage from 'src/assets/images/noPhoto.png';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { useTheme } from '@react-navigation/native';

interface Props {
  image: string;
  onPress: () => void;
}
const AddImage: FC<Props> = ({ image, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.image,
          {
            width: '91%',
            marginTop: 20,
            borderWidth: 1,
            overflow: 'hidden',
            borderColor: lightPalette.dark60,
          },
        ]}
      >
        <Image
          source={
            image
              ? {
                  uri: image,
                }
              : noImage
          }
          style={[
            styles.image,
            { opacity: image ? 1 : 0.1 },
            {
              backgroundColor: colors.border,
              width: '100%',
            },
          ]}
          resizeMode="contain"
        />
      </View>
      <View
        style={[
          { width: '100%', height: 200, marginVertical: 20 },
          globalStyles.centered,
        ]}
      >
        {!image && (
          <>
            <Icon name="add" size={50} />
            <BodyText type={SMALLER_BODY_MEDIUM} style={{ marginTop: 5 }}>
              Add photo to the post 📷
            </BodyText>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default AddImage;

const styles = StyleSheet.create({
  image: {
    height: 205,
    borderRadius: 16,
    alignSelf: 'center',
    position: 'absolute',
  },
});
