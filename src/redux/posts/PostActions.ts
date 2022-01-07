import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from 'src/ts/interfaces/post';
import { setData } from 'src/helpers/setData';
import { putImage } from 'src/helpers/putImage';
import { fetchImage } from 'src/helpers/fetchImage';

// eslint-disable-next-line import/prefer-default-export
export const setPost = createAsyncThunk<void, Post>(
  'posts/setPost',
  async post => {
    await putImage(post.photoURL, 'posts', post.id);
    const url = await fetchImage('posts', post.id);
    if (url) {
      const value = {
        id: post.id,
        title: post.title,
        description: post.description,
        photoURL: url,
        createdAt: new Date(),
      };
      await setData(value, 'posts');
    }
  },
);
