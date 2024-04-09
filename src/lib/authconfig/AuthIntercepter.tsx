
import axios, { AxiosInstance } from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '@/api/const';
import { RootState } from '@/state/store';

const CreateAxiosInstance = (): AxiosInstance => {
    const loginResponse = useSelector((state: RootState) => state.login);
    const navigate = useNavigate();

    const [axiosInstance, setAxiosInstance] = useState<AxiosInstance | null>(null);

    useEffect(() => {
        const instance = axios.create({
            baseURL: api,
        });

        instance.interceptors.request.use(
            config => {
                const token = loginResponse.token ;

                if (token === null || token === "" || token === undefined) {
                    navigate('/login');
                } else {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        setAxiosInstance(instance);

        return () => {
            setAxiosInstance(null);
        };
    }, [loginResponse, navigate]);

    return axiosInstance!;
};

export default CreateAxiosInstance;


