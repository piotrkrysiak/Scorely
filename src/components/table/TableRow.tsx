import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { lightPalette, tableColors } from 'src/assets/styles';
import { SMALLER_BODY, SMALLER_BODY_MEDIUM } from 'src/constants';
import { BodyText } from '../common';
import { RowWrapper } from '../containers';

interface Props {
  rank: number;
  name: string;
  points: number;
  logo: string;
  goalsDiff: number;
  played: number;
}

const addSpace = (id: number) => {
  if (id < 10) {
    return ` ${id}`;
  }
  return id;
};

const TableRow: FC<Props> = ({
  rank,
  name,
  points,
  logo,
  goalsDiff,
  played,
}) => (
  <RowWrapper
    style={[
      styles.content,
      rank > 17 && { backgroundColor: tableColors.relegation },
      rank < 5 && { backgroundColor: tableColors.championsLeague },
    ]}
  >
    <RowWrapper style={styles.rank}>
      <BodyText type={SMALLER_BODY_MEDIUM}>{addSpace(rank)}</BodyText>
      <View style={styles.dot} />
    </RowWrapper>
    <RowWrapper style={styles.club}>
      <Image
        source={{
          uri: logo,
        }}
        style={[styles.image, styles.padded]}
        resizeMode="contain"
      />
      <BodyText type={SMALLER_BODY_MEDIUM} style={styles.padded}>
        {name}
      </BodyText>
    </RowWrapper>
    <RowWrapper style={styles.stats}>
      <BodyText type={SMALLER_BODY} style={styles.padded}>
        {played}
      </BodyText>
      <BodyText type={SMALLER_BODY} style={styles.padded}>
        {goalsDiff}
      </BodyText>
      <BodyText type={SMALLER_BODY_MEDIUM} style={styles.padded}>
        {points}
      </BodyText>
    </RowWrapper>
  </RowWrapper>
);

export default TableRow;

const styles = StyleSheet.create({
  content: {
    padding: 10,
    borderRadius: 8,
    borderBottomColor: lightPalette.dark60,
    borderBottomWidth: 0.5,
  },
  club: {
    flex: 3,
  },
  stats: {
    flex: 1,
    justifyContent: 'space-between',
  },
  rank: {
    flex: 0.4,
    justifyContent: 'space-between',
  },
  padded: {
    paddingLeft: 10,
  },
  paddedHeader: {
    paddingLeft: 18,
  },
  image: {
    width: 20,
    height: 'auto',
    marginLeft: 10,
  },
  dot: {
    width: 6,
    height: 6,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: lightPalette.dark30,
    borderColor: lightPalette.dark30,
  },
});
