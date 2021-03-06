import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { globalStyles, lightPalette } from 'src/assets/styles';

const LoadingPlaceholder = () => {
  const scheme = useColorScheme();

  return (
    <SkeletonPlaceholder
      highlightColor={
        scheme === 'dark' ? lightPalette.dark60 : lightPalette.extraWhite
      }
      backgroundColor={
        scheme === 'dark' ? lightPalette.dark85 : lightPalette.dark30
      }
    >
      <View style={styles.header} />
      <View style={styles.bannerCard} />
      <View style={styles.header} />
      <View style={globalStyles.row}>
        <View style={styles.matchCard} />
        <View style={styles.matchCard} />
      </View>
      <View style={styles.header} />
      <View style={styles.playerCard} />
      <View style={styles.playerCard} />
      <View style={styles.playerCard} />
    </SkeletonPlaceholder>
  );
};

export default LoadingPlaceholder;

const styles = StyleSheet.create({
  header: {
    width: '95%',
    height: 25,
    marginVertical: 15,
    alignSelf: 'center',
    borderRadius: 8,
  },
  bannerCard: {
    alignSelf: 'center',
    borderRadius: 16,
    width: '95%',
    height: 180,
  },
  matchCard: {
    width: 250,
    height: 115,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  playerCard: {
    width: '95%',
    height: 80,
    borderRadius: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
