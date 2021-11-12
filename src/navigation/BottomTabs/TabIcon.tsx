import React, { FC } from 'react';
import {
  AccessibilityState,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { lightPalette } from 'src/assets/styles';
import { BodyText, Icon } from 'src/components/common';
import { IconTypes } from 'src/components/common/Icon';
import { IONICONS } from 'src/constants';

interface Props {
  onPress:
    | ((
        e:
          | React.MouseEvent<HTMLAnchorElement, MouseEvent>
          | GestureResponderEvent,
      ) => void)
    | undefined;
  accessibilityState: AccessibilityState | undefined;
  name: string;
  label: string;
  type?: IconTypes;
  size?: number;
}

const TabIcon: FC<Props> = ({
  onPress,
  accessibilityState,
  name,
  label,
  type = IONICONS,
  size = 24,
}) => {
  const rotation = useSharedValue(0);
  let focused = false;

  if (accessibilityState?.selected) {
    focused = accessibilityState.selected;
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }, { scale: 1.2 }],
  }));

  const outline = `${name}-outline`;
  const handleOnPress = (e: GestureResponderEvent) => {
    if (onPress) {
      onPress(e);
    }
    rotation.value = withSequence(
      withTiming(-50, { duration: 200 }),
      withTiming(50, { duration: 300 }),
      withTiming(0, { duration: 400 }),
    );
  };

  if (focused) {
    return (
      <TouchableOpacity
        onPress={e => handleOnPress(e)}
        style={styles.container}
      >
        <Animated.View style={[animatedStyle, styles.input]}>
          <Icon
            type={type}
            color={lightPalette.primary}
            name={name}
            size={size}
            style={styles.margined}
          />
          <BodyText type="Help" color={lightPalette.dark}>
            {label}
          </BodyText>
        </Animated.View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={e => handleOnPress(e)} style={styles.container}>
      <Icon
        type={type}
        color={lightPalette.dark60}
        name={outline}
        size={size}
        style={styles.margined}
      />
      <BodyText type="Help" color={lightPalette.dark60}>
        {label}
      </BodyText>
    </TouchableOpacity>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
  },
  margined: {
    marginBottom: 8,
  },
});
