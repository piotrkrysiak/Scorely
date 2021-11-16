import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType, View } from 'react-native';
import { HomeScreenProp, Route } from 'src/constants';
import SectionHeader from 'src/components/home/SectionHeader';
import NewsBanner from 'src/components/home/NewsBanner';

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();
  const icon: ImageSourcePropType = {
    uri: 'https://lh3.googleusercontent.com/proxy/CSe4rAgVTcn8BhAwso3-eC6_4z6J9TQaWvHPSO5g2U0mDo0p_zeiwPCEm7raHjzkQya19QTcVI_X70P274fWWiSCZgowGPM95t-dp_pgL6tFi2ypWggwVd-UziiLHeNx76pxTLCulI9FgSier5VXymEp',
  };
  const image: ImageSourcePropType = {
    uri: 'https://i.postimg.cc/gj8g3LSN/riyad-mahrez-1.png',
  };
  return (
    <View>
      <SectionHeader title="News" onPress={() => navigate(Route.AUTH)} />
      <NewsBanner
        title="Champions sparkle as Canaries Threshed"
        data="Yesterday, 6:30 PM"
        icon={icon}
        image={image}
      />
    </View>
  );
};

export default HomeScreen;
