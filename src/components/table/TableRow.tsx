import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { lightPalette } from 'src/assets/styles';
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

const TableRow: FC<Props> = ({
  rank,
  name,
  points,
  logo,
  goalsDiff,
  played,
}) => (
  <RowWrapper style={styles.content}>
    <RowWrapper>
      <BodyText type={SMALLER_BODY_MEDIUM}>{rank}</BodyText>
      <View style={styles.dot} />
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
    <RowWrapper>
      <BodyText type={SMALLER_BODY} style={styles.padded}>
        {played}
      </BodyText>
      <BodyText type={SMALLER_BODY} style={styles.padded}>
        +{goalsDiff}
      </BodyText>
      <BodyText type={SMALLER_BODY_MEDIUM} style={styles.padded}>
        {points}
      </BodyText>
    </RowWrapper>
  </RowWrapper>
);

export default TableRow;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
  },
  header: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    backgroundColor: lightPalette.dark30,
  },
  content: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    borderBottomColor: lightPalette.dark30,
    borderBottomWidth: 0.5,
  },
  padded: {
    paddingLeft: 12,
  },
  paddedHeader: {
    paddingLeft: 18,
  },
  image: {
    width: 14,
  },
  dot: {
    width: 6,
    height: 6,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: lightPalette.dark30,
    borderColor: lightPalette.dark30,
  },
});
