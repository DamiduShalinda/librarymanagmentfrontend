import { RootState } from '@/state/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


type ProtectedRouteProps = {
    children: React.ReactNode;
}


const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {
    const loginResponse = useSelector((state: RootState) => state.login);
  
    if(loginResponse.flag){
        return <>{children}</>
    }
    else{
        return <Navigate to="/login" />
    }

}

export default ProtectedRoute
