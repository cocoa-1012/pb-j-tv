import axiosInstance from '../../utilities/axiosInstance';
import { add, fetch, remove } from './messageSlice';

/**
 *
 * @param {*} data  {username: string , password: string , remember: boolean}
 * @param {*} callback (isOk: boolean , value: any)
 * @returns
 */
export const fetchAllMessageAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    dispatch(fetch([]));
  } catch (error) {
    console.log(error.message);
  }
};

export const addMessageAction =
  (data = {}, callback) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );

      dispatch(add(data));
      callback(true);
    } catch (error) {
      callback(
        false,
        error?.response?.status === 400 ? error?.response?.data : {}
      );
      console.log(error.message);
    }
  };

export const removeMessageAction = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    dispatch(remove({ id }));
  } catch (error) {
    console.log(error.message);
  }
};