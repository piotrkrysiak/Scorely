import React, { FC } from 'react';
import { Route, Text, SafeAreaView } from 'react-native';

interface Props {
  route: Route;
}

const PlayerScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default PlayerScreen;
