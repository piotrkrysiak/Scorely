import React, { FC, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { HELP } from 'src/constants';
import BodyText from './BodyText';
import Icon from './Icon';

interface Props {
  message: string;
  variant?: 'primary' | 'information' | 'danger';
  onDismiss?: () => void;
}

const Message: FC<Props> = ({ message, onDismiss, variant }) => {
  const [userDismissed, setUserDismissed] = useState(false);

  const getBackgroundColor = () => {
    if (variant === 'primary') {
      return lightPalette.primary;
    }
    if (variant === 'danger') {
      return lightPalette.danger;
    }
    return lightPalette.secondary;
  };

  const handleDismiss = () => {
    setUserDismissed(true);
    if (onDismiss) {
      onDismiss();
    }
  };

  const getDismissRetry = () => {
    if (onDismiss) {
      return (
        <TouchableOpacity
          onPress={handleDismiss}
          style={{ justifyContent: 'center', paddingHorizontal: 10 }}
        >
          <Icon name="close" size={16} />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <>
      {!userDismissed && (
        <View
          style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]}
        >
          <View style={styles.textWrapper}>
            <BodyText type={HELP}>{message}</BodyText>
            {getDismissRetry()}
          </View>
        </View>
      )}
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 3,
    marginTop: 5,
    alignSelf: 'center',
    position: 'absolute',
    bottom: '25%',
    width: '90%',
    padding: 10,
    justifyContent: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});
