export const setAccessToken = (token: string) => {
    localStorage.setItem('access_token', token);
  };
  
  export const getAccessToken = () => {
    return localStorage.getItem('access_token');
  };
  