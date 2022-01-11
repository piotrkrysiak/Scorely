import React, { FC } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { IONICONS, SEMI_BOLD, SMALLER_BODY_SEMI } from 'src/constants';
import image from 'src/assets/images/playerBackground.jpg';
import LinearGradient from 'react-native-linear-gradient';
import { IconTypes } from 'src/components/common/Icon';
import useBackIcon from 'src/hooks/useBackIcon';
import { Avatar, BodyText, Text, HeaderBar } from '../common';
import { RowWrapper } from '../containers';

interface Props {
  name: string;
  surname: string;
  photo: string;
  club: string;
  clubLogo: string;
}

const PlayerHeader: FC<Props> = ({ name, surname, photo, club, clubLogo }) => {
  const backIcon = useBackIcon();

  const rightIcon = {
    type: IONICONS as IconTypes,
    name: 'heart-outline',
    onPressFunction: () => {},
  };

  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.background} resizeMode="cover" />
      <LinearGradient
        colors={['#564afa1c', '#564afaea', lightPalette.primary]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <SafeAreaView>
        <HeaderBar
          leftIcon={backIcon}
          rightIcon={rightIcon}
          color={lightPalette.white}
        />
        <RowWrapper style={[globalStyles.centered, { height: '65%' }]}>
          <Avatar source={photo} />
          <View style={{ paddingLeft: 20 }}>
            <Text
              fontSize={28}
              fontWeight={SEMI_BOLD}
              color={lightPalette.white}
            >
              {name}
            </Text>
            <Text
              fontSize={28}
              fontWeight={SEMI_BOLD}
              color={lightPalette.white}
            >
              {surname}
            </Text>
            <RowWrapper>
              <BodyText type={SMALLER_BODY_SEMI} color={lightPalette.secondary}>
                {club.toUpperCase()}
              </BodyText>
              <Image
                source={{
                  uri: clubLogo,
                }}
                style={styles.image}
                resizeMode="contain"
              />
            </RowWrapper>
          </View>
        </RowWrapper>
      </SafeAreaView>
    </View>
  );
};

export default PlayerHeader;

const styles = StyleSheet.create({
  wrapper: {
    height: 260,
  },
  image: {
    width: 25,
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
