import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { globalStyles, lightPalette } from 'src/assets/styles';
import {
  BodyText,
  Button,
  HeadlineText,
  Input,
  Text,
} from 'src/components/common';
import { Wrapper, RowWrapper } from 'src/components/containers';
import Container from 'src/components/containers/Container';
import Icon, { IconTypes } from 'src/components/common/Icon';
import HeaderBar from 'src/components/common/HeaderBar';
import { IONICONS } from 'src/constants';

const RegisterScreen = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const { goBack } = useNavigation();

  const handleSecureTextEntry = () => {
    setSecureTextEntry(prev => !prev);
  };

  interface LoginForm {
    email: string;
    password: string;
  }
  const onSubmit = () => {
    console.log(values);
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

  const { handleChange, handleSubmit, values, errors } = useFormik<LoginForm>({
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
  const leftIcon = {
    type: IONICONS as IconTypes,
    name: 'ios-arrow-back',
    onPressFunction: goBack,
  };

  return (
    <Container keyboard scroll style={styles.container}>
      <View>
        <HeaderBar leftIcon={leftIcon} />
        <View style={styles.wrapper}>
          <Wrapper>
            <HeadlineText type="H1">Let s sign you up. 👋</HeadlineText>
            <Text
              fontWeight="Regular"
              color={lightPalette.dark60}
              fontSize={24}
            >
              Create account and dive in to the football society ⚽️
            </Text>
          </Wrapper>
        </View>
        <Input
          value={values.email}
          onChangeText={handleChange('email')}
          placeholder="Phone or email"
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
        <Button title="Sign up" onPress={handleSubmit} disabled={disabled} />
      </View>
    </Container>
  );
};

export default RegisterScreen;

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
