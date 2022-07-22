import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import axiosInstance from '../../utilities/axiosInstance';
import { add, fetchData, remove } from './accountSlice';

import ACCOUNTS_DATA from './data';

/**
 *
 * @param {*} data  {username: string , password: string , remember: boolean}
 * @param {*} callback (isOk: boolean , value: any)
 * @returns
 */
export const fetchAllAccountsAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    dispatch(fetchData(ACCOUNTS_DATA));
  } catch (error) {
    console.log(error.message);
  }
};
const ACCOUNT_DATA = {
  id: shortid(),
  centerName: faker.company.bs(),
  username: faker.name.findName().split(' ').join('').toLocaleLowerCase(),
  password: faker.hacker.adjective(),
  contact: faker.phone.number(),
  email: faker.internet.email('a', 'b'),
  location: faker.address.country(),
  viewPage: shortid(),
};

export const addAccountAction =
  (data = ACCOUNT_DATA, callback) =>
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

export const removeAccountAction = (id) => async (dispatch) => {
  try {
    dispatch(remove({ id }));
  } catch (error) {
    console.log(error.message);
  }
};
