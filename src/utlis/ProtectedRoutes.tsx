import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'



interface ProtectedRoutesProps {
    children: React.ReactNode,
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
    
    const location = useLocation();
    console.log("routes",children);
    
    const isLoggedIn =  localStorage.getItem("login");
    if (isLoggedIn !== "true") return <Navigate to="/login" state={{ from: location }} replace />

    return <>{children}</>

}

export default ProtectedRoutes 