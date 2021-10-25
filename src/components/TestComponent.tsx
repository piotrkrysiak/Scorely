import { API_URL } from '@env';
import React from 'react';
import { Text, View } from 'react-native';

const TestComponent = () => (
  <View>
    <Text>{API_URL}</Text>
  </View>
);

export default TestComponent;
