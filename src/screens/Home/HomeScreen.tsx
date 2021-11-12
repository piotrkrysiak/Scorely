import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { HeadlineText } from 'src/components/common';
import { H3, HomeScreenProp, Route } from 'src/constants';

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();
  return (
    <View>
      <HeadlineText>Home</HeadlineText>
      <Pressable onPress={() => navigate(Route.AUTH)}>
        <HeadlineText type={H3}>GO TO LOG IN</HeadlineText>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
