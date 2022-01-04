import { useTheme } from '@react-navigation/native';
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

const Header: FC<Props> = ({ children, name, photo, background }) => {
  const { colors } = useTheme();

  return (
    <AppleStyle
      headerHeight={250}
      HeaderBackgroundComponent={() => (
        <HeaderBackground name={name} photo={photo} background={background} />
      )}
      headerBackgroundColor="transparent"
      navigationBarBackgroundColor={lightPalette.primary}
      NavigationBarComponent={() => <NavigationBar name={name} photo={photo} />}
      headerBorderColor="transparent"
      navigationBarBorderColor="black"
      style={{ backgroundColor: colors.background }}
    >
      <View style={{ backgroundColor: 'black', flex: 1 }}>{children}</View>
    </AppleStyle>
  );
};
export default Header;
