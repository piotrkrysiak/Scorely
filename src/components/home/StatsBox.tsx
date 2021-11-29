import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { HELP } from 'src/constants';
import { BodyText } from 'src/components/common';

interface Props {
  number: number;
  title: string;
}

const StatsBox: FC<Props> = ({ number, title }) => (
  <View style={styles.stats}>
    <BodyText type={HELP} color={lightPalette.primary}>
      {number}
    </BodyText>
    <BodyText type={HELP} color={lightPalette.secondary}>
      {title}
    </BodyText>
  </View>
);

export default StatsBox;

const styles = StyleSheet.create({
  stats: {
    alignItems: 'center',
    padding: 10,
  },
});
