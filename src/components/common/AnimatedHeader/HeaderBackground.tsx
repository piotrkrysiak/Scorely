import React, { FC } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { RowWrapper } from 'src/components/containers';
import { SEMI_BOLD } from 'src/constants';
import Avatar from '../Avatar';
import Text from '../Text';

interface Props {
  name: string;
  photo: string;
  background: string;
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
    <Image
      source={{
        uri: background,
      }}
      style={styles.background}
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
});
