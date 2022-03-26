import React, { FC } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { SEMI_BOLD, SMALLER_BODY_SEMI } from 'src/constants';
import image from 'src/assets/images/playerBackground.jpg';
import LinearGradient from 'react-native-linear-gradient';
import useBackIcon from 'src/hooks/useBackIcon';
import { Avatar, BodyText, Text } from '../common';
import { RowWrapper } from '../containers';
import HeaderBarAnimated from '../common/HeaderBarAnimated';

interface Props {
  name: string;
  surname: string;
  photo: string;
  club: string;
  clubLogo: string;
  onPress: () => void;
}

const PlayerHeader: FC<Props> = ({
  name,
  surname,
  photo,
  club,
  clubLogo,
  onPress,
}) => {
  const backIcon = useBackIcon();

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
        <HeaderBarAnimated
          leftIcon={backIcon}
          color={lightPalette.white}
          onPress={onPress}
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
