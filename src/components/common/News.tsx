import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { H3 } from 'src/constants';
import RowWrapper from '../containers/RowWrapper';
import Avatar from './Avatar';
import BodyText from './BodyText';
import HeadlineText from './HeadlineText';

interface Props {
  title: string;
  data: string;
  image: string;
  userPhoto?: string;
  userName?: string;
  onPress: () => void;
}

const News: FC<Props> = ({
  title,
  data,
  image,
  userPhoto,
  userName,
  onPress,
}) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <RowWrapper
        style={[
          styles.wrapper,
          {
            borderColor:
              scheme === 'dark' ? colors.border : lightPalette.primary,
          },
        ]}
      >
        <View style={styles.leftSection}>
          <View style={styles.textWrapper}>
            <HeadlineText type={H3}>{title}</HeadlineText>
          </View>
          <RowWrapper style={{ alignItems: 'center', marginTop: 5 }}>
            {!!userPhoto && (
              <View style={styles.label}>
                <Avatar size="small" source={userPhoto} />
              </View>
            )}
            <View>
              {!!userName && (
                <BodyText type="Help" style={{ marginLeft: 5 }}>
                  {userName}
                </BodyText>
              )}
              <BodyText type="Help" style={{ marginLeft: 5 }}>
                {data}
              </BodyText>
            </View>
          </RowWrapper>
        </View>
        <View style={styles.viewImage}>
          <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="stretch"
          />
        </View>
      </RowWrapper>
    </Pressable>
  );
};
export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    filter: `blur(10px)`,
  },
  wrapper: {
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 1,
    width: '95%',
    height: 130,
  },
  linearGradient: {
    borderRadius: 16,
    width: '100%',
    height: 180,
    position: 'absolute',
  },
  leftSection: {
    flex: 1.7,
    justifyContent: 'space-between',
    padding: 20,
  },
  textWrapper: {
    height: 'auto',
    maxHeight: '70%',
  },
  label: {
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
  },
  icon: {
    width: '60%',
    height: '100%',
  },
  viewImage: {
    width: 100,
    flex: 1,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    borderColor: lightPalette.white,
    borderWidth: 1,
    borderRadius: 16,
    width: 100,
    height: 100,
  },
});
