import * as infraServices from '../infrastructure/signIn';

export interface SignIn {
  userName: string;
  password: string;
}

export const SignIn = async (data: SignIn) => {
  const token = await infraServices.SignIn(data);
  return token;
};

