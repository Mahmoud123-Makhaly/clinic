import * as infraServices from '../infrastructure/signUp';
import * as signUpDomain from '../domain/signUp';

export const createCustomerAccount = async (data: signUpDomain.signUp) => {
  const customerData = await infraServices.SignUp(data);
  return signUpDomain.formatSignUp(customerData);
};
