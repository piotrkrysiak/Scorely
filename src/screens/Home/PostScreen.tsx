import React, { FC } from 'react';
import { Route, SafeAreaView } from 'react-native';
import { BodyText } from 'src/components/common';

interface Props {
  route: Route;
}

const PostScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  return (
    <SafeAreaView>
      <BodyText>{id}</BodyText>
    </SafeAreaView>
  );
};

export default PostScreen;
