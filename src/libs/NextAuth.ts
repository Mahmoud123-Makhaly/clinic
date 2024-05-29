import { type AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/sign-up',
  },
};
