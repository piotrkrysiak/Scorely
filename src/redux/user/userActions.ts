import auth from '@react-native-firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { DEFAULT_AVATAR } from 'src/constants';
import { FirebaseUser, LoginUser, User } from 'src/ts/interfaces';

export const signInWithEmailAndPassword = createAsyncThunk<User, LoginUser>(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    const {
      user: { uid, displayName, photoURL },
    } = await auth().signInWithEmailAndPassword(email, password);
    if (!uid || !displayName || !photoURL) {
      return rejectWithValue(
        'Something went wrong while connecting to Firebase',
      );
    }
    return {
      id: uid,
      email,
      userName: displayName,
      photoURL,
    };
  },
);

export const logOutUser = createAsyncThunk('auth/logOut', async () =>
  auth().signOut(),
);

export const createUserWithEmailAndPassword = createAsyncThunk<
  User,
  FirebaseUser
>(
  'auth/register',
  async ({ email, password, displayName }, { rejectWithValue }) => {
    const { user } = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await user.updateProfile({
      displayName,
      photoURL: DEFAULT_AVATAR,
    });

    const displayNameFirebase = auth().currentUser?.displayName;
    const photoURLFirebase = auth().currentUser?.photoURL;

    const { uid } = user;

    if (!displayNameFirebase || !photoURLFirebase) {
      return rejectWithValue(
        'Something went wrong while connecting to Firebase',
      );
    }

    return {
      id: uid,
      email,
      userName: displayNameFirebase,
      photoURL: photoURLFirebase,
    };
  },
);
