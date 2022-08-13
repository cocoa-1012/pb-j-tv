import axiosInstance from '../../utilities/axiosInstance';
import { add, fetchData, remove, update } from './accountSlice';

// import ACCOUNTS_DATA from './data';
export const storeInfoLocalStorage = (id) => async (dispatch) => {
  localStorage.setItem('accountSelected', id);
};
/**
 *
 * @param {*} data  {username: string , password: string , remember: boolean}
 * @param {*} callback (isOk: boolean , value: any)
 * @returns
 */
export const fetchAllAccountsAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get('users');

    dispatch(fetchData(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const addAccountAction = (data, callback) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`users`, data);

    dispatch(add(res.data));
    callback(true);
  } catch (error) {
    callback(
      false,
      error?.response?.status === 400 ? error?.response?.data : {}
    );
    console.log(error.message);
  }
};
export const updateAccountAction = (data, callback) => async (dispatch) => {
  try {
    const res = await axiosInstance.put(`users/${data.id}`, data);

    dispatch(update(res.data));
    callback(true);
  } catch (error) {
    callback(
      false,
      error?.response?.status === 400 ? error?.response?.data : {}
    );
    console.log(error.message);
  }
};

export const removeAccountAction = (id) => async (dispatch) => {
  try {
    dispatch(remove({ id }));
  } catch (error) {
    console.log(error.message);
  }
};
