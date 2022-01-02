import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import {
  BodyText,
  Button,
  HeaderBar,
  HeadlineText,
  Input,
  Text,
} from 'src/components/common';
import SvgPost from 'src/components/svg/Post';
import { HELP } from 'src/constants';
import Container from 'src/components/containers/Container';
import useBackIcon from 'src/hooks/useBackIcon';
import { setData } from 'src/helpers/setData';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreatePost = () => {
  const backIcon = useBackIcon();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Required!'),
    description: Yup.string()
      .min(10, 'Must be at least 10 characters')
      .required('Required!'),
  });

  interface Post {
    title: string;
    description: string;
  }

  const onSubmit = () => {
    const post = {
      title: values.title,
      description: values.description,
      createdAt: new Date(),
    };
    setData(post, 'posts');
  };

  const { handleChange, handleSubmit, values, errors } = useFormik<Post>({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  const handelSetPost = () => {
    const post = {
      title: '',
      description: '',
      createdAt: new Date(),
    };
    setData(post, 'posts');
  };

  return (
    <Container scroll>
      <HeaderBar title="Post" leftIcon={backIcon} color={lightPalette.dark} />
      <SvgPost width="100%" height={138} />
      <View style={[globalStyles.padded, globalStyles.centered]}>
        <HeadlineText color={lightPalette.primary}>
          Create your post ✍️
        </HeadlineText>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <Input
          placeholder="Title"
          onChangeText={handleChange('title')}
          value={values.title}
          error={errors.title}
        />
        <TextInput
          placeholderTextColor={
            errors.description ? lightPalette.danger : lightPalette.dark60
          }
          multiline
          style={[styles.input, errors.description ? styles.error : null]}
          onChangeText={handleChange('description')}
          value={values.description}
          placeholder="Type here your post text.."
        />
      </View>
      {errors.description && (
        <Text
          fontSize={12}
          color={lightPalette.danger}
          style={styles.errorText}
        >
          {errors.description}
        </Text>
      )}
      <Button
        title="Add Post"
        onPress={handelSetPost}
        style={{ marginTop: 10 }}
      />
      <BodyText type={HELP} style={{ alignSelf: 'center', marginTop: 10 }}>
        Adding a post you are accepting the regulation
      </BodyText>
    </Container>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 14,
    height: 200,
    backgroundColor: lightPalette.white,
    borderColor: lightPalette.dark60,
    borderRadius: 16,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: lightPalette.dark60,
    marginHorizontal: 20,
    marginTop: 30,
  },
  error: {
    borderColor: lightPalette.danger,
  },
  errorText: {
    marginLeft: 35,
    marginVertical: 2,
  },
});
