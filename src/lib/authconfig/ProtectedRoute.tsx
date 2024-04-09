import { toast } from '@/components/ui/use-toast';
import { removeLoginData } from '@/state/login/loginSlice';
import { AppDispatch, RootState } from '@/state/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


type ProtectedRouteProps = {
    children: React.ReactNode;
    role : "Admin" | "User";
}


const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children , role}) => {
    const dispatch = useDispatch<AppDispatch>();
    const loginResponse = useSelector((state: RootState) => state.login);
  
    if(loginResponse.flag && loginResponse.role === role){
        return <>{children}</>
    }
    else if (loginResponse.role !== role){
        dispatch(removeLoginData());
        toast({
            title: "Unauthorized",
            description: "You are not authorized to view this page",
            duration: 1500,
          });
        return <Navigate to="/login" />
    } else {
        dispatch(removeLoginData());
        return <Navigate to="/login" />
    }

}

export default ProtectedRoute
