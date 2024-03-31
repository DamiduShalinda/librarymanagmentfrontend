import { TLoginSchema } from "@/schema/loginSchema";
import axios from "axios";
import { LoginAPI } from "../const";
import { LoginResponse } from "@/state/store";

const login = async (data: TLoginSchema) => {
    return axios.post<LoginResponse>(LoginAPI, data);
}

export { login };