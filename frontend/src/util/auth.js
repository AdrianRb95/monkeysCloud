import axios from "./api";

const apiEndPoint = 'users';

const login = async user => {
  try {
    return await axios.post(`${apiEndPoint}/login`, user);
  } catch (error) {
    console.log(error);
  }
};

const register = async () => {};

export default { login, register };
