import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { HELP, SMALLER_BODY_SEMI } from 'src/constants';
import { Avatar, BodyText } from 'src/components/common';
import { RowWrapper } from 'src/components/containers';
import StatsBox from 'src/components/home/StatsBox';
import { useTheme } from '@react-navigation/native';

interface Props {
  name: string;
  photo: string;
  club: string;
  matches: number;
  goals: number;
  assists: number | null;
  isSearched?: boolean;
  rating: number;
  onPress: () => void;
}

const PlayerCard: FC<Props> = ({
  name,
  photo,
  club,
  matches,
  goals,
  assists,
  rating,
  isSearched,
  onPress,
}) => {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <View
        style={[
          styles.wrapper,
          isSearched ? styles.searched : null,
          { borderColor: colors.border },
        ]}
      >
        <RowWrapper style={[styles.row, { borderBottomColor: colors.border }]}>
          <Avatar source={photo} isSmall />
          <View>
            <BodyText type={SMALLER_BODY_SEMI} color={lightPalette.primary}>
              {name}
            </BodyText>
            <BodyText type={HELP} color={lightPalette.secondary}>
              {club.toUpperCase()}
            </BodyText>
          </View>
        </RowWrapper>
        <RowWrapper style={styles.statsBox}>
          <StatsBox number={matches} title="Matches" />
          <StatsBox number={goals} title="Goals" />
          <StatsBox number={assists || 0} title="Assists" />
          <StatsBox number={Math.round(rating * 100) / 100} title="Rating" />
        </RowWrapper>
      </View>
    </Pressable>
  );
};
export default PlayerCard;

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 115,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  searched: {
    marginVertical: 10,
    width: '100%',
    height: 155,
    marginHorizontal: 0,
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    alignItems: 'center',
    flex: 1,
  },
  statsBox: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
});
