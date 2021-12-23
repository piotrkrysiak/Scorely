export interface LoginUser {
  email: string;
  password: string;
}

export interface FirebaseUser {
  email: string;
  password: string;
  displayName: string;
}

export interface RegisterUser extends LoginUser {
  username: string;
}

export interface User {
  id: string;
  email: string;
  userName: string;
  photoURL: string;
}

export interface UserState {
  loading: boolean;
  error: string;
  user: User;
}
