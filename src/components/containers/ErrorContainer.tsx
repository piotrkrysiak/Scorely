import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import ErrorSvg from 'src/components/svg/Error';
import { BodyText, Button, HeadlineText } from 'src/components/common';

interface Props {
  error: string;
  refresh: () => void;
}

const ErrorContainer: FC<Props> = ({ error, refresh }) => (
  <View style={styles.wrapper}>
    <ErrorSvg width={222} height={138} />
    <View style={[globalStyles.padded, globalStyles.centered]}>
      <HeadlineText color={lightPalette.danger}>
        Something went wrong!
      </HeadlineText>
      <BodyText>{error}</BodyText>
    </View>
    <Button title="Refresh" onPress={refresh} />
  </View>
);

export default ErrorContainer;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
