import axios from "axios";
import { ApproveBooksAPI, CheckoutBooksAPI, GetBookNamesListAPI, GetUserNameListAPI } from "../const";
import { TBookCheckout } from "@/model/bookcheckout";
import axiosInstance from "@/lib/authconfig/AuthIntercepter";


const getBookNames = async () => {
  return (await axios.get<string[]>(GetBookNamesListAPI)).data;
};

const getUserNameList = async () => {
  return (await axios.get<string[]>(GetUserNameListAPI)).data;
};

const checkoutBooks = async (data: TBookCheckout) => {
  return (await axiosInstance.post(CheckoutBooksAPI, data)).data;
};

const approveBooks = async (id : number , rejectedReason? : string) => {
  return (await axios.post(`${ApproveBooksAPI}/${id}`, {rejectedReason})).data;
}


export { getBookNames, getUserNameList , checkoutBooks , approveBooks};
