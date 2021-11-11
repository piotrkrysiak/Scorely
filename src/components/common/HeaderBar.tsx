import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import HeadlineText from './HeadlineText';
import Icon, { IconTypes } from './Icon';

interface Props {
  leftIcon: {
    type: IconTypes;
    name: string;
    onPressFunction: () => void;
  };
  rightIcon?: {
    type: IconTypes;
    name: string;
    onPressFunction: () => void;
  };
  title?: string;
}

const HeaderBar: React.FC<Props> = ({ leftIcon, rightIcon, title }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={leftIcon.onPressFunction}>
      <View style={styles.icon}>
        <Icon
          type={leftIcon.type}
          color={lightPalette.primary}
          name={leftIcon.name}
          size={28}
        />
      </View>
    </TouchableOpacity>
    {!!title && (
      <View style={styles.title}>
        <HeadlineText>{title}</HeadlineText>
      </View>
    )}
    {!!rightIcon && (
      <TouchableOpacity onPress={rightIcon.onPressFunction}>
        <View style={styles.icon}>
          <Icon
            type={rightIcon.type}
            color={lightPalette.white}
            name={rightIcon.name}
            size={28}
          />
        </View>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  title: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
});
export default HeaderBar;
