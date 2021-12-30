import React, { FC } from 'react';
import { View } from 'react-native';
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
import { lightPalette } from 'src/assets/styles';
import HeaderBackground from './HeaderBackground';
import NavigationBar from './NavigationBar';

interface Props {
  name: string;
  photo: string;
  background: string;
}

const Header: FC<Props> = ({ children, name, photo, background }) => (
  <AppleStyle
    headerHeight={250}
    HeaderBackgroundComponent={() => (
      <HeaderBackground name={name} photo={photo} background={background} />
    )}
    headerBackgroundColor="transparent"
    navigationBarBackgroundColor={lightPalette.primary}
    NavigationBarComponent={() => <NavigationBar name={name} photo={photo} />}
    headerBorderColor="transparent"
    headerTitleColor={lightPalette.danger}
    navigationBarBorderColor="transparent"
  >
    {children}
    <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
  </AppleStyle>
);

export default Header;
