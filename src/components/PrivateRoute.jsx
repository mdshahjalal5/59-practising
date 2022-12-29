import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "./UserContext"

export default function PrivateRoute({children}){
        const {user, loading} = useContext(authContext)
        const locationAny = useLocation();

        if(loading){
            return <div>
                <h2 >Loading vaijan</h2>
            </div>
        }
         if(user && user?.uid){
            return children;
        }
    // <Navigate to='/login' state={{ from: locationAny }} replace ></Navigate>
    return <Navigate to='/login' state={{ fromAny: locationAny }} replace ></Navigate>
        
}