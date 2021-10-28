import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useGetAllQuery, useGetByIdQuery } from 'src/services/post';

const TestComponent = () => {
  const { data: posts } = useGetAllQuery();
  const { data: post } = useGetByIdQuery('1');
  return (
    <SafeAreaView>
      {!!post && <Text>{post.id}</Text>}
      {posts?.map(item => (
        <View>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};
export default TestComponent;
