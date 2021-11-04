import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import lightPalette from 'src/assets/styles/palette';
import { H1, H3, HELP, SMALLER_BODY, SMALLER_BODY_SEMI } from 'src/constants';
import { useGetAllQuery, useGetByIdQuery } from 'src/services/post';
import { Text, HeadlineText, BodyText, Button } from './common';

const TestComponent = () => {
  const { data: posts } = useGetAllQuery();
  const { data: post } = useGetByIdQuery('1');
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadlineText type={H1}>Headline 1</HeadlineText>
        <Button title="Lorem" onPress={() => console.log('Test')} disabled />
        <HeadlineText>Headline 2</HeadlineText>
        <Button title="Lorem" onPress={() => console.log('Test')} icon="ss" />
        <HeadlineText type={H3}>Headline 3</HeadlineText>
        <Button title="Lorem" onPress={() => console.log('Test')} secondary />
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, impedit
          iusto! Pariatur, nostrum alias hic neque earum, porro labore est
          doloribus facilis placeat dolor architecto maxime similique
          reprehenderit consectetur minus.
        </BodyText>
        <Button title="Lorem" onPress={() => console.log('Test')} loading />
        <BodyText type={SMALLER_BODY}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae commodi
          similique ut rem voluptas iste atque quia, cumque rerum sit dolores
          magni, soluta eius officia dignissimos delectus optio amet ad.
        </BodyText>
        <BodyText type={SMALLER_BODY_SEMI} color={lightPalette.primary}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex voluptate
          cumque cupiditate nihil tempora ut cum, totam eius, consequatur harum
          odio, atque nulla hic deleniti fugiat necessitatibus ipsa dicta
          deserunt.
        </BodyText>
        <BodyText type={HELP}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          eius a voluptatibus voluptate nihil perspiciatis culpa veniam eos
          autem eaque. Eaque unde, odio soluta nostrum sunt nesciunt saepe rerum
          ab.
        </BodyText>
        <Text>Text</Text>
        {!!post && <Text>{post.id}</Text>}
        {posts?.map(item => (
          <View key={item.id}>
            <HeadlineText>{item.id}</HeadlineText>
            <HeadlineText type={H1}>{item.title}</HeadlineText>
            <HeadlineText type={H3}>{item.body}</HeadlineText>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default TestComponent;
