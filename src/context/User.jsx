import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){

    const [userDetail, setUserDetail] = useState(() => {
        try{
            const currentUserDetail = JSON.parse(localStorage.getItem("CurrentUserDetail"));
            if(currentUserDetail){
                return currentUserDetail;
            }
            return {};
        }
        catch(error){
            console.log("Failed fetching currentUserDetail from local storage Error: ", error);
            return {};
        }
    });
    const value = {
        userDetail,
        setUserDetail,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUsers(){
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUsers must be used within the userProvider");
    }

    return context;
}

export default useUsers;