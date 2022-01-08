import React from 'react';
import { Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import { MATERIAL } from 'src/constants';
import Icon from './Icon';

type size = 'small' | 'medium';
interface Props {
  source: string;
  size?: size;
  editable?: boolean;
  onPress?: () => void;
}

const Avatar: React.FC<Props> = ({ size, editable, source, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) =>
      onPress && {
        opacity: pressed ? 0.5 : 1,
      }
    }
  >
    <Image
      source={{
        uri: source,
      }}
      style={[
        styles.avatar,
        size === 'medium' && styles.medium,
        size === 'small' && styles.small,
      ]}
    />
    {!!editable && (
      <TouchableOpacity onPress={onPress} style={styles.icon}>
        <Icon type={MATERIAL} name="edit" size={20} color={lightPalette.dark} />
      </TouchableOpacity>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  medium: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  small: {
    width: 25,
    height: 25,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: 25,
    height: 25,
    backgroundColor: lightPalette.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;
