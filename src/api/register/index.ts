import { TRegisterSchema } from "@/schema/registerSchema";
import axios from "axios";
import { RegisterAPI } from "../const";

const register = async (data: TRegisterSchema) => {
    return axios.post<TRegisterResponse>(RegisterAPI, data);
}

export { register };