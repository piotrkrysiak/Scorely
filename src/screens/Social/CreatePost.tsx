import React, { useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import {
  BodyText,
  Button,
  HeaderBar,
  HeadlineText,
  Input,
  Text,
} from 'src/components/common';
import { HELP } from 'src/constants';
import { setData } from 'src/helpers/setData';
import { useFormik } from 'formik';
import { useTheme } from '@react-navigation/native';
import { pickImage } from 'src/helpers/imagePicker';
import * as Yup from 'yup';
import SvgPost from 'src/components/svg/Post';
import Container from 'src/components/containers/Container';
import useBackIcon from 'src/hooks/useBackIcon';
import AddImage from './AddImage';

const CreatePost = () => {
  const backIcon = useBackIcon();
  const [image, setImage] = useState('');

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

  const handleImageChange = async () => {
    const newRes = await pickImage(false, 800, 450);
    if (newRes) {
      setImage(newRes);
    }
  };

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

  const { colors } = useTheme();
  return (
    <>
      <SafeAreaView>
        <HeaderBar
          title="Post"
          leftIcon={backIcon}
          color={lightPalette.primary}
        />
      </SafeAreaView>
      <Container scroll>
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
            style={[
              styles.input,
              { backgroundColor: colors.border },
              errors.description ? styles.error : null,
            ]}
            onChangeText={handleChange('description')}
            value={values.description}
            placeholder="Type here your post text.."
          />
          {!!errors.description && (
            <Text
              fontSize={12}
              color={lightPalette.danger}
              style={styles.errorText}
            >
              {errors.description}
            </Text>
          )}
          <AddImage image={image} onPress={handleImageChange} />
        </View>
        <Button
          title="Add Post"
          onPress={handleSubmit}
          style={{ marginTop: 10 }}
        />
        <BodyText type={HELP} style={{ alignSelf: 'center', marginTop: 10 }}>
          Adding a post you are accepting the Terms of Service
        </BodyText>
        <View style={{ marginBottom: 150 }} />
      </Container>
    </>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 14,
    height: 200,
    borderColor: lightPalette.dark60,
    borderRadius: 16,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: lightPalette.dark60,
    width: '91%',
    alignSelf: 'center',
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
