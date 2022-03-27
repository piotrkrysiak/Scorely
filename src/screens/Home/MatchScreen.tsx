import { API_KEY } from '@env';
import React, { FC, useEffect } from 'react';
import { Route, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBarAnimated from 'src/components/common/HeaderBarAnimated';
import useBackIcon from 'src/hooks/useBackIcon';
import { getFavorite, setFavorite } from 'src/redux/favorites/FavoriteActions';
import { favoriteSelector } from 'src/redux/favorites/FavoritesSlice';

interface Props {
  route: Route;
}

const MatchScreen: FC<Props> = ({ route }) => {
  const { id, home, away, status } = route.params;
  const backIcon = useBackIcon();
  // const { data, isLoading } = useGetMatchQuery(id);

  const widget = `<div id="wg-api-football-fixture"
      data-host="v3.football.api-sports.io"
      data-refresh="60"
      data-id=${id}
      data-key=${API_KEY}
      data-theme="dark"
      data-show-errors="true"
    class="api_football_loader"
    >
  </div>
  <script
    type="module"
    src="https://widgets.api-sports.io/football/1.1.8/widget.js">
  </script>`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  const { favorite } = useSelector(favoriteSelector);
  const isFavorite = favorite.matches.some(item => item.id === id);

  const handleAddMatch = () => {
    const match = {
      id,
      home,
      away,
      status,
    };
    dispatch(setFavorite({ favorite: match, type: 'matches' }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBarAnimated
        leftIcon={backIcon}
        isFavorite={isFavorite}
        onPress={handleAddMatch}
      />
      <WebView
        scalesPageToFit
        source={{
          html: widget,
        }}
      />
    </SafeAreaView>
  );
};

export default MatchScreen;
