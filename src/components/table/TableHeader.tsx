import React from 'react';
import { StyleSheet } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { HELP } from 'src/constants';
import { BodyText, HeadlineText } from '../common';
import { RowWrapper } from '../containers';

const TableHeader = () => (
  <>
    <HeadlineText style={styles.title}>Matchweek 17 Table</HeadlineText>
    <RowWrapper style={styles.header}>
      <BodyText type={HELP} color={lightPalette.white}>
        Position
      </BodyText>
      <BodyText type={HELP} color={lightPalette.white}>
        Club
      </BodyText>
      <RowWrapper>
        <BodyText type={HELP} style={styles.padded} color={lightPalette.white}>
          Pl
        </BodyText>
        <BodyText type={HELP} style={styles.padded} color={lightPalette.white}>
          GD
        </BodyText>
        <BodyText type={HELP} style={styles.padded} color={lightPalette.white}>
          Pts
        </BodyText>
      </RowWrapper>
    </RowWrapper>
  </>
);

export default TableHeader;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 10,
  },
  header: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    backgroundColor: lightPalette.primary,
    marginBottom: 4,
  },
  padded: {
    paddingLeft: 20,
  },
});
