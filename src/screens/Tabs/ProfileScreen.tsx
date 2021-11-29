import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { HeadlineText } from 'src/components/common';
import SectionHeader from 'src/components/home/SectionHeader';
import { HomeScreenProp, Route } from 'src/constants';

const ProfileScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();
  return (
    <View>
      <HeadlineText>Profile</HeadlineText>
      {/* for testing propose only */}
      <SectionHeader title="News" onPress={() => navigate(Route.AUTH)} />
    </View>
  );
};

export default ProfileScreen;
