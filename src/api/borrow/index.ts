import axios from "axios";
import { GetBookNamesListAPI, GetUserNameListAPI } from "../const";

const getBookNames = async () => {
  return (await axios.get<string[]>(GetBookNamesListAPI)).data;
};

const getUserNameList = async () => {
  return (await axios.get<string[]>(GetUserNameListAPI)).data;
};

export { getBookNames, getUserNameList };
