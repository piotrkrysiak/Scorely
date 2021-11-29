import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { SMALLER_BODY_SEMI } from 'src/constants';
import { BodyText } from 'src/components/common';
import { RowWrapper } from 'src/components/containers';

interface Props {
  host: {
    name: string;
    logo: string;
    goals: number | undefined;
  };
  guest: {
    name: string;
    logo: string;
    goals: number | undefined;
  };
  status: string;
}

const MatchCard: FC<Props> = ({ host, guest, status }) => (
  <View style={styles.wrapper}>
    <RowWrapper style={styles.row}>
      <RowWrapper style={globalStyles.centered}>
        <View style={[styles.circle, styles.moveCircle]}>
          <Image
            source={{
              uri: host.logo,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.circle}>
          <Image
            source={{
              uri: guest.logo,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </RowWrapper>
      <View style={globalStyles.centered}>
        <BodyText type={SMALLER_BODY_SEMI}>
          {host.name} - {guest.name}
        </BodyText>
        <BodyText type={SMALLER_BODY_SEMI}>
          {host.goals} - {guest.goals}
        </BodyText>
      </View>
      <View style={[styles.status, status === 'FT' && styles.ended]}>
        <BodyText
          type={SMALLER_BODY_SEMI}
          color={status === 'FT' ? lightPalette.white : undefined}
        >
          {status}
        </BodyText>
      </View>
    </RowWrapper>
  </View>
);

export default MatchCard;

const styles = StyleSheet.create({
  wrapper: {
    width: '95%',
    height: 80,
    borderRadius: 16,
    backgroundColor: lightPalette.white,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '20%',
    backgroundColor: lightPalette.secondary,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
  },
  matchBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: lightPalette.dark30,
    borderWidth: 1,
    borderColor: lightPalette.white,
  },
  moveCircle: {
    right: -10,
    zIndex: 1,
  },
  image: {
    flex: 1,
    transform: [{ scale: 0.6 }],
  },
  ended: {
    backgroundColor: lightPalette.primary,
  },
});
