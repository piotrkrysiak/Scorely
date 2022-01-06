import React, { FC } from 'react';
import { Image, ImageURISource, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { RowWrapper } from 'src/components/containers';
import { SEMI_BOLD } from 'src/constants';
import Avatar from '../Avatar';
import Text from '../Text';

interface Props {
  name: string;
  photo: string;
  background: ImageURISource;
}

const HeaderBackground: FC<Props> = ({ name, photo, background }) => (
  <SafeAreaView style={styles.container}>
    <RowWrapper style={[globalStyles.centered]}>
      <Avatar source={photo} />
      <Text
        fontSize={28}
        fontWeight={SEMI_BOLD}
        color={lightPalette.white}
        style={{ paddingLeft: 26 }}
      >
        {name}
      </Text>
    </RowWrapper>
    <Image source={background} style={styles.background} />
    <LinearGradient
      colors={['#6e6e6e13', '#1b181848', lightPalette.dark]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    />
  </SafeAreaView>
);

export default HeaderBackground;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 250,
    borderRadius: 12,
    zIndex: -1,
  },
  linearGradient: {
    borderRadius: 12,
    width: '100%',
    height: 250,
    position: 'absolute',
    zIndex: -1,
  },
});
