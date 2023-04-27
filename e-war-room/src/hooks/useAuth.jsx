import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { LoginAPI } from "../utils/api";
import axios from "axios";

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    
  const navigate = useNavigate();

  const [cookies, setCookies, removeCookie] = useCookies();
  let [error, setError] = React.useState({});

    let login = async ({email,password}) => {
        await axios.post (
            LoginAPI,
            {email,password}
        ).then(
            res => {
                console.log(res);
            setCookies('token', res.data.accessToken, {secure: true, sameSite: 'none'}); // your token
            setCookies('name', res.data.username, {secure: true, sameSite: 'none'}); // optional data
            navigate('/');
        }
        ).catch(       
            res => setError(res.response.statusText + "!! " +res.response.data.msg)
        )
    }

    let logout = ()=> {
        ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
        navigate('/login');
    }

    let value = {
        login,
        logout,
        cookies,
        error,

    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    return React.useContext(UserContext);
};