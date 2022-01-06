import React from 'react';
import { View } from 'react-native';
import { useCollection } from '@skillnation/react-native-firebase-hooks/firestore';
import firestore from '@react-native-firebase/firestore';
import { HeaderBar } from 'src/components/common';
import NewsBanner from 'src/components/home/NewsBanner';
import Container from 'src/components/containers/Container';
import useBackIcon from 'src/hooks/useBackIcon';

const NewsScreen = () => {
  const [value] = useCollection(firestore().collection('posts'));
  const leftIcon = useBackIcon();
  return (
    <Container>
      <HeaderBar title="News" leftIcon={leftIcon} />
      <Container scroll>
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
                onPress={() => {}}
              />
            </View>
          ))}
      </Container>
    </Container>
  );
};

export default NewsScreen;
