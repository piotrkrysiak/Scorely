import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { HELP, SEMI_BOLD, SMALLER_BODY } from 'src/constants';
import { BodyText, Text } from '../common';
import { RowWrapper, Wrapper } from '../containers';

interface Props {
  title: string;
  content: {
    id: number;
    name: string;
    value: string | number;
  }[];
}

const PlayerInfo: FC<Props> = ({ title, content }) => (
  <Wrapper>
    <Text fontSize={12} fontWeight={SEMI_BOLD} style={styles.margined}>
      {title}
    </Text>
    {content.map(({ id, name, value }) => (
      <RowWrapper key={id} style={styles.row}>
        <BodyText type={HELP} color={lightPalette.dark60}>
          {name}
        </BodyText>
        <BodyText type={SMALLER_BODY}>{value}</BodyText>
      </RowWrapper>
    ))}
  </Wrapper>
);

export default PlayerInfo;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: lightPalette.dark30,
  },
  margined: {
    marginVertical: 16,
  },
});
