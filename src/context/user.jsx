import { createContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const UserContext = createContext();

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

const verifyUser = async (authToken) => {
    try{
        const response = await fetch('http://localhost:3000/api/users/auth/verifyUser',{
            method: 'POST',
            headers:{
                Authorization: authToken
            }
        })
        return response.json();
    }catch(error){
        console.error('Error /n', error)
    }
}

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    console.log(user);

    useEffect(()=>{
        const authToken = getAuthToken()
        if(!authToken){
            setUser(null);
            console.log(user)
        }else{
            const user = verifyUser(authToken);
            setUser(user);
        }
    },[])

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;