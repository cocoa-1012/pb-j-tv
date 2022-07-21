import axiosInstance from '../../utilities/axiosInstance';

import { login, logout } from './authSlice';

/**
 *
 * @param {*} data  {username: string , password: string , remember: boolean}
 * @param {*} callback (isOk: boolean , value: any)
 * @returns
 */
export const authLoginAction = (data, callback) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos/1`,
      data
    );

    dispatch(login({ user: { id: 1 } }));
    callback(true);
  } catch (error) {
    callback(
      false,
      error?.response?.status === 400 ? error?.response?.data : {}
    );

    console.log(error.message);
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(logout());
  } catch (error) {
    console.log(error.message);
  }
};
