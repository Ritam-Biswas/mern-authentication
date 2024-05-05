import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const checkIfUserLoggedIn = () => {
            const authToken = getAuthToken();
            verifyAndSetUser(authToken)
        }
        checkIfUserLoggedIn()
    },[])

    const getAuthToken = () => {
        const cookies = document.cookie.split(';');
        for(let cookie of cookies){
            cookie = cookie.trim();
            if(cookie.startsWith('authToken=')){
                return cookie.substring('authToken='.length)
            }
        }
        return null;
    }
    
    const verifyAndSetUser = async (authToken) => {
        try{
            const response = await fetch('http://localhost:3000/api/users/auth/verifyUser',{
                method: 'POST',
                headers:{
                    Authorization: authToken
                }
            })
            const user = await response.json();
            setUser(user)
        }catch(error){
            console.error('Error /n', error)
        }
    }

    console.log(user)

    return(
        <UserContext.Provider value={{user, verifyAndSetUser, setUser, getAuthToken}}>
            {children}
        </UserContext.Provider>
    )

}
