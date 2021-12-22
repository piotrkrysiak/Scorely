import React from 'react';
import { View } from 'react-native';
import PlayerHeader from 'src/components/player/PlayerHeader';
import TopTabs from 'src/navigation/TopTabs';

// TODO: mocked data
const logo =
  'https://a.allegroimg.com/original/118871/4660bfb1457289e76373cf78d458';
const photo =
  'https://s5.tvp.pl/images2/e/5/3/uid_e53ebaf1f1cc1dee19b0d6e4abdeb1ea1599945938501_width_1200_play_0_pos_0_gs_0_height_678_mohamed-salah-wykonujacy-cieszynke-moamena-zakarii-fot-papepa.jpg';

const PlayerScreen = () => (
  <View style={{ flex: 1 }}>
    <PlayerHeader
      name="Mohamed"
      surname="Salah"
      club="Liverpool"
      photo={photo}
      clubLogo={logo}
    />
    <TopTabs />
  </View>
);

export default PlayerScreen;
