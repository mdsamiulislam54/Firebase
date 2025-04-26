import {  createContext,  useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children})=>{

    const [user, setUser] = useState({})

    const handleUserData = (obj) =>{
        setUser(obj)
    }

    console.log(user)

    return(
        <UserContext.Provider value={{handleUserData, user}}>
            {children}
        </UserContext.Provider>
    )



}

export default UserProvider