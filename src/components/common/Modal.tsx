import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const CustomModal: React.FC<Props> = ({
  isModalVisible,
  toggleModal,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
    >
      <View style={[styles.box, { backgroundColor: colors.border }]}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  box: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'center',
  },
});
