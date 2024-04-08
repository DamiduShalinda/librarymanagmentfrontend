import { api } from '@/api/const';
import { removeLoginData } from '@/state/login/loginSlice';
import { AppDispatch, RootState } from '@/state/store';
import axios, { AxiosInstance } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateAxiosInstance = (): AxiosInstance => {
    const dispatch = useDispatch<AppDispatch>();
    const loginResponse = useSelector((state: RootState) => state.login);
    const instance = axios.create({
        baseURL: api,
    });

    const navigate = useNavigate();

    instance.interceptors.request.use(
        config => {
            const token = loginResponse.token ;

            if (token === null || token === "" || token === undefined) {
                navigate('/login');
                dispatch(removeLoginData())
            } else {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    return instance;
};

export default CreateAxiosInstance;
