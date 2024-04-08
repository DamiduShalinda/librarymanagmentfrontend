import { TRegisterSchema } from "@/schema/registerSchema";
import axios from "axios";
import { RegisterAPI } from "../const";

const register = async (data: TRegisterSchema) => {
    return axios.post(RegisterAPI, data);
}

export { register };