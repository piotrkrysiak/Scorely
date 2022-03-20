import React, { FC } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import LinearGradient from 'react-native-linear-gradient';
import useBackIcon from 'src/hooks/useBackIcon';
import HeaderBarAnimated from './HeaderBarAnimated';

interface Props {
  photo: string;
}

const Header: FC<Props> = ({ photo }) => {
  const backIcon = useBackIcon();

  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: photo }}
        style={styles.background}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['#0000001c', '#02020273']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <SafeAreaView>
        <HeaderBarAnimated leftIcon={backIcon} color={lightPalette.white} />
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    height: 260,
  },
  linearGradient: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});
