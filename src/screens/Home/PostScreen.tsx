import { useDocument } from '@skillnation/react-native-firebase-hooks/firestore';
import React, { FC } from 'react';
import { Route, StyleSheet, View } from 'react-native';
import { BodyText, Text } from 'src/components/common';
import Header from 'src/components/common/Header';
import firestore from '@react-native-firebase/firestore';
import { HELP, SEMI_BOLD } from 'src/constants';
import { RowWrapper } from 'src/components/containers';

interface Props {
  route: Route;
}

const PostScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [value, loading, error] = useDocument(firestore().doc(`posts/${id}`));

  if (error) {
    return <BodyText>{error.message}</BodyText>;
  }

  if (loading) {
    return <BodyText>Loading...</BodyText>;
  }

  return (
    <>
      <Header
        photo={value?.data()?.photoURL ?? 'https://picsum.photos/200/300'}
      />
      <View>
        <View style={{ padding: 10 }}>
          <Text fontSize={28} fontWeight={SEMI_BOLD}>
            {value?.data()?.title}
          </Text>
          <RowWrapper style={{ justifyContent: 'space-between' }}>
            <BodyText type={HELP} style={{ paddingBottom: 20 }}>
              {value?.data()?.createdAt}
            </BodyText>
            <BodyText type={HELP}>Added by: {value?.data()?.user}</BodyText>
          </RowWrapper>
          <BodyText>{value?.data()?.description}</BodyText>
        </View>
      </View>
    </>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  wrapper: {
    height: 260,
  },
  image: {
    width: 25,
  },
  linearGradient: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});
