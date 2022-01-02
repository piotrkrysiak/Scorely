import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { globalStyles, lightPalette } from 'src/assets/styles';
import {
  BodyText,
  Button,
  HeaderBar,
  HeadlineText,
  Input,
} from 'src/components/common';
import SvgPost from 'src/components/svg/Post';
import { HELP } from 'src/constants';
import Container from 'src/components/containers/Container';
import useBackIcon from 'src/hooks/useBackIcon';
import { setData } from 'src/helpers/setData';

const CreatePost = () => {
  const backIcon = useBackIcon();

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
        <Input placeholder="Title" />
        <Input placeholder="Subtitle" style={{ marginTop: 20 }} />
        <TextInput
          placeholderTextColor={lightPalette.dark60}
          multiline
          style={styles.input}
          value=""
          placeholder="What are you thinking?"
        />
      </View>

      <Button title="Add Post" onPress={handelSetPost} />
      <BodyText type={HELP} style={{ alignSelf: 'center' }}>
        Adding a post you are accepting the regulation
      </BodyText>
    </Container>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    height: 200,
    backgroundColor: lightPalette.white,
    borderColor: lightPalette.dark60,
    borderRadius: 16,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: lightPalette.dark60,
    margin: 20,
  },
});
