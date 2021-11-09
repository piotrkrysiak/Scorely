import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from 'src/assets/styles';
import lightPalette from 'src/assets/styles/palette';
import {
  BodyText,
  Button,
  HeadlineText,
  Input,
  Text,
} from 'src/components/common';
import { Wrapper, RowWrapper } from 'src/components/containers';
import Container from 'src/components/containers/Container';

const LoginScreen = () => (
  <Container keyboard scroll style={styles.container}>
    <View>
      <View style={styles.wrapper}>
        <Wrapper>
          <HeadlineText type="H1">Let s sign you in. 👋</HeadlineText>
          <Text fontWeight="Regular" color={lightPalette.dark60} fontSize={24}>
            Welcome back, to your football society ⚽️
          </Text>
        </Wrapper>
      </View>
      <Input
        placeholder="Phone or email"
        style={globalStyles.marginedTop}
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        secureTextEntry
        style={globalStyles.margined}
        autoCapitalize="none"
      />
      <BodyText
        style={styles.password}
        type="SmallerBodySemi"
        color={lightPalette.primary}
      >
        Forgot your password?
      </BodyText>
    </View>
    <View style={styles.bottom}>
      <RowWrapper style={styles.register}>
        <BodyText type="SmallerBody">Don t have an account?</BodyText>
        <View style={styles.space} />
        <Pressable>
          <BodyText type="SmallerBodySemi" color={lightPalette.primary}>
            Register
          </BodyText>
        </Pressable>
      </RowWrapper>
      <Button title="Sign in" onPress={() => {}} />
    </View>
  </Container>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  wrapper: {
    marginTop: '10%',
    marginBottom: 20,
  },
  password: {
    paddingHorizontal: 20,
  },
  register: {
    paddingVertical: 40,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    marginBottom: 40,
  },
  space: {
    width: 1,
    height: 14,
    backgroundColor: lightPalette.dark60,
  },
});
