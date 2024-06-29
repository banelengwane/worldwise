import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext"
import { useEffect } from "react";

function ProtectedRoute({children}) {
    const {isAuhenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(function(){
        if(!isAuhenticated) navigate("/")
    }, [isAuhenticated, navigate])

    return isAuhenticated ? children : null
}

export default ProtectedRoute
