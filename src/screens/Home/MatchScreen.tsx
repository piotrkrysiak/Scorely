import { API_KEY } from '@env';
import React, { FC } from 'react';
import { Route, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

interface Props {
  route: Route;
}

const MatchScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
