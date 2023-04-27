import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export default function ProtectRoutes ({children}) {
    const { cookies } = useAuth();
    return cookies.token ? children : <Navigate to='/login' exact />
};