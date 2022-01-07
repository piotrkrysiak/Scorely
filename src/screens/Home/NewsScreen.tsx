import React from 'react';
import NewsBanner from 'src/components/home/NewsBanner';
import Container from 'src/components/containers/Container';
import useBackIcon from 'src/hooks/useBackIcon';
import firestore from '@react-native-firebase/firestore';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import { ActivityIndicator, View } from 'react-native';
import { useCollection } from '@skillnation/react-native-firebase-hooks/firestore';
import { HeaderBar } from 'src/components/common';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp, Route } from 'src/constants';
import { errorConverter } from 'src/helpers/errorConverter';

const NewsScreen = () => {
  const [value, loading, error] = useCollection(
    firestore().collection('posts'),
  );

  const { goBack } = useNavigation<HomeScreenProp>();

  if (error) {
    return <ErrorContainer error={errorConverter(error)} refresh={goBack} />;
  }

  const { navigate } = useNavigation<HomeScreenProp>();
  const leftIcon = useBackIcon();
  return (
    <Container>
      <HeaderBar title="News" leftIcon={leftIcon} />
      <Container scroll>
        {!!loading && <ActivityIndicator />}
        {!!value &&
          value.docs.map(doc => (
            <View key={doc.id} style={{ marginBottom: 10 }}>
              <NewsBanner
                title={doc.data().title.toString()}
                data={doc.data().createdAt.toString()}
                image={{
                  uri: doc.data().photoURL.toString() || '',
                }}
                icon={0}
                onPress={() => navigate(Route.POST, { id: doc.id })}
              />
            </View>
          ))}
      </Container>
    </Container>
  );
};

export default NewsScreen;
