import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { globalStyles, lightPalette } from 'src/assets/styles';
import {
  BodyText,
  Button,
  HeadlineText,
  Input,
  Message,
  Text,
} from 'src/components/common';
import { Wrapper, RowWrapper } from 'src/components/containers';
import Container from 'src/components/containers/Container';
import Icon from 'src/components/common/Icon';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp, Route } from 'src/constants';
import { LoginUser } from 'src/ts/interfaces/user';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'src/redux/user/userActions';
import useOnAuthStateChange from 'src/hooks/useOnAuthStateChanged';
import { userSelector, setErrorNull } from 'src/redux/user/userSlice';
import Animated, { LightSpeedInRight } from 'react-native-reanimated';

const LoginScreen = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const { navigate } = useNavigation<HomeScreenProp>();

  const handleSecureTextEntry = () => {
    setSecureTextEntry(prev => !prev);
  };

  useOnAuthStateChange();
  const { error } = useSelector(userSelector);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      signInWithEmailAndPassword({
        email: values.email,
        password: values.password,
      }),
    );
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required!'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .oneOf([Yup.ref('password')])
      .matches(/[a-z]/, 'You need to use at least 1 small letter')
      .matches(/[A-Z]/, 'You need to use at least 1 capital letter')
      .matches(/[0-9]/, 'You need to use at least 1 number')
      .required('Required!'),
  });

  const { handleChange, handleSubmit, values, errors } = useFormik<LoginUser>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  if (values.email && values.password) {
    if (disabled) {
      setDisabled(false);
    }
  }

  return (
    <Container keyboard scroll style={styles.container}>
      <Animated.View entering={LightSpeedInRight}>
        <View style={styles.wrapper}>
          <Wrapper>
            <HeadlineText type="H1">Let&apos;s sign you in. 👋</HeadlineText>
            <Text
              fontWeight="Regular"
              color={lightPalette.dark60}
              fontSize={24}
            >
              Welcome back, to your football society ⚽️
            </Text>
          </Wrapper>
        </View>
        <Input
          value={values.email}
          onChangeText={handleChange('email')}
          placeholder="Email"
          style={globalStyles.marginedTop}
          autoCapitalize="none"
          error={errors.email}
        />
        <Input
          value={values.password}
          onChangeText={handleChange('password')}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          style={globalStyles.margined}
          autoCapitalize="none"
          error={errors.password}
          trailingIcon={() => (
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={handleSecureTextEntry}
            >
              <Icon
                name={secureTextEntry ? 'eye' : 'eye-off'}
                size={24}
                color={lightPalette.primary}
              />
            </Pressable>
          )}
        />
        <BodyText
          style={styles.password}
          type="SmallerBodySemi"
          color={lightPalette.primary}
        >
          Forgot your password?
        </BodyText>
      </Animated.View>
      <View style={styles.bottom}>
        <RowWrapper style={styles.register}>
          <BodyText type="SmallerBody">Don&apos;t have an account?</BodyText>
          <View style={styles.space} />
          <Pressable onPress={() => navigate(Route.REGISTER)}>
            <BodyText type="SmallerBodySemi" color={lightPalette.primary}>
              Register
            </BodyText>
          </Pressable>
        </RowWrapper>
        <Button title="Sign in" onPress={handleSubmit} disabled={disabled} />
      </View>
      {!!error && (
        <Message
          onDismiss={() => dispatch(setErrorNull())}
          message={error}
          variant="danger"
        />
      )}
    </Container>
  );
};

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
