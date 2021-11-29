import React, { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { lightPalette } from 'src/assets/styles';
import { H3 } from 'src/constants';
import { BodyText, HeadlineText } from 'src/components/common';
import { RowWrapper } from 'src/components/containers';

interface Props {
  title: string;
  data: string;
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const NewsBanner: FC<Props> = ({ title, data, image, icon, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}
  >
    <RowWrapper style={styles.wrapper}>
      <LinearGradient
        colors={[lightPalette.primary, lightPalette.secondary]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.leftSection}>
        <View style={styles.textWrapper}>
          <HeadlineText type={H3} style={styles.text}>
            {title}
          </HeadlineText>
        </View>
        <View>
          <View style={styles.label}>
            <Image source={icon} style={styles.icon} />
          </View>
          <BodyText type="Help" style={styles.text}>
            {data}
          </BodyText>
        </View>
      </View>
      <Image source={image} style={styles.image} />
    </RowWrapper>
  </Pressable>
);

export default NewsBanner;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: lightPalette.primary,
    alignSelf: 'center',
    borderRadius: 16,
    width: '95%',
    height: 180,
  },
  linearGradient: {
    borderRadius: 16,
    width: '100%',
    height: 180,
    position: 'absolute',
  },
  leftSection: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  textWrapper: {
    width: '55%',
    height: 'auto',
    maxHeight: '70%',
  },
  label: {
    width: 80,
    height: 24,
    alignItems: 'center',
    backgroundColor: lightPalette.white,
    borderRadius: 12,
    marginVertical: 6,
  },
  text: {
    color: lightPalette.white,
  },
  icon: {
    width: '60%',
    height: '100%',
  },
  image: {
    width: '67%',
    height: '110%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
