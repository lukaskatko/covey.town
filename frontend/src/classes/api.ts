import axios, { AxiosResponse } from 'axios';
import { IUserAccountLogin } from './UserAccount';
import {
  ApiDataType,
  IApiLoginDataType,
  IApiRegisterDataType,
  IUserAccount,
  IUserAccountLogin,
} from './UserAccount';

const baseUrl = 'http://localhost:4000';

export const getUsers = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const users: AxiosResponse<ApiDataType> = await axios.get(`${baseUrl}/accounts`);
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async ({
  username,
  password,
  avatar,
}: IUserAccountLogin): Promise<AxiosResponse<IApiLoginDataType>> => {
  try {
    const response: AxiosResponse<IApiLoginDataType> = await axios.post(`${baseUrl}/account`, {
      username,
      password,
      avatar,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addUser = async (
  formData: IUserAccount,
): Promise<AxiosResponse<IApiRegisterDataType>> => {
  try {
    const account: Omit<IUserAccount, '_id'> = {
      username: formData.username,
      password: formData.password,
    };
    const saveAccount: AxiosResponse<IApiRegisterDataType> = await axios.post(
      `${baseUrl}/add-user`,
      account,
    );
    return saveAccount;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (account: IUserAccountLogin | null,): Promise<AxiosResponse<ApiDataType>> => {
  try {
    // and change account to type IUserAccountLogin
    // const userUpdate: Pick<IUserAccountLogin, 'username' | 'avatar'> = {
    //   username: account.username,
    //   avatar: account.avatar
    // };

    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-user/${account?.userID}`,
      account,
    );
    return updatedTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedUser: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-user/${_id}`,
    );
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
};
