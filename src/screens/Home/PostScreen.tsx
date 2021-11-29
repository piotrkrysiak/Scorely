import React, { FC } from 'react';
import { Route, SafeAreaView, Text } from 'react-native';

interface Props {
  route: Route;
}

const PostScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default PostScreen;
