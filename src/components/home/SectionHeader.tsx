import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { RowWrapper } from 'src/components/containers';
import { HeadlineText, Icon } from 'src/components/common';

interface Props {
  title: string;
  onPress: () => void;
}

const SectionHeader: FC<Props> = ({ title, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}
  >
    <RowWrapper style={styles.wrapper}>
      <HeadlineText>{title}</HeadlineText>
      <Icon name="chevron-forward" size={22} color={lightPalette.dark} />
    </RowWrapper>
  </Pressable>
);

export default SectionHeader;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
