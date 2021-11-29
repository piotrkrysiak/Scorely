import React, { FC } from 'react';
import { Text, Route, SafeAreaView } from 'react-native';

interface Props {
  route: Route;
}

const MatchScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default MatchScreen;
