import React from 'react';
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
import News from 'src/components/common/News';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NewsScreen = () => {
  const [value, loading, error] = useCollection(
    firestore().collection('posts'),
  );

  const { goBack } = useNavigation<HomeScreenProp>();

  if (error) {
    return <ErrorContainer error={errorConverter(error)} refresh={goBack} />;
  }
  const { bottom, top } = useSafeAreaInsets();

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
              <News
                title={doc.data().title.toString()}
                data={doc.data().createdAt.toString()}
                image={doc.data().photoURL.toString() || ''}
                onPress={() => navigate(Route.POST, { id: doc.id })}
              />
            </View>
          ))}
        <View style={{ marginBottom: bottom + top }} />
      </Container>
    </Container>
  );
};

export default NewsScreen;
