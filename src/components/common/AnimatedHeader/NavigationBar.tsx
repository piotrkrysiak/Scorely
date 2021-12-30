import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import { RowWrapper } from 'src/components/containers';
import { SMALLER_BODY_SEMI } from 'src/constants';
import Avatar from '../Avatar';
import BodyText from '../BodyText';

interface Props {
  name: string;
  photo: string;
}

const NavigationBar: FC<Props> = ({ name, photo }) => (
  <View style={styles.container}>
    <RowWrapper style={[globalStyles.centered, { marginBottom: 10 }]}>
      <Avatar source={photo} isSmall />
      <BodyText type={SMALLER_BODY_SEMI} color={lightPalette.white}>
        {name}
      </BodyText>
    </RowWrapper>
  </View>
);

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPalette.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
