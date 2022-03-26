import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { lightPalette } from 'src/assets/styles';
import LottieView from 'lottie-react-native';
import likeAnimation from 'src/assets/lotties/44921-like-animation.json';
import HeadlineText from './HeadlineText';
import Icon, { IconTypes } from './Icon';

interface Props {
  leftIcon: {
    type: IconTypes;
    name: string;
    onPressFunction: () => void;
  };
  title?: string;
  color?: string;
  liked?: boolean;
  onPress?: () => void;
}

const HeaderBarAnimated: React.FC<Props> = ({
  leftIcon,
  title,
  color,
  liked,
  onPress,
}) => {
  const animation = useRef<LottieView>(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      if (liked) {
        animation.current?.play(66, 66);
      } else {
        animation.current?.play(19, 19);
      }
      isFirstRun.current = false;
    } else if (liked) {
      animation.current?.play(19, 50);
    } else {
      animation.current?.play(0, 19);
    }
  }, [liked]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={leftIcon.onPressFunction}
        style={styles.zIndex}
      >
        <View style={styles.icon}>
          <Icon
            type={leftIcon.type}
            color={color || lightPalette.primary}
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
      <TouchableOpacity onPress={onPress}>
        <LottieView
          ref={animation}
          style={styles.heartLottie}
          source={likeAnimation}
          autoPlay={false}
          loop={false}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
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
  zIndex: {
    zIndex: 2,
  },
  heartLottie: {
    width: 40,
    transform: [{ scale: 1.5 }],
    marginRight: 15,
  },
});
export default HeaderBarAnimated;
