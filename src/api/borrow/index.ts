import axios from "axios";
import { ApproveBooksAPI, CheckoutBooksAPI, GetBookNamesListAPI, GetCheckOutBooksList, GetUserNameListAPI } from "../const";
import { TBookCheckout } from "@/model/bookcheckout";
import axiosInstance from "@/lib/authconfig/AuthIntercepter";
import { TBasicCheckout } from "@/model/basicCheckout";
import { TExtendedCheckout } from "@/model/extendedCheckout";


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

const getCheckOutBooksList = async () => {
  return (await axiosInstance.get<TBasicCheckout[]>(GetCheckOutBooksList)).data;
}

const getCheckOutRequestById = async (id : number) => {
  return (await axiosInstance.get<TExtendedCheckout>(`${GetCheckOutBooksList}/${id}`)).data;
}


export { getBookNames, getUserNameList , checkoutBooks , approveBooks , getCheckOutBooksList , getCheckOutRequestById};
