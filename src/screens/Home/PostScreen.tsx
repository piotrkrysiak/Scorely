import { useDocument } from '@skillnation/react-native-firebase-hooks/firestore';
import React, { FC, useEffect } from 'react';
import { Route, View } from 'react-native';
import { BodyText, Text } from 'src/components/common';
import Header from 'src/components/common/Header';
import firestore from '@react-native-firebase/firestore';
import { HELP, SEMI_BOLD } from 'src/constants';
import { RowWrapper } from 'src/components/containers';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite, setFavorite } from 'src/redux/favorites/FavoriteActions';
import { favoriteSelector } from 'src/redux/favorites/FavoritesSlice';

interface Props {
  route: Route;
}

const PostScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [value, loading, error] = useDocument(firestore().doc(`posts/${id}`));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  const { favorite } = useSelector(favoriteSelector);
  const isFavorite = favorite.posts.some(item => item.id === id);

  console.log(isFavorite);
  console.log(id);
  console.log(favorite.posts);

  const handleAddPost = () => {
    console.log('handleAddPost');

    const post = {
      id,
      title: value?.data()?.title,
      description: value?.data()?.description,
      createdAt: value?.data()?.createdAt,
      photoURL: value?.data()?.photoURL,
    };
    console.log(post);

    dispatch(setFavorite({ favorite: post, type: 'post_favorite' }));
  };

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
        onPress={handleAddPost}
        isFavorite={isFavorite}
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
