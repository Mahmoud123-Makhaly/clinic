export const getToken = () => {
  return localStorage.getItem('token');
};

export const getId = () => {
  return localStorage.getItem('id');
};

export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
};
